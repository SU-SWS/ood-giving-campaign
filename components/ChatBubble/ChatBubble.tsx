import { HTMLAttributes } from 'react';
import { AnimateInView, type AnimationType } from '@/components/Animate';
import { AnimatedEllipsis } from './AnimatedEllipsis';
import * as styles from './ChatBubble.styles';

type ChatBubbleProps = HTMLAttributes<HTMLDivElement> & {
  align?: 'left' | 'right';
  bgColor?: styles.BubbleColorType;
  addTail?: boolean; // Add a tail to the speech bubble
  animation?: AnimationType;
  delay?: number;
  children: React.ReactNode;
  className?: string;
};

export const ChatBubble = ({
  align = 'left',
  bgColor = 'blue',
  addTail,
  animation = 'zoomIn',
  delay,
  children,
  className,
  ...props
}: ChatBubbleProps) => {
  if (!children) return null;

  return (
    <AnimateInView animation={animation} delay={delay} duration={0.6} className={className}>
      <div
        {...props}
        className={styles.bubble(bgColor, align, addTail)}
      >
        <AnimatedEllipsis />
        {children}
      </div>
    </AnimateInView>
  );
};
