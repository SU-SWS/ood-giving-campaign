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
  <Popover>
    <nav aria-label="main menu">
      <PopoverButton className="relative flex items-center justify-center bg-gc-black text-white size-36 sm:size-42 md:size-48 border-2 border-digital-red-light rounded-full z-[150]">
        <HeroIcon noBaseStyle icon="menu" className="text-white size-20 sm:size-22 md:size-26" />
        <span className="sr-only">Open main menu</span>
      </PopoverButton>
      <PopoverPanel className="absolute w-screen inset-0 z-[140] mt-[8.8rem]">
        <div className="bg-digital-blue">
          <Grid sm={2} xxl={3} className="px-20 sm:px-30 md:px-50 lg:px-80 xl:px-100 3xl:px-100 4xl:px-[calc((100%-1800px)/2)] mx-auto relative rs-pt-6">
            <div className="2xl:col-span-1">
              <ul>
                {featuredLinks.map((link) => (
                  <li key={link._uid}>
                    <CtaLink href={link.href} color="white" size="large">{link.label}</CtaLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="2xl:col-span-2">
              <Grid xxl={2}>
                <div>
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
    </nav>
  </Popover>
);
