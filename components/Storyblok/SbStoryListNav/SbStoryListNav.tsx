import { storyblokEditable } from '@storyblok/react/rsc';
import { type SbNavItemProps } from '../Storyblok.types';
import { Container } from '@/components/Container';
import { CtaLink } from '@/components/Cta';
import { Heading } from '@/components/Typography';
import * as styles from './SbStoryListNav.styles';

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
      <Container as="nav" aria-label="Story list page menu">
        <Heading size="base" align="center" className={styles.heading}>{heading}</Heading>
        <ul className={styles.list}>
          {links.map((link) => (
            <li key={link._uid} className={styles.listItem}>
              <CtaLink href={link.link.cached_url} variant="storyListNav">{link.label}</CtaLink>
            </li>
          ))}
        </ul>
      </Container>
    </Container>
  );
};
