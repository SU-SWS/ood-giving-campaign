import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { CreateBloks } from '../CreateBloks';
import { SidebarCard } from '../Sidebar';
import { type SbStoryCardProps } from './SbStoryCard';
import { type AnimationType } from '../Animate';
import { type HeadingType } from '../Typography';
import { paletteAccentColors, type PaletteAccentHexColorType } from '@/utilities/colorPalettePlugin';

export type SbSidebarCardProps = Omit<SbStoryCardProps, 'isSmallHeading'> & {
  blok: {
    _uid: string;
    heading?: string;
    headingLevel?: HeadingType;
    isSmallHeading?: boolean;
    superhead?: string;
    content?: SbBlokData[];
    cta?: SbBlokData[];
    barColor?: {
      value?: PaletteAccentHexColorType;
    }
    barOnRight?: boolean;
    bgColor?: {
      value?: PaletteAccentHexColorType;
    }
    animation?: AnimationType;
    delay?: number;
  };
};

export const SbSidebarCard = ({
  blok: {
    heading,
    headingLevel,
    isSmallHeading,
    superhead,
    content,
    cta,
    barColor: { value } = {},
    barOnRight,
    bgColor: { value: bgColorValue } = {},
    animation,
    delay,
  },
  blok,
}: SbSidebarCardProps) => {
  const Content = <CreateBloks blokSection={content} />;
  const Cta = <CreateBloks blokSection={cta} />;

  return (
    <SidebarCard
      {...storyblokEditable(blok)}
      heading={heading}
      headingLevel={headingLevel}
      isSmallHeading={isSmallHeading}
      superhead={superhead}
      barColor={paletteAccentColors[value]}
      barOnRight={barOnRight}
      bgColor={paletteAccentColors[bgColorValue]}
      cta={Cta}
    >
      {Content}
    </SidebarCard>
  );
};
