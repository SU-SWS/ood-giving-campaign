import { VideoHTMLAttributes, forwardRef } from 'react';
import { getMaskedAsset } from '@/utilities/getMaskedAsset';

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
    poster={posterSrc}
    className={className}
    {...props}
  >
    {webmSrc && <source src={getMaskedAsset(webmSrc)} type="video/webm" />}
    {mp4Src && <source src={getMaskedAsset(mp4Src)} type="video/mp4" />}
    {children}
  </video>
));
