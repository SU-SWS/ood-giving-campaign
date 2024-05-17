import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';

export type SbMainNavProps = {
  blok: {
    _uid: string;
    featuredLinks: SbBlokData[];
    themeLinks: SbBlokData[];
    initiativeLinks: SbBlokData[];
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

  return (
    <div>test</div>
  );
};
