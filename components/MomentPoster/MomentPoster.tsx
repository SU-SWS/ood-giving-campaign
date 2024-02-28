import { HTMLAttributes } from 'react';
import { AnimateInView } from '../Animate';
import { Container } from '../Container';
import { Heading, Text } from '../Typography';
import { FlexBox } from '../FlexBox';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { BgTextColorPairBlackWhiteType } from '@/utilities/datasource';
import * as styles from './MomentPoster.styles';
import {
  gradientFroms,
  type GradientFromType,
  gradientTos,
  type GradientToType,
  gradientVias,
  type GradientViaType,
} from '@/utilities/datasource';

type MomentPosterProps = HTMLAttributes<HTMLDivElement> & {
  textBefore?: string;
  textAfter?: string;
  textNewRow?: string;
  subhead?: string;
  body?: React.ReactNode;
  cta?: React.ReactNode;
  bgImageSrc?: string;
  bgImageFocus?: string;
  thumbnailSrc?: string;
  thumbnailFocus?: string;
  gradientTop?: GradientToType;
  gradientBottom?: GradientFromType;
  gradientVia?: GradientViaType;
};

export const MomentPoster = ({
  textBefore,
  textAfter,
  textNewRow,
  subhead,
  body,
  cta,
  bgImageSrc,
  bgImageFocus,
  thumbnailSrc,
  thumbnailFocus,
  gradientTop,
  gradientBottom,
  gradientVia,
  ...props
}: MomentPosterProps) => (
  <Container {...props} as="section" bgColor="black" width="full" py={9} className="overflow-hidden">
    <Container className={styles.wrapper}>
      <Heading as="h2" size="splash" font="druk" align="center" className="leading-[0.9] max-w-1000 mx-auto rs-mb-1">
        <span className="flex items-baseline mx-auto w-fit gap-30">
          {textBefore && <span>{textBefore}</span>}
          {thumbnailSrc &&
            <img
              src={getProcessedImage(thumbnailSrc, '200x200', thumbnailFocus)}
              alt=""
              className="inline-block 3xl:size-[12rem]"
            />
          }
          {textAfter && <span>{textAfter}</span>}
        </span>
        {textNewRow && <span>{textNewRow}</span>}
      </Heading>
      {subhead && (
        <Text
          variant="overview"
          font="serif"
          align="center"
          leading="display"
          color="white"
        >
          {subhead}
        </Text>
      )}
      <AnimateInView animation="slideUp">
        {body && (
          <Text font="serif" variant="big" weight="normal" className={styles.body}>
            {body}
          </Text>
        )}
      </AnimateInView>
      <div className="flex flex-col gap-27 mx-auto w-fit *:mx-auto">{cta}</div>
    </Container>
  </Container>
);
