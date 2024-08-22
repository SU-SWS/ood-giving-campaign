import { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
import * as styles from './ChatBubble.styles';

type AnimatedEllipsisProps = HTMLAttributes<HTMLDivElement>;

export const AnimatedEllipsis = ({
  className,
  ...props
}: AnimatedEllipsisProps) => {
  return (
    <div className={cnb('flex gap-10 *:size-10 *:rounded-full opacity-20 scale-75 *:bg-white animate-[ellipsis_1s_0.5s_linear_alternate_infinite]', className)}>
      <div className="[animation-delay:.25s]" />
      <div />
      <div className="[animation-delay:.75s]" />
    </div>
  );
};
