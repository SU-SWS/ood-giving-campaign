import { cnb } from 'cnbuilder';
import { AnimateInView, type AnimationType } from '@/components/Animate';
import { Container } from '@/components/Container';
import { FlexBox } from '@/components/FlexBox';
import { Heading, type HeadingType, Text } from '@/components/Typography';
import {
  accentBgColors,
  type AccentColorType,
  type ImageAspectRatioType,
} from '@/utilities/datasource';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { getSbImageSize } from '@/utilities/getSbImageSize';
import * as styles from './BasicCard.styles';

export type BasicCardProps = React.HTMLAttributes<HTMLDivElement> & {
  superhead?: string;
  heading?: string;
  headingLevel?: HeadingType;
  isSmallHeading?: boolean;
  isLightText?: boolean;
  isStretched?: boolean;
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
  isStretched,
  bgColor,
  body,
  imageSrc,
  imageFocus,
  imageAspectRatio = '3x2',
  cta,
  textureBar,
  isLightText,
  animation = 'slideUp',
  delay,
  children,
  className,
  ...props
}: BasicCardProps) => {
  const { width: originalWidth, height: originalHeight } = getSbImageSize(imageSrc);
  const cropSize = styles.imageCrops[imageAspectRatio];
  const cropWidth = parseInt(cropSize?.split('x')[0], 10);
  const cropHeight = imageAspectRatio === 'free'
    ? Math.round(originalHeight * 600 / originalWidth)
    : parseInt(cropSize?.split('x')[1], 10);

  return (
    <AnimateInView animation={animation} delay={delay} className={styles.animateWrapper(isStretched)}>
      <Container
        as="article"
        width="full"
        className={cnb(styles.root, className)}
        {...props}
      >
        <FlexBox direction="col" className={styles.flex(isStretched)}>
          {imageSrc && (
            <div className={styles.imageWrapper}>
              <img
                width={cropWidth}
                height={cropHeight}
                alt=""
                loading="lazy"
                src={getProcessedImage(imageSrc, cropSize, imageFocus)}
                className={styles.image}
              />
            </div>
          )}
          <div className={cnb(styles.content, accentBgColors[bgColor])}>
            {superhead && (
              <Text
                size="base"
                weight="semibold"
                leading="display"
                color={isLightText ? 'white' : 'black'}
                className={styles.superhead}
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
                size={isSmallHeading ? 1 : 2}
                className={styles.heading}
              >
                {heading}
              </Heading>
            )}
            {!!body && (
              <div className={styles.body}>
                {body}
              </div>
            )}
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
