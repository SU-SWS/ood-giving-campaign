import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { CreateBloks } from '@/components/CreateBloks';
import { Scrollytelling } from '@/components/Scrollytelling';
import { type SbImageType } from './Storyblok.types';
import { type HeadingType } from '../Typography';
import { type MarginType } from '@/utilities/datasource';

type SbScrollytellingProps = {
  blok: {
    _uid: string;
    heading?: string;
    headingLevel?: HeadingType;
    subheading?: string;
    content?: SbBlokData[];
    caption?: string;
    bgImage?: SbImageType;
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
    contentAlign,
    spacingTop,
    spacingBottom,
  },
  blok,
}: SbScrollytellingProps) => {
  return (
    <Scrollytelling
      {...storyblokEditable(blok)}
      heading={heading}
      headingLevel={headingLevel}
      subheading={subheading}
      caption={caption}
      bgImageSrc={bgImageSrc}
      bgImageFocus={bgImageFocus}
      contentAlign={contentAlign}
      spacingTop={spacingTop}
      spacingBottom={spacingBottom}
    >
      <CreateBloks blokSection={content} />
    </Scrollytelling>
  );
};
