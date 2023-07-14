import { Container } from '../Container';
import { Heading, Paragraph } from '../Typography';
import { AnimateInView } from '../Animate';
import { Triangle } from '../Shapes';

export const FindPurposeSection = ({ children }) => (
  <Container width="full" bgColor="white" py={9} className="relative overflow-hidden">
    <Container>
      <AnimateInView animation="slideUp">
        <Heading size="splash" font="druk" className="max-w-900" leading="none">
          Find your purpose.
        </Heading>
      </AnimateInView>
      <div className="lg:w-4/5 2xl:w-3/5 mx-auto rs-mb-6">
        <AnimateInView delay={0.1} animation="slideUp">
          <Triangle className="rs-mb-7" />
        </AnimateInView>
        <AnimateInView delay={0.2} animation="slideUp">
          <Paragraph font="serif" weight="semibold" variant="overview" leading="snug">
            The world’s collective problems require collective solutions—and the work is far from over.
            It takes all of us, coming together from all angles.
            Discover the schools and initiatives working together On Purpose.
          </Paragraph>
          <Paragraph font="serif" weight="semibold" variant="overview" leading="snug">
            So, what moves you?
          </Paragraph>
        </AnimateInView>
      </div>
    </Container>
    <AnimateInView delay={0.2} animation="slideUp">
      {children}
    </AnimateInView>
    <AnimateInView delay={0.2} animation="slideUp">
      <Container pt={9}>
        <div className="lg:w-4/5 2xl:w-3/5 mx-auto">
          <Paragraph font="serif" weight="semibold" variant="overview" leading="snug">
            The world has never moved faster, and our challenges have never been more urgent.
            If the future is already here, then what we do today has never mattered more.
            These challenges require the know-how and dedication of us all to solve.
            This includes every alum, every family member, and every philanthropist who wants a better world.
          </Paragraph>
          <Paragraph font="serif" weight="semibold" variant="overview" leading="snug">
            There is nothing we can do that we cannot do better, together.
          </Paragraph>
        </div>
      </Container>
    </AnimateInView>
  </Container>
);
