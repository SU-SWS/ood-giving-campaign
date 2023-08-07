import { Container } from '../Container';
import { Heading } from '../Typography';

/**
 * Temporary hero component for me to layout a generic page for testing
 */
type HeroProps = {
  heading: string;
};

export const Hero = ({
  heading,
}: HeroProps) => (
  <Container width="full" className="relative bg-black-70 pt-300" pb={9}>
    <Heading as="h1" font="druk" size={9} align="center" color="white">{heading}</Heading>
  </Container>
);
