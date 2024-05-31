import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { CreateBloks } from '@/components/CreateBloks';
import { BasicCard } from '@/components/BasicCard';
import { BasicCardImageAspectRatio } from '../BasicCard/BasicCard.styles';
import { RichText } from '@/components/RichText';
import { type AnimationType } from '@/components/Animate';
import { type HeadingType } from '@/components/Typography';
import { paletteAccentColors, type PaletteAccentHexColorType } from '@/utilities/colorPalettePlugin';
import { type PaddingType } from '@/utilities/datasource';
import { getNumBloks } from '@/utilities/getNumBloks';
import { hasRichText } from '@/utilities/hasRichText';
import { type SbImageType } from './Storyblok.types';

export type SbBasicCardProps = {
  blok: {
    _uid: string;
    subheading?: string;
    heading?: string;
    headingLevel?: HeadingType;
    isSmallHeading?: boolean;
    superhead?: string;
    body: StoryblokRichtext;
    cta?: SbBlokData[];
    image?: SbImageType;
    imageAspectRatio?: BasicCardImageAspectRatio;
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

export const SbBasicCard = ({
  blok: {
    subheading,
    heading,
    headingLevel,
    body,
    image: { filename, focus } = {},
    imageAspectRatio,
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
}: SbBasicCardProps) => {
  const Body = hasRichText(body) ? <RichText wysiwyg={body} textColor={isDarkTheme ? 'white' : 'black'} /> : undefined;
  const Cta = !!getNumBloks(cta) ? <CreateBloks blokSection={cta} /> : undefined;

  return (
    <BasicCard
      {...storyblokEditable(blok)}
      subheading={subheading}
      heading={heading}
      headingLevel={headingLevel}
      imageSrc={filename}
      imageFocus={focus}
      imageAspectRatio={imageAspectRatio}
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
