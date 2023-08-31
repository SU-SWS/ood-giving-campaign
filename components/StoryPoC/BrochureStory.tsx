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

export const BrochureStory = () => {
  const bgImage = getProcessedImage('https://a-us.storyblok.com/f/1005200/3089x2048/aee2ea28c6/21664-18-0021_cmyk.jpg', '2000x0');

  return (
    <Container
      width="full"
      className="relative bg-fixed bg-no-repeat bg-top bg-cover py-300"
      bgColor="black"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <Container>
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
      <article className="bg-white mx-25 rs-px-1 rs-py-1 rs-mt-10 lg:h-1000">
        <FlexBox alignItems="start" className="flex-col lg:flex-row">
          <div className="">
            <img
              src={getProcessedImage('https://a-us.storyblok.com/f/1005200/883x1040/d7d568e264/21664-15-0029_cmyk-1.jpg', '1000x1000')}
              className=""
              alt=""
            />
          </div>
          <div className="rs-mt-6 text-gc-black lg:w-2/3 xl:w-3/5 rs-px-6 shrink-0">
            <Text font="serif" size={2} className="rs-mb-0">Chapter 1.</Text>
            <Heading leading="tight" size={5} className="rs-mb-7">
              Preparing citizens and leaders
            </Heading>
            <Grid xl={2} gap="default" alignItems="start">
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
        </FlexBox>
      </article>
      <Text icon="arrow-down" font="serif" weight="bold" size={1} align="center" className="rs-mt-0">More sections</Text>
    </Container>
  );
};
