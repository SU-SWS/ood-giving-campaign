import { AnimateInView } from '../Animate';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { Heading, Paragraph, Text } from '../Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { Parallax } from '../Parallax/Parallax';

export const IdealFellow = () => {
  const bgImage = getProcessedImage('https://a-us.storyblok.com/f/1005200/2560x1707/c4fba877e8/firefly-20230919145441.png', '2000x1500');
  return (
    <Container width="full" bgColor="white" className="h-400 lg:h-[130rem] overflow-hidden relative">
      <Parallax offset={90}>
        <div
          style={{ backgroundImage: `url('${bgImage}'` }}
          className="-mt-100 h-[140rem] flex items-center justify-center bg-center bg-cover bg-no-repeat"
        />
      </Parallax>
      <div className="-mt-100 h-[150rem] absolute bottom-100 right-[-10vw]">
        <img
          src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2560x1707/9f15c46120/hector-transparent.png', '2000x1500')}
          alt=""
        />
      </div>
    </Container>
  );
};
