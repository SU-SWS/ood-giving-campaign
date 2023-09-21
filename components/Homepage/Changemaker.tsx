import { AnimateInView } from '../Animate';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { Heading, Paragraph, Text } from '../Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { ChangemakerCard } from '@/components/ChangemakerCard';

export const Changemaker = () => {
  const bgImage = getProcessedImage('https://a-us.storyblok.com/f/1005200/3089x2048/aee2ea28c6/21664-18-0021_cmyk.jpg', '2000x0');

  return (
    <Container
      width="full"
      className="relative bg-fixed bg-no-repeat bg-top bg-cover"
      bgColor="black"
      style={{ backgroundImage: `url('${bgImage}')` }}
      py={10}
    >
      <Container>
        <Heading size="f7" font="serif" leading="tight" align="center" className="max-w-[110rem] mx-auto rs-mb-4">
          <AnimateInView animation="slideInFromRight">
            <Text as="span" font="serif" className="block">
              Makers. Doers.
            </Text>
          </AnimateInView>
          <AnimateInView animation="slideInFromLeft" delay={0.2}>
            <Text as="span" font="serif" className="block">
              Boundary Pushers.
            </Text>
          </AnimateInView>
          <AnimateInView animation="slideInFromRight" delay={0.4}>
            <Text as="span" font="serif" className="block">
              Risk-takers.
            </Text>
          </AnimateInView>
        </Heading>
        <AnimateInView animation="slideUp" delay={0.5}>
          <Paragraph size={2} weight="semibold" noMargin font="serif" align="center" className="max-w-900 mx-auto rs-my-4" leading="display">
            The Stanford community overflows with curious people unafraid to try,
            change, and try again.<br />
            Meet some of them.
          </Paragraph>
        </AnimateInView>
        <Grid md={2} xxl={4} pt={7} gap="default">
          <ChangemakerCard
            imageSrc="https://a-us.storyblok.com/f/1005200/878x1800/523e07bc72/person.jpg"
            heading="Alvin Pearman"
            body="Lorem Ipsum Dolar Sit"
            animation="slideUp"
            delay={0.2}
          >
            <Paragraph variant="card">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam tempor sed tellus ac vulputate. Morbi varius ornare arcu,
              quis scelerisque urna ultricies sed. Nunc eu est leo.
            </Paragraph>
            <Paragraph variant="card" noMargin>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam tempor sed tellus ac vulputate.
            </Paragraph>
          </ChangemakerCard>
          <ChangemakerCard
            imageSrc="https://a-us.storyblok.com/f/1005200/878x1800/4535e9548c/person.jpg"
            heading="Andrii Torchylo"
            body="Lorem Ipsum Dolar Sit"
            animation="slideUp"
            delay={0.4}
          >
            <Paragraph variant="card" noMargin>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam tempor sed tellus ac vulputate. Morbi varius ornare arcu,
              quis scelerisque urna ultricies sed. Nunc eu est leo.
            </Paragraph>
          </ChangemakerCard>
          <ChangemakerCard
            imageSrc="https://a-us.storyblok.com/f/1005200/878x1801/5177958b81/person.jpg"
            heading="Misan Rewane"
            body="Lorem Ipsum Dolar Sit"
            animation="slideUp"
            delay={0.6}
          >
            <Paragraph variant="card">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam tempor sed tellus ac vulputate. Morbi varius ornare arcu,
              quis scelerisque urna ultricies sed. Nunc eu est leo.
            </Paragraph>
            <Paragraph variant="card" noMargin>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam tempor sed tellus ac vulputate.
            </Paragraph>
          </ChangemakerCard>
          <ChangemakerCard
            imageSrc="https://a-us.storyblok.com/f/1005200/878x1801/64a0a4257d/gobi.jpg"
            heading="Gopi Goda"
            body="Lorem Ipsum Dolar Sit"
            animation="slideUp"
            delay={0.8}
          >
            <Paragraph variant="card">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam tempor sed tellus ac vulputate. Morbi varius ornare arcu,
              quis scelerisque urna ultricies sed. Nunc eu est leo.
            </Paragraph>
          </ChangemakerCard>
        </Grid>
      </Container>
    </Container>
  );
};
