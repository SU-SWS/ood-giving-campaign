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
  avatarAlt?: string;
  align?: 'left' | 'right';
  bgColor?: styles.BubbleColorType;
  isRenderLightText?: boolean;
  addTail?: boolean; // Add a tail to the speech bubble
  showTyping?: boolean; // Show "typing" animated dots
  addTopSpacing?: boolean;
  addIndent?: boolean;
  isAvatarAlignBottom?: boolean;
  delay?: number;
  children: React.ReactNode;
  className?: string;
};

export const ChatBubble = ({
  avatarImageSrc,
  avatarImageFocus,
  avatarAlt,
  align = 'left',
  bgColor,
  isRenderLightText,
  addTail,
  showTyping,
  addTopSpacing,
  addIndent,
  isAvatarAlignBottom,
  delay,
  children,
  className,
  ...props
}: ChatBubbleProps) => {
  const isRenderBubbleTail = addTail && !!bgColor;
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
    <AnimateInView animation="zoomIn" delay={delay} duration={0.6} className={className}>
      <FlexBox alignItems={isAvatarAlignBottom ? 'end' : 'start'} className={styles.flexbox( align, addTopSpacing)}>
        {avatarImageSrc && (
          <img
            src={getProcessedImage(avatarImageSrc, '60x60', avatarImageFocus)}
            alt={`${avatarAlt} says` || ''}
            className={styles.avatar}
          />
        )}
        <div
          {...props}
          ref={ref}
          className={styles.bubble(bgColor, isRenderLightText, align, isRenderBubbleTail, addIndent)}
        >
          {showDots ? <AnimatedEllipsis color={isRenderLightText ? 'white' : 'black'} /> : children}
        </div>
      </FlexBox>
    </AnimateInView>
  );
};
