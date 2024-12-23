import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { CreateBloks } from '../CreateBloks';
import { SidebarCard } from '../Sidebar';
import { type AnimationType } from '../Animate';
import { type HeadingType } from '../Typography';
import { paletteAccentColors, type PaletteAccentHexColorType } from '@/utilities/colorPalettePlugin';
import { getNumBloks } from '@/utilities/getNumBloks';

export type SbSidebarCardProps = {
  blok: {
    _uid: string;
    id: string;
    heading?: string;
    headingLevel?: HeadingType;
    isSmallHeading?: boolean;
    isLightText?: boolean;
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
    id,
    heading,
    headingLevel,
    isSmallHeading,
    isLightText,
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
  const Content = !!getNumBloks(content) ? <CreateBloks blokSection={content} baseFontSize="card" /> : undefined;
  const Cta = !!getNumBloks(cta) ? <CreateBloks blokSection={cta} /> : undefined;

  return (
    <SidebarCard
      {...storyblokEditable(blok)}
      id={id}
      heading={heading}
      headingLevel={headingLevel}
      isSmallHeading={isSmallHeading}
      isLightText={isLightText}
      superhead={superhead}
      barColor={paletteAccentColors[value]}
      barOnRight={barOnRight}
      bgColor={paletteAccentColors[bgColorValue]}
      cta={Cta}
      animation={animation}
      delay={delay}
    >
      {Content}
    </SidebarCard>
  );
};
