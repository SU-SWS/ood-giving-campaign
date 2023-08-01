import { cnb } from 'cnbuilder';
import { AnimateInView, AnimationType } from '../Animate';
import { Text } from '../Typography';
import * as styles from './WordBlock.styles';

export type WordBlockProps = React.HTMLAttributes<HTMLDivElement> & {
  isLarge?: boolean;
  // textColor doubles up as the border color of the block
  textColor?: styles.TextColorType;
  // If no bgColor is passed, the background is transparent
  bgColor?: styles.BgColorType;
  animation?: AnimationType;
  delay?: number;
};

export const WordBlock = ({
  textColor = 'white',
  bgColor,
  isLarge,
  animation,
  delay,
  children,
  className,
  ...props
}: WordBlockProps) => (
  <div className={className}>
    <AnimateInView animation={animation} delay={delay}>
      <Text
        {...props}
        font="druk-wide"
        uppercase
        leading="tight"
        color={textColor}
        weight="bold"
        className={cnb(styles.text(textColor, isLarge), bgColor ? styles.bgColors[bgColor] : '')}
      >
        {children}
      </Text>
    </AnimateInView>
  </div>
);
