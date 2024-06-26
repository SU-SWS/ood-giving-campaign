import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { EventBanner } from '@/components/EventBanner';
import { CreateBloks } from '@/components/CreateBloks';
import { RichText } from '@/components/RichText';
import { type SbImageType } from './Storyblok.types';
import { hasRichText } from '@/utilities/hasRichText';
import { getNumBloks } from '@/utilities/getNumBloks';
import {
  type GradientFromType,
  type GradientToType,
  type GradientViaType,
  BgBlurType,
} from '@/utilities/datasource';

type SbEventBannerProps = {
  blok: {
    _uid: string;
    heading?: string;
    body: StoryblokRichtext;
    startDate?: string;
    endDate?: string;
    cta?: SbBlokData[];
    bgImage?: SbImageType;
    featuredName?: string;
    featuredImage?: SbImageType;
    isDarkTheme?: boolean;
    gradientTop?: GradientToType;
    gradientBottom?: GradientFromType;
    gradientVia?: GradientViaType;
    isHidden?: boolean;
  };
};

export const SbEventBanner = ({
  blok: {
    heading,
    body,
    startDate,
    endDate,
    cta,
    bgImage: { filename, focus } = {},
    featuredName,
    featuredImage: { filename: featuredImageSrc, focus: featuredImageFocus } = {},
    isDarkTheme,
    gradientTop,
    gradientBottom,
    gradientVia,
    isHidden,
  },
  blok,
}: SbEventBannerProps) => {
  if (isHidden) {
    return null;
  }

  const Cta = !!getNumBloks(cta) ? <CreateBloks blokSection={cta} /> : undefined;
  const Body = hasRichText(body) ? <RichText wysiwyg={body} textColor={isDarkTheme ? 'white' : 'black'} /> : undefined;

  return (
    <EventBanner
      {...storyblokEditable(blok)}
      heading={heading}
      body={Body}
      startDate={startDate}
      endDate={endDate}
      cta={Cta}
      bgImageSrc={filename}
      bgImageFocus={focus}
      featuredName={featuredName}
      featuredImageSrc={featuredImageSrc}
      featuredImageFocus={featuredImageFocus}
      isDarkTheme={isDarkTheme}
      gradientTop={gradientTop}
      gradientBottom={gradientBottom}
      gradientVia={gradientVia}
    />
  );
};
