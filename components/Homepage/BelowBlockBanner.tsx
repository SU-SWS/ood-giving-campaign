import { Container } from '../Container';
import { Grid } from '../Grid';
import { AnimateInView } from '../Animate';

export const BelowBlockBanner = ({ children }) => (
  <Container pb={9} className="relative overflow-hidden -mt-260 bg-gradient-to-b from-transparent via-[15%] via-gc-black to-gc-black mx-auto">
    <Grid md={2} gap="default">
      {children}
    </Grid>
  </Container>
);
