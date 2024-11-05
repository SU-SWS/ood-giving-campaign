import {
  HTMLAttributes, useState, useEffect, useRef,
} from 'react';
import { useInView } from 'framer-motion';
import { AnimateInView, type AnimationType } from '@/components/Animate';
import { FlexBox } from '@/components/FlexBox';
import { AnimatedEllipsis } from './AnimatedEllipsis';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import * as styles from './ChatBubble.styles';

type ChatBubbleProps = HTMLAttributes<HTMLDivElement> & {
  avatarImageSrc?: string;
  avatarImageFocus?: string;
  align?: 'left' | 'right';
  bgColor?: styles.BubbleColorType;
  isRenderLightText?: boolean;
  addTail?: boolean; // Add a tail to the speech bubble
  showTyping?: boolean; // Show "typing" animated dots
  addTopSpacing?: boolean;
  animation?: AnimationType;
  delay?: number;
  children: React.ReactNode;
  className?: string;
};

export const ChatBubble = ({
  avatarImageSrc,
  avatarImageFocus,
  align = 'left',
  bgColor,
  isRenderLightText,
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
      }, 2000 + delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [isInView, showTyping, delay]);

  return (
    <AnimateInView animation={animation} delay={delay} duration={0.6} className={className}>
      <FlexBox alignItems="start" className={styles.flexbox(addTopSpacing)}>
        {avatarImageSrc && (
          <img
            src={getProcessedImage(avatarImageSrc, '60x60', avatarImageFocus)}
            alt=""
            className="rounded-full w-40 md:w-60"
          />
        )}
        <div
          {...props}
          ref={ref}
          className={styles.bubble(bgColor, isRenderLightText, align, addTail)}
        >
          {showDots ? <AnimatedEllipsis color={isRenderLightText ? 'white' : 'black'} /> : children}
        </div>
      </FlexBox>
    </AnimateInView>
  );
};
