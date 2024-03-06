import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { CreateBloks } from '@/components/CreateBloks';
import { DataCard } from '@/components/DataCard';
import { RichText } from '@/components/RichText';
import { type AnimationType } from '@/components/Animate';
import { type HeadingType } from '@/components/Typography';
import { paletteAccentColors, type PaletteAccentHexColorType } from '@/utilities/colorPalettePlugin';
import { type PaddingType } from '@/utilities/datasource';
import { getNumBloks } from '@/utilities/getNumBloks';
import { hasRichText } from '@/utilities/hasRichText';

export type SbDataCardProps = {
  blok: {
    _uid: string;
    heading?: string;
    headingLevel?: HeadingType;
    isSmallHeading?: boolean;
    superhead?: string;
    body: StoryblokRichtext;
    cta?: SbBlokData[];
    paddingTop?: PaddingType;
    isDarkTheme?: boolean;
    isCounter?: boolean;
    counterDuration?: number;
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
    body,
    cta,
    paddingTop,
    isDarkTheme,
    isCounter,
    counterDuration,
    barColor: { value } = {},
    animation,
    delay,
  },
  blok,
}: SbDataCardProps) => {
  const Body = hasRichText(body) ? <RichText wysiwyg={body} textColor={isDarkTheme ? 'white' : 'black'} /> : undefined;
  const Cta = !!getNumBloks(cta) ? <CreateBloks blokSection={cta} /> : undefined;

  return (
    <DataCard
      {...storyblokEditable(blok)}
      heading={heading}
      headingLevel={headingLevel}
      isSmallHeading={isSmallHeading}
      isDarkTheme={isDarkTheme}
      isCounter={isCounter}
      counterDuration={counterDuration}
      barColor={paletteAccentColors[value]}
      cta={Cta}
      body={Body}
      paddingTop={paddingTop}
      animation={animation}
      delay={delay}
    />
  );
};
