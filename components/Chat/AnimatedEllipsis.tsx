import { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
import { SrOnlyText } from '@/components/Typography';
import * as styles from './AnimatedEllipsis.styles';

type AnimatedEllipsisProps = HTMLAttributes<HTMLDivElement> & {
  color?: 'black' | 'white';
}

export const AnimatedEllipsis = ({
  color,
  className,
  ...props
}: AnimatedEllipsisProps) => {
  return (
    <div className={cnb(styles.root(color), className)} {...props}>
      <SrOnlyText>Typing</SrOnlyText>
      <div className={styles.dot} aria-hidden />
      <div className={styles.dot} aria-hidden />
      <div className={styles.dot} aria-hidden />
    </div>
  );
};
