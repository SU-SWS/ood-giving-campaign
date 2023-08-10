import { useRef } from 'react';
import {
  useInView, useScroll, m, useTransform,
} from 'framer-motion';
import { cnb } from 'cnbuilder';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { Heading, Paragraph, Text } from '../Typography';
import { ImageOverlay } from '../ImageOverlay';
import { getProcessedImage } from '@/utilities/getProcessedImage';

export const ScrollyFullwidth = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ['start center', 'end start'],
  });
  const animateOpacity = useTransform(scrollYProgress, [0, 0.4], ['20%', '100%']);
  const animateScale = useTransform(scrollYProgress, [0, 0.2], [0.5, 1]);
  const cat1contentRef = useRef<HTMLDivElement>(null);
  const cat2contentRef = useRef<HTMLDivElement>(null);
  const cat1contentInView = useInView(cat1contentRef);
  const cat2contentInView = useInView(cat2contentRef);

  return (
    <div>
      <Container width="full" className="relative rs-p-0" bgColor="black">
        <div className="sticky top-0 h-screen w-full">
          <m.img
            loading="eager"
            src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2499x1667/53d21f92bf/farm_1208.jpg', '2000x0')}
            className="relative object-cover w-full h-full"
            style={{ opacity: animateOpacity, scale: animateScale }}
            alt="Something alt"
          />
        </div>
        <div ref={contentRef} className="relative w-2/3 lg:w-1/3 mx-auto text-white z-10 rs-py-10">
          <section>
            <div className="w-[200%] -ml-[50%] mb-500">
              <Heading
                leading="tight"
                align="center"
                font="serif"
                weight="semibold"
                size={6}
                className="mb-02em"
              >
                Heading lorem ipsum
              </Heading>
              <Text align="center" size={2}>Subheading lorem ipsum</Text>
            </div>
            <Paragraph className="bg-white/90 text-gc-black rs-p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
              Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
            </Paragraph>
            <Paragraph className="bg-white/90 text-gc-black rs-p-2 mt-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
            </Paragraph>
            <Paragraph className="bg-white/90 text-gc-black rs-p-2 mt-300">
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
        <div className="relative w-2/3 lg:w-1/3 ml-auto rs-mr-4 text-white z-10 rs-py-10">
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
      <Container
        width="full"
        className="relative rs-p-0"
        bgColor="black"
      >
        <div className="sticky top-0 h-screen">
          <ImageOverlay
            imageSrc={getProcessedImage('https://a-us.storyblok.com/f/1005200/1600x877/cd50ad8b98/pia23444-1600.jpg', '2000x1200')}
            overlay="black-70"
          />
          <Grid sm={2} gap="split" alignItems="center" className="w-3/4 mx-auto h-screen">
          <div className={cnb('relative z-20 transition-all', cat2contentInView ? 'opacity-30 blur-sm' : 'opacity-100 blur-none')}>
              <div className="rs-mb-0">
                <Text font="serif" size={1} weight="semibold" align="center">
                  Meowy Meowington
                </Text>
                <Text variant="card" align="center">Director of Lorem Ipsum</Text>
              </div>
              <div className="overflow-hidden">
                <m.img
                  loading="eager"
                  src={getProcessedImage('https://a-us.storyblok.com/f/1005200/880x631/e324c6d0dd/pallas-cat-manul-20__880.jpg', '1000x1000')}
                  className={cnb('relative object-cover transition-transform border border-white/40', cat2contentInView ? 'scale-90' : 'scale-100')}
                  alt="Cat 1"
                />
              </div>
            </div>
            <div className={cnb('relative z-20 transition-all', cat1contentInView ? 'opacity-30 blur-sm' : 'opacity-100 blur-none')}>
              <div className="rs-mb-0">
                <Text font="serif" size={1} weight="semibold" align="center">
                  Purrfecto Meowstein
                </Text>
                <Text variant="card" align="center">Lorem Manager</Text>
              </div>
              <div className="overflow-hidden">
                <m.img
                  loading="eager"
                  src={getProcessedImage('https://a-us.storyblok.com/f/1005200/755x734/3550def7e3/pallas-cat-manul-6.jpg', '1000x1000')}
                  className={cnb('relative object-cover transition-transform border border-white/40', cat1contentInView ? 'scale-90' : 'scale-100')}
                  alt="Cat 2"
                />
              </div>
            </div>
          </Grid>
        </div>
        <div ref={cat1contentRef} className="relative w-2/3 lg:w-1/3 text-gc-black z-10 ml-auto mr-200 mt-500">
          <section>
            <Paragraph className="bg-white rs-p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
              Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.<br /><br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
              Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
            </Paragraph>
            <Paragraph className="bg-white rs-p-2 rs-mt-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
            </Paragraph>
            <Paragraph className="bg-white rs-p-2 rs-mt-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
              Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.<br /><br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
              Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
            </Paragraph>
            <Text as="blockquote" leading="snug" size={2} weight="semibold" font="serif" color="white" className="rs-mt-9">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
              Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.”
            </Text>
            <Text color="white" weight="semibold" align="right" className="rs-mt-1">- Meowy Meowington</Text>
            <Paragraph className="bg-white rs-p-2 rs-mt-9">
              Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
            </Paragraph>
            <Paragraph className="bg-white rs-p-2 rs-mt-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
              Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.<br /><br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
              Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.<br /><br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Paragraph>
          </section>
        </div>
        <div ref={cat2contentRef} className="relative w-2/3 lg:w-1/3 text-gc-black z-10 mr-auto ml-200 mt-[100vh] rs-mb-10">
          <section>
            <Paragraph className="bg-white rs-p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
              Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.<br /><br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
              Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
            </Paragraph>
            <Paragraph className="bg-white rs-p-2 rs-mt-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
            </Paragraph>
            <Paragraph className="bg-white rs-p-2 rs-mt-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
              Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.<br /><br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
              Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
            </Paragraph>
            <Text as="blockquote" size={2} weight="bold" font="serif" color="white" className="rs-mt-9">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
              Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.”
            </Text>
            <Text color="white" weight="semibold" align="right" className="rs-mt-1">- Purrfecto Meowstein</Text>
            <Paragraph className="bg-white rs-p-2 rs-mt-9">
              Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
            </Paragraph>
            <Paragraph className="bg-white rs-p-2 rs-mt-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
              Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.<br /><br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
              Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.<br /><br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Paragraph>
          </section>
        </div>
      </Container>
    </div>
  );
};
