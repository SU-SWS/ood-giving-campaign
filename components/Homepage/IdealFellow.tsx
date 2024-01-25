import Link from 'next/link';
import { Container } from '../Container';
import { Heading, Text } from '../Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { Parallax } from '../Parallax/Parallax';
import { HeroIcon } from '../HeroIcon';

export const IdealFellow = () => {
  const bgImage = getProcessedImage('https://a-us.storyblok.com/f/1005200/2560x1707/c4fba877e8/firefly-20230919145441.png', '2000x1600');
  return (
    <Container width="full" bgColor="white" className="h-800 lg:h-[150rem] overflow-hidden relative -mb-100">
      <Parallax offset={100}>
        <div
          style={{ backgroundImage: `url('${bgImage}'` }}
          className="-mt-100 h-[160rem] flex items-center justify-center bg-center bg-cover bg-no-repeat"
        />
      </Parallax>
      <div className="max-w-full absolute bottom-80 left-0 3xl:left-[20vw]">
        <img
          src={getProcessedImage('https://a-us.storyblok.com/f/1005200/1615x1306/ef8fffb741/hector-hand-full-transparent-cropped.png', '1500x0')}
          alt=""
          loading="lazy"
        />
      </div>
      <Heading size="base" color="white" className="absolute bottom-300 ml-[20vw]">
        <Text as="span" font="druk" size="f8" leading="display" className="block">Shape</Text>
        <Text as="span" font="serif" weight="semibold" italic size="f9" className="leading-[0.9] block">what’s</Text>
        <Text as="span" font="serif" weight="semibold" italic size="f9" className="leading-[0.9] block">next</Text>
      </Heading>
      <div className="group hover:backdrop-blur-sm transition-all absolute bottom-200 right-0 bg-black-50/50 backdrop-blur-xl w-5/12 rs-px-4 rs-pt-4 rs-pb-1">
        <Text variant="caption" color="white" weight="semibold" className="mb-04em">Preparing citizens</Text>
        <Link href="/stories/poc-solve-for-now" className="no-underline stretched-link">
          <Heading color="white" weight="normal" className="decoration-4 decoration-transparent underline-offset-8 group-hocus-within:underline  group-hocus-within:decoration-digital-red-light transition-colors">
            Untangling the web of racial inequality
            <HeroIcon icon="arrow-right" noBaseStyle className="inline-block group-hocus-within:translate-x-[0.2em] bg-digital-red rounded-full p-12 ml-05em *:stroke-[2px] w-08em" />
          </Heading>
        </Link>
        <Text variant="card" color="white">
          by Sarah Jane Staats
        </Text>
        <Text variant="card" color="white">
          May 5, 2023
        </Text>
        <Text variant="caption" color="white" className="rs-mt-5 -mr-30" align="right">
          Photo: 2022-23 IDEAL Fellow Hector Callejas
        </Text>
      </div>
    </Container>
  );
};
