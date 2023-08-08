import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { cnb } from 'cnbuilder';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Grid } from '../Grid';
import { Heading, Paragraph } from '../Typography';

export const ScrollyTelling = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section2AtTop = useInView(section1Ref);
  const section3AtTop = useInView(section2Ref);
  //const section3InView = useInView(section3Ref);

  return (
    <Container width="full">
      <Grid md={3} className="">
        <div className={cnb('sticky top-0 self-start h-screen col-span-2', section2AtTop ? 'bg-fog-light' : 'bg-fog', section3AtTop ? 'bg-fog-dark' : '')}>
          <FlexBox className="h-full" alignItems="stretch">
            <div className="relative bg-white border-r-black-70 border-r uppercase font-bold">
              <div className="text-vertical-lr -rotate-180">
                Chapter 1
              </div>
            </div>
            <Heading size={6}>
              {section2AtTop ? 'Section 1' : 'Section 2'}
            </Heading>
          </FlexBox>
        </div>
        <div className="relative bg-gc-black text-white rs-py-6 rs-px-4">
          <section ref={section1Ref}>
            <Heading font="serif">Heading 1</Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
              Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
            </Paragraph>
            <Paragraph>
              Aliquam erat volutpat. Morbi posuere, elit vel faucibus mattis, orci nisl suscipit justo,
              vel maximus ante libero eget nibh. Maecenas non arcu a sapien maximus commodo.
              Aenean nec molestie leo. Aenean suscipit purus eget est dictum, vel tristique lectus fermentum.
              Curabitur imperdiet finibus volutpat.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
              Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
            </Paragraph>
            <Paragraph>
              Aliquam erat volutpat. Morbi posuere, elit vel faucibus mattis, orci nisl suscipit justo,
              vel maximus ante libero eget nibh. Maecenas non arcu a sapien maximus commodo.
              Aenean nec molestie leo. Aenean suscipit purus eget est dictum, vel tristique lectus fermentum.
              Curabitur imperdiet finibus volutpat.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
              Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
            </Paragraph>
            <Paragraph>
              Aliquam erat volutpat. Morbi posuere, elit vel faucibus mattis, orci nisl suscipit justo,
              vel maximus ante libero eget nibh. Maecenas non arcu a sapien maximus commodo.
              Aenean nec molestie leo. Aenean suscipit purus eget est dictum, vel tristique lectus fermentum.
              Curabitur imperdiet finibus volutpat.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
              Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
            </Paragraph>
            <Paragraph>
              Aliquam erat volutpat. Morbi posuere, elit vel faucibus mattis, orci nisl suscipit justo,
              vel maximus ante libero eget nibh. Maecenas non arcu a sapien maximus commodo.
              Aenean nec molestie leo. Aenean suscipit purus eget est dictum, vel tristique lectus fermentum.
              Curabitur imperdiet finibus volutpat.
            </Paragraph>
          </section>
          <section ref={section2Ref}>
            <Heading font="serif" size={3}>Heading 2</Heading>
            <Paragraph>
              Aliquam erat volutpat. Morbi posuere, elit vel faucibus mattis, orci nisl suscipit justo,
              vel maximus ante libero eget nibh. Maecenas non arcu a sapien maximus commodo.
              Aenean nec molestie leo. Aenean suscipit purus eget est dictum, vel tristique lectus fermentum.
              Curabitur imperdiet finibus volutpat.
            </Paragraph>
            <Paragraph>
              Aliquam erat volutpat. Morbi posuere, elit vel faucibus mattis, orci nisl suscipit justo,
              vel maximus ante libero eget nibh. Maecenas non arcu a sapien maximus commodo.
              Aenean nec molestie leo. Aenean suscipit purus eget est dictum, vel tristique lectus fermentum.
              Curabitur imperdiet finibus volutpat.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
              Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
            </Paragraph>
            <Paragraph>
              Aliquam erat volutpat. Morbi posuere, elit vel faucibus mattis, orci nisl suscipit justo,
              vel maximus ante libero eget nibh. Maecenas non arcu a sapien maximus commodo.
              Aenean nec molestie leo. Aenean suscipit purus eget est dictum, vel tristique lectus fermentum.
              Curabitur imperdiet finibus volutpat.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
              Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
            </Paragraph>
            <Paragraph>
              Aliquam erat volutpat. Morbi posuere, elit vel faucibus mattis, orci nisl suscipit justo,
              vel maximus ante libero eget nibh. Maecenas non arcu a sapien maximus commodo.
              Aenean nec molestie leo. Aenean suscipit purus eget est dictum, vel tristique lectus fermentum.
              Curabitur imperdiet finibus volutpat.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
              Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
            </Paragraph>
            <Paragraph>
              Aliquam erat volutpat. Morbi posuere, elit vel faucibus mattis, orci nisl suscipit justo,
              vel maximus ante libero eget nibh. Maecenas non arcu a sapien maximus commodo.
              Aenean nec molestie leo. Aenean suscipit purus eget est dictum, vel tristique lectus fermentum.
              Curabitur imperdiet finibus volutpat.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
              Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
            </Paragraph>
          </section>
          <Heading font="serif" size={3}>Heading 3</Heading>
          <Paragraph>
            Aliquam erat volutpat. Morbi posuere, elit vel faucibus mattis, orci nisl suscipit justo,
            vel maximus ante libero eget nibh. Maecenas non arcu a sapien maximus commodo.
            Aenean nec molestie leo. Aenean suscipit purus eget est dictum, vel tristique lectus fermentum.
            Curabitur imperdiet finibus volutpat.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
            Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
          <Paragraph>
            Aliquam erat volutpat. Morbi posuere, elit vel faucibus mattis, orci nisl suscipit justo,
            vel maximus ante libero eget nibh. Maecenas non arcu a sapien maximus commodo.
            Aenean nec molestie leo. Aenean suscipit purus eget est dictum, vel tristique lectus fermentum.
            Curabitur imperdiet finibus volutpat.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
            Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
          <Paragraph>
            Aliquam erat volutpat. Morbi posuere, elit vel faucibus mattis, orci nisl suscipit justo,
            vel maximus ante libero eget nibh. Maecenas non arcu a sapien maximus commodo.
            Aenean nec molestie leo. Aenean suscipit purus eget est dictum, vel tristique lectus fermentum.
            Curabitur imperdiet finibus volutpat.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
            Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
        </div>
      </Grid>
      <Grid md={3} className="">
        <div className="sticky top-0 bg-illuminating-light self-start h-screen col-span-2">
          <FlexBox className="h-full" alignItems="stretch">
            <div className="bg-white border-r-black-70 border-r uppercase font-bold rs-py-10">
              <div className="text-vertical-lr -rotate-180">
                Chapter 2
              </div>
            </div>
            <div>
              testtesttest
            </div>
          </FlexBox>
        </div>
        <div className="relative bg-gc-white text-gc-black rs-py-6 rs-px-4">
        <Heading font="serif">Heading 1</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
            Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
          <Paragraph>
            Aliquam erat volutpat. Morbi posuere, elit vel faucibus mattis, orci nisl suscipit justo,
            vel maximus ante libero eget nibh. Maecenas non arcu a sapien maximus commodo.
            Aenean nec molestie leo. Aenean suscipit purus eget est dictum, vel tristique lectus fermentum.
            Curabitur imperdiet finibus volutpat.
          </Paragraph>
          <Heading font="serif" size={3}>Heading 2</Heading>
          <Paragraph>
            Aliquam erat volutpat. Morbi posuere, elit vel faucibus mattis, orci nisl suscipit justo,
            vel maximus ante libero eget nibh. Maecenas non arcu a sapien maximus commodo.
            Aenean nec molestie leo. Aenean suscipit purus eget est dictum, vel tristique lectus fermentum.
            Curabitur imperdiet finibus volutpat.
          </Paragraph>
          <Paragraph>
            Aliquam erat volutpat. Morbi posuere, elit vel faucibus mattis, orci nisl suscipit justo,
            vel maximus ante libero eget nibh. Maecenas non arcu a sapien maximus commodo.
            Aenean nec molestie leo. Aenean suscipit purus eget est dictum, vel tristique lectus fermentum.
            Curabitur imperdiet finibus volutpat.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
            Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
          <Paragraph>
            Aliquam erat volutpat. Morbi posuere, elit vel faucibus mattis, orci nisl suscipit justo,
            vel maximus ante libero eget nibh. Maecenas non arcu a sapien maximus commodo.
            Aenean nec molestie leo. Aenean suscipit purus eget est dictum, vel tristique lectus fermentum.
            Curabitur imperdiet finibus volutpat.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
            Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
          <Paragraph>
            Aliquam erat volutpat. Morbi posuere, elit vel faucibus mattis, orci nisl suscipit justo,
            vel maximus ante libero eget nibh. Maecenas non arcu a sapien maximus commodo.
            Aenean nec molestie leo. Aenean suscipit purus eget est dictum, vel tristique lectus fermentum.
            Curabitur imperdiet finibus volutpat.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
            Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
          <Paragraph>
            Aliquam erat volutpat. Morbi posuere, elit vel faucibus mattis, orci nisl suscipit justo,
            vel maximus ante libero eget nibh. Maecenas non arcu a sapien maximus commodo.
            Aenean nec molestie leo. Aenean suscipit purus eget est dictum, vel tristique lectus fermentum.
            Curabitur imperdiet finibus volutpat.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
            Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
          <Heading font="serif" size={3}>Heading 3</Heading>
          <Paragraph>
            Aliquam erat volutpat. Morbi posuere, elit vel faucibus mattis, orci nisl suscipit justo,
            vel maximus ante libero eget nibh. Maecenas non arcu a sapien maximus commodo.
            Aenean nec molestie leo. Aenean suscipit purus eget est dictum, vel tristique lectus fermentum.
            Curabitur imperdiet finibus volutpat.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
            Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
          <Paragraph>
            Aliquam erat volutpat. Morbi posuere, elit vel faucibus mattis, orci nisl suscipit justo,
            vel maximus ante libero eget nibh. Maecenas non arcu a sapien maximus commodo.
            Aenean nec molestie leo. Aenean suscipit purus eget est dictum, vel tristique lectus fermentum.
            Curabitur imperdiet finibus volutpat.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
            Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
          <Paragraph>
            Aliquam erat volutpat. Morbi posuere, elit vel faucibus mattis, orci nisl suscipit justo,
            vel maximus ante libero eget nibh. Maecenas non arcu a sapien maximus commodo.
            Aenean nec molestie leo. Aenean suscipit purus eget est dictum, vel tristique lectus fermentum.
            Curabitur imperdiet finibus volutpat.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
            Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
        </div>
      </Grid>
    </Container>
  );
};
