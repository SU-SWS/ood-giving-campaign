import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { CreateBloks } from '@/components/CreateBloks';
import { RichText } from '@/components/RichText';
import { Scrollytelling } from '@/components/Scrollytelling';
import { type SbImageType } from '@/components/Storyblok/Storyblok.types';
import { type HeadingType } from '@/components/Typography';
import { hasRichText } from '@/utilities/hasRichText';
import { type MarginType } from '@/utilities/datasource';

type SbScrollytellingProps = {
  blok: {
    _uid: string;
    heading?: string;
    headingLevel?: HeadingType;
    subheading?: string;
    content?: SbBlokData[];
    caption?: StoryblokRichtext;
    bgImage?: SbImageType;
    bgImageAlt?: string;
    contentAlign?: 'left' | 'center' | 'right';
    spacingTop?: MarginType;
    spacingBottom?: MarginType;
  };
};

export const SbScrollytelling = ({
  blok: {
    heading,
    headingLevel,
    subheading,
    content,
    caption,
    bgImage: { filename: bgImageSrc, focus: bgImageFocus } = {},
    bgImageAlt,
    contentAlign,
    spacingTop,
    spacingBottom,
  },
  blok,
}: SbScrollytellingProps) => {
  const Caption = hasRichText(caption) ? <RichText textColor="black-70" wysiwyg={caption} /> : undefined;

  return (
    <Scrollytelling
      {...storyblokEditable(blok)}
      heading={heading}
      headingLevel={headingLevel}
      subheading={subheading}
      caption={Caption}
      bgImageSrc={bgImageSrc}
      bgImageFocus={bgImageFocus}
      bgImageAlt={bgImageAlt}
      contentAlign={contentAlign}
      spacingTop={spacingTop}
      spacingBottom={spacingBottom}
    >
      <CreateBloks blokSection={content} />
    </Scrollytelling>
  );
};
