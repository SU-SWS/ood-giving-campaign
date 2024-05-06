import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { type SbNavItemProps } from './Storyblok.types';
import { Container } from '@/components/Container';
import { CtaLink } from '@/components/Cta';
import { Heading } from '@/components/Typography';

type SbStoryListNavType = {
  blok: {
    _uid: string;
    heading: string;
    links: SbNavItemProps[];
  };
};

export const SbStoryListNav = ({ blok: { heading, links }, blok }: SbStoryListNavType) => {
  return (
    <Container width="full" bgColor="black" {...storyblokEditable(blok)}>
      <nav aria-label="Story list page menu" className="cc">
        <Heading size="base" align="center">{heading}</Heading>
        <ul className="list-unstyled flex flex-wrap gap-14 justify-center max-w-1200 mx-auto">
          {links.map((link) => (
            <li key={link._uid} className="inline-block">
              <CtaLink href={link.link.cached_url} variant="storyCardChipDark">{link.label}</CtaLink>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};
