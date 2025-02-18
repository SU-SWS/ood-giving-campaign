import { forwardRef } from 'react';
import { Video, type VideoProps } from './Video';

export const MutedVideoLoop = forwardRef<HTMLVideoElement, VideoProps>((props, ref) => (
  <Video ref={ref} role="presentation" muted autoPlay loop playsInline {...props} />
));
