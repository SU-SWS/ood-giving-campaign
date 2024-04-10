import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { MomentPoster } from '@/components/MomentPoster';
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

type SbMomentPosterProps = {
  blok: {
    _uid: string;
    textBefore?: string;
    textAfter?: string;
    textNewRow?: string;
    subhead?: string;
    body: StoryblokRichtext;
    cta?: SbBlokData[];
    bgImage?: SbImageType;
    thumbnail?: SbImageType;
    isDarkTheme?: boolean;
    gradientTop?: GradientToType;
    gradientBottom?: GradientFromType;
    gradientVia?: GradientViaType;
    bgBlur?: BgBlurType;
    isStackedCtas?: boolean;
    isHidden?: boolean;
  };
};

export const SbMomentPoster = ({
  blok: {
    textBefore,
    textAfter,
    textNewRow,
    subhead,
    body,
    cta,
    bgImage: { filename, focus } = {},
    thumbnail: { filename: thumbnailFilename, focus: thumbnailFocus } = {},
    isDarkTheme,
    gradientTop,
    gradientBottom,
    gradientVia,
    bgBlur,
    isStackedCtas,
    isHidden,
  },
  blok,
}: SbMomentPosterProps) => {
  if (isHidden) {
    return null;
  }

  const Cta = !!getNumBloks(cta) ? <CreateBloks blokSection={cta} /> : undefined;
  const Body = hasRichText(body) ? <RichText wysiwyg={body} textColor={isDarkTheme ? 'white' : 'black'} /> : undefined;

  return (
    <MomentPoster
      {...storyblokEditable(blok)}
      textBefore={textBefore}
      textAfter={textAfter}
      textNewRow={textNewRow}
      subhead={subhead}
      body={Body}
      cta={Cta}
      bgImageSrc={filename}
      bgImageFocus={focus}
      thumbnailSrc={thumbnailFilename}
      thumbnailFocus={thumbnailFocus}
      isDarkTheme={isDarkTheme}
      gradientTop={gradientTop}
      gradientBottom={gradientBottom}
      gradientVia={gradientVia}
      bgBlur={bgBlur}
      isStackedCtas={isStackedCtas}
    />
  );
};
