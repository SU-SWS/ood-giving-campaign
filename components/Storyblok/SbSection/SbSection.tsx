'use client';

import { useRef } from 'react';
import { cnb } from 'cnbuilder';
import { useScroll, m, useTransform } from 'framer-motion';
import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { CreateBloks } from '@/components/CreateBloks';
import { FlexBox } from '@/components/FlexBox';
import {
  Heading,
  type HeadingType,
  SrOnlyText,
  Text,
  Paragraph,
} from '@/components/Typography';
import { Container, type BgColorType } from '@/components/Container';
import { RichText } from '@/components/RichText';
import { WidthBox } from '@/components/WidthBox';
import { accentBgColors, type PaddingType, type MarginType } from '@/utilities/datasource';
import { paletteAccentColors, type PaletteAccentHexColorType } from '@/utilities/colorPalettePlugin';
import { type SbImageType, type SbColorStopProps } from '../Storyblok.types';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { hasRichText } from '@/utilities/hasRichText';
import { getNumBloks } from '@/utilities/getNumBloks';
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
import * as styles from './SbSection.styles';

type SbSectionProps = {
  blok: {
    _uid: string;
    id?: string;
    content?: SbBlokData[];
    superhead?: string;
    heading?: string;
    headerAlign?: styles.AlignType;
    isSmallHeading?: boolean;
    headingLevel?: HeadingType;
    isSerifHeader?: boolean;
    subheading?: string;
    cta?: SbBlokData[];
    caption?: StoryblokRichtext;
    captionColumnWidth?: '12' | '10' | '8' | '6' | '4';
    isLightCaption?: boolean;
    captionBgColor?: BgColorType;
    barColor?: {
      value?: PaletteAccentHexColorType;
    }
    bgColor?: BgColorType;
    bgImage?: SbImageType;
    gradientTop?: GradientToType;
    gradientBottom?: GradientFromType;
    gradientVia?: GradientViaType;
    bgBlur?: BgBlurType;
    bgColorStops?: SbColorStopProps[];
    paddingTop?: PaddingType;
    paddingBottom?: PaddingType;
    marginTop?: MarginType;
    marginBottom?: MarginType;
    isHidden?: boolean;
  };
};

export const SbSection = ({
  blok: {
    id,
    content,
    superhead,
    heading,
    headerAlign,
    isSmallHeading,
    isSerifHeader,
    headingLevel,
    subheading,
    cta,
    caption,
    captionColumnWidth,
    isLightCaption,
    captionBgColor,
    barColor: { value: barColorValue } = {},
    bgColor,
    bgImage: { filename, focus } = {},
    gradientTop,
    gradientBottom,
    gradientVia,
    bgBlur,
    bgColorStops,
    paddingTop,
    paddingBottom,
    marginTop,
    marginBottom,
    isHidden,
  },
  blok,
}: SbSectionProps) => {
  const hasHeader = heading || superhead || subheading;
  // To render a dark overlay, both a top and bottom gradient color must be selected
  const hasBgGradient = !!gradientTop && !!gradientBottom;

  const ref = useRef<HTMLDivElement>(null);
  const stops = [];
  const bgColors = [];
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // bgColorStops is an array of objects with the shape {stop, hexColor}
  if (bgColorStops?.length >= 2) {
    /**
     * If bgColorStops has at least 2 stops, we add background color animation
     * This loop splits the array into two separate arrays, one for the stops and one for the colors
     */
    for (const element of bgColorStops) {
      stops.push(parseFloat(element.stop));
      bgColors.push(element.hexColor);
    }
  } else {
    /**
     * If there is less than 2 stops, we push a single stop and color to the arrays
     * We can't use the below Framer Motion useTransform hook conditionally,
     * so we need to push a single stop and color for it to not throw an error
     */
    stops.push(0);
    bgColors.push('transparent');
  }
  const animatedBgColor = useTransform(scrollYProgress, stops, bgColors);

  if (isHidden) {
    return null;
  }

  return (
    <Container
      id={id}
      as={!!heading ? 'section' : 'div'}
      width="full"
      mt={marginTop}
      mb={marginBottom}
      className={styles.root}
      {...storyblokEditable(blok)}
    >
      {/* Add background color animation if there are at least 2 color stops */}
      <m.div ref={ref} style={{ backgroundColor: bgColorStops?.length >= 2 ? animatedBgColor : undefined }}>
        <Container
          width="full"
          bgColor={bgColor}
          pt={paddingTop}
          pb={paddingBottom}
          className={styles.wrapper}
        >
          {!!filename && (
            <picture>
              <source
                srcSet={getProcessedImage(filename, bgBlur !== 'none' ? '1200x800' : '2100x1400', focus)}
                media="(min-width: 1200px)"
                // Exact height and width don't matter as long as aspect ratio is the same as the image
                width={2100}
                height={1400}
              />
              <source
                srcSet={getProcessedImage(filename, bgBlur !== 'none' ? '600x600' : '1200x1200', focus)}
                media="(min-width: 768px)"
                width={1200}
                height={1200}
              />
              <source
                srcSet={getProcessedImage(filename, bgBlur !== 'none' ? '400x600' : '800x1200', focus)}
                media="(min-width: 461px)"
                width={800}
                height={1200}
              />
              <source
                srcSet={getProcessedImage(filename, bgBlur !== 'none' ? '230x460' : '460x920', focus)}
                media="(max-width: 460px)"
                width={460}
                height={920}
              />
              <img
                src={getProcessedImage(filename, bgBlur !== 'none' ? '1200x800' : '1800x1200', focus)}
                alt=""
                width={1800}
                height={1200}
                className={styles.bgImage}
              />
            </picture>
          )}
          {/* Render the overlay if there's a background image, and if background blur or/and gradient is selected */}
          {!!filename && (bgBlur !== 'none' || hasBgGradient) && (
            <div
              className={cnb(
                styles.overlay(hasBgGradient),
                bgBlurs[bgBlur],
                gradientFroms[gradientTop],
                gradientVias[gradientVia],
                gradientTos[gradientBottom],
              )}
            />
          )}
          {(heading || superhead) && (
            <FlexBox
              className={styles.headerWrapper(headerAlign)}
            >
              {barColorValue && headerAlign !== 'center' && (
                <div className={cnb(styles.bar(headerAlign), accentBgColors[paletteAccentColors[barColorValue]])} />
              )}
              <div className={styles.headerContent(!!barColorValue, !!superhead, headerAlign)}>
                {superhead && (
                  <Text
                    size={2}
                    leading="tight"
                    font="serif"
                    weight="semibold"
                    align={headerAlign}
                    aria-hidden={!!heading}
                  >
                    {superhead}
                  </Text>
                )}
                {heading && (
                  <Heading
                    as={headingLevel}
                    leading={isSerifHeader ? 'tight' : 'none'}
                    uppercase={!isSerifHeader}
                    font={isSerifHeader ? 'serif' : 'druk'}
                    align={headerAlign}
                    className={styles.heading(isSerifHeader, isSmallHeading, headerAlign)}
                  >
                    {superhead && <SrOnlyText>{`${superhead}:`}</SrOnlyText>}{heading}
                  </Heading>
                )}
              </div>
            </FlexBox>
          )}
          {subheading && (
            <Container>
              <Paragraph
                variant="overview"
                font={isSerifHeader ? 'serif' : 'sans'}
                weight={isSerifHeader ? 'semibold' : 'normal'}
                align={headerAlign}
                color={bgColor === 'black' ? 'white' : 'black'}
                noMargin
                className={styles.subhead(headerAlign)}
              >
                {subheading}
              </Paragraph>
            </Container>
          )}
          <Container pt={hasHeader ? 8 : undefined} width="full" className={styles.contentWrapper}>
            <CreateBloks blokSection={content} isDarkTheme={bgColor === 'black'} />
          </Container>
          {!!getNumBloks(cta) && (
            <FlexBox direction="col" className={styles.cta}>
              <CreateBloks blokSection={cta} />
            </FlexBox>
          )}
        </Container>
      </m.div>
      {hasRichText(caption) && (
        <WidthBox boundingWidth="site" width={captionColumnWidth} bgColor={captionBgColor}>
          <RichText
            wysiwyg={caption}
            textColor={isLightCaption ? 'white' : 'black-70'}
            linkColor={isLightCaption ? 'digital-red-xlight' : 'unset'}
            className={styles.caption}
          />
        </WidthBox>
      )}
    </Container>
  );
};
