import { useRef } from 'react';
import { useInView, useScroll } from 'framer-motion';
import { cnb } from 'cnbuilder';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Grid } from '../Grid';
import { Heading, Paragraph } from '../Typography';

export const ScrollyTelling = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section1InView = useInView(section1Ref);
  const section2InView = useInView(section2Ref);
  const section3InView = useInView(section3Ref);
  const section2AtTop = !section1InView && section2InView;
  const section3AtTop = !section2InView && section3InView;

  const Paragraphs = (
    <>
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
    </>
  );

  return (
    <Container width="full">
      <Grid md={3} className="">
        <div className={cnb(
          'sticky top-0 self-start h-screen col-span-2 transition-colors bg-gradient-to-b',
          section1InView ? 'from-illuminating-light to-sky' : '',
          section2AtTop ? 'from-sky-light to-plum/80' : '',
          section3AtTop ? 'from-sky-dark to-plum-dark' : '',
          )}>
          <FlexBox className="h-full" alignItems="stretch">
            <div className="relative bg-white border-r-black-70 border-r uppercase font-bold rs-pt-10">
              <div className="text-vertical-lr -rotate-180">
                Chapter 1
              </div>
            </div>
            <Heading size={7} color="white" align="center" className="self-center mx-auto">
              {section1InView ? 'Section 1' : ''}
              {section2AtTop ? 'Section 2' : ''}
              {section3AtTop ? 'Section 3' : ''}
            </Heading>
          </FlexBox>
        </div>
        <div className="relative bg-white text-gc-black rs-py-6 rs-px-4">
          <section ref={section1Ref} className="rs-mt-6">
            <Heading font="serif">Heading 1</Heading>
            {Paragraphs}
          </section>
          <section ref={section2Ref} className="rs-mt-6">
            <Heading font="serif" size={3}>Heading 2</Heading>
            {Paragraphs}
          </section>
          <section ref={section3Ref} className="rs-mt-6">
            <Heading font="serif" size={3}>Heading 3</Heading>
            {Paragraphs}
          </section>
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
        <div className="relative bg-gc-black text-white rs-py-6 rs-px-4">
          <Heading font="serif">Heading 1</Heading>
          {Paragraphs}
          <Heading font="serif" size={3}>Heading 2</Heading>
          {Paragraphs}
          <Heading font="serif" size={3}>Heading 3</Heading>
          {Paragraphs}
        </div>
      </Grid>
    </Container>
  );
};
