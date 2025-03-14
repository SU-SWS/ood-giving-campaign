import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { VerticalPoster } from '@/components/VerticalPoster';
import { CreateBloks } from '@/components/CreateBloks';
import { type BgColorType } from '@/components/Container';
import { RichText } from '@/components/RichText';
import { type HeadingType } from '@/components/Typography';
import { hasRichText } from '@/utilities/hasRichText';
import { getNumBloks } from '@/utilities/getNumBloks';
import { type SbImageType, type SbTypographyProps } from './Storyblok.types';

type SbVerticalPosterProps = {
  blok: {
    _uid: string;
    heading?: string;
    customHeading?: SbTypographyProps[];
    headingLevel?: HeadingType;
    isSmallHeading?: boolean;
    isMaskedHeading?: boolean;
    subheading?: string;
    imageOnLeft?: boolean;
    body: StoryblokRichtext;
    byline?: string;
    publishedDate?: string;
    cta?: SbBlokData[];
    image?: SbImageType;
    caption?: StoryblokRichtext;
    alt?: string;
    bgImage?: SbImageType;
    bgAlt?: string;
    isParallax?: boolean;
    bgColor?: BgColorType;
    isHidden?: boolean;
  }
};

export const SbVerticalPoster = ({
  blok: {
    heading,
    customHeading,
    headingLevel,
    isSmallHeading,
    isMaskedHeading,
    subheading,
    imageOnLeft,
    body,
    byline,
    publishedDate,
    cta,
    image: { filename, focus } = {},
    caption,
    alt,
    bgImage: { filename: bgImageSrc, focus: bgImageFocus } = {},
    bgAlt,
    isParallax,
    bgColor,
    isHidden,
  },
  blok,
}: SbVerticalPosterProps) => {
  if (isHidden) {
    return null;
  }

  const Cta = !!getNumBloks(cta) ? <CreateBloks blokSection={cta} /> : undefined;
  const Body = hasRichText(body) ? <RichText textAlign="center" textColor={bgColor === 'black' ? 'white' : 'black'} wysiwyg={body} /> : undefined;
  const Caption = hasRichText(caption) ? <RichText textColor="black-70" wysiwyg={caption} /> : undefined;

  return (
    <VerticalPoster
      {...storyblokEditable(blok)}
      heading={heading}
      customHeading={customHeading}
      headingLevel={headingLevel}
      isSmallHeading={isSmallHeading}
      isMaskedHeading={isMaskedHeading}
      subheading={subheading}
      imageOnLeft={imageOnLeft}
      body={Body}
      byline={byline}
      publishedDate={publishedDate}
      cta={Cta}
      caption={Caption}
      imageSrc={filename}
      imageFocus={focus}
      alt={alt}
      bgImageSrc={bgImageSrc}
      bgImageFocus={bgImageFocus}
      bgAlt={bgAlt}
      isParallax={isParallax}
      bgColor={bgColor}
    />
  );
};
