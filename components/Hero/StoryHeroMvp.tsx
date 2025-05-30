import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { Caption } from '@/components/Media/Caption';
import { Container } from '@/components/Container';
import { BlurryPoster } from '@/components/BlurryPoster';
import { CreateBloks } from '@/components/CreateBloks';
import { RichText } from '@/components/RichText';
import { StoryHeroStacked } from '@/components/Hero/StoryHeroStacked';
import { type SbImageType, type SbTypographyProps, type SbColorPickerType } from '@/components/Storyblok/Storyblok.types';
import { type SbBlokData } from '@storyblok/react/rsc';
import { paletteAccentColors, type PaletteAccentHexColorType } from '@/utilities/colorPalettePlugin';
import { getNumBloks } from '@/utilities/getNumBloks';
import { hasRichText } from '@/utilities/hasRichText';
import { type HeroOverlayType } from '@/utilities/datasource';
import { type TaxonomyType } from '@/utilities/taxonomyMaps';
import * as styles from './StoryHeroMvp.styles';

export type StoryHeroMvpProps = {
  title: string;
  superhead?: string;
  customHeading?: SbTypographyProps[];
  headingFont?: 'serif' | 'druk';
  isSmallHeading?: boolean;
  byline?: string;
  publishedDate?: string;
  dek?: string;
  heroVariant?: 'default' | 'stacked';
  heroBgColor?: SbColorPickerType;
  heroImage?: SbImageType;
  bgImage?: SbImageType;
  bgImageAlt?: string;
  bgVideoWebm?: SbImageType;
  bgVideoMp4?: SbImageType;
  bgVideoPoster?: SbImageType;
  heroVideoWebm?: SbImageType;
  heroVideoMp4?: SbImageType;
  heroVideoPoster?: SbImageType;
  addBgBlur?: boolean;
  darkOverlay?: HeroOverlayType;
  alt?: string;
  caption?: StoryblokRichtext;
  isDarkCaptionBg?: boolean;
  isVerticalHero?: boolean;
  isLeftImage?: boolean;
  isLightHero?: boolean;
  tabColor?: {
    value?: PaletteAccentHexColorType;
  }
  heroTexturedBar?: SbBlokData[];
  taxonomy?: TaxonomyType[];
};

export const StoryHeroMvp = ({
  title,
  superhead,
  customHeading,
  headingFont,
  isSmallHeading,
  byline,
  dek,
  publishedDate,
  heroVariant,
  heroBgColor: { color: bgHexColor } = {},
  heroImage: { filename, focus } = {},
  bgImage: { filename: bgImageSrc, focus: bgImageFocus } = {},
  bgImageAlt,
  bgVideoWebm: { filename: bgWebmFilename } = {},
  bgVideoMp4: { filename: bgMp4Filename } = {},
  bgVideoPoster: { filename: bgPosterFilename } = {},
  heroVideoWebm: { filename: webmFilename } = {},
  heroVideoMp4: { filename: mp4Filename } = {},
  heroVideoPoster: { filename: posterFilename } = {},
  addBgBlur,
  darkOverlay,
  alt,
  caption,
  isDarkCaptionBg,
  isVerticalHero = false,
  isLeftImage = false,
  isLightHero = false,
  tabColor: { value: tabColorValue } = {},
  heroTexturedBar,
  taxonomy = [],
}: StoryHeroMvpProps) => {
  const useTwoColLayout = isVerticalHero;
  const CaptionText = hasRichText(caption) ?
    <RichText
      textColor={isDarkCaptionBg ? 'white' : 'black-70'}
      linkColor={isDarkCaptionBg ? 'digital-red-xlight' : 'unset'}
      wysiwyg={caption}
    />
    : undefined;

  return (
    <Container
      as="header"
      width="full"
      className={styles.root}
    >
      {heroVariant === 'stacked' ? (
        <StoryHeroStacked
          title={title}
          superhead={superhead}
          headingFont={headingFont}
          isSmallHeading={isSmallHeading}
          dek={dek}
          byline={byline}
          publishedDate={publishedDate}
          heroBgColor={bgHexColor}
          imageSrc={filename}
          imageFocus={focus}
          alt={alt}
          videoWebm={webmFilename}
          videoMp4={mp4Filename}
          videoPosterSrc={posterFilename}
          isLightHero={isLightHero}
          taxonomy={taxonomy}
        />
      ) : (
        <BlurryPoster
          type="hero"
          isTwoCol={useTwoColLayout}
          heading={title}
          superhead={superhead}
          customHeading={customHeading}
          headingLevel="h1"
          headingFont={headingFont === 'druk' ? 'druk' : 'serif'}
          isSmallHeading={isSmallHeading}
          byline={byline}
          publishedDate={publishedDate}
          body={dek}
          imageSrc={filename}
          imageFocus={focus}
          alt={alt}
          bgImageSrc={bgImageSrc}
          bgImageFocus={bgImageFocus}
          bgImageAlt={bgImageAlt}
          bgVideoWebm={bgWebmFilename}
          bgVideoMp4={bgMp4Filename}
          bgVideoPosterSrc={bgPosterFilename}
          videoWebm={webmFilename}
          videoMp4={mp4Filename}
          videoPosterSrc={posterFilename}
          bgColor={isLightHero ? 'white' : 'black'}
          addBgBlur={addBgBlur}
          darkOverlay={darkOverlay}
          imageOnLeft={isLeftImage}
          tabColor={paletteAccentColors[tabColorValue]}
          taxonomy={taxonomy}
        />
      )}
      {!!getNumBloks(heroTexturedBar) && (
        <CreateBloks blokSection={heroTexturedBar} />
      )}
      {hasRichText(caption) && (
        <Caption as="div" caption={CaptionText} isCaptionInset />
      )}
    </Container>
  );
};
