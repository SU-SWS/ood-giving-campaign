import { HTMLAttributes } from 'react';
import { AnimateInView } from '../Animate';
import { Container } from '../Container';
import { Heading, Text } from '../Typography';
import { FlexBox } from '../FlexBox';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { BgTextColorPairBlackWhiteType } from '@/utilities/datasource';
import * as styles from './Banner.styles';

type BannerProps = HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  isSmallHeading?: boolean;
  body?: React.ReactNode;
  cta?: React.ReactNode;
  imageSrc?: string;
  imageFocus?: string;
  bgColor?: BgTextColorPairBlackWhiteType;
};

export const Banner = ({
  heading,
  isSmallHeading,
  body,
  cta,
  imageSrc,
  imageFocus,
  bgColor = 'white',
  ...props
}: BannerProps) => (
  <Container {...props} as="section" bgColor={bgColor} width="full" py={9} className={styles.root}>
    <FlexBox alignItems="start" justifyContent="between" className={styles.wrapper}>
      <Container className={styles.contentWrapper}>
        <AnimateInView animation="slideUp">
          {heading && (
            <Heading
              size={isSmallHeading ? 'f6' : 'f7'}
              font="druk"
              leading="none"
              className={styles.heading}
            >
              {heading}
            </Heading>
          )}
          {body && (
            <Text font="serif" variant="overview" weight="normal" className={styles.body}>
              {body}
            </Text>
          )}
          {cta}
        </AnimateInView>
      </Container>
      {imageSrc && (
        <div className={styles.imageWrapper}>
          <AnimateInView delay={0.7} animation="slideInFromRight">
            <img
              alt=""
              src={getProcessedImage(imageSrc, '360x360', imageFocus)}
              className={styles.image}
              width={360}
              height={360}
            />
          </AnimateInView>
        </div>
      )}
    </FlexBox>
  </Container>
);
