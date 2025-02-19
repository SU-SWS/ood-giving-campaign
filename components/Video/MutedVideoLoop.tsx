import { forwardRef } from 'react';
import { Video, type VideoProps } from './Video';

/**
 * This component is a more specific version of the Video component.
 * It is used for decorative muted video loops.
 */
export const MutedVideoLoop = forwardRef<HTMLVideoElement, VideoProps>((props, ref) => (
  <Video ref={ref} role="presentation" muted autoPlay loop playsInline {...props} />
));
