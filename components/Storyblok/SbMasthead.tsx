import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { CreateBloks } from '@/components/CreateBloks';
import { Masthead } from '@/components/Masthead';
import { getNumBloks } from '@/utilities/getNumBloks';

export type SbMastheadProps = {
  blok: {
    _uid: string;
    mainNav?: SbBlokData[];
  };
  isLight?: boolean;
};

export const SbMasthead = ({
  blok: {
    mainNav,
  },
  blok,
  isLight,
}: SbMastheadProps) => {
  const MainNav = !!getNumBloks(mainNav) ? <CreateBloks blokSection={mainNav} isLight={isLight} /> : undefined;

  return (
    <Masthead
      {...storyblokEditable(blok)}
      mainNav={MainNav}
      isLight={isLight}
    />
  );
};
