import { cnb } from 'cnbuilder';
import { AnimateInView, type AnimationType } from '@/components/Animate';
import { Container } from '@/components/Container';
import { FlexBox } from '@/components/FlexBox';
import { Heading, type HeadingType, Text } from '@/components/Typography';
import { accentBgColors, type AccentColorType, type PaddingType } from '@/utilities/datasource';
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
  animation = 'slideUp',
  delay,
  children,
  className,
  ...props
}: BasicCardProps) => {
  const imageSize = imageAspectRatio === '4x3' ? '336x222' : '700x700';

  return (
    <AnimateInView animation={animation} delay={delay} className={styles.animateWrapper}>
      <Container
        as="article"
        width="full"
        pt={paddingTop}
        className={cnb(styles.root, className)}
        {...props}
      >
        <FlexBox direction="col" className={styles.flex}>
          {/* If number counter is enabled, aria-hidden the animated heading and add a SR only heading */}
            <img
              width={imageAspectRatio === '4x3' ? 800 : 600}
              height={222}
              alt=""
              loading="lazy"
              src={getProcessedImage(imageSrc, imageSize, imageFocus) || ''}
            />
          <div className={cnb(styles.content, accentBgColors[bgColor])}>
            {subheading && (
              <Text
              leading="display"
              className={styles.subhead}>{subheading}</Text>
            )}
            {heading && (
              <Heading
                as={headingLevel}
                font="serif"
                leading="tight"
                color={isLightText ? 'white' : 'black'}
                size={isSmallHeading ? 3 : 4}
                className={styles.heading}
              >
                {heading}
              </Heading>
            )}
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
