import {
  Popover, PopoverButton, PopoverPanel, Transition,
} from '@headlessui/react';
import { Paragraph, Heading, Text } from '../Typography';
import { Container } from '../Container';
import { HeroIcon } from '../HeroIcon';
import { Grid } from '../Grid';
import { Logo } from '../Logo';
import { CtaLink } from '../Cta';
import { schools } from '@/utilities/externalLinks';
import { initiatives, themes } from '@/utilities/routes';

/**
 * This is the earlier version of the local footer.
 * Currently not in used but we might come back to this later.
 * See MainNavMvp for current implementation.
 */

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
}: MainNavProps) => (
  <Popover as="nav" aria-label="main menu">
    {({ open }) => (
      <>
        <PopoverButton className="relative flex items-center justify-center bg-gc-black text-white size-36 sm:size-42 md:size-48 border-2 border-digital-red-light rounded-full z-[150] hocus-visible:bg-digital-red-dark transition-colors">
          <HeroIcon noBaseStyle icon={open ? 'close' : 'menu'} className="text-white size-20 sm:size-22 md:size-26" />
          <span className="sr-only">Open main menu</span>
        </PopoverButton>
        <PopoverPanel className="absolute inset-0 z-[140]">
          <div className="bg-gc-black border-b border-b-black-80 pt-[8.8rem] rs-pb-7">
            <Grid sm={2} xxl={3} className="rs-pt-6 px-20 sm:px-30 md:px-50 lg:px-80 xl:px-100 3xl:px-100 4xl:px-[calc((100%-1800px)/2)] mx-auto relative">
              <div className="2xl:col-span-1">
                <ul className="list-unstyled">
                  {featuredLinks.map((link) => (
                    <li key={link._uid} className="rs-mb-2">
                      <CtaLink
                        href={link.href}
                        color="white"
                        variant="mainNavFeatured"
                        icon="arrow-right"
                        animate="right"
                        iconProps={{ className: 'text-digital-red-xlight mt-01em'}}
                      >
                        {link.label}
                      </CtaLink>
                    </li>
                  ))}
                </ul>
                {!!themeLinks?.length && (
                  <>
                    <Heading font="druk-wide" size={1} color="white" uppercase className="rs-mt-5">Themes</Heading>
                    <ul className="list-unstyled">
                      {themeLinks.map((link) => (
                        <li key={link._uid}>
                          <CtaLink href={link.href} color="white">{link.label}</CtaLink>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              <div className="2xl:col-span-2">
                <Grid xxl={2}>
                  <div>
                    {!!initiativeLinks?.length && (
                      <>
                        <Heading font="druk-wide" size={1} color="white" uppercase>Initiatives</Heading>
                        <ul className="list-unstyled">
                          {initiativeLinks.map((link) => (
                            <li key={link._uid}>
                              <CtaLink href={link.href} color="white">{link.label}</CtaLink>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    {regionCol2}
                  </div>
                  <div>
                    {regionCol3}
                  </div>
                </Grid>
              </div>
            </Grid>
          </div>
        </PopoverPanel>
      </>
    )}
  </Popover>
);
