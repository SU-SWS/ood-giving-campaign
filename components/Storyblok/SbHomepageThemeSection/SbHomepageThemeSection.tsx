import { cnb } from 'cnbuilder';
import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { CreateBloks } from '@/components/CreateBloks';
import { Heading, SrOnlyText, Text } from '@/components/Typography';
import { Container } from '@/components/Container';
import { RichText } from '@/components/RichText';
import { type SbImageType } from '../Storyblok.types';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { hasRichText } from '@/utilities/hasRichText';
import * as styles from './SbHomepageThemeSection.styles';

type SbHomepageThemeSectionProps = {
  blok: {
    _uid: string;
    superhead?: string;
    heading?: string;
    intro?: StoryblokRichtext;
    content?: SbBlokData[];
    bgImage?: SbImageType;
    addBgBlur?: boolean;
    addOverlay?: boolean;
  };
};

export const SbHomepageThemeSection = ({
  blok: {
    superhead,
    heading,
    intro,
    content,
    bgImage: { filename, focus } = {},
    addBgBlur,
    addOverlay,
  },
  blok,
}: SbHomepageThemeSectionProps) => {
  const hasHeader = heading || superhead || intro;

  return (
    <Container
      bgColor="black"
      py={10}
      width="full"
      className="relative overflow-hidden"
      {...storyblokEditable(blok)}
    >
      <picture>
        <source
          srcSet={getProcessedImage(filename, addBgBlur ? '1000x1500' : '2000x3000', focus)}
          media="(min-width: 1200px)"
          // Exact height and width don't matter as long as aspect ratio is the same as the image
          width={2000}
          height={3000}
        />
        <source
          srcSet={getProcessedImage(filename, addBgBlur ? '600x900' : '1200x1800', focus)}
          media="(min-width: 768px)"
          width={1200}
          height={1800}
        />
        <source
          srcSet={getProcessedImage(filename, addBgBlur ? '400x600' : '800x1200', focus)}
          media="(min-width: 461px)"
          width={800}
          height={1200}
        />
        <source
          srcSet={getProcessedImage(filename, addBgBlur ? '200x300' : '600x900', focus)}
          media="(max-width: 460px)"
          width={600}
          height={900}
        />
        <img
          src={getProcessedImage(filename, addBgBlur ? '1000x600' : '2000x3000', focus)}
          alt=""
          width={2000}
          height={3000}
          className={styles.bgImage}
        />
      </picture>
      <div
        className={styles.overlay(addBgBlur, addOverlay)}
      />
      <Container
        className="relative overflow-hidden cc 3xl:px-100 4xl:px-[calc((100%-1800px)/2)] z-20"
      >
        {superhead && (
          <Text
            size={2}
            leading="tight"
            font="serif"
            weight="semibold"
            className="text-shadow"
            aria-hidden={!!heading}
          >
            {superhead}
          </Text>
        )}
        {heading && (
          <Heading
            as="h2"
            size="f9"
            leading="none"
            uppercase
            font="druk"
            className="mb-0 whitespace-pre-line"
          >
            {superhead && <SrOnlyText>{`${superhead}:`}</SrOnlyText>}{heading}
          </Heading>
        )}
      </Container>
      {hasRichText(intro) && (
        <Container className="relative z-20">
          <RichText
            wysiwyg={intro}
            textColor="white"
            className="intro-text *:leading-cozy rs-mt-7 max-w-1000"
          />
        </Container>
      )}
      <Container pt={8} width="full" className="relative z-20">
        <CreateBloks blokSection={content} isDarkTheme />
      </Container>
    </Container>
  );
};
