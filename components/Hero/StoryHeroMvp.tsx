import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
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
  bgVideoPoster: { filename: bgPosterFilename, focus: bgPosterFocus } = {},
  heroVideoWebm: { filename: webmFilename } = {},
  heroVideoMp4: { filename: mp4Filename } = {},
  heroVideoPoster: { filename: posterFilename, focus: posterFocus } = {},
  addBgBlur,
  darkOverlay,
  alt,
  caption,
  isVerticalHero = false,
  isLeftImage = false,
  isLightHero = false,
  tabColor: { value: tabColorValue } = {},
  heroTexturedBar,
  taxonomy = [],
}: StoryHeroMvpProps) => {
  const useTwoColLayout = isVerticalHero;
  const hasCaption = hasRichText(caption);
  const Caption = hasCaption ? <RichText textColor="black-70" wysiwyg={caption} className={styles.caption} /> : undefined;

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
          videoPosterFocus={posterFocus}
          isLightHero={isLightHero}
          hasCaption={hasCaption}
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
          bgVideoPosterFocus={bgPosterFocus}
          videoWebm={webmFilename}
          videoMp4={mp4Filename}
          videoPosterSrc={posterFilename}
          videoPosterFocus={posterFocus}
          bgColor={isLightHero ? 'white' : 'black'}
          addBgBlur={addBgBlur}
          darkOverlay={darkOverlay}
          imageOnLeft={isLeftImage}
          tabColor={paletteAccentColors[tabColorValue]}
          hasCaption={hasCaption}
          taxonomy={taxonomy}
        />
      )}
      {!!getNumBloks(heroTexturedBar) && (
        <CreateBloks blokSection={heroTexturedBar} />
      )}
      {hasRichText(caption) && (
        <Container
          bgColor="white"
          // id is for aria-describedby in the images since we can't use figcaption here
          id="story-hero-caption"
        >
          {Caption}
        </Container>
      )}
    </Container>
  );
};
