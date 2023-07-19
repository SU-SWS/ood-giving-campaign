import { cnb } from 'cnbuilder';
import { AnimateInView, AnimationType } from '../Animate';
import { Text } from '../Typography';
import * as styles from './WordBlock.styles';

export type WordBlockProps = React.HTMLAttributes<HTMLDivElement> & {
  text?: string;
  isLarge?: boolean;
  textColor?: styles.TextColorType;
  bgColor?: styles.BgColorType;
  animation?: AnimationType;
  delay?: number;
};

export const WordBlock = ({
  text,
  textColor = 'white',
  bgColor,
  isLarge,
  animation,
  delay,
  className,
  ...props
}: WordBlockProps) => (
  <AnimateInView animation={animation} delay={delay}>
    <Text
      {...props}
      font="druk-wide"
      leading="tight"
      color={textColor}
      size={isLarge ? 'f5' : 'f4'}
      weight="bold"
      className={cnb(styles.root(textColor), styles.bgColors[bgColor || ''], className)}
    >
      {text}
    </Text>
  </AnimateInView>
);
