import { AnimateInView } from '../Animate';
import { AnimatedText } from '../AnimatedText/AnimatedText';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { BookshelfAlt } from '../Bookshelf/BookshelfAlt';
import { Heading, Paragraph, Text } from '../Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';

export const ProgressStory = () => {
  return (
    <div className="bg-gc-black">
      <Container as="header" bgColor="black" pb={9} className="relative 3xl:px-100 pt-[15vw]">
        <img
          src={getProcessedImage('https://a-us.storyblok.com/f/1005200/1901x1643/e36a942af8/progress-dish-cropped.jpg', '2000x0')}
          alt=""
          loading="eager"
          className="absolute size-full object-cover object-top top-0 left-0"
        />
        <Grid lg={12} className="relative" gap="default">
          <AnimateInView animation="slideUp" className="relative z-10 max-w-1200 col-span-12 2xl:col-start-2 2xl:col-span-8">
            <Heading as="h1" size="f7" leading="tight" className="rs-mb-1">
              <AnimatedText text="Progress is nothing without purpose" />
            </Heading>
            <Text color="white">by Sarah Jane Staats</Text>
            <Text color="white">May 5, 2023</Text>
            <Paragraph leading="display" size={2} noMargin className="rs-mt-9 max-w-1200 pb-[30vw]">
              Stanford, at its heart, is a community of changemakers. Where there is doubt, we make discoveries.
              Where there are fundamental questions, we make discoveries. Where there is need, we make a difference.
              Our aim is to leave the world better than we found it.
              We hope you’ll join us in making creative changes that benefit generations to come.
            </Paragraph>
          </AnimateInView>
        </Grid>
      </Container>
      <Container bgColor="black" width="full" className="relative -mt-2">
        <img
          src={getProcessedImage('https://a-us.storyblok.com/f/1005200/4000x2250/0c54166208/vlad-hilitanu-pt7qzb4zlww-unsplash.jpg', '2000x2000')}
          alt=""
          loading="eager"
          className="relative size-full object-cover object-top"
        />
        <div
          className="absolute size-full top-0 left-0 bg-gradient-to-b from-[#020002] via-transparent via-40% to-gc-black z-10"
        />
        <div className="absolute top-0 r-0 w-full 3xl:px-100 z-20">
          <Grid lg={12} className="w-full" gap="default">
            <Heading font="druk" size="f8" uppercase className="col-start-2 col-span-11 mt-[30vw] mb-0">
              Impact
            </Heading>
          </Grid>
          <Grid lg={12} className="w-full" gap="default">
            <div className="3xl:col-start-5 col-span-12 3xl:col-span-8 cc mt-[25vw]">
              <Heading font="serif" size={2} className="max-w-600">
                What do we mean when we talk about Stanford’s impact?
              </Heading>
              <div className="columns-2 [column-gap:5rem] rs-mt-5">
                <Paragraph>
                  Most universities conduct research that can create products and shape policies.
                  We also train leaders who will influence their peers, organizations, and communities.
                  We like to think we can change people’s lives or even nudge the course of history.
                </Paragraph>
                <Paragraph>
                  Of course, cause and effect can be hard to trace, especially over time.
                  Moreover, not everything that counts can be counted. But ultimately,
                  what Stanford does every day is this: We send ideas and people into the world.
                </Paragraph>
                <Paragraph>
                  Impact means believing what we do makes a difference.
                  Impact means holding ourselves accountable for the consequences of our actions.
                  Impact means doing our utmost to see who our efforts reach,
                  from people on campus to people all over the world.
                </Paragraph>
                <Paragraph>
                  Impact means that knowing who we help can change the way we work.
                </Paragraph>
              </div>
            </div>
          </Grid>
        </div>
        <Paragraph color="black-40" variant="caption" align="right" className="rs-mt-8 absolute bottom-60 right-100 z-20" noMargin>
          Photo credit lorem ipsum dolar sit amet vestibulum perimentium.
        </Paragraph>
      </Container>
      <BookshelfAlt />
      <Container bgColor="black" width="full" className="relative -mt-2">
        <img
          src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2100x1350/02b8df40d3/21664-12-0011_cmyk-1.jpg', '2000x1200')}
          alt=""
          loading="eager"
          className="relative size-full object-cover object-top"
        />
        <div
          className="absolute size-full top-0 left-0 bg-gradient-to-b from-gc-black via-gc-black/20 via-40% to-gc-black z-10"
        />
        <div className="absolute top-0 r-0 w-full 3xl:px-100 z-20">
          <Grid lg={12} className="w-full" gap="default">
            <div className="3xl:col-start-5 col-span-12 3xl:col-span-8 cc mt-[25vw]">
              <div className="columns-2 [column-gap:5rem] rs-mt-5">
                <Paragraph>
                  For more than 130 years, we have strived to build a better world. THE WORK IS FAR FROM OVER.
                  Only together can we ensure a future united through diversity, safeguarded through sustainability,
                  where collective problems are solved with collective solutions.
                </Paragraph>
                <Paragraph>
                  If there’s a change that needs to be made, this is how we’ll make it. If there’s darkness ahead,
                  this is how we’ll shine a light. The world has never moved faster,
                  and our challenges have never been more urgent.
                  If the future is already here, then what we do today has never mattered more.
                </Paragraph>
                <Paragraph weight="bold">
                  There is nothing we can do that we cannot do better, together.
                </Paragraph>
              </div>
            </div>
          </Grid>
        </div>
        <Paragraph color="black-40" variant="caption" align="right" className="rs-mt-8 absolute bottom-60 right-100 z-20" noMargin>
          Photo credit lorem ipsum dolar sit amet vestibulum perimentium.
        </Paragraph>
      </Container>
    </div>
  );
};
