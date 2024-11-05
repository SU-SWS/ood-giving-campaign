import {
  HTMLAttributes, useState, useEffect, useRef,
} from 'react';
import { useInView } from 'framer-motion';
import { AnimateInView, type AnimationType } from '@/components/Animate';
import { AnimatedEllipsis } from './AnimatedEllipsis';
import * as styles from './ChatBubble.styles';

type ChatBubbleProps = HTMLAttributes<HTMLDivElement> & {
  align?: 'left' | 'right';
  bgColor?: styles.BubbleColorType;
  addTail?: boolean; // Add a tail to the speech bubble
  showTyping?: boolean; // Show "typing" animated dots
  addTopSpacing?: boolean;
  animation?: AnimationType;
  delay?: number;
  children: React.ReactNode;
  className?: string;
};

export const ChatBubble = ({
  align = 'left',
  bgColor = 'blue',
  addTail,
  showTyping,
  addTopSpacing,
  animation = 'zoomIn',
  delay,
  children,
  className,
  ...props
}: ChatBubbleProps) => {
  const [showDots, setShowDots] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && showTyping) {
      setShowDots(true);

      const timer = setTimeout(() => {
        setShowDots(false);
      }, 1500 + delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [isInView, showTyping, delay]);

  return (
    <AnimateInView animation={animation} delay={delay} duration={0.6} className={className}>
      <div
        {...props}
        ref={ref}
        className={styles.bubble(bgColor, align, addTail, addTopSpacing)}
      >
        {showDots ? <AnimatedEllipsis color={bgColor === 'black-10' ? 'black' : 'white'} /> : children}
      </div>
    </AnimateInView>
  );
};
