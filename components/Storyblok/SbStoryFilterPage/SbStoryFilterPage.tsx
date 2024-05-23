import { storyblokEditable, type SbBlokData, type ISbStoryData } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { CreateBloks } from '@/components/CreateBloks';
import { CreateStories } from '@/components/CreateStories';
import { BasicHero } from '@/components/Hero';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Typography';
import { Masthead } from '@/components/Masthead';
import { getNumBloks } from '@/utilities/getNumBloks';
import { type SbImageType } from '@/components/Storyblok/Storyblok.types';

type SbStoryFilterPageProps = {
  blok: {
    _uid: string;
    title?: string;
    intro?: StoryblokRichtext;
    ankle?: SbBlokData[];
    mastheadPicker?: ISbStoryData[];
    storyListNavPicker?: ISbStoryData[];
  };
  name?: string; // The name of the Storyblok story
  slug?: string;
};

export const SbStoryFilterPage = ({
  blok: {
    title,
    intro,
    ankle,
    mastheadPicker,
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
        <BasicHero
          title={`Stories of Impact ${slug === 'stories' ? '' : name}`}
        />
        <CreateStories stories={storyListNavPicker} fullSlug={slug} name={name} />
        <Container bgColor="black" className="bg-gc-black">
          <Heading font="druk" size="f5" color="white">Latest stories</Heading>
        </Container>
        <CreateBloks blokSection={ankle} />
      </main>
    </div>
  );
};

