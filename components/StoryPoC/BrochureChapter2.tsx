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

  const handleButtonClick = (i: number) => {
    setIsCurrent(i);
  };

  return (
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
        <div className="mt-40 2xl:mt-60 3xl:mt-90 text-gc-black lg:w-1/2 rs-pr-5 shrink-0">
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
      <CtaButton icon="arrow-right" variant="brochure" color="black" className="rs-mt-3 xl:!absolute bottom-60 right-70">
        Continue reading
      </CtaButton>
  </article>
  );
};
