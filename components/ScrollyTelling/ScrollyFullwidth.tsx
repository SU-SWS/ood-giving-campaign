import { useRef } from 'react';
import {
  useInView, useScroll, m, useTransform,
} from 'framer-motion';
import { cnb } from 'cnbuilder';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Grid } from '../Grid';
import { Heading, Paragraph, Text } from '../Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { getMaskedAsset } from '@/utilities/getMaskedAsset';
import { Paragraphs } from '../Temporary/Paragraphs';

export const ScrollyFullwidth = () => {
  return (
    <Container width="full" className="relative rs-p-0" bgColor="black">
      <div className="sticky top-0 h-screen w-full">
        <m.img
          loading="eager"
          src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2499x1667/53d21f92bf/farm_1208.jpg', '3000x0')}
          className="relative object-cover w-full h-full object-left"
          alt=""
        />
      </div>
      <div className="relative w-1/3 mx-auto text-white z-10 rs-py-10">
        <section>
          <Paragraph className="bg-black/80 rs-p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
            Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
          <Paragraph className="bg-black/80 rs-p-2 mt-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
          </Paragraph>
          <Paragraph className="bg-black/80 rs-p-2 mt-300">
          Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
        </section>
        <section>
          <Paragraph className="bg-white/90 text-gc-black rs-p-2 rs-mt-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
            Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
          <Paragraph className="bg-white/90 text-gc-black rs-p-2 rs-mt-9">
            Aliquam erat volutpat. Morbi posuere, elit vel faucibus mattis, orci nisl suscipit justo,
            vel maximus ante libero eget nibh. Maecenas non arcu a sapien maximus commodo.
            Aenean nec molestie leo. Aenean suscipit purus eget est dictum, vel tristique lectus fermentum.
            Curabitur imperdiet finibus volutpat.
          </Paragraph>
          <Paragraph className="bg-white/90 text-gc-black rs-p-2 rs-mt-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
            Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
          <Paragraph className="bg-white/90 text-gc-black rs-p-2 rs-mt-9">
            Aliquam erat volutpat. Morbi posuere, elit vel faucibus mattis, orci nisl suscipit justo,
            vel maximus ante libero eget nibh. Maecenas non arcu a sapien maximus commodo.
            Aenean nec molestie leo. Aenean suscipit purus eget est dictum, vel tristique lectus fermentum.
            Curabitur imperdiet finibus volutpat.
          </Paragraph>
        </section>
      </div>
      <div className="relative w-1/3 ml-auto rs-mr-4 text-white z-10 rs-py-10">
        <section>
          <Paragraph className="bg-black/80 rs-p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
            Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
            Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
          <Paragraph className="bg-black/80 rs-p-2 mt-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
          </Paragraph>
          <Paragraph className="bg-black/80 rs-p-2 mt-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
            Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
          <Paragraph className="bg-black/80 rs-p-2 mt-300">
          Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
        </section>
      </div>
    </Container>
  );
};
