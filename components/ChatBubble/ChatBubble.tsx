import { cnb } from 'cnbuilder';
import { AnimateInView, type AnimationType } from '@/components/Animate';
import { Text } from '@/components/Typography';
import * as styles from './ChatBubble.styles';

type ChatBubbleProps = {
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
}: ChatBubbleProps) => {

  return (
    <AnimateInView animation={animation} delay={delay} duration={0.2} className={className}>
      <Text
        color="white"
        leading="display"
        className={cnb(
          'rounded-[2rem] bg-black pt-9 pb-8 px-16 w-fit text-18 max-w-[80%]',
          styles.BubbleColors[bgColor],
          align === 'right' ? 'mr-0 ml-auto' : '',
        )}
      >
        {children}
      </Text>
    </AnimateInView>
  );
};
