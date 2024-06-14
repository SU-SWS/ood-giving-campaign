import { cnb } from 'cnbuilder';
import { AnimateInView, type AnimationType } from '@/components/Animate';
import { NumberCounter } from '@/components/NumberCounter';
import { Container } from '@/components/Container';
import { FlexBox } from '@/components/FlexBox';
import { Heading, type HeadingType, Text } from '../Typography';
import { accentBgColors, type AccentColorType, type PaddingType } from '@/utilities/datasource';
import { splitNumberString } from '@/utilities/splitNumberString';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import * as styles from './BasicCard.styles';

export type BasicCardProps = React.HTMLAttributes<HTMLDivElement> & {
  subheading?: string;
  heading?: string;
  headingLevel?: HeadingType;
  isSmallHeading?: boolean;
  isLightText?: boolean;
  bgColor?: AccentColorType;
  body?: React.ReactNode;
  paddingTop?: PaddingType;
  imageSrc?: string;
  imageFocus?: string;
  imageAspectRatio?: styles.BasicCardImageAspectRatio;
  cta?: React.ReactNode;
  textureBar?: React.ReactNode;
  isCounter?: boolean;
  // In number of seconds
  counterDuration?: number;
  animation?: AnimationType;
  delay?: number;
};

export const BasicCard = ({
  subheading,
  heading,
  headingLevel = 'h3',
  isSmallHeading,
  bgColor,
  body,
  imageSrc = '',
  imageFocus,
  imageAspectRatio = '4x3',
  cta,
  textureBar,
  paddingTop,
  isLightText,
  isCounter,
  counterDuration,
  animation = 'slideUp',
  delay,
  children,
  className,
  ...props
}: BasicCardProps) => {
  const headingProcessed = isCounter ? splitNumberString(heading) : undefined;
  const imageSize = imageAspectRatio === '4x3' ? '336x222' : '700x700';

  return (
    <AnimateInView animation={animation} delay={delay} className={styles.animateWrapper}>
      <Container
        as="article"
        width="full"
        pt={paddingTop}
        className={cnb(styles.root(!!bgColor), accentBgColors[bgColor], className)}
        {...props}
      >
        <FlexBox direction="col" className={styles.flex}>
          {/* If number counter is enabled, aria-hidden the animated heading and add a SR only heading */}
          <div>
            <img
              width={imageAspectRatio === '4x3' ? 800 : 600}
              height={222}
              alt=""
              loading="lazy"
              src={getProcessedImage(imageSrc, imageSize, imageFocus) || ''}
            />
          </div>
          {isCounter && heading && (
            <Heading as={headingLevel} srOnly>{heading}</Heading>
          )}
          {subheading && (
            <Text 
            font="serif"
            leading="display" 
            size="base"
            className={styles.subhead}>{subheading}</Text>
          )}
          {heading && (
            <Heading
              as={headingLevel}
              font="serif"
              leading="druk"
              color={isLightText ? 'white' : 'black'}
              size="f4"
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
          <div className={cnb(styles.content)}>
            <div className={styles.body}>
              {body}
            </div>
            {!!cta && (
              <div className={styles.cta}>
                {cta}
              </div>
            )}
          </div>
          {!!textureBar && (
            <div className={styles.texture}>
                {textureBar}
            </div>
          )}
        </FlexBox>
      </Container>
    </AnimateInView>
  );
};
