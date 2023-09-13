import { useRef } from 'react';
import {
  useInView, useScroll, m, useTransform,
} from 'framer-motion';
import { cnb } from 'cnbuilder';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Grid } from '../Grid';
import { Heading, Paragraph, Text } from '../Typography';
import { Paragraphs } from '../Temporary/Paragraphs';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { getMaskedAsset } from '@/utilities/getMaskedAsset';

export const ScrollyDataViz = () => {
  // Chapter 1
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section1InView = useInView(section1Ref);
  const section2InView = useInView(section2Ref);
  const section2AtTop = !section1InView && section2InView;

  return (
    <Container width="full">
      <Grid md={3} className="border-t border-black-20">
        <div className={cnb(
          'sticky top-0 self-start h-screen col-span-2 bg-gradient-to-t from-poppy/70 to-illuminating',
          section1InView ? '' : '',
          section2AtTop ? '' : '',
          )}>
          <FlexBox className="h-full" alignItems="center">
            <div className="relative bg-white border-black-50 border-r uppercase font-bold">
              <Text align="center" font="druk-wide" leading="normal" className="text-vertical-lr -rotate-180 h-screen">
                Chapter 4s
              </Text>
            </div>
            <div className="w-4/5 mx-auto">
              <Heading font="serif" size={3} align="center" className="rs-mb-4">
                Number of UFO sightings in <span className="text-fuchsia">{section2AtTop ? '2023' : '2022'}</span>
              </Heading>
              <Grid xs={6} alignItems="end" className="gap-x-20 lg:gap-x-50 relative h-600">
                {/* Bars */}
                <div className={cnb('w-full transition-all duration-1000 bg-gradient-to-t from-spirited to-poppy', section2AtTop ? 'h-[80%]' : 'h-[40%]')}>
                  <Text size={3} align="center" weight="bold" color="white" className="rs-mt-0">{section2AtTop ? '80' : '40'}</Text>
                </div>
                <div className={cnb('w-full transition-all duration-1000 bg-gradient-to-t from-spirited to-poppy', section2AtTop ? 'h-[20%]' : 'h-[100%]')}>
                  <Text size={3} align="center" weight="bold" color="white" className="rs-mt-0">{section2AtTop ? '20' : '100'}</Text>
                </div>
                <div className={cnb('w-full transition-all duration-1000 bg-gradient-to-t from-spirited to-poppy', section2AtTop ? 'h-[100%]' : 'h-[60%]')}>
                  <Text size={3} align="center" weight="bold" color="white" className="rs-mt-0">{section2AtTop ? '100' : '60'}</Text>
                </div>
                <div className={cnb('w-full transition-all duration-1000 bg-gradient-to-t from-spirited to-poppy', section2AtTop ? 'h-[70%]' : 'h-[30%]')}>
                  <Text size={3} align="center" weight="bold" color="white" className="rs-mt-0">{section2AtTop ? '70' : '30'}</Text>
                </div>
                <div className={cnb('w-full transition-all duration-1000 bg-gradient-to-t from-spirited to-poppy', section2AtTop ? 'h-[30%]' : 'h-[70%]')}>
                  <Text size={3} align="center" weight="bold" color="white" className="rs-mt-0">{section2AtTop ? '30' : '70'}</Text>
                </div>
                <div className={cnb('w-full transition-all duration-1000 bg-gradient-to-t from-spirited to-poppy', section2AtTop ? 'h-[60%]' : 'h-[20%]')}>
                  <Text size={3} align="center" weight="bold" color="white" className="rs-mt-0">{section2AtTop ? '60' : '20'}</Text>
                </div>
              </Grid>
              <Grid xs={6} alignItems="end" className="gap-x-20 lg:gap-x-50 relative text-black-90 mt-6">
                {/* numbers */}
                <Text size={1} align="center" weight="bold" className="">USA</Text>
                <Text size={1} align="center" weight="bold" className="">Japan</Text>
                <Text size={1} align="center" weight="bold" className="">Ethiopia</Text>
                <Text size={1} align="center" weight="bold" className="">Canada</Text>
                <Text size={1} align="center" weight="bold" className="">France</Text>
                <Text size={1} align="center" weight="bold" className="">Australia</Text>
              </Grid>
            </div>
          </FlexBox>
        </div>
        <div className="relative bg-fog-light text-gc-black rs-py-6 rs-px-4">
          <section ref={section1Ref}>
            <Heading font="serif">Heading 1</Heading>
            <Paragraphs />
          </section>
          <section ref={section2Ref} className="rs-mt-6">
            <Heading font="serif" size={3}>Heading 2</Heading>
            <Paragraphs />
            <Paragraphs />
          </section>
        </div>
      </Grid>
    </Container>
  );
};
