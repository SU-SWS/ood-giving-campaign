import { useRef } from 'react';
import { useScroll, m, useTransform } from 'framer-motion';
import { AnimateInView } from '../Animate';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { Heading, Paragraph, Text } from '../Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { getMaskedAsset } from '@/utilities/getMaskedAsset';
import { colorNameToHex } from '@/utilities/colorPalettePlugin';
import { Paragraphs } from '../Temporary/Paragraphs';
import { FlexBox } from '../FlexBox';
import { CtaButton } from '../Cta';

export const BrochureStory = () => {
  const bgImage = getProcessedImage('https://a-us.storyblok.com/f/1005200/3089x2048/aee2ea28c6/21664-18-0021_cmyk.jpg', '2000x0');

  return (
    <Container
      width="full"
      className="relative bg-fixed bg-no-repeat bg-top bg-cover py-300"
      bgColor="black"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <Container pb={10}>
        <Heading as="h1" align="center" leading="tight" className="max-w-[110rem] mx-auto">
          <Text size="f7" font="serif" className="block rs-mb-4">Solved for now.</Text>
          <Text size="f8" font="serif" className="block italic">To shape what’s next.</Text>
        </Heading>
        <div className="rs-mt-7 font-semibold">
          <Text variant="card" align="center">
            by Sarah Jane Staats
          </Text>
          <Text variant="card" align="center">
            May 5, 2023
          </Text>
        </div>
        <Paragraph size={2} weight="semibold" noMargin font="serif" align="center" className="max-w-800 mx-auto rs-my-4" leading="display">
          Vestibulum accumsan urna magna, eget aliquet magna luctus sit amet.
          Ut sed velit tincidunt, dignissim nibh sed.
        </Paragraph>
      </Container>
      {/* Chapter 1 */}
      <article className="relative bg-white text-gc-black mx-25 rs-mt-10 lg:h-1000 overflow-hidden">
        <Grid xs={2} className="relative grid w-[200%] lg:h-1000">
          {/* Stack 1 - cover */}
          <div className="lg:h-1000 relative bg-white rs-p-1">
            <Grid lg={12} alignItems="start" className="lg:h-full lg:gap-x-80 3xl:gap-x-120">
              <figure className="h-full flex flex-col overflow-hidden lg:col-span-6 2xl:col-span-5 4xl:col-span-6">
                <div className="overflow-hidden grow">
                  <img
                    src={getProcessedImage('https://a-us.storyblok.com/f/1005200/883x1040/d7d568e264/21664-15-0029_cmyk-1.jpg', '1000x1100')}
                    className="object-cover w-full h-full"
                    alt=""
                  />
                </div>
                <Text variant="caption" color="black-80" className="mt-03em shrink-0">
                  Caption/credit lorem ipsum dolar sit amet vestibulum perimentium
                </Text>
              </figure>
              <div className="mt-40 2xl:mt-60 3xl:mt-90 text-gc-black rs-pr-6 shrink-0 lg:col-span-6 2xl:col-span-7 4xl:col-span-6">
                <Text font="serif" size={2} className="rs-mb-0">Chapter 1.</Text>
                <Heading leading="tight" className="type-5 3xl:type-6 3xl:mb-100 mb-60">
                  Preparing citizens and leaders
                </Heading>
                <Grid xxl={2} gap="default" alignItems="start">
                  <div>
                    <Paragraph font="serif" weight="bold" size={1} leading="display" noMargin>
                      To change the world, one must first learn to engage with the world.
                    </Paragraph>
                  </div>
                  <div>
                    <Paragraph noMargin leading="snug">
                      Through a combination of groundbreaking new curriculum, enhanced resources and financial aid,
                      and revitalized residential experiences, Stanford will create a culture that prepares students
                      to live, work,and serve as active citizens, for the good of the world.
                      This includes an embedded focus on character, community, civic engagement, and ethics,
                      undergirded by an inclusive worldview.
                    </Paragraph>
                  </div>
                </Grid>
              </div>
            </Grid>
            <CtaButton icon="arrow-right" variant="brochure" color="black" className="rs-mt-3 xl:!absolute bottom-70 right-80">Continue reading</CtaButton>
          </div>
          {/* Stack 2 */}
          <div className="lg:h-1000 relative">
            {/* Stack 2 - slide 1 */}
            <div className="h-full relative bg-white rs-p-1">
              <Grid lg={12} alignItems="start" className="lg:h-full lg:gap-x-80 3xl:gap-x-120">
                <figure className="h-full flex flex-col overflow-hidden lg:col-span-6 2xl:col-span-5 4xl:col-span-6">
                  <div className="overflow-hidden grow">
                    <img
                      src={getProcessedImage('https://a-us.storyblok.com/f/1005200/883x1040/d7d568e264/21664-15-0029_cmyk-1.jpg', '1000x1100')}
                      className="object-cover w-full h-full"
                      alt=""
                    />
                  </div>
                  <Text variant="caption" color="black-80" className="mt-03em shrink-0">
                    Caption/credit lorem ipsum dolar sit amet vestibulum perimentium
                  </Text>
                </figure>
                <div className="mt-40 2xl:mt-60 3xl:mt-90 text-gc-black rs-pr-6 shrink-0 lg:col-span-6 2xl:col-span-7 4xl:col-span-6">
                  <Text font="serif" size={2} className="rs-mb-0">Chapter 1.</Text>
                  <Heading leading="tight" className="type-5 3xl:type-6 3xl:mb-100 mb-60">
                    Preparing citizens and leaders
                  </Heading>
                  <Grid xxl={2} gap="default" alignItems="start">
                    <div>
                      <Paragraph font="serif" weight="bold" size={1} leading="display" noMargin>
                        To change the world, one must first learn to engage with the world.
                      </Paragraph>
                    </div>
                    <div>
                      <Paragraph noMargin leading="snug">
                        Through a combination of groundbreaking new curriculum, enhanced resources and financial aid,
                        and revitalized residential experiences, Stanford will create a culture that prepares students
                        to live, work,and serve as active citizens, for the good of the world.
                        This includes an embedded focus on character, community, civic engagement, and ethics,
                        undergirded by an inclusive worldview.
                      </Paragraph>
                    </div>
                  </Grid>
                </div>
              </Grid>
              <CtaButton icon="arrow-right" variant="brochure" color="black" className="rs-mt-3 xl:!absolute bottom-70 right-80">Continue reading</CtaButton>
            </div>
          </div>
        </Grid>
      </article>
      <Text icon="arrow-down" font="serif" weight="bold" size={1} align="center" className="rs-mt-0">More sections</Text>
      {/* Chapter 2 */}
      <article className="relative bg-white text-gc-black mx-25 rs-px-1 rs-py-1 rs-mt-10 lg:h-1000">
        <FlexBox alignItems="start" className="flex-col lg:flex-row lg:gap-x-80 3xl:gap-x-120">
          <figure>
            <div className="max-h-900 overflow-hidden">
              <img
                src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2560x1708/640416d93f/charm_lab_1345_cmyk.jpg', '1000x1100')}
                className=""
                alt=""
              />
            </div>
            <Text variant="caption" color="black-80" className="mt-03em">
              Caption/credit lorem ipsum dolar sit amet vestibulum perimentium
            </Text>
          </figure>
          <div className="mt-40 2xl:mt-60 3xl:mt-90 text-gc-black lg:w-1/2 rs-pr-6 shrink-0">
            <Text font="serif" size={2} className="rs-mb-0">Chapter 2.</Text>
            <Heading leading="tight" className="type-5 3xl:type-6 3xl:mb-100 mb-60">
              Catalyzing discovery in every field
            </Heading>
            <Grid xxl={2} gap="default" alignItems="start">
              <div>
                <Paragraph font="serif" weight="bold" size={1} leading="display" noMargin>
                  The search for knowledge is at the core of everything Stanford does,
                  because curiosity is fundamental to our humanity.
                </Paragraph>
              </div>
              <div>
                <Paragraph noMargin leading="snug">
                  No matter what truths we uncover about the world, or what insights we discover about ourselves,
                  there is always more to learn. Propelled by new ways of thinking, working, and creating,
                  our students and scholars probe the frontiers of discovery,
                  revealing advances that drive progress and truths that are timeless.
                </Paragraph>
              </div>
            </Grid>
          </div>
        </FlexBox>
        <CtaButton icon="arrow-right" variant="brochure" color="black" className="rs-mt-3 xl:!absolute bottom-70 right-80">Continue reading</CtaButton>
      </article>
      <Text icon="arrow-down" font="serif" weight="bold" size={1} align="center" className="rs-mt-0">More</Text>
      <Container py={10}>
        <Heading as="h1" align="center" leading="tight" className="max-w-1000 mx-auto">
          <Text size="f7" font="serif" className="block rs-mb-4">Our purpose changes the way we view the world.</Text>
          <Text size="f8" font="serif" className="block italic">And the way we shape it.</Text>
        </Heading>
      </Container>
    </Container>
  );
};
