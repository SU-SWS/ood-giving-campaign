import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { CreateBloks } from '@/components/CreateBloks';
import { RichText } from '@/components/RichText';
import {
  Scrollytelling,
  type OverlayType,
  type ContentAlignType,
  type ImageEntranceType,
} from '@/components/Scrollytelling';
import { type SbImageType } from '@/components/Storyblok/Storyblok.types';
import { type HeadingType } from '@/components/Typography';
import { hasRichText } from '@/utilities/hasRichText';
import { type MarginType } from '@/utilities/datasource';

type SbScrollytellingProps = {
  blok: {
    _uid: string;
    id: string;
    heading?: string;
    headingLevel?: HeadingType;
    subheading?: string;
    content?: SbBlokData[];
    caption?: StoryblokRichtext;
    bgImage?: SbImageType;
    bgImageAlt?: string;
    imageEntrance?: ImageEntranceType;
    overlay?: OverlayType;
    contentAlign?: ContentAlignType;
    spacingTop?: MarginType;
    spacingBottom?: MarginType;
    isHidden?: boolean;
  };
};

export const SbScrollytelling = ({
  blok: {
    id,
    heading,
    headingLevel,
    subheading,
    content,
    caption,
    bgImage: { filename: bgImageSrc, focus: bgImageFocus } = {},
    bgImageAlt,
    imageEntrance,
    overlay,
    contentAlign,
    spacingTop,
    spacingBottom,
    isHidden,
  },
  blok,
}: SbScrollytellingProps) => {
  if (isHidden) {
    return null;
  }

  const Caption = hasRichText(caption) ? <RichText textColor="black-70" wysiwyg={caption} /> : undefined;

  return (
    <Scrollytelling
      {...storyblokEditable(blok)}
      id={id}
      heading={heading}
      headingLevel={headingLevel}
      subheading={subheading}
      caption={Caption}
      bgImageSrc={bgImageSrc}
      bgImageFocus={bgImageFocus}
      bgImageAlt={bgImageAlt}
      imageEntrance={imageEntrance}
      overlay={overlay}
      contentAlign={contentAlign}
      spacingTop={spacingTop}
      spacingBottom={spacingBottom}
    >
      <CreateBloks blokSection={content} />
    </Scrollytelling>
  );
};
