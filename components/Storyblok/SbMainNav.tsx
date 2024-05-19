import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { type SbNavItemProps } from './Storyblok.types';
import { CreateBloks } from '@/components/CreateBloks';
import { MainNav } from '@/components/MainNav/MainNav';
import { getNumBloks } from '@/utilities/getNumBloks';
import { transformNavItems } from '@/utilities/transformNavItems';
import { transform } from 'next/dist/build/swc';

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

  const featuredLinksArray = transformNavItems(featuredLinks);
  const themeLinksArray = transformNavItems(themeLinks);
  const initiativeLinksArray = transformNavItems(initiativeLinks);

  return (
    <MainNav
      {...storyblokEditable(blok)}
      featuredLinks={featuredLinksArray}
      themeLinks={themeLinksArray}
      initiativeLinks={initiativeLinksArray}
      regionCol2={RegionCol2}
      regionCol3={RegionCol3}
    />
  );
};
