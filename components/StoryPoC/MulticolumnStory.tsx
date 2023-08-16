import { useRef } from 'react';
import { useScroll, m, useTransform } from 'framer-motion';
import { AnimateInView } from '../Animate';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { Heading, Paragraph, Text } from '../Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';

export const MulticolumnStory = () => {
  const bgChangeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: bgChangeRef,
  });
  const animateBgColor = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], ['#FFF', '#FEF9E7', '#dce9f7', '#fff']);

  return (
    <>
      <Container as="header" bgColor="white" pt={10} className="3xl:px-100">
        <Grid lg={12} gap="default">
          <div className="col-span-6 col-start-2 rs-mb-9">
            <AnimateInView animation="sharpen">
              <Heading as="h1" size={8} leading="tight" className="rs-mb-1">
                Whereas recognition of the inherent dignity
              </Heading>
            </AnimateInView>
            <Text color="black-60">by Sarah Jane Staats</Text>
            <Text color="black-60">May 5, 2023</Text>
            <Paragraph font="serif" weight="semibold" leading="display" size={1} className="rs-mt-8 max-w-[66rem]">
              Vestibulum accumsan urna magna, eget aliquet magna luctus sit amet.
              Ut sed velit tincidunt, dignissim nibh sed. Maecenas egestas augue ac nisl suscipit
            </Paragraph>
          </div>
        </Grid>
      </Container>
      <Container bgColor="white" pb={8} className="3xl:px-100">
        <Grid lg={12} gap="default">
          <AnimateInView animation="slideUp" once={false} className="col-span-8 col-start-5 columns-2 [column-gap:5rem]">
            <Paragraph>
              Juicy, acidic and sun-warmed sweet, a perfect summer tomato is a blessing. (A less perfect tomato is fine, if a little dull; a wan out-of-season tomato is to be avoided.) I eat tomatoes every day in August, sometimes at every meal.
            </Paragraph>
            <Paragraph>
              That’s why it’s Tomato Week here at Five Weeknight Dishes, with recipes that feature tomatoes: I can hardly think of anything else. Next week, the newsletter will be devoted to zucchini, and then finally we’ll turn to corn, the golden queen of late summer. If it’s a no on tomatoes, here’s a collection of easy summer dinner recipes to browse. Something for everyone!
            </Paragraph>
            <Paragraph>
              Write me to tell me what you think and what you’re cooking. And if you’re in the New York area, Eric Kim is appearing at the Grow NYC booth at the Union Square Greenmarket on Wednesday, Aug. 9, from 11 a.m. to 1 p.m. Eric will show you how to make his easy and popular furikake tomato sandwich at 11 a.m. and noon, and he’ll be there to say hello and answer questions in between.
            </Paragraph>
            <Paragraph>
              Good morning. Games that my family plays on road trips: Punch Buggy, Stump the Teacher, I’m Thinking of an Animal. Also, the Rating Game: your top five sandwiches, your top five pizzerias, your top five restaurant dishes, your top five fruits.
            </Paragraph>
            <Paragraph>
              Peaches do very well in the Rating Game, I’ve found, even if your chances of actually eating a perfect peach are low. Where I stay, most peaches are terrible. If I’m lucky I’ll have two great ones a season.
            </Paragraph>
            <Paragraph>
              But cooking a bad peach can make it terrific, which is why I’m so thrilled about Yossy Arefi’s new recipe for a peach crisp (above). You want the fruit just this side of ripe — those super-ripe ones are better raw, and only turn to mush when baked. Peel them if you like a luscious texture against the buttery crust of oats (I’m a rustic; I don’t peel). You’ll notice Yossy doesn’t include spices in her recipe. You can add a little rosy sweetness by serving the crisp with vanilla ice cream, or you could bring a whisper of cinnamon or nutmeg to the mix if you prefer.
            </Paragraph>
          </AnimateInView>
        </Grid>
      </Container>
      <figure>
        <AnimateInView animation="sharpen" once={false} duration={1.6} className="w-full">
          <img
            loading="eager"
            src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2499x1667/53d21f92bf/farm_1208.jpg', '2000x0')}
            alt="Something alt"
            className="relative object-cover w-full"
          />
        </AnimateInView>
        <Text as="figcaption" variant="caption" color="black-60" className="cc 3xl:px-100">
          Caption/credit lorem ipsum dolar sit amet vestibulum perimentium
        </Text>
      </figure>
      <Container bgColor="white" className="3xl:px-100" pt={10}>
        <Grid lg={12} gap="default" alignItems="start">
          <figure className="rs-mb-8 col-span-5">
            <AnimateInView animation="sharpen" duration={1} once={false} delay={0.1}>
              <div className="w-full overflow-hidden">
                <img
                  loading="eager"
                  src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2048x3089/8ec7f4414e/21664-18-0031.jpg', '1000x0')}
                  alt="Something alt"
                  className="relative object-cover w-full"
                />
              </div>
              <Text as="figcaption" variant="caption" color="black-60" className="cc 3xl:px-100">
                Caption/credit lorem ipsum dolar sit amet vestibulum perimentium
              </Text>
            </AnimateInView>
          </figure>
          <div className="col-span-6 col-start-7">
            <Grid lg={6} gap="default">
              <div className="mt-[49rem] col-span-4 col-start-3">
                <AnimateInView animation="sharpen" duration={1} once={false} delay={0.2}>
                  <Text size={1} as="blockquote" font="serif" weight="semibold" leading="cozy">
                    “In the 1920s, about 25 percent of the population was involved in farming, including many of our grandparents, but in the U.S. today, less than 1 percent of the population has a job in agriculture. Our food systems seem far removed from everyday life and a world away from most students.”
                  </Text>
                  <Text font="serif" className="rs-mt-1 text-20">
                    Angela Nomellini, organic farm owner in NY
                  </Text>
                </AnimateInView>
              </div>
              <figure className="rs-mb-8 col-span-5 rs-mt-9">
                <AnimateInView animation="sharpen" duration={1} once={false} delay={0.2}>
                  <div className="w-full overflow-hidden">
                    <img
                      loading="eager"
                      src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2560x1708/4d3e7bc511/farm_1100.jpg', '1000x0')}
                      alt="Something alt"
                      className="relative object-cover w-full"
                    />
                  </div>
                  <Text as="figcaption" variant="caption" color="black-60" className="cc 3xl:px-100">
                    Caption/credit lorem ipsum dolar sit amet vestibulum perimentium
                  </Text>
                </AnimateInView>
              </figure>
            </Grid>
          </div>
        </Grid>
      </Container>
      <m.div ref={bgChangeRef} style={{ backgroundColor: animateBgColor }} className="cc 3xl:px-100">
        <Grid lg={12} gap="default">
          <AnimateInView
            animation="slideUp"
            once={false}
            className="col-span-8 col-start-2 columns-2 [column-gap:5rem] rs-mt-10"
          >
            <Paragraph>
              That’s why it’s Tomato Week here at Five Weeknight Dishes, with recipes that feature tomatoes: I can hardly think of anything else. Next week, the newsletter will be devoted to zucchini, and then finally we’ll turn to corn, the golden queen of late summer. If it’s a no on tomatoes, here’s a collection of easy summer dinner recipes to browse. Something for everyone!
            </Paragraph>
            <Paragraph>
              Write me to tell me what you think and what you’re cooking. And if you’re in the New York area, Eric Kim is appearing at the Grow NYC booth at the Union Square Greenmarket on Wednesday, Aug. 9, from 11 a.m. to 1 p.m. Eric will show you how to make his easy and popular furikake tomato sandwich at 11 a.m. and noon, and he’ll be there to say hello and answer questions in between.
            </Paragraph>
            <Paragraph>
              Peaches do very well in the Rating Game, I’ve found, even if your chances of actually eating a perfect peach are low. Where I stay, most peaches are terrible. If I’m lucky I’ll have two great ones a season.
            </Paragraph>
            <Paragraph>
              But cooking a bad peach can make it terrific, which is why I’m so thrilled about Yossy Arefi’s new recipe for a peach crisp (above). You want the fruit just this side of ripe — those super-ripe ones are better raw, and only turn to mush when baked. Peel them if you like a luscious texture against the buttery crust of oats (I’m a rustic; I don’t peel). You’ll notice Yossy doesn’t include spices in her recipe. You can add a little rosy sweetness by serving the crisp with vanilla ice cream, or you could bring a whisper of cinnamon or nutmeg to the mix if you prefer.
            </Paragraph>
          </AnimateInView>
        </Grid>
        <Grid lg={12} gap="default" pb={9}>
          <AnimateInView animation="sharpen" duration={1} once={false} className="col-span-5 col-start-7 rs-mt-9">
            <Text as="blockquote" weight="semibold" leading="display" size={4} font="serif">
              “Literacy around food and the environment benefits everyone.”
            </Text>
            <Text font="serif" weight="semibold" className="rs-mt-1 text-20">
              Laura O’Donohue
            </Text>
          </AnimateInView>
        </Grid>
        <Grid lg={12} gap="default" py={9}>
          <AnimateInView
            animation="slideUp"
            once={false}
            className="col-span-4 col-start-4"
          >
            <Paragraph>
              That’s why it’s Tomato Week here at Five Weeknight Dishes, with recipes that feature tomatoes: I can hardly think of anything else. Next week, the newsletter will be devoted to zucchini, and then finally we’ll turn to corn, the golden queen of late summer. If it’s a no on tomatoes, here’s a collection of easy summer dinner recipes to browse. Something for everyone!
            </Paragraph>
            <Paragraph>
              Write me to tell me what you think and what you’re cooking. And if you’re in the New York area, Eric Kim is appearing at the Grow NYC booth at the Union Square Greenmarket on Wednesday, Aug. 9, from 11 a.m. to 1 p.m. Eric will show you how to make his easy and popular furikake tomato sandwich at 11 a.m. and noon, and he’ll be there to say hello and answer questions in between.
            </Paragraph>
            <Paragraph>
              But cooking a bad peach can make it terrific, which is why I’m so thrilled about Yossy Arefi’s new recipe for a peach crisp (above). You want the fruit just this side of ripe — those super-ripe ones are better raw, and only turn to mush when baked. Peel them if you like a luscious texture against the buttery crust of oats (I’m a rustic; I don’t peel). You’ll notice Yossy doesn’t include spices in her recipe. You can add a little rosy sweetness by serving the crisp with vanilla ice cream, or you could bring a whisper of cinnamon or nutmeg to the mix if you prefer.
            </Paragraph>
          </AnimateInView>
        </Grid>
        <Grid lg={12} gap="default" py={9}>
          <AnimateInView animation="sharpen" once={false} duration={1} delay={0.2} className="col-span-3 col-start-2 mt-[49rem]">
            <Text size={2} as="blockquote" font="serif" weight="semibold" leading="cozy">
              “Whether it’s clean water, healthful food, or clean air, we know these problems are not insular. They’re issues for all of us.”
            </Text>
            <Text font="serif" className="rs-mt-1 text-20">
              Angela Nomellini, organic farm owner in NY
            </Text>
          </AnimateInView>
          <AnimateInView animation="sharpen" once={false} duration={1} className="col-span-5 col-start-6">
            <figure>
              <div className="w-full">
                <img
                  loading="eager"
                  src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2560x1708/0160f8e7a6/farm_1157.jpg', '1000x0')}
                  alt="Something alt"
                  className="relative object-cover w-full"
                />
              </div>
              <Text as="figcaption" variant="caption" color="black-60" className="cc 3xl:px-100">
                Caption/credit lorem ipsum dolar sit amet vestibulum perimentium
              </Text>
            </figure>
          </AnimateInView>
        </Grid>
        <Grid lg={12} gap="default" pb={9}>
          <AnimateInView
            animation="slideUp"
            once={false} className="col-span-8 col-start-5 columns-2 [column-gap:5rem]"
          >
            <Paragraph>
              Juicy, acidic and sun-warmed sweet, a perfect summer tomato is a blessing. (A less perfect tomato is fine, if a little dull; a wan out-of-season tomato is to be avoided.) I eat tomatoes every day in August, sometimes at every meal.
            </Paragraph>
            <Paragraph>
              That’s why it’s Tomato Week here at Five Weeknight Dishes, with recipes that feature tomatoes: I can hardly think of anything else. Next week, the newsletter will be devoted to zucchini, and then finally we’ll turn to corn, the golden queen of late summer. If it’s a no on tomatoes, here’s a collection of easy summer dinner recipes to browse. Something for everyone!
            </Paragraph>
            <Paragraph>
              Write me to tell me what you think and what you’re cooking. And if you’re in the New York area, Eric Kim is appearing at the Grow NYC booth at the Union Square Greenmarket on Wednesday, Aug. 9, from 11 a.m. to 1 p.m. Eric will show you how to make his easy and popular furikake tomato sandwich at 11 a.m. and noon, and he’ll be there to say hello and answer questions in between.
            </Paragraph>
            <Paragraph>
              Good morning. Games that my family plays on road trips: Punch Buggy, Stump the Teacher, I’m Thinking of an Animal. Also, the Rating Game: your top five sandwiches, your top five pizzerias, your top five restaurant dishes, your top five fruits.
            </Paragraph>
            <Paragraph>
              Peaches do very well in the Rating Game, I’ve found, even if your chances of actually eating a perfect peach are low. Where I stay, most peaches are terrible. If I’m lucky I’ll have two great ones a season.
            </Paragraph>
            <Paragraph>
              But cooking a bad peach can make it terrific, which is why I’m so thrilled about Yossy Arefi’s new recipe for a peach crisp (above). You want the fruit just this side of ripe — those super-ripe ones are better raw, and only turn to mush when baked. Peel them if you like a luscious texture against the buttery crust of oats (I’m a rustic; I don’t peel). You’ll notice Yossy doesn’t include spices in her recipe. You can add a little rosy sweetness by serving the crisp with vanilla ice cream, or you could bring a whisper of cinnamon or nutmeg to the mix if you prefer.
            </Paragraph>
          </AnimateInView>
        </Grid>
      </m.div>
      <figure>
        <AnimateInView animation="sharpen" once={false} duration={1.6} className="w-full overflow-hidden bg-[#dce9f7]">
          <img
            loading="eager"
            src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2507x1672/dd4107f447/farm_1201.jpg', '2000x0')}
            alt="Something alt"
            className="relative object-cover w-full"
          />
        </AnimateInView>
        <Text as="figcaption" variant="caption" color="black-60" className="cc 3xl:px-100">
          Caption/credit lorem ipsum dolar sit amet vestibulum perimentium
        </Text>
      </figure>
      <Container className="3xl:px-100">
        <Grid lg={12} gap="default" pb={10}>
          <AnimateInView animation="slideUp" once={false} className="col-span-8 col-start-2 columns-2 [column-gap:5rem] rs-mt-10">
            <Paragraph>
              That’s why it’s Tomato Week here at Five Weeknight Dishes, with recipes that feature tomatoes: I can hardly think of anything else. Next week, the newsletter will be devoted to zucchini, and then finally we’ll turn to corn, the golden queen of late summer. If it’s a no on tomatoes, here’s a collection of easy summer dinner recipes to browse. Something for everyone!
            </Paragraph>
            <Paragraph>
              Write me to tell me what you think and what you’re cooking. And if you’re in the New York area, Eric Kim is appearing at the Grow NYC booth at the Union Square Greenmarket on Wednesday, Aug. 9, from 11 a.m. to 1 p.m. Eric will show you how to make his easy and popular furikake tomato sandwich at 11 a.m. and noon, and he’ll be there to say hello and answer questions in between.
            </Paragraph>
            <Paragraph>
              Peaches do very well in the Rating Game, I’ve found, even if your chances of actually eating a perfect peach are low. Where I stay, most peaches are terrible. If I’m lucky I’ll have two great ones a season.
            </Paragraph>
            <Paragraph>
              But cooking a bad peach can make it terrific, which is why I’m so thrilled about Yossy Arefi’s new recipe for a peach crisp (above). You want the fruit just this side of ripe — those super-ripe ones are better raw, and only turn to mush when baked. Peel them if you like a luscious texture against the buttery crust of oats (I’m a rustic; I don’t peel). You’ll notice Yossy doesn’t include spices in her recipe. You can add a little rosy sweetness by serving the crisp with vanilla ice cream, or you could bring a whisper of cinnamon or nutmeg to the mix if you prefer.
            </Paragraph>
          </AnimateInView>
        </Grid>
      </Container>
    </>
  );
};
