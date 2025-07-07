import { storyblokEditable, type SbBlokData, type ISbStoryData } from '@storyblok/react/rsc';
import { CreateBloks } from '@/components/CreateBloks';
import { CreateStories } from '@/components/CreateStories';
import { Container } from '@/components/Container';
import { SocialSharing } from '@/components/SocialSharing';
import { StoryHeroMvp, type StoryHeroMvpProps } from '@/components/Hero';
import { type InitiativesType, type SchoolsType, type ThemesType } from '@/utilities/taxonomyMaps';
import { SbAboveContent } from './SbAboveContent';
import { getNumBloks } from '@/utilities/getNumBloks';

type SbStoryMvpProps = {
  blok: {
    _uid: string;
    bgColor?: 'black' | 'white';
    hideTopSocial?: boolean;
    belowHero?: SbBlokData[];
    aboveSidebar?: SbBlokData[];
    intro?: SbBlokData[];
    sidebar?: SbBlokData[];
    content?: SbBlokData[];
    ankle?: SbBlokData[];
    mastheadPicker?: ISbStoryData[];
    initiatives?: InitiativesType[];
    schools?: SchoolsType[];
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
    initiatives = [],
    schools = [],
    themes = [],
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
    bgColor,
    // page regions
    belowHero,
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
  const taxonomyArray = [...initiatives, ...themes, ...schools];

  return (
    <div {...storyblokEditable(blok)}>
      <CreateStories stories={mastheadPicker} isLight={isLightHero} />
      <main id="main-content">
        <Container as="article" bgColor={bgColor} width="full" pb={9}>
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
            isDarkCaptionBg={bgColor === 'black'}
            isLightHero={isLightHero}
            isVerticalHero={isVerticalHero}
            tabColor={tabColor}
            taxonomy={taxonomyArray}
            belowHero={belowHero}
            heroTexturedBar={heroTexturedBar}
          />
          {!hideTopSocial && !!slug && <SocialSharing isDark={bgColor === 'black'} title={title} slug={slug} isTop />}
          {showAboveContent && (
            <SbAboveContent aboveSidebar={aboveSidebar} intro={intro} sidebar={sidebar} />
          )}
          <CreateBloks blokSection={content} />
          {!!slug && <SocialSharing isDark={bgColor === 'black'} title={title} slug={slug} />}
        </Container>
        <CreateBloks blokSection={ankle} />
      </main>
    </div>
  );
};

