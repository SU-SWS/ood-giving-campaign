'use client';
import { useRef, useState } from 'react';
import { useScroll, m, useTransform } from 'framer-motion';
import { AnimateInView } from '../Animate';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { Heading, Paragraph, Text } from '../Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { Paragraphs } from '../Temporary/Paragraphs';
import { FlexBox } from '../FlexBox';
import { CtaButton } from '../Cta';

export const BrochureChapter2 = () => {
  const [isCurrent, setIsCurrent] = useState<false | number>(false);

  const handleButtonClick = (i: number | false) => {
    setIsCurrent(i);
  };

  return (
    <article className="relative bg-white text-gc-black mx-25 rs-mt-10 lg:h-1000 overflow-hidden">
      <Grid xs={2} className="relative grid w-[200%] lg:h-1000">
        {/* Stack 1 - cover */}
        <div className="lg:h-1000 relative bg-white rs-px-1 rs-pt-1 rs-pb-2" aria-hidden={!!isCurrent}>
          <Grid lg={12} alignItems="start" className="lg:h-full lg:gap-x-80 3xl:gap-x-120">
            <figure className="h-full flex flex-col overflow-hidden lg:col-span-6 2xl:col-span-5 4xl:col-span-6">
              <div className="overflow-hidden grow">
                <img
                  src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2560x1708/640416d93f/charm_lab_1345_cmyk.jpg', '1000x1000')}
                  className="object-cover w-full h-full"
                  alt=""
                />
              </div>
              <Text variant="caption" color="black-80" className="mt-03em shrink-0">
                Caption/credit lorem ipsum dolar sit amet vestibulum perimentium
              </Text>
            </figure>
            <div className="mt-40 2xl:mt-60 3xl:mt-90 text-gc-black rs-pr-5 shrink-0 lg:col-span-6 2xl:col-span-7 4xl:col-span-6">
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
          </Grid>
          <CtaButton
            onClick={() => handleButtonClick(1)}
            disabled={!!isCurrent}
            icon="arrow-right"
            variant="brochure"
            color="black"
            className="rs-mt-3 xl:!absolute bottom-60 right-70"
          >
            Continue reading
          </CtaButton>
        </div>
        {/* Stack 2 */}
        <div className="lg:h-1000 relative">
          {/* Stack 2 - slide 1 */}
          <m.div
            className="h-full relative bg-illuminating"
            aria-hidden={isCurrent !== 1}
            initial={{ x: 0 }}
            animate={{ x: isCurrent ? '-100%' : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Grid lg={2} alignItems="stretch" className="lg:h-full">
              <div className="relative">
                <img
                  src={getProcessedImage('https://a-us.storyblok.com/f/1005200/4000x2667/70562b0528/180914-1368_cmyk.jpg', '1500x1000')}
                  className="object-cover w-full h-full object-left"
                  loading="eager"
                  alt=""
                />
                <Text align="center" size="f9" weight="bold" font="serif" leading="display" color="white" className="h-1000 text-vertical-lr absolute top-0 right-0 rotate-180">
                  Duality is
                </Text>
              </div>
              <div className="relative">
                <img
                  src={getProcessedImage('https://a-us.storyblok.com/f/1005200/1858x1202/7a7e53079e/070201-021_cmyk.jpg', '1000x1000')}
                  className="object-cover w-full h-full"
                  loading="eager"
                  alt=""
                />
                <Text align="center" size="f9" weight="bold" font="serif" leading="trim" color="white" className="h-1000 text-vertical-lr absolute top-0 left-0 rotate-180">
                  in our DNA
                </Text>
              </div>
            </Grid>
            <CtaButton
              onClick={() => handleButtonClick(2)}
              disabled={isCurrent !== 1}
              icon="arrow-right"
              variant="brochurePoppy"
              color="black"
              className="rs-mt-3 xl:!absolute bottom-60 right-70"
            >
              Next
            </CtaButton>
          </m.div>
          {/* Stack 2 - slide 2 */}
          <m.div
            className="h-full relative bg-black-90 text-white rs-px-1 rs-pt-1 rs-pb-2 -mt-1000"
            aria-hidden={isCurrent !== 2}
            initial={{ x: 0 }}
            animate={{ x: isCurrent && isCurrent >= 2 ? '-100%' : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Grid lg={12} alignItems="start" className="lg:h-full lg:gap-x-80 3xl:gap-x-100 4xl:gap-x-120">
              <figure className="h-full flex flex-col overflow-hidden lg:col-span-6 2xl:col-span-5 4xl:col-span-6">
                <div className="overflow-hidden grow">
                  <img
                    src={getProcessedImage('https://a-us.storyblok.com/f/1005200/7211x4810/bca2dd7c52/20220217_the_faces_of_ruth_asawa_n6a0428_cmyk.jpg', '1000x1000')}
                    className="object-cover w-full h-full"
                    alt=""
                  />
                </div>
                <Text variant="caption" color="white" className="mt-03em shrink-0 max-w-prose-wide">
                  The O’Donohue Family Stanford Educational Farm is Stanford’s living laboratory for
                  sustainable agriculture.Through workshops, wellness courses, and volunteer opportunities students
                  and members of the general public can come together to get hands-on experience in sustainable
                  small-scale and urban agriculture.
                </Text>
              </figure>
              <div className="mt-40 3xl:mt-60 text-white rs-pr-5 shrink-0 lg:col-span-6 2xl:col-span-7 4xl:col-span-6">
                <Heading as="h3" leading="tight" size="f5" className="rs-mb-3">
                  Where art and community come together
                </Heading>
                <Grid xxl={2} gap="default" alignItems="start">
                  <div>
                    <Paragraph variant="card" weight="bold" leading="snug">
                      Artists of Asian descent have created work as varied and rich as their lives and histories
                      – yet their contributions have remained in the shadows of American art.
                      The Asian American art initiative is helping elevate their vital work
                      to its rightful place in American art.
                    </Paragraph>
                    <Paragraph noMargin leading="snug" variant="card">
                      Thanks in part to a Humanities Seed Grant, the AAAI is making targeted acquisitions,
                      providing meaningful opportunities for engagement, and bringing works of art to life for
                      new audiences. As a result, the Cantor Arts Center now houses one of the country’s
                      biggest collections of Asian American art.
                    </Paragraph>
                  </div>
                  <div>
                    <Paragraph leading="snug" variant="card">
                      Through scholarship, accessibility, and outreach, the AAAI encourages audiences to navigate the
                      complexity of the term “Asian American” itself. In a time fraught with racism, discrimination,
                      and xenophobia, art that sheds light on these struggles is edifying and essential,
                      providing us with a common experience through which discussion and understanding flourish
                      between all members of society truly thriving and barely surviving.
                    </Paragraph>
                  </div>
                </Grid>
              </div>
            </Grid>
            <CtaButton
              onClick={() => handleButtonClick(3)}
              disabled={isCurrent !== 2}
              icon="arrow-right"
              variant="brochure"
              color="white"
              className="rs-mt-3 xl:!absolute bottom-60 right-70"
            >
              Next
            </CtaButton>
          </m.div>
          {/* Stack 2 - slide 3 */}
          <m.div
            className="h-full relative bg-poppy rs-px-6 rs-pt-6 rs-pb-3 bg-no-repeat text-white bg-cover bg-bottom -mt-1000"
            style={{
              backgroundImage: `url('${getProcessedImage('https://a-us.storyblok.com/f/1005200/5257x3474/ce5b07b9df/jeremy-thomas-4dpaqftbvka-unsplash.jpg', '2000x1000')}')`,
            }}
            aria-hidden={isCurrent !== 3}
            initial={{ x: 0 }}
            animate={{ x: isCurrent === 3 ? '-100%' : 0 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
          >
            <Text size={2} color="white" font="serif" weight="bold">
              Room to discover
            </Text>
            <Text size={2} color="white" font="serif" weight="bold">
              freedom to explore
            </Text>
            <CtaButton
              disabled={isCurrent !== 3}
              onClick={() => handleButtonClick(false)}
              icon="close"
              variant="brochure"
              color="white"
              className="rs-mt-3 xl:!absolute bottom-100 right-150"
            >
              Close
            </CtaButton>
          </m.div>
        </div>
      </Grid>
    </article>
  );
};
