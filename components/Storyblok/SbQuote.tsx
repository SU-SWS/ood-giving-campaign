import { storyblokEditable } from '@storyblok/react/rsc';
import { Quote, type QuoteVerticalAlignType } from '@/components/Quote';
import { type AnimationType } from '@/components/Animate';
import {
  paletteAccentColors,
  type PaletteAccentHexColorType,
} from '@/utilities/colorPalettePlugin';

export type SbQuoteProps = {
  blok: {
    _uid: string;
    teaser?: string;
    body?: string;
    addDarkOverlay?: boolean;
    isMinimal?: boolean;
    isLargeTeaser?: boolean;
    isLargeBody?: boolean;
    source?: string;
    barColor?: {
      value?: PaletteAccentHexColorType;
    }
    quoteOnRight?: boolean;
    quoteColor?: {
      value?: PaletteAccentHexColorType;
    }
    verticalAlign?: QuoteVerticalAlignType;
    animation?: AnimationType;
    delay?: number;
  };
};

export const SbQuote = ({
  blok: {
    teaser,
    body,
    addDarkOverlay,
    isMinimal,
    isLargeTeaser,
    isLargeBody,
    source,
    barColor: { value } = {},
    quoteOnRight,
    quoteColor: { value: quoteColorValue } = {},
    verticalAlign,
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
      addDarkOverlay={addDarkOverlay}
      isMinimal={isMinimal}
      isLargeTeaser={isLargeTeaser}
      isLargeBody={isLargeBody}
      source={source}
      barColor={paletteAccentColors[value]}
      barOnLeft={quoteOnRight}
      quoteColor={paletteAccentColors[quoteColorValue]}
      verticalAlign={verticalAlign}
      animation={animation}
      delay={delay}
    />
  );
};
