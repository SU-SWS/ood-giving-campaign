import { Container } from '../Container';
import { CtaLink } from '../Cta';
import { Grid } from '../Grid';
import { Heading, Text } from '../Typography';
import { Parallax } from '../Parallax/Parallax';
import { NumberCounter } from '../NumberCounter';

export const DemoContent = () => (
  <div>
    <div className="su-h-400 lg:su-h-600 su-overflow-hidden su-relative">
      <Parallax>
        <div style={{ backgroundImage: 'url(https://www.space.com/images/i/000/082/219/original/VLT-Pano-MCloudsMilkyWay_6068-net.jpg?interpolation=lanczos-none&fit=around|1024:1024' }} className="su--mt-100 su-h-800 su-flex su-items-center su-justify-center su-bg-center su-bg-cover" />
        <div className="su-absolute su-top-0 su-left-0 su-w-full su-h-full su-block su-bg-black-true/40" />
      </Parallax>
      <div className="su-absolute su-top-1/2 su-left-1/2 su-translate-x-[-50%] su-translate-y-[-50%] su-text-shadow-lg su-z-10 su-max-w-800">
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
        <NumberCounter number={9} afterText="K+" />
        <NumberCounter number={120} />
      </Grid>
    </Container>
    <div className="su-h-400 lg:su-h-600 su-overflow-hidden su-relative">
      <Parallax>
        <div style={{ backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/0/00/Crab_Nebula.jpg' }} className="su--mt-100 su-h-800 su-flex su-items-center su-justify-center su-bg-center su-bg-cover" />
        <div className="su-absolute su-top-0 su-left-0 su-w-full su-h-full su-block su-bg-black-true/40" />
      </Parallax>
      <div className="su-absolute su-top-1/2 su-left-1/2 su-translate-x-[-50%] su-translate-y-[-50%] su-z-10">
        <CtaLink
          href="/about-test"
          variant="ghost-swipe"
          icon="arrow-right"
          className="!su-rs-px-5 !su-rs-py-2 su-rounded-br-[5rem] !su-text-20 md:!su-text-[4.6rem] !su-font-bold !su-text-white !su-bg-black-true/40 hocus:!su-bg-sapphire/80"
        >
          See our new initiative
        </CtaLink>
      </div>
    </div>
  </div>
);