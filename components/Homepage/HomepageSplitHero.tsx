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
                  loading="eager"
                  className={cnb(styles.imageBottomLayerCommon, 'object-right')}
                />
                <m.img
                  src={getProcessedImage('https://a-us.storyblok.com/f/1005200/1390x1390/45d9a3d22a/frame-97.jpg', '700x700')}
                  alt=""
                  loading="eager"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className={cnb(styles.imageTopLayerCommon, 'object-left')}
                />
              </AnimateInView>
              <AnimateInView duration={0.3} animation="slideUp" className={styles.imageWrapper}>
                <img
                  src={getProcessedImage('https://a-us.storyblok.com/f/1005200/1390x1390/45d9a3d22a/frame-97.jpg', '700x700')}
                  alt=""
                  loading="eager"
                  className={cnb(styles.imageBottomLayerCommon, 'object-left')}
                />
                <m.img
                  src={getProcessedImage('https://a-us.storyblok.com/f/1005200/1390x1390/cb35b9488b/frame-96.jpg', '700x700')}
                  alt=""
                  loading="eager"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className={cnb(styles.imageTopLayerCommon, 'object-right')}
                />
              </AnimateInView>
            </Grid>
          </Container>
          <FlexBox direction="col" justifyContent="between" className={styles.textFlexbox}>
            <AnimateInView
              animation="slideInFromLeft"
              delay={0.6}
              duration={0.3}
              className={styles.textWrapperTop}
            >
              <Text font="serif" weight="semibold" leading="none" italic className={styles.serifText}>
                How will we
              </Text>
              <Text font="druk" size="hero" leading="none">
                come together
              </Text>
            </AnimateInView>
            <AnimateInView
              animation="slideInFromRight"
              delay={0.6}
              duration={0.3}
              className={styles.textWrapperBottom}
            >
              <Text font="serif" weight="semibold" leading="none" align="right" italic className={styles.serifText}>
                all in service of
              </Text>
              <Text font="druk" size="hero" leading="none" align="right">
                Tomorrow?
              </Text>
            </AnimateInView>
          </FlexBox>
        </div>
      </div>
      <Container bgColor="black" pt={2} pb={7} className={styles.introWrapper}>
        <AnimateInView animation="slideUp">
          <Heading size="f5" leading="tight">
            We’re all in this together.
          </Heading>
        </AnimateInView>
        <AnimateInView delay={0.2} animation="slideUp" className={styles.introBodyWrapper}>
          <Paragraph size={1} weight="normal" leading="snug" className={styles.introParagraph}>
            Sustaining a thriving planet. Accelerating solutions and empowering the next generation of leaders.
          </Paragraph>
          <Paragraph size={1} weight="normal" leading="snug" className={styles.introParagraph}>
            Meet your community of changemakers, explore what you’re passionate about, and join the conversation.
          </Paragraph>
        </AnimateInView>
      </Container>
    </Container>
  );
};
