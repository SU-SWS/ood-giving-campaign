import { storyblokEditable, type SbBlokData, type ISbStoryData } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { Container } from '@/components/Container';
import { CreateBloks } from '@/components/CreateBloks';
import { CreateStories } from '@/components/CreateStories';
import { Grid } from '@/components/Grid';
import { Heading } from '@/components/Typography';
import { RichText } from '@/components/RichText';
import { Skiplink } from '@/components/SkipLink';
import { StoryCard } from '@/components/StoryCard';
import { hasRichText } from '@/utilities/hasRichText';
import { paletteAccentColors } from '@/utilities/colorPalettePlugin';
import * as styles from './SbStoryFilterPage.styles';


type SbStoryFilterPageProps = {
  blok: {
    _uid: string;
    intro?: StoryblokRichtext;
    belowIntro?: SbBlokData[];
    featuredStories?: SbBlokData[];
    ankle?: SbBlokData[];
    mastheadPicker?: ISbStoryData[];
    heroPicker?: ISbStoryData[];
    storyListNavPicker?: ISbStoryData[];
  };
  name?: string; // The name of the Storyblok story
  slug?: string;
  stories?: ISbStoryData[];
};

export const SbStoryFilterPage = ({
  blok: {
    intro,
    belowIntro,
    featuredStories,
    ankle,
    mastheadPicker,
    heroPicker,
    storyListNavPicker,
  },
  blok,
  name,
  slug,
  stories,
}: SbStoryFilterPageProps) => {

  return (
    <div {...storyblokEditable(blok)}>
      <CreateStories stories={mastheadPicker} />
      <main id="main-content">
        <CreateStories stories={heroPicker} subheading={name !== 'Stories' ? name : ''} />
        <Container bgColor="black" className={styles.latest}>
          <Skiplink href="#latest-stories" className={styles.skiplink}>
            Skip past story list page menu to latest stories
          </Skiplink>
          <CreateStories stories={storyListNavPicker} fullSlug={slug} name={name} />
          <Heading font="druk" size="f5" color="white" id="latest-stories">Latest stories</Heading>
            {hasRichText(intro) && <RichText wysiwyg={intro} textColor="white" className={styles.intro} />}
          <CreateBloks blokSection={belowIntro} />
          <Grid py={6} isList className="gap-y-45 md:gap-y-90 2xl:gap-y-95">
            <CreateBloks blokSection={featuredStories} isListItems />
          </Grid>
          <Grid gap="card" py={6} as="ul" className="list-unstyled">
            {!!stories?.length && (
              stories.map((story) => (
                <li key={story.content._uid}>
                  <StoryCard
                    isListView
                    isDark
                    heading={story.content.cardTitle || story.content.title}
                    headingLevel="h3"
                    body={story.content.cardTeaser || story.content.dek}
                    imageSrc={story.content.cardImage.filename || story.content.heroImage.filename || story.content.bgImage.filename }
                    imageFocus={story.content.cardImage.focus || story.content.heroImage.focus ||  story.content.bgImage.focus}
                    tabColor={paletteAccentColors[story.content.tabColor.value]}
                    href={`/${story.full_slug}`}
                    animation="slideUp"
                    taxonomy={[...story.content.initiatives, ...story.content.themes]}
                  />
                </li>
              ))
            )}
          </Grid>
        </Container>
        <CreateBloks blokSection={ankle} />
      </main>
    </div>
  );
};

