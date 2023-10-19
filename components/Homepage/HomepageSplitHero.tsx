import { m } from 'framer-motion';
import { Container } from '../Container';
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
                  className="w-full h-full object-cover object-right"
                />
                <m.img
                  src={getProcessedImage('https://a-us.storyblok.com/f/1005200/1390x1390/45d9a3d22a/frame-97.jpg', '700x700')}
                  alt=""
                  loading="eager"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="absolute top-0 right-0 w-full h-full object-cover object-left mix-blend-lighten -scale-x-100"
                />
              </AnimateInView>
              <AnimateInView duration={0.3} animation="slideUp" className={styles.imageWrapper}>
                <img
                  src={getProcessedImage('https://a-us.storyblok.com/f/1005200/1390x1390/45d9a3d22a/frame-97.jpg', '700x700')}
                  alt=""
                  loading="eager"
                  className="w-full h-full object-cover object-left"
                />
                <m.img
                  src={getProcessedImage('https://a-us.storyblok.com/f/1005200/1390x1390/cb35b9488b/frame-96.jpg', '700x700')}
                  alt=""
                  loading="eager"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="absolute top-0 right-0 w-full h-full object-cover object-right mix-blend-lighten -scale-x-100"
                />
              </AnimateInView>
            </Grid>
          </Container>
          <div className="absolute w-full h-full flex flex-col justify-between top-0 left-0 cc 3xl:px-100 4xl:px-[calc((100%-1800px)/2)]">
            <AnimateInView
              animation="slideInFromLeft"
              delay={0.6}
              duration={0.3}
              className="relative -top-65 sm:-top-[10vw] xl:-top-[8vw] 4xl:-top-[15rem] right-0"
            >
              <Text font="serif" weight="semibold" leading="none" italic className="text-[clamp(2.5rem,2.74vw+1.51rem,7rem)]">
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
              className="relative top-[12%]"
            >
              <Text font="serif" weight="semibold" leading="none" align="right" italic className="text-[clamp(2.5rem,2.74vw+1.51rem,7rem)]">
                all in service of
              </Text>
              <Text font="druk" size="hero" leading="none" align="right">
                Tomorrow?
              </Text>
            </AnimateInView>
          </div>
        </div>
      </div>
      <Container bgColor="black" pt={2} pb={7} className="relative z-10 bg-gradient-to-t from-gc-black to-[#020002]">
        <div className="mx-auto max-w-1500">
          <AnimateInView animation="slideUp">
            <Heading size="f5" leading="tight">
              We’re all in this together.
            </Heading>
          </AnimateInView>
          <AnimateInView delay={0.2} animation="slideUp" className="md:ml-06em">
            <Paragraph size={1} weight="normal" leading="snug" className="max-w-[50ch] ml-0 mr-auto">
              Sustaining a thriving planet. Accelerating solutions and empowering the next generation of leaders.
            </Paragraph>
            <Paragraph size={1} weight="normal" leading="snug" className="max-w-[50ch] ml-0 mr-auto">
              Meet your community of changemakers, explore what you’re passionate about, and join the conversation.
            </Paragraph>
          </AnimateInView>
        </div>
      </Container>
    </Container>
  );
};
