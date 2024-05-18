import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { CreateBloks } from '@/components/CreateBloks';
import { getNumBloks } from '@/utilities/getNumBloks';
import { type SbNavItemProps } from './Storyblok.types';
import { MainNav } from '@/components/MainNav/MainNav';

export type SbMainNavProps = {
  blok: {
    _uid: string;
    featuredLinks: SbNavItemProps[];
    themeLinks: SbNavItemProps[];
    initiativeLinks: SbNavItemProps[];
    regionCol2?: SbBlokData[];
    regionCol3?: SbBlokData[];
  };
};

export const SbMainNav = ({
  blok: {
    featuredLinks,
    themeLinks,
    initiativeLinks,
    regionCol2,
    regionCol3,
  },
  blok,
}: SbMainNavProps) => {
  const RegionCol2 = !!getNumBloks(regionCol2) ? <CreateBloks blokSection={regionCol2} /> : undefined;
  const RegionCol3 = !!getNumBloks(regionCol3) ? <CreateBloks blokSection={regionCol3} /> : undefined;

  return (
    <MainNav
      {...storyblokEditable(blok)}
      featuredLinks={featuredLinks}
      themeLinks={themeLinks}
      initiativeLinks={initiativeLinks}
      regionCol2={RegionCol2}
      regionCol3={RegionCol3}
    />
  );
};
