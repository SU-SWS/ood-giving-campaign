import { CreateStories } from '@/components/CreateStories';
import type { ISbStoryData } from '@storyblok/react/rsc';

export type StoriesNavProps = {
  storyListNavPicker: ISbStoryData[];
  slug: string;
  name: string;
};

const StoriesNav = ({ storyListNavPicker, slug, name }: StoriesNavProps) => {

  return (
    <CreateStories stories={storyListNavPicker} fullSlug={slug} name={name} />
  );
};
export default StoriesNav;
