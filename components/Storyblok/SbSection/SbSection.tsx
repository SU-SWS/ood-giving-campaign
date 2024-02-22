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
import { ImageOverlay } from '@/components/ImageOverlay';
import { RichText } from '@/components/RichText';
import { WidthBox } from '@/components/WidthBox';
import { accentBgColors, type PaddingType, type MarginType } from '@/utilities/datasource';
import { paletteAccentColors, type PaletteAccentHexColorType } from '@/utilities/colorPalettePlugin';
import { type SbImageType, type SbColorStopProps } from '../Storyblok.types';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { hasRichText } from '@/utilities/hasRichText';
import * as styles from './SbSection.styles';

type SbSectionProps = {
  blok: {
    _uid: string;
    content?: SbBlokData[];
    superhead?: string;
    heading?: string;
    headerAlign?: styles.AlignType;
    isSmallHeading?: boolean;
    headingLevel?: HeadingType;
    isSerifHeader?: boolean;
    subheading?: string;
    caption?: StoryblokRichtext;
    captionColumnWidth?: '12' | '10' | '8' | '6' | '4';
    //rightAlignHeader?: boolean;
    barColor?: {
      value?: PaletteAccentHexColorType;
    }
    bgColor?: BgColorType;
    bgImage?: SbImageType;
    bgColorStops?: SbColorStopProps[];
    paddingTop?: PaddingType;
    paddingBottom?: PaddingType;
    marginTop?: MarginType;
    marginBottom?: MarginType;
  };
};

export const SbSection = ({
  blok: {
    content,
    superhead,
    heading,
    headerAlign,
    isSmallHeading,
    isSerifHeader,
    headingLevel,
    subheading,
    caption,
    captionColumnWidth,
    //rightAlignHeader,
    barColor: { value: barColorValue } = {},
    bgColor,
    bgImage: { filename, focus } = {},
    bgColorStops,
    paddingTop,
    paddingBottom,
    marginTop,
    marginBottom,
  },
  blok,
}: SbSectionProps) => {
  const hasHeader = heading || superhead || subheading;

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

  return (
    <Container
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
          {filename && (
            <ImageOverlay
              imageSrc={getProcessedImage(filename, '2100x1400', focus)}
              overlay={bgColor === 'black' ? 'black-50' : 'white-90'}
            />
          )}
          {(heading || superhead) && (
            <FlexBox
              className={styles.headerWrapper(headerAlign)}
            >
              {barColorValue && headerAlign !== 'center' && (
                <div className={cnb(
                  'block w-10 sm:w-14 md:w-20 lg:w-30 xl:w-40',
                  headerAlign === 'right' ? 'order-last' : 'order-first',
                  accentBgColors[paletteAccentColors[barColorValue]],
                )}
                />
              )}
              <div className={cnb(
                'cc whitespace-pre-line w-full 3xl:max-w-[90%]',
                barColorValue && headerAlign === 'left' ? '-ml-10 sm:-ml-14 md:-ml-20 lg:-ml-30 xl:-ml-40' : '',
                barColorValue && headerAlign === 'right' ? '-mr-10 sm:-mr-14 md:-mr-20 lg:-mr-30 xl:-mr-40' : '',
                !barColorValue && headerAlign === 'left' ? 'ml-0' : '',
                !barColorValue && headerAlign === 'right' ? 'mr-0' : '',
                superhead ? '' : '-mt-05em',
              )}
              >
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
                color={bgColor === 'black' ? 'black-20' : 'black-80'}
                noMargin
                className={styles.subhead(headerAlign)}
              >
                {subheading}
              </Paragraph>
            </Container>
          )}
          <Container pt={hasHeader ? 8 : undefined} width="full" className="relative z-10">
            <CreateBloks blokSection={content} isDarkTheme={bgColor === 'black'} />
          </Container>
        </Container>
      </m.div>
      {hasRichText(caption) && (
        <WidthBox boundingWidth="site" width={captionColumnWidth}>
          <RichText
            wysiwyg={caption}
            textColor="black-70"
            className="caption *:leading-display mt-08em max-w-prose-wide"
          />
        </WidthBox>
      )}
    </Container>
  );
};
