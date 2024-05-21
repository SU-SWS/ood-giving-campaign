import {
  Popover, PopoverButton, PopoverPanel, Transition,
} from '@headlessui/react';
import { cnb } from 'cnbuilder';
import { useReducedMotion } from 'framer-motion';
import { CtaLink } from '@/components/Cta';
import { Grid } from '@/components/Grid';
import { Heading } from '@/components/Typography';
import { HeroIcon } from '@/components/HeroIcon';

export type navItemProps = {
  _uid: string;
  label: string;
  href: string;
}

type MainNavProps = {
  featuredLinks?: navItemProps[];
  themeLinks?: navItemProps[];
  initiativeLinks?: navItemProps[];
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
  const preferReducedMotion = useReducedMotion();

  return (
    <Popover as="nav" aria-label="main menu">
      {({ open }) => (
        <>
          <PopoverButton aria-label={`${open ? 'Close' : 'Open'} main menu`} className={cnb('relative flex items-center justify-center text-white size-36 sm:size-42 md:size-48 border-2 border-digital-red-light rounded-full z-[150] hocus-visible:bg-digital-red-dark transition-colors focus:outline-none', open ? 'bg-black-true' : 'bg-gc-black')}>
            <HeroIcon noBaseStyle icon={open ? 'close' : 'menu'} className="text-white w-20 sm:w-22 md:w-26" />
          </PopoverButton>
          <Transition
            enter="duration-300 ease-out"
            enterFrom={cnb('opacity-0', !preferReducedMotion && '-translate-y-30')}
            enterTo="opacity-100 translate-y-0"
            leave="duration-200 ease-out"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo={cnb('opacity-0', !preferReducedMotion && '-translate-y-30')}
            >
            <PopoverPanel className="absolute inset-0 z-[140]">
              <div className="bg-black-true pt-61 sm:pt-68 md:pt-[7.4rem] lg:pt-[8.8rem] rs-pb-7">
                <Grid sm={2} xxl={3} className="gap-y-45 gap-x-30 sm:gap-x-50 rs-pt-6 px-20 sm:px-30 md:px-50 lg:px-80 xl:px-100 3xl:px-100 4xl:px-[calc((100%-1800px)/2)] mx-auto relative">
                  <div className="2xl:col-span-1">
                    <ul className="list-unstyled">
                      {featuredLinks.map((link) => (
                        <li key={link._uid} className="mb-26 md:mb-32">
                          <CtaLink
                            href={link.href}
                            color="white"
                            variant="mainNavFeatured"
                            icon="arrow-right"
                            animate="right"
                            className="*:block"
                          >
                            {link.label}
                          </CtaLink>
                        </li>
                      ))}
                    </ul>
                    {!!themeLinks?.length && (
                      <>
                        <Heading font="druk-wide" size="base" color="white" uppercase className="rs-mt-5 rs-mb-0">Themes</Heading>
                        <ul className="list-unstyled">
                          {themeLinks.map((link) => (
                            <li key={link._uid} className="rs-mb-0">
                              <CtaLink href={link.href} color="white" variant="mainNavLink">{link.label}</CtaLink>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                  <div className="2xl:col-span-2">
                    <Grid xxl={2} className="gap-45 md:gap-90 2xl:gap-95 3xl:pl-200">
                      <div>
                        {!!initiativeLinks?.length && (
                          <>
                            <Heading font="druk-wide" size={1} color="white" uppercase className="rs-mb-0">Initiatives</Heading>
                            <ul className="list-unstyled">
                              {initiativeLinks.map((link) => (
                                <li key={link._uid} className="rs-mb-0">
                                  <CtaLink href={link.href} color="white" variant="mainNavLink">{link.label}</CtaLink>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                        {regionCol2}
                      </div>
                      <Grid className="gap-y-45 md:gap-y-90 2xl:gap-y-95">
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
