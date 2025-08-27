import { type SbBlokData } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { CreateBloks } from '@/components/CreateBloks';
import { RichText } from '@/components/RichText';
import { Heading } from '@/components/Typography';
import { Container } from '@/components/Container';
import { AnimateInView } from '@/components/Animate';
import { hasRichText } from '@/utilities/hasRichText';
import { getNumBloks } from '@/utilities/getNumBloks';
import * as styles from './HomepageHero.styles';

export type HeadingBlokType = SbBlokData & {
  text: string;
  [k: string]: unknown;
};

/**
 * Hero section for the homepage
 */
type HomepageHeroProps = {
  heading: HeadingBlokType[];
  intro?: StoryblokRichtext;
  image?: SbBlokData[];
};

export const HomepageHero = ({
  heading,
  intro,
  image,
}: HomepageHeroProps) => {
  const hasIntroText = hasRichText(intro);

  // Loop over each of the nested typography bloks in heading to create a concatenated string for the screen reader h1
  const srOnlyH1 = heading?.map((blok) => blok?.text).filter(Boolean).join(' ') || 'Stanford Momentum Homepage';

  return (
    <>
      <Heading as="h1" srOnly>{srOnlyH1}</Heading>
      <Container
        width="full"
        bgColor="black"
        pt={9}
        className={styles.wrapper}
      >
        {/* Content */}
        <div className={styles.contentWrapper}>
          <div aria-hidden="true">
            <CreateBloks blokSection={heading} />
          </div>
          {hasIntroText && (
            <AnimateInView animation="slideUp" delay={0.3}>
              <RichText
                wysiwyg={intro}
                textColor="white"
                linkColor="digital-red-xlight"
                className={styles.intro}
              />
            </AnimateInView>
          )}
        </div>
        {/* Hero Image */}
        {!!getNumBloks(image) && (
          <div className={styles.imageWrapper}>
            <CreateBloks blokSection={image} />
          </div>
        )}
      </Container>
    </>
  );
};
