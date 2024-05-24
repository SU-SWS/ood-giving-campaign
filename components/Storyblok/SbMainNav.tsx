import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { type SbNavItemProps } from '@/components/Storyblok/Storyblok.types';
import { CreateBloks } from '@/components/CreateBloks';
import { MainNav } from '@/components/MainNav/MainNav';
import { getNumBloks } from '@/utilities/getNumBloks';

export type SbMainNavProps = {
  blok: {
    _uid: string;
    featuredLinks: SbNavItemProps[];
    isThemeHidden?: boolean;
    themeLinks: SbNavItemProps[];
    isInitiativeHidden?: boolean;
    initiativeLinks: SbNavItemProps[];
    regionCol2?: SbBlokData[];
    regionCol3?: SbBlokData[];
  };
};

export const SbMainNav = ({
  blok: {
    featuredLinks,
    isThemeHidden,
    themeLinks,
    isInitiativeHidden,
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
      themeLinks={!isThemeHidden ? themeLinks : undefined}
      initiativeLinks={!isInitiativeHidden ? initiativeLinks : undefined}
      regionCol2={RegionCol2}
      regionCol3={RegionCol3}
    />
  );
};
