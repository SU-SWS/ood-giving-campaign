import { useState, useEffect, useCallback } from 'react';
import {
  ISbStoryData,
  SbGatsbyStory,
  StoryblokBridgeConfigV2,
  StoryblokBridgeV2,
  StoryblokComponentType,
} from 'gatsby-source-storyblok';

const refreshDevContent = () => fetch('__refresh', { method: 'post' });

/**
 * Source: https://github.com/storyblok/storyblok-js/blob/8c887c3c35950bb8070abb13417d4f8742437b69/lib/index.ts
 */
const useStoryblokBridge = <T extends StoryblokComponentType<string> = any>
  (id: Number, cb: (newStory: ISbStoryData<T>) => void, options: StoryblokBridgeConfigV2 = {}) => {
  const isServer = typeof window === 'undefined';
  const isBridgeLoaded = !isServer && typeof window.storyblokRegisterEvent !== 'undefined';

  if (!isBridgeLoaded) {
    return;
  }

  if (!id) {
    console.warn('Story ID is not defined. Please provide a valid ID.');
    return;
  }

  window.storyblokRegisterEvent(() => {
    const sbBridge: StoryblokBridgeV2 = new window.StoryblokBridge(options);
    sbBridge.on(['input', 'published', 'change'], (event) => {
      if (!event) return;
      console.log('StoryblokBridge event:', event);

      if (event.action === 'input' && event.story?.id === id) {
        cb(event.story);
      } else if (
        (event.action === 'change' || event.action === 'published')
        && (event.storyId as any) === id
      ) {
        refreshDevContent(); // 👈 HERE
        window.location.reload();
      }
    });
  });
};

/**
 * https://github.com/storyblok/gatsby-source-storyblok/issues/194
 * Temporary patched hook, ensures updated content on "Save" or "Publish" in Storyblok UI
 */
export const useStoryblokState = (originalStory: SbGatsbyStory, bridgeOptions: StoryblokBridgeConfigV2 = {}) => {
  if (typeof originalStory.content === 'string') {
    originalStory.content = JSON.parse(originalStory.content);
  }

  const [story, setStory] = useState(originalStory);

  const updateStory = useCallback((newStory: SbGatsbyStory) => {
    setStory(newStory);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useStoryblokBridge(story.internalId, updateStory, bridgeOptions);
  }, [bridgeOptions, story.internalId, updateStory]);

  return story;
};
