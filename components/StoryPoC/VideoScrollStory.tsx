import { useRef } from 'react';
import { useScroll, m, useTransform } from 'framer-motion';
import { AnimateInView } from '../Animate';
import { Container } from '../Container';
import { Heading, Paragraph, Text } from '../Typography';
import { colorNameToHex } from '@/utilities/colorPalettePlugin';

export const VideoScrollStory = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
  });
  const robinsEgg = colorNameToHex['robins-egg'];
  const lime = colorNameToHex.lime;
  const lavender = colorNameToHex.lavender;
  const fuchsia = colorNameToHex.fuchsia;
  const plumLight = colorNameToHex['plum-light'];
  const colorChange = useTransform(scrollYProgress, [0, 0.33, 0.67, 1], [robinsEgg, lime, lavender, plumLight]);

  return (
    <Container width="full" className="relative" bgColor="black">
      <div className="sticky top-0 h-screen w-full">
        <video
          playsInline
          autoPlay
          preload="auto"
          muted
          loop
          aria-label="Background Video"
          className="block w-full h-full object-cover"
        >
          <source src={'https://a-us.storyblok.com/f/1005200/x/80ddd8341f/starloop.webm'} type="video/webm" />
          <source src={'https://a-us.storyblok.com/f/1005200/x/1a881ffc0a/starloop.mp4'} type="video/mp4" />
          <p>Your browser does not support HTML video.</p>
        </video>
        <m.div
          style={{ backgroundColor: colorChange }}
          className="absolute top-0 r-0 w-full h-full mix-blend-overlay"
        />
        <div className="absolute top-0 r-0 w-full h-full bg-gc-black mix-blend-soft-light" />
      </div>
      <div ref={contentRef} className="relative w-2/3 lg:w-1/3 mx-auto text-white z-10 rs-py-10 -mt-[80vh]">
        <section>
          <AnimateInView animation="fadeIn" duration={0.6} className="lg:w-[200%] lg:-ml-[50%] mb-500">
            <Heading
              leading="tight"
              align="center"
              font="serif"
              weight="semibold"
              size={6}
              className="mb-02em max-w-1200"
            >
              Heading lorem ipsum universe
            </Heading>
            <Text align="center" size={1}>by Laurey Tickle Cartman</Text>
          </AnimateInView>
          <Paragraph font="serif" className="text-white font-semibold text-shadow-lg text-30">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
            Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
          <Paragraph font="serif" className="text-white font-semibold text-shadow-lg text-30 mt-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
          </Paragraph>
          <Paragraph font="serif" className="text-white font-semibold text-shadow-lg text-30 mt-500">
            Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
          <Paragraph font="serif" className="text-white font-semibold text-shadow-lg text-30 mt-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
            Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
          <Paragraph font="serif" className="text-white font-semibold text-shadow-lg text-30 mt-500">
            Aliquam erat volutpat. Morbi posuere, elit vel faucibus mattis, orci nisl suscipit justo,
            vel maximus ante libero eget nibh. Maecenas non arcu a sapien maximus commodo.
            Aenean nec molestie leo. Aenean suscipit purus eget est dictum, vel tristique lectus fermentum.
            Curabitur imperdiet finibus volutpat.
          </Paragraph>
          <Paragraph font="serif" className="text-white font-semibold text-shadow-lg text-30 mt-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
            Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
          <Paragraph font="serif" className="text-white font-semibold text-shadow-lg text-30 mt-500">
            Aliquam erat volutpat. Morbi posuere, elit vel faucibus mattis, orci nisl suscipit justo,
            vel maximus ante libero eget nibh. Maecenas non arcu a sapien maximus commodo.
            Aenean nec molestie leo. Aenean suscipit purus eget est dictum, vel tristique lectus fermentum.
            Curabitur imperdiet finibus volutpat.
          </Paragraph>
          <Paragraph font="serif" className="text-white font-semibold text-shadow-lg text-30 mt-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
            Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
          <Paragraph font="serif" className="text-white font-semibold text-shadow-lg text-30 mt-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
          </Paragraph>
          <Paragraph font="serif" className="text-white font-semibold text-shadow-lg text-30 mt-500">
            Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
          <Paragraph font="serif" className="text-white font-semibold text-shadow-lg text-30 mt-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
            Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
          <Paragraph font="serif" className="text-white font-semibold text-shadow-lg text-30 mt-500">
            Aliquam erat volutpat. Morbi posuere, elit vel faucibus mattis, orci nisl suscipit justo,
            vel maximus ante libero eget nibh. Maecenas non arcu a sapien maximus commodo.
            Aenean nec molestie leo. Aenean suscipit purus eget est dictum, vel tristique lectus fermentum.
            Curabitur imperdiet finibus volutpat.
          </Paragraph>
          <Paragraph font="serif" className="text-white font-semibold text-shadow-lg text-30 mt-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget pulvinar ipsum, ut sodales odio.
            Cras dui ipsum, aliquet eget nibh ut, sollicitudin pharetra risus.
          </Paragraph>
          <Paragraph font="serif" className="text-white font-semibold text-shadow-lg text-30 mt-500">
            Aliquam erat volutpat. Morbi posuere, elit vel faucibus mattis, orci nisl suscipit justo,
            vel maximus ante libero eget nibh. Maecenas non arcu a sapien maximus commodo.
            Aenean nec molestie leo. Aenean suscipit purus eget est dictum, vel tristique lectus fermentum.
            Curabitur imperdiet finibus volutpat.
          </Paragraph>
        </section>
      </div>
    </Container>
  );
};
