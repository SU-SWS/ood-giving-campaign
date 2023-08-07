import { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
import { AnimateInView } from '../Animate';
import { FlexBox } from '../FlexBox';
import { Heading, Paragraph, type HeadingType } from '../Typography';
import { ImageOverlay } from '../ImageOverlay';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { bgTextColorPairs, type BgTextColorPairType } from '@/utilities/datasource';
import * as styles from './SplitPoster.styles';

type PosterContentProps = HTMLAttributes<HTMLDivElement> & {
  headingLevel?: HeadingType;
  heading?: string;
  body?: string;
  imageSrc?: string;
  imageFocus?: string;
  addImageOverlay?: boolean;
  contentAlign?: 'left' | 'right';
  bgColor?: BgTextColorPairType;
};

export const PosterContent = ({
  headingLevel = 'h3',
  heading,
  body,
  imageSrc,
  imageFocus,
  addImageOverlay,
  contentAlign = 'left',
  bgColor,
  children,
  className,
  ...props
}: PosterContentProps) => {
  // This check assumes that if content is added on a panel, it will at least have a heading or body copy.
  const hasContent: boolean = !!(heading || body);

  return (
    <FlexBox
      {...props}
      alignItems="end"
      justifyContent={contentAlign === 'left' ? 'start' : 'end'}
      className={cnb(styles.posterContentRoot(!!imageSrc), bgTextColorPairs[bgColor], className)}
    >
      {imageSrc && (
        <ImageOverlay
          imageSrc={getProcessedImage(imageSrc, '750x750', imageFocus)}
          overlay={addImageOverlay ? 'black-gradient' : ''}
        />
      )}
      {hasContent && (
        <AnimateInView delay={0.2} animation={contentAlign === 'left' ? 'slideDown' : 'slideUp'}>
          <FlexBox
            direction="col"
            className={styles.content}
            alignItems={contentAlign === 'left' ? 'start' : 'end'}
          >
            {heading && (
              <Heading
                as={headingLevel}
                size={3}
                font="druk-wide"
                leading="tight"
                uppercase
                className={styles.heading(!!imageSrc)}
                align={contentAlign}
              >
                {heading}
              </Heading>
            )}
            {body && (
              <Paragraph size={1} leading="snug" align={contentAlign} className={styles.body}>
                {body}
              </Paragraph>
            )}
            {children}
          </FlexBox>
        </AnimateInView>
      )}
    </FlexBox>
  );
};
