import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { CreateBloks } from '../CreateBloks';
import { DataCard } from '../DataCard';
import { type AnimationType } from '../Animate';
import { type HeadingType } from '../Typography';
import { paletteAccentColors, type PaletteAccentHexColorType } from '@/utilities/colorPalettePlugin';
import { getNumBloks } from '@/utilities/getNumBloks';

export type SbDataCardProps = {
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
    animation?: AnimationType;
    delay?: number;
  };
};

export const SbDataCard = ({
  blok: {
    heading,
    headingLevel,
    isSmallHeading,
    content,
    cta,
    barColor: { value } = {},
    animation,
    delay,
  },
  blok,
}: SbDataCardProps) => {
  const Content = !!getNumBloks(content) ? <CreateBloks blokSection={content} /> : undefined;
  const Cta = !!getNumBloks(cta) ? <CreateBloks blokSection={cta} /> : undefined;

  return (
    <DataCard
      {...storyblokEditable(blok)}
      heading={heading}
      headingLevel={headingLevel}
      isSmallHeading={isSmallHeading}
      barColor={paletteAccentColors[value]}
      cta={Cta}
      animation={animation}
      delay={delay}
    >
      {Content}
    </DataCard>
  );
};
