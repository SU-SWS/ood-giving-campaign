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
  bgBlurs, type BgBlurType, gradientFroms, type GradientFromType, gradientTos, type GradientToType,
} from '@/utilities/datasource';
import { getNumBloks } from '@/utilities/getNumBloks';

type SbHomepageThemeSectionProps = {
  blok: {
    _uid: string;
    superhead?: string;
    heading?: string;
    intro?: StoryblokRichtext;
    content?: SbBlokData[];
    cta?: SbBlokData[];
    bgImage?: SbImageType;
    bgBlur?: BgBlurType;
    gradientTop?: GradientToType;
    gradientBottom?: GradientFromType;
  };
};

export const SbHomepageThemeSection = ({
  blok: {
    superhead,
    heading,
    intro,
    content,
    cta,
    bgImage: { filename, focus } = {},
    bgBlur,
    gradientTop,
    gradientBottom,
  },
  blok,
}: SbHomepageThemeSectionProps) => {
  const hasBgGradient = !!gradientTop && !!gradientBottom;

  return (
    <Container
      as="section"
      bgColor="black"
      py={10}
      width="full"
      className={styles.root}
      {...storyblokEditable(blok)}
    >
      {filename && (
        <>
          <picture>
            <source
              srcSet={getProcessedImage(filename, bgBlur !== 'none' ? '1000x1500' : '2000x3000', focus)}
              media="(min-width: 1200px)"
              // Exact height and width don't matter as long as aspect ratio is the same as the image
              width={2000}
              height={3000}
            />
            <source
              srcSet={getProcessedImage(filename, bgBlur !== 'none' ? '600x900' : '1200x1800', focus)}
              media="(min-width: 768px)"
              width={1200}
              height={1800}
            />
            <source
              srcSet={getProcessedImage(filename, bgBlur !== 'none' ? '400x600' : '800x1200', focus)}
              media="(min-width: 461px)"
              width={800}
              height={1200}
            />
            <source
              srcSet={getProcessedImage(filename, bgBlur !== 'none' ? '200x300' : '600x900', focus)}
              media="(max-width: 460px)"
              width={600}
              height={900}
            />
            <img
              src={getProcessedImage(filename, bgBlur !== 'none' ? '1000x600' : '2000x3000', focus)}
              alt=""
              width={2000}
              height={3000}
              className={styles.bgImage}
            />
          </picture>
          {(bgBlur !== 'none' || hasBgGradient) && (
            <div
              className={cnb(
                styles.overlay(hasBgGradient),
                bgBlurs[bgBlur],
                gradientFroms[gradientBottom],
                gradientTos[gradientTop],
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
            className={styles.superhead}
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
            textColor="white"
            className={styles.intro}
          />
        </AnimateInView>
      )}
      <Container pt={8} width="full" className={styles.contentWrapper}>
        <CreateBloks blokSection={content} isDarkTheme />
      </Container>
      {!!getNumBloks(cta) && (
        <FlexBox direction="col" className={styles.cta}>
          <CreateBloks blokSection={cta} />
        </FlexBox>
      )}
    </Container>
  );
};
