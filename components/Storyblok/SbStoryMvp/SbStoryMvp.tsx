import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { CreateBloks } from '@/components/CreateBloks';
import { Container } from '@/components/Container';
import { Masthead } from '@/components/Masthead';
import { SocialSharing } from '@/components/SocialSharing';
import { StoryHeroMvp, type StoryHeroMvpProps } from '@/components/Hero';
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
    heroVariant,
    heroBgColor,
    heroImage,
    bgImage,
    bgImageAlt,
    addBgBlur,
    darkOverlay,
    alt,
    caption,
    isVerticalHero,
    isLeftImage,
    isLightHero,
    tabColor,
    topics,
    heroTexturedBar,
    // page regions
    hideTopSocial,
    aboveSidebar,
    intro,
    sidebar,
    content,
    ankle,
  },
  blok,
  slug,
}: SbStoryMvpProps) => {
  const showAboveContent = !!getNumBloks(aboveSidebar) || !!getNumBloks(intro) || !!getNumBloks(sidebar);

  return (
    <div {...storyblokEditable(blok)}>
      <Masthead isLight={isLightHero} />
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
            addBgBlur={addBgBlur}
            darkOverlay={darkOverlay}
            isLeftImage={isLeftImage}
            alt={alt}
            caption={caption}
            isLightHero={isLightHero}
            isVerticalHero={isVerticalHero}
            tabColor={tabColor}
            topics={topics}
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

