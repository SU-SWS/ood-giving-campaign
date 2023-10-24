import { useEffect, useState } from 'react';
import { cnb } from 'cnbuilder';
import ReactPlayer from 'react-player/lazy';
import { Text } from '../Typography';
import { type MediaAspectRatioType, mediaAspectRatios } from '@/utilities/datasource';

type EmbedMediaProps = React.HTMLAttributes<HTMLDivElement> & {
  mediaUrl: string;
  caption?: React.ReactNode;
  aspectRatio?: MediaAspectRatioType;
};

export const EmbedMedia = ({
  mediaUrl,
  caption,
  aspectRatio,
  className,
}: EmbedMediaProps) => {
  /**
   * This is needed to prevent hydration error for the React Player.
   * https://github.com/cookpete/react-player/issues/1428
   */
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  return (
    <figure>
      {/* Extra classnames passed into wrapper for Vimeo responsive bug */}
      <div className={cnb(mediaAspectRatios[aspectRatio], 'children:!w-full children:!h-full')}>
        {hasWindow && (
          <ReactPlayer
            width="100%"
            height="100%"
            url={mediaUrl}
            controls
          />
        )}
      </div>
      {caption && (
        <figcaption className='children:children:text-black-70 gc-caption mt-09em children:children:leading-display max-w-prose-wide'>
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
