import { storyblokEditable } from '@storyblok/react/rsc';
import { useState } from 'react';
import {
  Description, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild,
} from '@headlessui/react';
import { type SbNavItemProps } from '../Storyblok.types';
import { Container } from '@/components/Container';
import { CtaLink } from '@/components/Cta';
import { FlexBox } from '@/components/FlexBox';
import { Heading } from '@/components/Typography';
import { HeroIcon } from '@/components/HeroIcon';
import * as styles from './SbStoryListNav.styles';

type SbStoryListNavType = {
  blok: {
    _uid: string;
    heading: string;
    links: SbNavItemProps[];
  };
  full_slug: string;
  name: string;
};

const StoryListContent = ({ blok: { heading, links }, full_slug }: SbStoryListNavType) => {
  return (
    <>
      <Heading size="base" align="center" className={styles.heading}>{heading}</Heading>
      <ul className={styles.list}>
        {links.map((link) => (
          <li key={link._uid} className={styles.listItem}>
            <CtaLink
              aria-current={full_slug === link.link?.cached_url ? 'page' : undefined}
              href={link.link?.cached_url}
              variant="storyListNav"
              color="current"
              className={styles.cta}
              srText='stories'
            >
              {link.label}
            </CtaLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export const SbStoryListNav = ({
  blok: {
    heading,
    links
  },
  blok,
  full_slug,
  name,
}: SbStoryListNavType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container width="full" bgColor="black" {...storyblokEditable(blok)}>
      <Container as="nav" aria-label="Story list page menu">
        <div className="hidden lg:block">
          <StoryListContent blok={blok} full_slug={full_slug} name={name} />
        </div>
        <div className="block lg:hidden">
          <Heading size="base" align="center" className={styles.heading}>{heading}</Heading>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className={styles.filterButton}
          >
            <FlexBox alignItems="center" className="gap-12 sm:gap-16">
              <span className="grow leading-display">{name || "All"}</span>
              <HeroIcon
                //noBaseStyle
                icon='chevron-down'
                strokeWidth={2}
                className="shrink-0 text-white"
              />
            </FlexBox>
          </button>
          <Transition show={isModalOpen} appear>
            <Dialog onClose={() => setIsModalOpen(false)} className={styles.dialog}>
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className={styles.dialogOverlay} />
              </TransitionChild>
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className={styles.dialogWrapper}>
                  <DialogPanel className={styles.dialogPanel}>
                    <button
                      type="button"
                      aria-label="Close modal"
                      onClick={() => setIsModalOpen(false)}
                      className={styles.modalClose}
                    >
                      <HeroIcon
                        noBaseStyle
                        focusable="false"
                        strokeWidth={2}
                        icon='close'
                        className={styles.closeIcon}
                      />
                    </button>
                    <DialogTitle className={styles.srOnly}>Go to story page filtered by</DialogTitle>
                    <StoryListContent blok={blok} full_slug={full_slug} name={name} />
                  </DialogPanel>
                </div>
              </TransitionChild>
            </Dialog>
          </Transition>
        </div>
      </Container>
    </Container>
  );
};
