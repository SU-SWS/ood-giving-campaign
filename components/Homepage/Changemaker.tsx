import { AnimateInView } from '../Animate';
import { Container } from '../Container';
import { Heading, Paragraph, Text } from '../Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';

type ChangemakerProps = React.HTMLAttributes<HTMLDivElement> & {
  changemakerCards?: React.ReactNode;
};

export const Changemaker = ({
  changemakerCards,
}: ChangemakerProps) => {
  if (!changemakerCards) {
    return null;
  }
  const bgImage = getProcessedImage('https://a-us.storyblok.com/f/1005200/3089x2048/aee2ea28c6/21664-18-0021_cmyk.jpg', '2000x0');

  return (
    <Container
      width="full"
      className="relative overflow-hidden lg:bg-fixed bg-no-repeat bg-top bg-cover"
      bgColor="black"
      style={{ backgroundImage: `url('${bgImage}')` }}
      py={10}
    >
      <div className="absolute top-0 left-0 size-full bg-gradient-to-t from-gc-black via-sapphire/60" />
      <Container className="relative z-10">
        <Heading size="f7" font="serif" leading="tight" align="center" className="max-w-[110rem] mx-auto rs-mb-4">
          <AnimateInView animation="slideInFromRight">
            <Text as="span" font="serif" className="block">
              Thinkers.
            </Text>
          </AnimateInView>
          <AnimateInView animation="slideInFromLeft" delay={0.1}>
            <Text as="span" font="serif" className="block">
              Makers. Doers.
            </Text>
          </AnimateInView>
          <AnimateInView animation="slideInFromRight" delay={0.2}>
            <Text as="span" font="serif" className="block">
              Boundary Pushers.
            </Text>
          </AnimateInView>
        </Heading>
        <AnimateInView animation="slideUp" delay={0.4}>
          <Paragraph size={2} weight="semibold" noMargin font="serif" align="center" className="max-w-700 mx-auto rs-my-4" leading="display">
            The Stanford community overflows with curious people unafraid to try,
            change, and try again. Meet some of them.
          </Paragraph>
        </AnimateInView>
        {changemakerCards}
      </Container>
    </Container>
  );
};
