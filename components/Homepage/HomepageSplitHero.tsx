import { m } from 'framer-motion';
import { cnb } from 'cnbuilder';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Grid } from '../Grid';
import { Heading, Paragraph, Text } from '../Typography';
import { AnimateInView } from '../Animate';
import { ImageOverlay } from '../ImageOverlay';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import * as styles from './HomepageSplitHero.styles';

/**
 * This is the homepage hero for the MVP site.
 */
export const HomepageSplitHero = () => {
  const bg = getProcessedImage('https://a-us.storyblok.com/f/1005200/2100x2028/bef2e6a13e/masthead-top-structured.jpg', '3200x0');
  const mobileBg = getProcessedImage('https://a-us.storyblok.com/f/1005200/1901x1643/342467c886/progress-dish-mobile.jpg', '1000x0');

  return (
    <Container width="full" bgColor="black" className={styles.root}>
      <div className={styles.imageGridWrapper}>
        {/* SM and up background image */}
        <ImageOverlay
          imageSrc={mobileBg}
          overlay="homepage-hero"
          loading="eager"
          overlayClasses="mix-blend-lighten"
          className={styles.mobileBg}
        />
        {/* XS background image */}
        <ImageOverlay
          imageSrc={bg}
          overlay="homepage-hero"
          loading="eager"
          overlayClasses="mix-blend-lighten"
          className={styles.bg}
        />
        <div className={styles.gradientOverlay} />
        <div className="relative">
          <Container className="relative">
            {/* Two column grid with the 2 face images */}
            <Grid xs={2} className={styles.imageGrid}>
              <AnimateInView duration={0.3} animation="slideDown" className={styles.imageWrapper}>
                <img
                  src={getProcessedImage('https://a-us.storyblok.com/f/1005200/1390x1390/cb35b9488b/frame-96.jpg', '700x700')}
                  alt=""
                  fetchPriority="high"
                  className={cnb(styles.imageBottomLayerCommon, 'object-right')}
                  width={700}
                  height={700}
                />
                <m.img
                  src={getProcessedImage('https://a-us.storyblok.com/f/1005200/1390x1390/45d9a3d22a/frame-97.jpg', '700x700')}
                  alt=""
                  fetchPriority="high"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className={cnb(styles.imageTopLayerCommon, 'object-left')}
                  width={700}
                  height={700}
                />
              </AnimateInView>
              <AnimateInView duration={0.3} animation="slideUp" className={styles.imageWrapper}>
                <img
                  src={getProcessedImage('https://a-us.storyblok.com/f/1005200/1390x1390/45d9a3d22a/frame-97.jpg', '700x700')}
                  alt=""
                  fetchPriority="high"
                  className={cnb(styles.imageBottomLayerCommon, 'object-left')}
                  width={700}
                  height={700}
                />
                <m.img
                  src={getProcessedImage('https://a-us.storyblok.com/f/1005200/1390x1390/cb35b9488b/frame-96.jpg', '700x700')}
                  alt=""
                  fetchPriority="high"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className={cnb(styles.imageTopLayerCommon, 'object-right')}
                  width={700}
                  height={700}
                />
              </AnimateInView>
            </Grid>
          </Container>
          <FlexBox direction="col" justifyContent="between" className={styles.textFlexbox} aria-hidden>
            <AnimateInView
              animation="slideInFromLeft"
              delay={0.6}
              duration={0.3}
              className={styles.textWrapperTop}
            >
              <Text font="serif" weight="semibold" leading="none" italic className={styles.serifText}>
                Our challenges
              </Text>
              <Text font="druk" size="hero" leading="none">
                are urgent
              </Text>
            </AnimateInView>
            <AnimateInView
              animation="slideInFromRight"
              delay={0.6}
              duration={0.3}
              className={styles.textWrapperBottom}
            >
              <Text font="serif" weight="semibold" leading="none" align="right" italic className={styles.serifText}>
                Let’s face them
              </Text>
              <Text font="druk" size="hero" leading="none" align="right">
                together
              </Text>
            </AnimateInView>
          </FlexBox>
        </div>
      </div>
      <Container bgColor="black" pt={2} pb={7} className={styles.introWrapper}>
        <AnimateInView animation="slideUp">
          <Heading size="f5" leading="tight">
            This is the moment.
          </Heading>
        </AnimateInView>
        <AnimateInView delay={0.2} animation="slideUp">
          <Paragraph size={1} weight="normal" leading="snug" className={styles.introParagraph}>
            For creating a sustainable planet. For reducing inequality. For embedding ethics in all we do.
          </Paragraph>
          <Paragraph size={1} weight="normal" leading="snug" className={styles.introParagraph}>
            Learn how Stanford’s community of makers, doers, boundary pushers,
            and risk-takers are meeting the moment. Join us to do even more.
          </Paragraph>
        </AnimateInView>
      </Container>
    </Container>
  );
};
