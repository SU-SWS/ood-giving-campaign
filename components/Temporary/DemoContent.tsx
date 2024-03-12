import { Container } from '../Container';
import { CtaLink } from '../Cta';
import { Grid } from '../Grid';
import { Heading, Text } from '../Typography';
import { Parallax } from '../Parallax/Parallax';
import { NumberCounter } from '../NumberCounter';

export const DemoContent = () => (
  <div>
    <div className="h-400 lg:h-600 overflow-hidden relative">
      <Parallax>
        <div style={{ backgroundImage: 'url(https://www.space.com/images/i/000/082/219/original/VLT-Pano-MCloudsMilkyWay_6068-net.jpg?interpolation=lanczos-none&fit=around|1024:1024' }} className="-mt-100 h-800 flex items-center justify-center bg-center bg-cover" />
        <div className="absolute top-0 left-0 w-full h-full block bg-black-true/40" />
      </Parallax>
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-shadow-lg z-10 max-w-800">
        <Text leading="none" align="center" font="druk-wide" size={7} color="white" weight="bold" className="">To infinity and beyond</Text>
      </div>
    </div>
    <Container bgColor="black" py={9}>
      <Grid md={2} xl={3} xxl={4} gap="card" alignItems="center" justifyItems="center">
        <CtaLink href="/about-test" variant="ghost" color="white" icon="chevron-right" animate="right" curve="trbl">Ghost</CtaLink>
        <CtaLink href="/about-test" variant="ghost" color="white" icon="chevron-right" animate="right" size="large" curve="tr-large">Ghost</CtaLink>
        <CtaLink
          href="/about-test"
          variant="ghost-swipe"
          color="white"
          icon="arrow-right"
          curve="br"
        >
          Ghost swipe
        </CtaLink>
        <CtaLink
          href="/about-test"
          variant="ghost-swipe"
          color="white"
          icon="arrow-right"
          size="large"
          curve="tlbr-large"
        >
          Ghost swipe
        </CtaLink>
        <CtaLink
          href="/about-test"
          variant="solid"
          icon="arrow-right"
          animate="right"
          curve="tlbr"
        >
          Solid red
        </CtaLink>
        <CtaLink
          href="/about-test"
          variant="solid"
          icon="arrow-right"
          animate="right"
          size="large"
          curve="br-large"
        >
          Solid red
        </CtaLink>
      </Grid>
    </Container>
    <Container bgColor="white" py={9}>
      <Grid md={2} xl={3} xxl={4} gap="card" alignItems="center" justifyItems="center">
        <CtaLink href="/about-test" variant="ghost" icon="chevron-right" animate="right" color="black" curve="trbl">Ghost</CtaLink>
        <CtaLink href="/about-test" variant="ghost" icon="chevron-right" animate="right" color="black" curve="tr-large" size="large">Ghost</CtaLink>
        <CtaLink
          href="/about-test"
          variant="ghost-swipe"
          color="black"
          icon="chevron-right"
          animate="right"
          curve="br"
        >
          Ghost swipe
        </CtaLink>
        <CtaLink
          href="/about-test"
          variant="ghost-swipe"
          color="black"
          icon="chevron-right"
          animate="right"
          curve="br-large"
          size="large"
        >
          Ghost swipe
        </CtaLink>
        <CtaLink
          href="/about-test"
          variant="solid"
          icon="arrow-right"
          animate="right"
          curve="br"
        >
          Solid red
        </CtaLink>
        <CtaLink
          href="/about-test"
          variant="solid"
          icon="arrow-right"
          animate="right"
          curve="trbl-large"
          size="large"
        >
          Solid red
        </CtaLink>
      </Grid>
    </Container>
    <Container py={9} bgColor="black">
      <Heading size={7} font="sans">Animated counters</Heading>
      <Grid md={3} gap="card" alignItems="center" justifyItems="center">
        <NumberCounter number={42} />
        <NumberCounter number={9} />
        <NumberCounter number={120} />
      </Grid>
    </Container>
    <div className="h-400 lg:h-600 overflow-hidden relative">
      <Parallax>
        <div style={{ backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/0/00/Crab_Nebula.jpg' }} className="-mt-100 h-800 flex items-center justify-center bg-center bg-cover" />
        <div className="absolute top-0 left-0 w-full h-full block bg-black-true/40" />
      </Parallax>
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10">
        <CtaLink
          href="/about-test"
          variant="ghost-swipe"
          icon="arrow-right"
          className="!rs-px-5 !rs-py-2 rounded-br-[5rem] !text-20 md:!text-[4.6rem] !font-bold !text-white !bg-black-true/40 hocus:!bg-sapphire/80"
        >
          See our new initiative
        </CtaLink>
      </div>
    </div>
  </div>
);
