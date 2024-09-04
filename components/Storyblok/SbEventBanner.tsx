import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { EventBanner, type EventBannerHeadingSizeType } from '@/components/EventBanner';
import { CreateBloks } from '@/components/CreateBloks';
import { RichText } from '@/components/RichText';
import { type SbImageType, type SbDateLocationProps } from './Storyblok.types';
import { hasRichText } from '@/utilities/hasRichText';
import { getNumBloks } from '@/utilities/getNumBloks';
import { type GradientFromType, type GradientToType, type GradientViaType } from '@/utilities/datasource';

type SbEventBannerProps = {
  blok: {
    _uid: string;
    id: string;
    heading?: string;
    body: StoryblokRichtext;
    startDate?: string;
    endDate?: string;
    cta?: SbBlokData[];
    bgImage?: SbImageType;
    featuredName?: string;
    featuredImage?: SbImageType;
    isDarkTheme?: boolean;
    isSerifHeading?: boolean;
    headingSize?: EventBannerHeadingSizeType;
    gradientTop?: GradientToType;
    gradientBottom?: GradientFromType;
    gradientVia?: GradientViaType;
    isMultiDay?: boolean;
    location?: string;
    dateLocation?: SbDateLocationProps[];
    isHidden?: boolean;
  };
};

export const SbEventBanner = ({
  blok: {
    id,
    heading,
    body,
    startDate,
    endDate,
    cta,
    bgImage: { filename, focus } = {},
    featuredName,
    featuredImage: { filename: featuredImageSrc, focus: featuredImageFocus } = {},
    isDarkTheme,
    isSerifHeading,
    headingSize,
    gradientTop,
    gradientBottom,
    gradientVia,
    isMultiDay,
    location,
    dateLocation,
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
      id={id}
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
      isSerifHeading={isSerifHeading}
      headingSize={headingSize}
      gradientTop={gradientTop}
      gradientBottom={gradientBottom}
      gradientVia={gradientVia}
      isMultiDay={isMultiDay}
      location={location}
      dateLocation={dateLocation}
    />
  );
};
