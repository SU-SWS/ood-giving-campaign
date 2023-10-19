import { m } from 'framer-motion';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { Heading, Paragraph, Text } from '../Typography';
import { AnimateInView } from '../Animate';
import { ImageOverlay } from '../ImageOverlay';
import { getProcessedImage } from '@/utilities/getProcessedImage';

/**
 * This is the homepage hero for the MVP site.
 */
export const HomepageSplitHero = () => {
  const bg = getProcessedImage('https://a-us.storyblok.com/f/1005200/2100x2028/bef2e6a13e/masthead-top-structured.jpg', '3200x0');
  const mobileBg = getProcessedImage('https://a-us.storyblok.com/f/1005200/1901x1643/342467c886/progress-dish-mobile.jpg', '1200x0');

  return (
    <Container width="full" bgColor="black" className="relative overflow-hidden">
      <div
        className="relative max-h-[180rem] bg-black-true pt-170 sm:pt-[24vw] 2xl:pt-[16vw] 4xl:pt-[32rem] pb-[50vw] sm:pb-[40vw] lg:pb-[40vw] 2xl:pb-[36vw] 4xl:pb-[64rem]"
      >
        <ImageOverlay
          imageSrc={bg}
          overlay="homepage-hero"
          loading="eager"
          overlayClasses="mix-blend-lighten"
          className="hidden sm:block"
        />
        <ImageOverlay
          imageSrc={mobileBg}
          overlay="homepage-hero"
          loading="eager"
          overlayClasses="mix-blend-lighten"
          className="sm:hidden"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-bl from-[#001c36ab] via-transparent via-60%" />
        <div className="relative">
          <div className="relative cc">
            <Grid xs={2} className="relative w-11/12 sm:w-[70vw] mx-auto 4xl:max-w-[140rem]">
              <AnimateInView duration={0.3} animation="slideDown" className="relative w-full aspect-w-2 aspect-h-3 sm:aspect-w-1 sm:aspect-h-1">
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
              <AnimateInView duration={0.3} animation="slideUp" className="relative w-full aspect-w-2 aspect-h-3 sm:aspect-w-1 sm:aspect-h-1">
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
          </div>
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
