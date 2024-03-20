import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { VerticalPoster } from '@/components/VerticalPoster';
import { CreateBloks } from '@/components/CreateBloks';
import { RichText } from '@/components/RichText';
import { type HeadingType } from '../Typography';
import { hasRichText } from '@/utilities/hasRichText';
import { type SbImageType, type SbTypographyProps } from './Storyblok.types';

type SbVerticalPosterProps = {
  blok: {
    _uid: string;
    heading?: string;
    customHeading?: SbTypographyProps[];
    headingLevel?: HeadingType;
    isSmallHeading?: boolean;
    subheading?: string;
    imageOnLeft?: boolean;
    body: StoryblokRichtext;
    byline?: string;
    publishedDate?: string;
    cta?: SbBlokData[];
    image?: SbImageType;
    bgImage?: SbImageType;
  }
};

export const SbVerticalPoster = ({
  blok: {
    heading,
    customHeading,
    headingLevel,
    isSmallHeading,
    subheading,
    imageOnLeft,
    body,
    byline,
    publishedDate,
    cta,
    image: { filename, focus } = {},
    bgImage: { filename: bgImageSrc, focus: bgImageFocus } = {},
  },
  blok,
}: SbVerticalPosterProps) => {
  const Cta = <CreateBloks blokSection={cta} />;
  const Body = hasRichText(body) ? <RichText textAlign="center" wysiwyg={body} /> : undefined;

  return (
    <VerticalPoster
      {...storyblokEditable(blok)}
      heading={heading}
      customHeading={customHeading}
      headingLevel={headingLevel}
      isSmallHeading={isSmallHeading}
      subheading={subheading}
      imageOnLeft={imageOnLeft}
      body={Body}
      byline={byline}
      publishedDate={publishedDate}
      cta={Cta}
      imageSrc={filename}
      imageFocus={focus}
      bgImageSrc={bgImageSrc}
      bgImageFocus={bgImageFocus}
    />
  );
};
