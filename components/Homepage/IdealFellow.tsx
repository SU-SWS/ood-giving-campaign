import { AnimateInView } from '../Animate';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { Heading, Paragraph, Text } from '../Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { Parallax } from '../Parallax/Parallax';

export const IdealFellow = () => {
  const bgImage = getProcessedImage('https://a-us.storyblok.com/f/1005200/2560x1707/c4fba877e8/firefly-20230919145441.png', '2000x1600');
  return (
    <Container width="full" bgColor="white" className="h-800 lg:h-[150rem] overflow-hidden relative">
      <Parallax offset={90}>
        <div
          style={{ backgroundImage: `url('${bgImage}'` }}
          className="-mt-80 h-[160rem] flex items-center justify-center bg-center bg-cover bg-no-repeat"
        />
      </Parallax>
      <div className="max-w-full absolute bottom-80 left-0 3xl:left-[20vw]">
        <img
          src={getProcessedImage('https://a-us.storyblok.com/f/1005200/1615x1306/ef8fffb741/hector-hand-full-transparent-cropped.png', '1500x0')}
          alt=""
        />
      </div>
      <Heading size="base" color="white" className="absolute bottom-300 ml-[20vw]">
        <Text font="druk" size="f8" leading="display">Shape</Text>
        <Text font="serif" weight="semibold" italic size="f9" className="leading-[0.9]">what’s</Text>
        <Text font="serif" weight="semibold" italic size="f9" className="leading-[0.9]">next</Text>
      </Heading>
      <div className="absolute bottom-300 right-0 bg-gc-black w-5/12 rs-px-4 rs-pt-5 rs-pb-1">
        <Text variant="caption" color="white" className="mb-04em">Preparing citizens</Text>
        <Heading color="white" weight="normal">
          2022-23 IDEAL fellow Hector Callejas untangles racial inequality
        </Heading>
        <Text variant="card" color="white">
          by Sarah Jane Staats
        </Text>
        <Text variant="card" color="white">
          May 5, 2023
        </Text>
        <Text variant="caption" color="black-40" className="rs-mt-3 -mr-30" align="right">
          Photo credit lorem ipsum dolar sit amet vestibulum perimentium.
        </Text>
      </div>
    </Container>
  );
};
