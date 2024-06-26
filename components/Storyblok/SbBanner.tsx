import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { Banner } from '../Banner';
import { CreateBloks } from '../CreateBloks';
import { RichText } from '../RichText';
import { type SbImageType } from './Storyblok.types';
import { type BgTextColorPairBlackWhiteType } from '@/utilities/datasource';
import { hasRichText } from '@/utilities/hasRichText';
import { getNumBloks } from '@/utilities/getNumBloks';

type SbBannerProps = {
  blok: {
    _uid: string;
    heading?: string;
    isSmallHeading?: boolean;
    body: StoryblokRichtext;
    cta?: SbBlokData[];
    image?: SbImageType;
    bgColor?: BgTextColorPairBlackWhiteType;
    isHidden?: boolean;
  };
};

export const SbBanner = ({
  blok: {
    heading,
    isSmallHeading,
    body,
    cta,
    image: { filename, focus } = {},
    bgColor,
    isHidden,
  },
  blok,
}: SbBannerProps) => {
  if (isHidden) {
    return null;
  }

  const Cta = !!getNumBloks(cta) ? <CreateBloks blokSection={cta} /> : undefined;
  const Body = hasRichText(body) ? <RichText wysiwyg={body} textColor={bgColor === 'black' ? 'white' : 'black'} /> : undefined;

  return (
    <Banner
      {...storyblokEditable(blok)}
      heading={heading}
      isSmallHeading={isSmallHeading}
      body={Body}
      cta={Cta}
      imageSrc={filename}
      imageFocus={focus}
      bgColor={bgColor}
    />
  );
};
