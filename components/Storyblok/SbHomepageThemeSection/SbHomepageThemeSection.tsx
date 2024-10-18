import { cnb } from 'cnbuilder';
import { AnimateInView } from '@/components/Animate';
import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { CreateBloks } from '@/components/CreateBloks';
import { FlexBox } from '@/components/FlexBox';
import { Heading, SrOnlyText, Text } from '@/components/Typography';
import { Container } from '@/components/Container';
import { RichText } from '@/components/RichText';
import { type SbImageType } from '../Storyblok.types';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { hasRichText } from '@/utilities/hasRichText';
import * as styles from './SbHomepageThemeSection.styles';
import {
  gradientFroms,
  type GradientFromType,
  gradientTos,
  type GradientToType,
  gradientVias,
  type GradientViaType,
  bgBlurs,
  type BgBlurType,
} from '@/utilities/datasource';
import { getNumBloks } from '@/utilities/getNumBloks';

type SbHomepageThemeSectionProps = {
  blok: {
    _uid: string;
    id: string;
    superhead?: string;
    heading?: string;
    intro?: StoryblokRichtext;
    content?: SbBlokData[];
    cta?: SbBlokData[];
    isDarkTheme?: boolean;
    bgImage?: SbImageType;
    bgBlur?: BgBlurType;
    gradientTop?: GradientToType;
    gradientBottom?: GradientFromType;
    gradientVia?: GradientViaType;
    isHidden?: boolean;
  };
};

export const SbHomepageThemeSection = ({
  blok: {
    id,
    superhead,
    heading,
    intro,
    content,
    cta,
    isDarkTheme,
    bgImage: { filename, focus } = {},
    bgBlur,
    gradientTop,
    gradientBottom,
    gradientVia,
    isHidden,
  },
  blok,
}: SbHomepageThemeSectionProps) => {
  if (isHidden) {
    return null;
  }

  const hasBgGradient = !!gradientTop && !!gradientBottom;
  const hasBgBlur = !!bgBlur && bgBlur !== 'none';

  return (
    <Container
      id={id}
      as="section"
      bgColor={isDarkTheme ? 'black' : 'white'}
      py={10}
      width="full"
      className={styles.root}
      {...storyblokEditable(blok)}
    >
      {filename && (
        <>
          <picture>
            <source
              srcSet={getProcessedImage(filename, hasBgBlur ? '1000x1500' : '2000x3000', focus)}
              media="(min-width: 1200px)"
              // Exact height and width don't matter as long as aspect ratio is the same as the image
              width={2000}
              height={3000}
            />
            <source
              srcSet={getProcessedImage(filename, hasBgBlur ? '600x900' : '1200x1800', focus)}
              media="(min-width: 768px)"
              width={1200}
              height={1800}
            />
            <source
              srcSet={getProcessedImage(filename, hasBgBlur ? '400x600' : '800x1200', focus)}
              media="(min-width: 461px)"
              width={800}
              height={1200}
            />
            <source
              srcSet={getProcessedImage(filename, hasBgBlur ? '200x300' : '600x900', focus)}
              media="(max-width: 460px)"
              width={600}
              height={900}
            />
            <img
              src={getProcessedImage(filename, hasBgBlur ? '1000x600' : '2000x3000', focus)}
              alt=""
              width={2000}
              height={3000}
              className={styles.bgImage}
            />
          </picture>
          {(hasBgBlur || hasBgGradient) && (
            <div
              className={cnb(
                styles.overlay(hasBgGradient),
                bgBlurs[bgBlur],
                gradientFroms[gradientTop],
                gradientTos[gradientBottom],
                gradientVias[gradientVia],
              )}
            />
          )}
        </>
      )}
      <AnimateInView animation="slideInFromLeft" className={styles.header}>
        {superhead && (
          <Text
            size={2}
            leading="tight"
            font="serif"
            weight="semibold"
            color={isDarkTheme ? 'white' : 'black'}
            className={styles.superhead(isDarkTheme)}
            aria-hidden={!!heading}
          >
            {superhead}
          </Text>
        )}
        {heading && (
          <Heading
            as="h2"
            leading="none"
            uppercase
            font="druk"
            color={isDarkTheme ? 'white' : 'black'}
            className={styles.heading}
          >
            {superhead && <SrOnlyText>{`${superhead}:`}</SrOnlyText>}{heading}
          </Heading>
        )}
      </AnimateInView>
      {hasRichText(intro) && (
        <AnimateInView animation="slideUp" delay={0.2} className={styles.introWrapper}>
          <RichText
            wysiwyg={intro}
            textColor={isDarkTheme ? 'white' : 'black'}
            className={styles.intro(isDarkTheme)}
          />
        </AnimateInView>
      )}
      <Container pt={8} width="full" className={styles.contentWrapper}>
        <CreateBloks blokSection={content} isDarkTheme={isDarkTheme} />
      </Container>
      {!!getNumBloks(cta) && (
        <FlexBox direction="col" className={styles.cta}>
          <CreateBloks blokSection={cta} />
        </FlexBox>
      )}
    </Container>
  );
};
