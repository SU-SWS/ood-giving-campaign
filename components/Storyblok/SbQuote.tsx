import { storyblokEditable } from '@storyblok/react/rsc';
import { Quote } from '../Quote';
import { type AnimationType } from '../Animate';
import { paletteAccentColors, type PaletteAccentHexColorType } from '@/utilities/colorPalettePlugin';

export type SbQuoteProps = {
  blok: {
    _uid: string;
    teaser?: string;
    body?: string;
    source?: string;
    barColor?: {
      value?: PaletteAccentHexColorType;
    }
    quoteOnRight?: boolean;
    bgColor?: {
      value?: PaletteAccentHexColorType;
    }
    animation?: AnimationType;
    delay?: number;
  };
};

export const SbQuote = ({
  blok: {
    teaser,
    body,
    source,
    barColor: { value } = {},
    quoteOnRight,
    bgColor: { value: bgColorValue } = {},
    animation,
    delay,
  },
  blok,
}: SbQuoteProps) => {
  return (
    <Quote
      {...storyblokEditable(blok)}
      teaser={teaser}
      body={body}
      source={source}
      barColor={paletteAccentColors[value]}
      quoteOnRight={quoteOnRight}
      bgColor={paletteAccentColors[bgColorValue]}
    />
  );
};
