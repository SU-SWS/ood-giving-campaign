import { cnb } from 'cnbuilder';
import { type SbBlokData } from '@storyblok/react/rsc';
import { CreateBloks } from '@/components/CreateBloks';
import { Container } from '@/components/Container';
import { Grid } from '@/components/Grid';

type SbAboveContentProps = {
  intro: SbBlokData[];
  sidebar?: SbBlokData[];
}

export const SbAboveContent = ({
  intro,
  sidebar,
}: SbAboveContentProps) => (
  <Container pt={9} className="relative overflow-hidden">
    <Grid md={12} gap="default">
      {sidebar && (
        <aside className="rs-mb-3 md:mb-0 md:col-span-10 md:col-start-2 lg:order-last lg:col-span-5 lg:col-start-8 xl:col-span-5 xl:col-start-8 2xl:col-span-4 2xl:col-start-8">
          <CreateBloks blokSection={sidebar} />
        </aside>
      )}
      <div className="md:col-span-10 md:col-start-2 lg:col-span-7 xl:col-span-6 2xl:col-span-5 2xl:col-start-2">
        <CreateBloks blokSection={intro} />
      </div>
    </Grid>
  </Container>
);
