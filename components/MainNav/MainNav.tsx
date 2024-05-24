import {
  Popover, PopoverButton, PopoverPanel, Transition,
} from '@headlessui/react';
import { cnb } from 'cnbuilder';
import { useReducedMotion } from 'framer-motion';
import { CtaLink } from '@/components/Cta';
import { Grid } from '@/components/Grid';
import { Heading } from '@/components/Typography';
import { HeroIcon } from '@/components/HeroIcon';
import { type SbNavItemProps } from '@/components/Storyblok/Storyblok.types';
import * as routes from '@/utilities/routes';
import * as styles from './MainNav.styles';

type MainNavProps = {
  featuredLinks?: SbNavItemProps[];
  themeLinks?: SbNavItemProps[];
  initiativeLinks?: SbNavItemProps[];
  regionCol2?: React.ReactNode;
  regionCol3?: React.ReactNode;
}

export const MainNav = ({
  featuredLinks,
  themeLinks,
  initiativeLinks,
  regionCol2,
  regionCol3,
}: MainNavProps) => {
  // Reduce motion users will only see opacity change when opening/closing the menu
  const preferReducedMotion = useReducedMotion();

  return (
    <Popover as="nav" aria-label="main menu">
      {({ open }) => (
        <>
          <PopoverButton aria-label={`${open ? 'Close' : 'Open'} main menu`} className={styles.button(open)}>
            <HeroIcon noBaseStyle icon={open ? 'close' : 'menu'} strokeWidth={1.8} className={styles.menuIcon(open)} />
          </PopoverButton>
          <Transition
            enter="duration-300 ease-out"
            enterFrom={cnb('opacity-0', !preferReducedMotion && '-translate-y-30')}
            enterTo="opacity-100 translate-y-0"
            leave="duration-200 ease-out"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo={cnb('opacity-0', !preferReducedMotion && '-translate-y-30')}
            >
            <PopoverPanel className={styles.panel}>
              <div className={styles.panelWrapper}>
                <Grid sm={2} xxl={3} className={styles.panelOuterGrid}>
                  <div>
                    {!!featuredLinks?.length && (
                      <ul className={styles.linkList}>
                        {featuredLinks.map((link) => (
                          <li key={link._uid} className={styles.featuredItem}>
                            <CtaLink
                              sbLink={link.link}
                              color="white"
                              variant="mainNavFeatured"
                              icon="arrow-right"
                              animate="right"
                              className={styles.featuredCta}
                            >
                              {link.label}
                            </CtaLink>
                          </li>
                        ))}
                      </ul>
                    )}
                    {!!themeLinks?.length && (
                      <>
                        <Heading font="druk-wide" size="base" color="white" uppercase className={styles.themeHeading}>Themes</Heading>
                        <ul className={styles.linkList}>
                          {themeLinks.map((link) => (
                            <li key={link._uid} className={styles.themeItems}>
                              <CtaLink sbLink={link.link} color="white" variant="mainNavLink">{link.label}</CtaLink>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                  <div className={styles.group2}>
                    <Grid xxl={2} className={styles.col2}>
                      <div>
                        {!!initiativeLinks?.length && (
                          <>
                            <Heading size="base" leading="cozy" font="druk-wide" className={styles.initiativeHeading}>
                              <CtaLink
                                href={routes.initiativesRoot}
                                variant="mainNavFeatured"
                                color="white"
                                icon="arrow-right"
                                animate="right"
                              >
                                Initiatives
                              </CtaLink>
                            </Heading>
                            <ul className={styles.linkList}>
                              {initiativeLinks.map((link) => (
                                <li key={link._uid} className={styles.initiativeItems}>
                                  <CtaLink sbLink={link.link} color="white" variant="mainNavLink">{link.label}</CtaLink>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                        {/*  We don't need spacing between the initiative links and regionCol2
                          because once we start displaying the initiative links,
                          the CTA block in regionCol2 will be moved to col3 */}
                        {regionCol2}
                      </div>
                      <Grid className={styles.col3}>
                        {regionCol3}
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </div>
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
