import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { CreateBloks } from '@/components/CreateBloks';
import { BasicCard } from '@/components/BasicCard';
import { RichText } from '@/components/RichText';
import { type AnimationType } from '@/components/Animate';
import { type HeadingType } from '@/components/Typography';
import { paletteAccentColors, type PaletteAccentHexColorType } from '@/utilities/colorPalettePlugin';
import { getNumBloks } from '@/utilities/getNumBloks';
import { hasRichText } from '@/utilities/hasRichText';
import { type ImageAspectRatioType } from '@/utilities/datasource';
import { type SbImageType } from './Storyblok.types';

export type SbBasicCardProps = {
  blok: {
    _uid: string;
    id: string;
    superhead?: string;
    heading?: string;
    headingLevel?: HeadingType;
    isSmallHeading?: boolean;
    body: StoryblokRichtext;
    isLightText?: boolean;
    isStretched?: boolean;
    cta?: SbBlokData[];
    textureBar?: SbBlokData[];
    image?: SbImageType;
    imageAspectRatio?: ImageAspectRatioType;
    bgColor?: {
      value?: PaletteAccentHexColorType;
    }
    animation?: AnimationType;
    delay?: number;
  };
};

export const SbBasicCard = ({
  blok: {
    id,
    superhead,
    heading,
    headingLevel,
    isSmallHeading,
    isStretched,
    isLightText,
    body,
    image: { filename, focus } = {},
    imageAspectRatio = '3x2',
    cta,
    textureBar,
    bgColor: { value: bgColorValue } = {},
    animation,
    delay,
  },
  blok,
}: SbBasicCardProps) => {
  const Body = hasRichText(body) ?
    <RichText
      wysiwyg={body}
      baseFontSize="card"
      textColor={isLightText ? 'white' : 'black'}
      linkColor = {isLightText ? 'white' : 'unset'}
    />
    : undefined;
  const Cta = !!getNumBloks(cta) ? <CreateBloks blokSection={cta} /> : undefined;
  const TextureBar = !!getNumBloks(textureBar) ? <CreateBloks blokSection={textureBar} /> : undefined;

  return (
    <BasicCard
      {...storyblokEditable(blok)}
      id={id}
      superhead={superhead}
      heading={heading}
      headingLevel={headingLevel || 'h3'}
      isSmallHeading={isSmallHeading}
      isStretched={isStretched}
      isLightText={isLightText}
      imageSrc={filename}
      imageFocus={focus}
      imageAspectRatio={imageAspectRatio}
      bgColor={paletteAccentColors[bgColorValue]}
      cta={Cta}
      textureBar={TextureBar}
      body={Body}
      animation={animation}
      delay={delay}
    />
  );
};
