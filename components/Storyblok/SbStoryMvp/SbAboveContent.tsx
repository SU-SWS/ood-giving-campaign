import { cnb } from 'cnbuilder';
import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
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
      <div className="md:col-span-10 md:col-start-2 lg:col-span-6 xl:col-span-5 xl:col-start-2">
        <CreateBloks blokSection={intro} />
      </div>
      {sidebar && (
        <aside className="lg:col-span-5 lg:col-start-7 xl:col-span-4 xl:col-start-8">
          <CreateBloks blokSection={sidebar} />
        </aside>
      )}
    </Grid>
  </Container>
);
