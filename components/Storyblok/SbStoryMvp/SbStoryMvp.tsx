import { storyblokEditable, type SbBlokData, type ISbStoryData } from '@storyblok/react/rsc';
import { CreateBloks } from '@/components/CreateBloks';
import { CreateStories } from '@/components/CreateStories';
import { Container } from '@/components/Container';
import { SocialSharing } from '@/components/SocialSharing';
import { StoryHeroMvp, type StoryHeroMvpProps } from '@/components/Hero';
import { type InitiativesType, type ThemesType } from '@/utilities/taxonomyMaps';
import { SbAboveContent } from './SbAboveContent';
import { getNumBloks } from '@/utilities/getNumBloks';

type SbStoryMvpProps = {
  blok: {
    _uid: string;
    hideTopSocial?: boolean;
    aboveSidebar?: SbBlokData[];
    intro?: SbBlokData[];
    sidebar?: SbBlokData[];
    content?: SbBlokData[];
    ankle?: SbBlokData[];
    mastheadPicker?: ISbStoryData[];
    initiatives?: InitiativesType[];
    themes?: ThemesType[];
  } & StoryHeroMvpProps;
  slug?: string;
};

export const SbStoryMvp = ({
  blok: {
    title,
    superhead,
    customHeading,
    headingFont,
    isSmallHeading,
    byline,
    dek,
    publishedDate,
    initiatives,
    themes,
    heroVariant,
    heroBgColor,
    heroImage,
    bgImage,
    bgImageAlt,
    bgVideoWebm,
    bgVideoMp4,
    bgVideoPoster,
    heroVideoWebm,
    heroVideoMp4,
    heroVideoPoster,
    addBgBlur,
    darkOverlay,
    alt,
    caption,
    isVerticalHero,
    isLeftImage,
    isLightHero,
    tabColor,
    heroTexturedBar,
    // page regions
    hideTopSocial,
    aboveSidebar,
    intro,
    sidebar,
    content,
    ankle,
    mastheadPicker,
  },
  blok,
  slug,
}: SbStoryMvpProps) => {
  const showAboveContent = !!getNumBloks(aboveSidebar) || !!getNumBloks(intro) || !!getNumBloks(sidebar);
  const taxonomyArray = [...initiatives, ...themes];

  return (
    <div {...storyblokEditable(blok)}>
      <CreateStories stories={mastheadPicker} isLight={isLightHero} />
      <main id="main-content">
        <Container as="article" width="full" pb={9}>
          <StoryHeroMvp
            title={title}
            superhead={superhead}
            customHeading={customHeading}
            headingFont={headingFont}
            isSmallHeading={isSmallHeading}
            dek={dek}
            byline={byline}
            publishedDate={publishedDate}
            heroVariant={heroVariant}
            heroBgColor={heroBgColor}
            heroImage={heroImage}
            bgImage={bgImage}
            bgImageAlt={bgImageAlt}
            bgVideoWebm={bgVideoWebm}
            bgVideoMp4={bgVideoMp4}
            bgVideoPoster={bgVideoPoster}
            heroVideoMp4={heroVideoMp4}
            heroVideoWebm={heroVideoWebm}
            heroVideoPoster={heroVideoPoster}
            addBgBlur={addBgBlur}
            darkOverlay={darkOverlay}
            isLeftImage={isLeftImage}
            alt={alt}
            caption={caption}
            isLightHero={isLightHero}
            isVerticalHero={isVerticalHero}
            tabColor={tabColor}
            taxonomy={taxonomyArray}
            heroTexturedBar={heroTexturedBar}
          />
          {!hideTopSocial && !!slug && <SocialSharing title={title} slug={slug} isTop />}
          {showAboveContent && (
            <SbAboveContent aboveSidebar={aboveSidebar} intro={intro} sidebar={sidebar} />
          )}
          <CreateBloks blokSection={content} />
          {!!slug && <SocialSharing title={title} slug={slug} />}
        </Container>
        <CreateBloks blokSection={ankle} />
      </main>
    </div>
  );
};

