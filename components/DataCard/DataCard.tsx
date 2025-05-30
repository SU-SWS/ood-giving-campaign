import { cnb } from 'cnbuilder';
import { AnimateInView, type AnimationType } from '@/components/Animate';
import { NumberCounter } from '@/components/DataCard/NumberCounter';
import { Container } from '@/components/Container';
import { FlexBox } from '@/components/FlexBox';
import { Heading, type HeadingType } from '../Typography';
import { accentBorderColors, type AccentBorderColorType, type PaddingType } from '@/utilities/datasource';
import { splitNumberString } from '@/utilities/splitNumberString';
import * as styles from './DataCard.styles';

export type DataCardProps = React.HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  headingLevel?: HeadingType;
  isDarkTheme?: boolean;
  barColor?: AccentBorderColorType;
  body?: React.ReactNode;
  paddingTop?: PaddingType;
  cta?: React.ReactNode;
  isCounter?: boolean;
  // In number of seconds
  counterDuration?: number;
  animation?: AnimationType;
  delay?: number;
};

export const DataCard = ({
  heading,
  headingLevel = 'h3',
  barColor,
  body,
  cta,
  paddingTop,
  isDarkTheme,
  isCounter,
  counterDuration,
  animation = 'slideUp',
  delay,
  children,
  className,
  ...props
}: DataCardProps) => {
  const headingProcessed = isCounter ? splitNumberString(heading) : undefined;

  return (
    <AnimateInView animation={animation} delay={delay} className={styles.animateWrapper}>
      <Container
        as="article"
        width="full"
        pt={paddingTop}
        className={styles.root}
        {...props}
      >
        <FlexBox direction="col" className={styles.flex}>
          {/* If number counter is enabled, aria-hidden the animated heading and add a SR only heading */}
          {isCounter && heading && (
            <Heading as={headingLevel} srOnly>{heading}</Heading>
          )}
          {heading && (
            <Heading
              as={headingLevel}
              font="druk"
              leading="druk"
              color={isDarkTheme ? 'white' : 'black'}
              size="f5"
              aria-hidden={isCounter}
              className={styles.heading}
            >
              {isCounter ? (
                <>
                  {headingProcessed?.beforeNumber}
                  <NumberCounter number={headingProcessed?.number} duration={counterDuration} />
                  {headingProcessed?.afterNumber}
                </>
              ) : (
                heading
              )}
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
        </FlexBox>
      </Container>
    </AnimateInView>
  );
};
