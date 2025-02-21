import { VideoHTMLAttributes, forwardRef } from 'react';
import { getMaskedAsset } from '@/utilities/getMaskedAsset';
import { getProcessedImage } from '@/utilities/getProcessedImage';

/**
 * Simple Video component that allows for webm and mp4 sources and a poster image.
 */

export type VideoProps = VideoHTMLAttributes<HTMLVideoElement> & {
  mp4Src?: string;
  webmSrc?: string;
  posterSrc?: string;
}

export const Video = forwardRef<HTMLVideoElement, VideoProps>(({
  mp4Src,
  webmSrc,
  posterSrc,
  children,
  className,
  ...props
}, ref) => (
  <video
    ref={ref}
    poster={getProcessedImage(posterSrc)}
    className={className}
    {...props}
  >
    {webmSrc && <source src={getMaskedAsset(webmSrc)} type="video/webm" />}
    {mp4Src && <source src={getMaskedAsset(mp4Src)} type="video/mp4" />}
    {children}
  </video>
));
