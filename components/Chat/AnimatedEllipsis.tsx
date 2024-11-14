import { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
import { SrOnlyText } from '@/components/Typography';
import * as styles from './AnimatedEllipsis.styles';

type AnimatedEllipsisProps = HTMLAttributes<HTMLDivElement> & {
  color?: 'black' | 'white';
  isMessageMinimal?: boolean;
}

export const AnimatedEllipsis = ({
  color,
  isMessageMinimal,
  className,
  ...props
}: AnimatedEllipsisProps) => {
  return (
    <div className={cnb(styles.root(color, isMessageMinimal), className)} {...props}>
      <SrOnlyText>Typing message</SrOnlyText>
      <div className={styles.dot} aria-hidden="true" />
      <div className={styles.dot} aria-hidden="true" />
      <div className={styles.dot} aria-hidden="true" />
    </div>
  );
};
