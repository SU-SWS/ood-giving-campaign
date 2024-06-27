import { Heading } from '@/components/Typography';
import { RichText } from '@/components/RichText';
import { CreateBloks } from '@/components/CreateBloks';
import * as styles from './SbStoryFilterPage.styles';

export type LatestStoriesProps = {
  children: React.ReactNode;
};


const LatestStories = ({ children }:LatestStoriesProps) => {

  return (
    <>
      <p>Hi I am client side</p>
      {children}
    </>
  );

  // const hasIntro = hasRichText(intro);
  // const hasFeaturedStories = !!getNumBloks(featuredStories);
  // <Heading font="druk" size="f5" color="white" id="latest-stories" className={styles.heading(hasIntro)}>Latest stories</Heading>
  //     {hasIntro && <RichText wysiwyg={intro} textColor="white" className={styles.intro} />}
  //   <CreateBloks blokSection={belowIntro} />
  //   <p>Latest Stories</p>
  // {hasFeaturedStories && (
  //   <>
  //     <Heading as="h3" srOnly>{`Featured Stor${getNumBloks(featuredStories) > 1 ? 'ies' : 'y'}`}</Heading>
  //     <Grid py={6} isList className="gap-y-45 md:gap-y-90 2xl:gap-y-95">
  //       <CreateBloks blokSection={featuredStories} isListItems />
  //     </Grid>
  //   </>
  // )}

};
export default LatestStories;
