import { m } from 'framer-motion';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { Heading, Paragraph, Text } from '../Typography';
import { AnimateInView } from '../Animate';
import { getProcessedImage } from '@/utilities/getProcessedImage';


export const HomepageSplitHero = () => {
  const bg = getProcessedImage('https://a-us.storyblok.com/f/1005200/2100x2028/bef2e6a13e/masthead-top-structured.jpg', '3000x0');

  return (
    <Container width="full" bgColor="black" className="relative overflow-hidden">
      <div
        className="relative pb-[27vw] bg-black-true pt-[24vw] md:pt-[22vw] xl:pt-[18vw] 2xl:pt-[16vw] 4xl:pt-[34rem] bg-no-repeat bg-cover [background-position-y:160px]"
        style={{ backgroundImage: `url('${bg}')` }}
      >
        <Heading as="h1" srOnly>Homepage</Heading>
        <div className="absolute top-0 h-[50vw] 2xl:h-[40vw] 3xl:h-[35vw] w-full bg-gradient-to-b from-[#191e3e] via-[#263588] via-40% to-transparent" />
        <div className="relative">
          <div className="relative cc">
            <Grid xs={2} className="relative w-[70vw] mx-auto 4xl:max-w-[140rem]">
              <AnimateInView duration={0.3} animation="slideDown" className="relative w-full">
                <m.img
                  src={getProcessedImage('https://a-us.storyblok.com/f/1005200/1390x1390/45d9a3d22a/frame-97.jpg', '700x700')}
                  alt=""
                  loading="eager"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="absolute top-0 right-0 w-full h-full object-cover mix-blend-lighten -scale-x-100"
                />
                <img
                  src={getProcessedImage('https://a-us.storyblok.com/f/1005200/1390x1390/cb35b9488b/frame-96.jpg', '700x700')}
                  alt=""
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </AnimateInView>
              <AnimateInView duration={0.3} animation="slideUp" className="relative w-full">
                <m.img
                  src={getProcessedImage('https://a-us.storyblok.com/f/1005200/1390x1390/cb35b9488b/frame-96.jpg', '700x700')}
                  alt=""
                  loading="eager"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="absolute top-0 right-0 w-full h-full object-cover mix-blend-lighten -scale-x-100"
                />
                <img
                  src={getProcessedImage('https://a-us.storyblok.com/f/1005200/1390x1390/45d9a3d22a/frame-97.jpg', '700x700')}
                  alt=""
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </AnimateInView>
            </Grid>
          </div>
          <div className="absolute w-full top-0 left-0">
            <Grid xs={2}>
              <AnimateInView
                animation="slideInFromLeft"
                delay={0.6}
                duration={0.3}
                className="relative -top-[10vw] xl:-top-[8vw] 4xl:-top-[16rem] right-0 justify-self-end"
              >
                <Text font="serif" weight="semibold" size="f5" leading="none" italic>
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
                className="relative -right-[7vw] top-[27vw] 4xl:top-[57rem] type-4 xl:type-5 justify-self-start"
              >
                <Text font="serif" weight="semibold" leading="none" align="right" italic>
                  all in service of
                </Text>
                <Text font="druk" size="hero" leading="none" align="right">
                  Tomorrow?
                </Text>
              </AnimateInView>
            </Grid>
          </div>
        </div>
      </div>
      <Container bgColor="black" py={7} className="relative z-10 bg-gradient-to-t from-gc-black to-[#020002]">
        <div className="mx-auto max-w-1200">
          <AnimateInView animation="slideUp">
            <Heading size="f7" weight="normal" leading="tight" className="rs-mb-6">
              <span className="italic">We’re</span> all in this <span className="italic">together</span>.
            </Heading>
          </AnimateInView>
          <AnimateInView delay={0.2} animation="slideUp" className="max-w-1200 rs-ml-0">
            <Paragraph size={2} weight="normal" leading="snug" className="max-w-1000 ml-0 mr-auto">
              Sustaining a thriving planet. Accelerating solutions and empowering the next generation of leaders.
            </Paragraph>
            <Paragraph size={2} weight="normal" leading="snug" className="max-w-1000 ml-0 mr-auto">
              Meet your community of changemakers, explore what you’re passionate about, and join the conversation.
            </Paragraph>
          </AnimateInView>
        </div>
      </Container>
    </Container>
  );
};
