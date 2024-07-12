import { AnimateInView } from '@/components/Animate';
import { Container } from '@/components/Container';
import { Heading, Text } from '@/components/Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import * as styles from './StoryListHero.styles';

/**
 * Basic page hero that allows for different hero styles (e.g., initiative landing and detailed pages)
 */
type StoryListHeroProps = {
  subheading?: string;
  imageSrc?: string;
  imageFocus?: string;
  texturedBar?: React.ReactNode;
};

export const StoryListHero = ({
  subheading,
  imageSrc,
  imageFocus,
  texturedBar,
}: StoryListHeroProps) => {

  return (
    <>
      <Container
        width="full"
        bgColor={imageSrc ? undefined : 'black'}
        py={8}
        className={styles.root}
      >
        <Container className={styles.contentWrapper}>
          <AnimateInView animation="slideUp">
            <Heading
              as="h1"
              align="center"
              leading="none"
              color="white"
              className={styles.heading(!!subheading)}
            >
              <Text as="span" font="druk" size={subheading ? 'f5' : 'splash'} leading="druk">Stories</Text>
              <Text as="span" font="serif" size={subheading ? 'f4' : 'f7'} weight="normal" italic className="relative -top-02em md:-top-[.23em] lg:-ml-01em mr-02em"> of </Text>
              <Text as="span" font="druk" size={subheading ? 'f5' : 'splash'} leading="druk">Impact</Text>
              {subheading && (
                <Text
                  as="span"
                  size='f7'
                  font="serif"
                  align="center"
                  leading="tight"
                  color="white"
                  className={styles.subhead}
                >
                  {subheading}
                </Text>
              )}
            </Heading>
          </AnimateInView>
        </Container>
        {!!imageSrc && (
          <picture>
            <source
              srcSet={getProcessedImage(imageSrc, '2000x1000', imageFocus)}
              media="(min-width: 1200px)"
              // Exact height and width don't matter as long as aspect ratio is the same as the image
              width={2000}
              height={1000}
            />
            <source
              srcSet={getProcessedImage(imageSrc, '1200x800', imageFocus)}
              media="(min-width: 768px)"
              width={1200}
              height={800}
            />
            <source
              srcSet={getProcessedImage(imageSrc, '800x600', imageFocus)}
              media="(min-width: 461px)"
              width={800}
              height={600}
            />
            <source
              srcSet={getProcessedImage(imageSrc, '480x480', imageFocus)}
              media="(max-width: 460px)"
              width={480}
              height={480}
            />
            <img
              src={getProcessedImage(imageSrc, imageFocus)}
              alt=""
              width={2000}
              height={1000}
              className={styles.image}
            />
          </picture>
        )}
        <div className={styles.overlay} />
      </Container>
      {texturedBar}
    </>
  );
};
