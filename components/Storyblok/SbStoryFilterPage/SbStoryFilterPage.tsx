import { storyblokEditable, type SbBlokData, type ISbStoryData } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { CreateBloks } from '@/components/CreateBloks';
import { CreateStories } from '@/components/CreateStories';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Typography';
import { RichText } from '@/components/RichText';
import { hasRichText } from '@/utilities/hasRichText';
import * as styles from './SbStoryFilterPage.styles';


type SbStoryFilterPageProps = {
  blok: {
    _uid: string;
    intro?: StoryblokRichtext;
    belowIntro?: SbBlokData[];
    ankle?: SbBlokData[];
    mastheadPicker?: ISbStoryData[];
    heroPicker?: ISbStoryData[];
    storyListNavPicker?: ISbStoryData[];
  };
  name?: string; // The name of the Storyblok story
  slug?: string;
};

export const SbStoryFilterPage = ({
  blok: {
    intro,
    belowIntro,
    ankle,
    mastheadPicker,
    heroPicker,
    storyListNavPicker,
  },
  blok,
  name,
  slug,
}: SbStoryFilterPageProps) => {

  return (
    <div {...storyblokEditable(blok)}>
      <CreateStories stories={mastheadPicker} />
      <main id="main-content">
        <CreateStories stories={heroPicker} subheading={name !== 'Stories' ? name : ''} />
        <CreateStories stories={storyListNavPicker} fullSlug={slug} name={name} />
        <Container bgColor="black" className="bg-gc-black">
          <Heading font="druk" size="f5" color="white">Latest stories</Heading>
          {hasRichText(intro) && <RichText wysiwyg={intro} textColor="white" className={styles.intro} />}
          <CreateBloks blokSection={belowIntro} />
        </Container>
        <CreateBloks blokSection={ankle} />
      </main>
    </div>
  );
};

