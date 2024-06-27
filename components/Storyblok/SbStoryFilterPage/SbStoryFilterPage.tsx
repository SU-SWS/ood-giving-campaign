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
import { getNumBloks } from '@/utilities/getNumBloks';
import * as styles from './SbStoryFilterPage.styles';
import FeaturedStories from './FeaturedStories';
import LatestStories from './LatestStories';
import LatestStoriesServer from './LatestStoriesServer';
import StoriesNav from './StoriesNav';

type StoryPickerType = {
  uuid: string;
  [key: string]: any;
}

type FaturedStoryType = SbBlokData & {
  storyPicker: StoryPickerType;
}

type SbStoryFilterPageProps = {
  blok: {
    _uid: string;
    intro?: StoryblokRichtext;
    belowIntro?: SbBlokData[];
    featuredStories?: FaturedStoryType[];
    ankle?: SbBlokData[];
    mastheadPicker?: ISbStoryData[];
    heroPicker?: ISbStoryData[];
    storyListNavPicker?: ISbStoryData[];
  };
  name?: string; // The name of the Storyblok story
  slug?: string;
  storyList?: ISbStoryData[];
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
  storyList,
}: SbStoryFilterPageProps) => {
  /**
   * Extract uuid's from the featured stories into a Set.
   * The reason for using a Set in this case is its O(1) average time complexity for lookups,
   * which is more efficient than using an array for the same purpose.
   */
  const featuredStoryUUIDSet = new Set(featuredStories?.map(item => item.storyPicker.uuid));

  /**
   * Filter storyList (list of all stories with taxonomy that matches the slug of the page)
   * to exclude items with uuid that are in the featuredStoryUUIDSet,
   * ie, we remove stories that are already added as featured stories cards.
   */
  const filteredStoryList = storyList.filter(item => !featuredStoryUUIDSet.has(item.uuid));



  return (
    <div {...storyblokEditable(blok)}>
      <CreateStories stories={mastheadPicker} />
      <main id="main-content">
        <CreateStories stories={heroPicker} subheading={name !== 'Stories' ? name : ''} />
        <Container as="section" pb={10} bgColor="black" className={styles.latest}>
          <Skiplink href="#latest-stories" className={styles.skiplink}>
            Skip past story list page menu to latest stories
          </Skiplink>
          <StoriesNav storyListNavPicker={storyListNavPicker} slug={slug} name={name} />
          <FeaturedStories />
          <LatestStories>
            <LatestStoriesServer slug={slug} />
          </LatestStories>
        </Container>
        <CreateBloks blokSection={ankle} />
      </main>
    </div>
  );
};

