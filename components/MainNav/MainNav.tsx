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

type navItemProps = {
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
  <nav aria-label="main menu" className="relative">
    <button type="button" className="flex items-center justify-center text-white size-36 sm:size-42 md:size-48 border-2 border-digital-red-light rounded-full">
      <HeroIcon noBaseStyle icon="menu" className="text-white size-20 sm:size-22 md:size-26" />
      <span className="sr-only">Open main menu</span>
    </button>
    <Grid sm={2} xxl={3} className="absolute w-full">
      <div>

      </div>
      <div>
        <Grid xxl={2}>
          {regionCol2}
          {regionCol3}
        </Grid>
      </div>
    </Grid>
  </nav>
);
