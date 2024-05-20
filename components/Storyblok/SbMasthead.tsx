import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { CreateBloks } from '@/components/CreateBloks';
import { Masthead } from '@/components/Masthead';
import { getNumBloks } from '@/utilities/getNumBloks';

export type SbMastheadProps = {
  blok: {
    _uid: string;
    mainNav?: SbBlokData[];
  };
};

export const SbMasthead = ({
  blok: {
    mainNav,
  },
  blok,
}: SbMastheadProps) => {
  const MainNav = !!getNumBloks(mainNav) ? <CreateBloks blokSection={mainNav} /> : undefined;

  return (
    <Masthead
      {...storyblokEditable(blok)}
      mainNav={MainNav}
    />
  );
};
