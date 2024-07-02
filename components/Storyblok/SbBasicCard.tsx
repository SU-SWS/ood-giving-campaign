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
    isLightText?: boolean;
    cta?: SbBlokData[];
    textureBar?: SbBlokData[];
    image?: SbImageType;
    imageAspectRatio?: BasicCardImageAspectRatio;
    paddingTop?: PaddingType;
    isCounter?: boolean;
    counterDuration?: number;
    bgColor?: {
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
    isSmallHeading,
    isLightText,
    body,
    image: { filename, focus } = {},
    imageAspectRatio,
    cta,
    textureBar,
    paddingTop,
    bgColor: { value: bgColorValue } = {},
    animation,
    delay,
  },
  blok,
}: SbBasicCardProps) => {
  const Body = hasRichText(body) ? <RichText wysiwyg={body} textColor={isLightText ? 'white' : 'black'} /> : undefined;
  const Cta = !!getNumBloks(cta) ? <CreateBloks blokSection={cta} /> : undefined;
  const TextureBar = !!getNumBloks(textureBar) ? <CreateBloks blokSection={textureBar} /> : undefined;

  return (
    <BasicCard
      {...storyblokEditable(blok)}
      subheading={subheading}
      heading={heading}
      headingLevel={headingLevel || 'h3'}
      isSmallHeading={isSmallHeading}
      imageSrc={filename}
      imageFocus={focus}
      imageAspectRatio={imageAspectRatio}
      bgColor={paletteAccentColors[bgColorValue]}
      cta={Cta}
      textureBar={TextureBar}
      body={Body}
      paddingTop={paddingTop}
      animation={animation}
      delay={delay}
    />
  );
};
