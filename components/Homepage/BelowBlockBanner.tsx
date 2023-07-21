import { Container } from '../Container';
import { Grid } from '../Grid';
import { AnimateInView } from '../Animate';

export const BelowBlockBanner = ({ children }) => (
  <Container pb={9} className="relative overflow-hidden -mt-200 2xl:-mt-260 bg-gradient-to-b from-transparent via-[10%] via-gc-black to-gc-black">
    <Grid md={2} gap="default" className="[&>*:nth-child(even)]:rs-mt-9 2xl:w-11/12 mx-auto">
      {children}
    </Grid>
  </Container>
);
