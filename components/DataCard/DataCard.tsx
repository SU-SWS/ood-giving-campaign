import { cnb } from 'cnbuilder';
import { AnimateInView, type AnimationType } from '../Animate';
import { Container } from '../Container';
import {
  Heading, type HeadingType, SrOnlyText, Text,
} from '../Typography';
import {
  accentBorderColors,
  accentBgColors,
  type AccentBorderColorType,
  type AccentColorType,
  type PaddingType,
} from '@/utilities/datasource';
import * as styles from './DataCard.styles';

export type DataCardProps = React.HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  headingLevel?: HeadingType;
  isSmallHeading?: boolean;
  isDarkTheme?: boolean;
  barColor?: AccentBorderColorType;
  body?: React.ReactNode;
  paddingTop?: PaddingType;
  cta?: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
};

export const DataCard = ({
  heading,
  headingLevel = 'h3',
  isSmallHeading,
  barColor,
  body,
  cta,
  paddingTop,
  isDarkTheme,
  animation = 'slideUp',
  delay,
  children,
  className,
  ...props
}: DataCardProps) => (
  <AnimateInView animation={animation} delay={delay}>
    <Container
      as="article"
      width="full"
      pt={paddingTop}
      className={styles.root}
      {...props}
    >
      <div>
        {heading && (
          <Heading
            as={headingLevel}
            font="druk"
            leading="druk"
            color={isDarkTheme ? 'white' : 'black'}
            size="f5"
            className={styles.heading}
          >
            {heading}
          </Heading>
        )}
        <div className={cnb(styles.content(!!barColor), accentBorderColors[barColor])}>
          <div className={styles.body}>
            {body}
          </div>
          {!!cta && (
            <div className={styles.cta}>
              {cta}
            </div>
          )}
        </div>
      </div>
    </Container>
  </AnimateInView>
);
