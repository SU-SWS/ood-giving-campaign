import { useEffect, useState } from 'react';
import { cnb } from 'cnbuilder';
import ReactPlayer from 'react-player/lazy';

type EmbedMediaProps = React.HTMLAttributes<HTMLDivElement> & {
  mediaUrl: string;
  caption?: React.ReactNode;
};

export const EmbedMedia = ({
  mediaUrl,
  caption,
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
    <div className="aspect-w-16 aspect-h-9">
      {hasWindow && (
        <ReactPlayer
          url={mediaUrl}
          controls
          width="100%"
          height="100%"
        />
      )}
      {caption}
    </div>
  );
};
