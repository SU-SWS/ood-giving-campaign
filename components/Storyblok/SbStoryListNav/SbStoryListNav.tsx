import { storyblokEditable } from '@storyblok/react/rsc';
import { useRef, useState } from 'react';
import {
  Dialog, DialogPanel, DialogTitle, Transition, TransitionChild, CloseButton,
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
  fullSlug: string;
  name: string;
};

// The menu item chips that are either displayed on the page or inside the modal on mobile
const StoryListContent = ({ blok: { links }, fullSlug }: SbStoryListNavType) => {
  return (
    <ul className={styles.list}>
      {links.map((link) => {
        const isCurrentPage = fullSlug === link.link?.cached_url || (fullSlug === 'stories' && link.link?.cached_url === 'stories/');
        return (
          <li key={link._uid} className={styles.listItem}>
            <CtaLink
              aria-current={isCurrentPage ? 'page' : undefined}
              sbLink={link.link}
              variant="storyListNav"
              color="current"
              className={styles.cta(isCurrentPage)}
              srText='stories'
            >
              <FlexBox alignItems="center" className={styles.ctaInner}>
                <span className="grow leading-display">{link.label}</span>
                {isCurrentPage && <HeroIcon icon="check" className={styles.checkIcon} />}
              </FlexBox>
            </CtaLink>
          </li>
        );
      })}
    </ul>
  );
};

export const SbStoryListNav = ({
  blok: {
    heading,
  },
  blok,
  fullSlug,
  name,
}: SbStoryListNavType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    buttonRef.current?.focus();
  };

  const isStoryLandingPage = name === 'Stories';

  return (
    <Container width="full" bgColor="black" className={styles.root} {...storyblokEditable(blok)}>
      <Container as="nav" aria-label="Story list page menu">
        <Heading size="base" align="center" className={styles.heading}>{heading}</Heading>
        <div className={styles.desktop}>
          <StoryListContent blok={blok} fullSlug={fullSlug} name={name} />
        </div>
        <div className={styles.mobile}>
          <button
            type="button"
            ref={buttonRef}
            onClick={() => setIsModalOpen(true)}
            className={styles.filterButton}
            aria-label={`Currently showing ${!isStoryLandingPage ? name : 'all'} stories. Click to open filter menu.`}
          >
            <FlexBox alignItems="center" className={styles.filterBtnInner}>
              <span className={styles.filterBtnLabel}>{!isStoryLandingPage ? name : 'All'}</span>
              <HeroIcon
                icon='chevron-down'
                strokeWidth={2}
                className={styles.filterChevron}
              />
            </FlexBox>
          </button>
          <Transition show={isModalOpen}>
            <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className={styles.dialog}>
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
                    <div className={styles.dialogHeader}>
                      <DialogTitle className={styles.dialogHeading}>{heading}</DialogTitle>
                      <CloseButton
                        aria-label="Close story filter menu"
                        onClick={handleCloseModal}
                        className={styles.modalClose}
                      >
                        <HeroIcon
                          noBaseStyle
                          focusable="false"
                          strokeWidth={2}
                          icon='close'
                          className={styles.closeIcon}
                        />
                      </CloseButton>
                    </div>
                    <StoryListContent blok={blok} fullSlug={fullSlug} name={name} />
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
