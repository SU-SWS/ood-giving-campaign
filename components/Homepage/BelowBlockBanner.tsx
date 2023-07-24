import { Container } from '../Container';
import { Grid } from '../Grid';
import { AnimateInView } from '../Animate';

export const BelowBlockBanner = ({ children }) => (
  <Container pb={9} className="relative overflow-hidden -mt-200 2xl:-mt-260 bg-gradient-to-t from-gc-black via-90% via-gc-black">
    <div className="absolute w-full h-full bottom-0 left-0 bg-gradient-to-t from-[#35459A] via-gc-black via-50% z-10" />
    <div className="absolute w-full h-1/4 bottom-0 left-0 bg-gradient-to-t from-gc-sky via-[#35459A] z-20" />
    <Grid md={2} gap="default" className="relative [&>*:nth-child(even)]:rs-mt-9 2xl:w-11/12 mx-auto z-30">
      {children}
    </Grid>
  </Container>
);
