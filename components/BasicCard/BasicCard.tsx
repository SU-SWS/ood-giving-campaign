import { cnb } from 'cnbuilder';
import { AnimateInView, type AnimationType } from '@/components/Animate';
import { Container } from '@/components/Container';
import { FlexBox } from '@/components/FlexBox';
import { Heading, type HeadingType, Text } from '@/components/Typography';
import {
  accentBgColors,
  type AccentColorType,
  imageAspectRatios,
  type ImageAspectRatioType,
} from '@/utilities/datasource';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import * as styles from './BasicCard.styles';

export type BasicCardProps = React.HTMLAttributes<HTMLDivElement> & {
  superhead?: string;
  heading?: string;
  headingLevel?: HeadingType;
  isSmallHeading?: boolean;
  isLightText?: boolean;
  bgColor?: AccentColorType;
  body?: React.ReactNode;
  imageSrc?: string;
  imageFocus?: string;
  imageAspectRatio?: ImageAspectRatioType;
  cta?: React.ReactNode;
  textureBar?: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
};

export const BasicCard = ({
  superhead,
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
        className={cnb(styles.root, className)}
        {...props}
      >
        <FlexBox direction="col" className={styles.flex}>
          {imageSrc && (
            <img
              width={imageAspectRatio === '4x3' ? 800 : 600}
              alt=""
              loading="lazy"
              src={getProcessedImage(imageSrc, imageSize, imageFocus) || ''}
            />
          )}
          <div className={cnb(styles.content, accentBgColors[bgColor])}>
            {superhead && (
              <Text
                size="base"
                weight="semibold"
                leading="display"
              >
                {superhead}
              </Text>
            )}
            {heading && (
              <Heading
                as={headingLevel}
                font="serif"
                leading="tight"
                color={isLightText ? 'white' : 'black'}
                size={isSmallHeading ? 2 : 3}
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
