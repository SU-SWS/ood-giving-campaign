import { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
import { AnimateInView, type AnimationType } from '@/components/Animate';
import * as styles from './ChatBubble.styles';

type ChatBubbleProps = HTMLAttributes<HTMLDivElement> & {
  align?: 'left' | 'right';
  bgColor?: styles.BubbleColorType;
  animation?: AnimationType;
  delay?: number;
  children: React.ReactNode;
  className?: string;
};

export const ChatBubble = ({
  align = 'left',
  bgColor = 'blue',
  animation = 'zoomIn',
  delay,
  children,
  className,
  ...props
}: ChatBubbleProps) => {

  return (
    <AnimateInView animation={animation} delay={delay} duration={0.4} className={className}>
      <div
        {...props}
        className={cnb(
          'rounded-[2rem] bg-black rs-p-0 w-fit max-w-[80%] text-19',
          styles.BubbleColors[bgColor],
          align === 'right' ? 'mr-0 ml-auto' : '',
        )}
      >
        {children}
      </div>
    </AnimateInView>
  );
};
