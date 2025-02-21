import { cnb } from 'cnbuilder';
import { AnimateInView, type AnimationType } from '@/components/Animate';
import { Caption } from './Caption';
import { WidthBox, type WidthType } from '@/components/WidthBox';
import { type PaddingType } from '@/utilities/datasource';
import { imageAspectRatios, type ImageAspectRatioType } from '@/utilities/datasource';
import * as styles from './MediaWrapper.styles';

/**
 * This is a wrapper component for images and video components.
 * that provides a shared set of layout and caption options.
 */

export type MediaWrapperProps = React.HTMLAttributes<HTMLDivElement> & {
  caption?: React.ReactNode;
  isCaptionInset?: boolean;
  captionBgColor?: styles.CaptionBgColorType;
  aspectRatio?: ImageAspectRatioType;
  isFullHeight?: boolean;
  isParallax?: boolean;
  boundingWidth?: 'site' | 'full';
  width?: WidthType;
  pt?: PaddingType;
  pb?: PaddingType;
  animation?: AnimationType;
  delay?: number;
};

export const MediaWrapper = ({
  caption,
  aspectRatio,
  isFullHeight,
  isParallax,
  boundingWidth = 'full',
  width,
  pt,
  pb,
  isCaptionInset,
  captionBgColor = 'transparent',
  animation = 'none',
  delay,
  children,
  className,
  ...props
}: MediaWrapperProps) => {
  return (
    <WidthBox
      {...props}
      boundingWidth={boundingWidth}
      width={width}
      pt={pt}
      pb={pb}
      className={cnb(styles.root(isFullHeight), className)}
    >
      <AnimateInView animation={animation} delay={delay} className={styles.animateWrapper(isFullHeight)}>
        <figure className={styles.figure(isFullHeight)}>
          <div className={cnb(imageAspectRatios[aspectRatio], styles.mediaWrapper(isFullHeight, isParallax))}>
            {children}
          </div>
          {caption && (
            <Caption caption={caption} isCaptionInset={isCaptionInset} captionBgColor={captionBgColor} />
          )}
        </figure>
      </AnimateInView>
    </WidthBox>
  );
};
