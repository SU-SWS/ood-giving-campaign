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

export const ScrollytellingDemo = () => {
  // Chapter 1
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section1InView = useInView(section1Ref);
  const section2InView = useInView(section2Ref);
  const section3InView = useInView(section3Ref);
  const section2AtTop = !section1InView && section2InView;
  const section3AtTop = !section2InView && section3InView;

  // Chapter 2
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);
  const section6Ref = useRef<HTMLDivElement>(null);
  const section4InView = useInView(section4Ref);
  const section5InView = useInView(section5Ref);
  const section6InView = useInView(section6Ref);
  const section5AtTop = !section4InView && section5InView;
  const section6AtTop = !section5InView && section6InView;
  const { scrollYProgress: section5Scroll } = useScroll({
    target: section5Ref,
    offset: ['start start', 'end start'],
  });
  const animateImage5Scale = useTransform(section5Scroll, [0, 0.5], [1, 1.7]);
  const animateImage5XPan = useTransform(section5Scroll, [0.4, 1], ['0', '300px']);
  const animateImage5YPan = useTransform(section5Scroll, [0.4, 1], ['0', '200px']);

  // Chapter 3
  const chapter3Ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: chapter3Ref,
  });
  const animatePusheenSize = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1.6, 1]);
  const animatePusheenX = useTransform(scrollYProgress, [0, 0.5, 1], ['0', '200px', '600px']);
  const animatePusheenY = useTransform(scrollYProgress, [0, 0.5, 1], ['0', '300px', '500px']);
  const animatePusheenRotate = useTransform(scrollYProgress, [0, 0.7], ['0', '360deg']);
  const animatedBgColor = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ['#ECC7CD', '#77C5D5', '#DBE442', '#C5B4E3']);

  return (
    <Container width="full">
      <Grid md={3} className="border-t border-black-50">
        <div className={cnb(
          'sticky top-0 self-start h-screen col-span-2 bg-gradient-to-b',
          section1InView ? 'from-illuminating-light via-poppy-light to-poppy' : '',
          section2AtTop ? 'from-palo-verde-light via-lagunita-light to-palo-alto-dark' : '',
          section3AtTop ? 'from-sky-light via-plum-light to-black' : '',
          )}>
          <FlexBox className="h-full" alignItems="stretch">
            <div className="relative bg-white border-black-50 border-r uppercase font-bold">
              <Text align="center" font="druk-wide" leading="normal" className="text-vertical-lr -rotate-180 h-screen">
                Chapter 1
              </Text>
            </div>
            <Heading size={7} color="white" align="center" className="self-center mx-auto mb-0">
              {section1InView ? 'Section 1' : ''}
              {section2AtTop ? 'Section 2' : ''}
              {section3AtTop ? 'Section 3' : ''}
            </Heading>
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
          </section>
          <section ref={section3Ref} className="rs-mt-6">
            <Heading font="serif" size={3}>Heading 3</Heading>
            <Paragraphs />
          </section>
        </div>
      </Grid>
      <Grid md={3} className="border-t border-black-50 -mt-1">
        <div className="sticky top-0 bg-black self-start h-screen col-span-2">
        <FlexBox className="h-full" alignItems="stretch">
          <div className="relative bg-white border-r-black-50 border-r uppercase font-bold">
            <Text align="center" font="druk-wide" leading="normal" className="text-vertical-lr -rotate-180 h-screen">
              Chapter 2
            </Text>
          </div>
          <div className="size-full">
            <figure className="relative h-full w-full overflow-hidden">
              {section4InView && (
                <>
                  <img
                    loading="eager"
                    src={getProcessedImage('https://a-us.storyblok.com/f/1005200/4240x4211/1319d3cf69/antennae_galaxies_reloaded.jpg', '2000x0')}
                    className="relative object-cover size-full"
                    alt=""
                  />
                  <figcaption
                    className="absolute bottom-100 left-50 w-5/12 bg-gc-black/70 text-white border border-white/60 rounded z-10 text-left text-17 leading-snug rs-p-0"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus eget pulvinar ipsum, ut sodales odio. Cras dui ipsum, aliquet eget nibh ut,
                    sollicitudin pharetra risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </figcaption>
                </>
              )}
              {section5AtTop && (
                <>
                  <m.img
                    loading="eager"
                    src={getProcessedImage('https://a-us.storyblok.com/f/1005200/3600x2085/f78572796c/main_image_star-forming_region_carina_nircam_final-5mb.jpg', '3000x0')}
                    className="relative object-cover size-full object-left"
                    alt=""
                    style={{ scale: animateImage5Scale, x: animateImage5XPan, y: animateImage5YPan }}
                  />
                  <figcaption
                    className="absolute bottom-100 right-50 w-5/12 bg-gc-black/70 text-white border border-white/60 rounded z-10 text-left text-17 leading-snug rs-p-0"
                  >
                    <Paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus eget pulvinar ipsum, ut sodales odio.
                    </Paragraph>
                    <Paragraph noMargin>
                      Phasellus eget pulvinar ipsum, ut sodales odio. Cras dui ipsum, aliquet eget nibh ut,
                      sollicitudin pharetra risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Paragraph>
                  </figcaption>
                </>
              )}
              {section6AtTop && (
                // eslint-disable-next-line max-len
                // <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ehFCaL2PUyo?autoplay=1&enablejsapi=1&rel=0&mute=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                <>
                  <video
                    playsInline
                    autoPlay
                    muted
                    loop
                    aria-label="video of milky way rotating"
                    className="block size-full object-cover"
                  >
                    <source src={getMaskedAsset('https://a-us.storyblok.com/f/1005200/x/80ddd8341f/starloop.webm')} type="video/webm" />
                    <source src={getMaskedAsset('https://a-us.storyblok.com/f/1005200/x/1a881ffc0a/starloop.mp4')} type="video/mp4" />
                    <p>Your browser does not support HTML video.</p>
                  </video>
                  <figcaption
                    className="absolute bottom-100 left-50 w-5/12 bg-gc-black/70 text-white border border-white/60 rounded z-10 text-left text-17 leading-snug rs-p-0"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus eget pulvinar ipsum, ut sodales odio. Cras dui ipsum, aliquet eget nibh ut,
                    sollicitudin pharetra risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </figcaption>
                </>
              )}
            </figure>
          </div>
        </FlexBox>
        </div>
        <div className="relative bg-gc-black text-white rs-py-6 rs-px-4">
          <section ref={section4Ref}>
            <Heading font="serif">Heading 4</Heading>
            <Paragraphs />
          </section>
          <section ref={section5Ref} className="rs-mt-6">
            <Heading font="serif" size={3}>Heading 5</Heading>
            <Paragraphs />
            <Paragraphs />
          </section>
          <section ref={section6Ref} className="rs-mt-6">
            <Heading font="serif" size={3}>Heading 6</Heading>
            <Paragraphs />
            <Paragraphs />
          </section>
        </div>
      </Grid>
      <Grid md={3} className="border-t border-black-50">
        <div className="sticky top-0 self-start h-screen col-span-2 bg-flamingo">
          <FlexBox className="h-full" alignItems="stretch">
            <div className="relative bg-white border-r-black-50 border-r uppercase font-bold">
              <Text align="center" font="druk-wide" leading="normal" className="text-vertical-lr -rotate-180 h-screen">
                Chapter 3
              </Text>
            </div>
            <m.div className="w-full" style={{ backgroundColor: animatedBgColor }}>
              <m.img
                src={getProcessedImage('https://a-us.storyblok.com/f/1005200/480x480/2d4d6fe8c5/27a3dc55f9db79268a344a545a9ccf73.gif')}
                alt="Pusheen walking animated"
                width={300}
                className="ml-100 mt-100"
                style={{
                  scale: animatePusheenSize, x: animatePusheenX, y: animatePusheenY, rotate: animatePusheenRotate,
                }}
              />
            </m.div>
          </FlexBox>
        </div>
        <div ref={chapter3Ref} className="relative bg-white text-gc-black rs-py-6 rs-px-4">
          <section>
            <Heading font="serif">Heading 7</Heading>
            <Paragraphs />
          </section>
          <section className="rs-mt-6">
            <Heading font="serif" size={3}>Heading 8</Heading>
            <Paragraphs />
          </section>
          <section className="rs-mt-6">
            <Heading font="serif" size={3}>Heading 9</Heading>
            <Paragraphs />
          </section>
        </div>
      </Grid>
    </Container>
  );
};
