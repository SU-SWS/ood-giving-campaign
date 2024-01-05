'use client';

import { useRef } from 'react';
import { cnb } from 'cnbuilder';
import { useScroll, m, useTransform } from 'framer-motion';
import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { CreateBloks } from '../CreateBloks';
import { FlexBox } from '../FlexBox';
import {
  Heading,
  type HeadingType,
  SrOnlyText,
  Text,
  Paragraph,
} from '../Typography';
import { Container, type BgColorType } from '../Container';
import { ImageOverlay } from '../ImageOverlay';
import { RichText } from '../RichText';
import { WidthBox } from '../WidthBox';
import { accentBgColors, type PaddingType, type MarginType } from '@/utilities/datasource';
import { paletteAccentColors, type PaletteAccentHexColorType } from '@/utilities/colorPalettePlugin';
import { type SbImageType, type SbColorStopProps } from './Storyblok.types';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { hasRichText } from '@/utilities/hasRichText';

type SbSectionProps = {
  blok: {
    _uid: string;
    content?: SbBlokData[];
    superhead?: string;
    heading?: string;
    isSmallHeading?: boolean;
    headingLevel?: HeadingType;
    subheading?: string;
    caption?: StoryblokRichtext;
    captionColumnWidth?: '12' | '10' | '8' | '6' | '4';
    rightAlignHeader?: boolean;
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
    isSmallHeading,
    headingLevel,
    subheading,
    caption,
    captionColumnWidth,
    rightAlignHeader,
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
      width="full"
      mt={marginTop}
      mb={marginBottom}
      className="relative overflow-hidden"
      {...storyblokEditable(blok)}
    >
      {/* Add background color animation if there are at least 2 color stops */}
      <m.div ref={ref} style={{ backgroundColor: bgColorStops?.length >= 2 ? animatedBgColor : undefined }}>
        <Container
          width="full"
          bgColor={bgColor}
          pt={paddingTop}
          pb={paddingBottom}
          className="relative overflow-hidden"
        >
          {filename && (
            <ImageOverlay imageSrc={getProcessedImage(filename, '2100x1400', focus)} overlay={bgColor === 'black' ? 'black-50' : 'white-90'} />
          )}
          {(heading || superhead) && (
            <FlexBox className={cnb('relative z-10', rightAlignHeader ? 'mr-0 ml-auto' : 'ml-0')}>
              {barColorValue && (
                <div className={cnb(
                  'block w-10 sm:w-14 md:w-20 lg:w-30 xl:w-40',
                  rightAlignHeader ? 'order-last' : 'order-first',
                  accentBgColors[paletteAccentColors[barColorValue]],
                )}
                />
              )}
              <div className={cnb(
                'cc whitespace-pre-line w-full 3xl:max-w-[90%]',
                barColorValue && !rightAlignHeader ? '-ml-10 sm:-ml-14 md:-ml-20 lg:-ml-30 xl:-ml-40' : '',
                barColorValue && rightAlignHeader ? '-mr-10 sm:-mr-14 md:-mr-20 lg:-mr-30 xl:-mr-40' : '',
                !barColorValue && !rightAlignHeader ? 'ml-0' : '',
                !barColorValue && rightAlignHeader ? 'mr-0' : '',
                superhead ? '' : '-mt-05em',
              )}
              >
                {superhead && (
                  <Text
                    size={2}
                    leading="tight"
                    font="serif"
                    weight="semibold"
                    align={rightAlignHeader ? 'right' : 'left'}
                    aria-hidden={!!heading}
                  >
                    {superhead}
                  </Text>
                )}
                {heading && (
                  <Heading
                    as={headingLevel}
                    size={isSmallHeading ? 'f8' : 'splash'}
                    leading="none"
                    uppercase
                    font="druk"
                    align={rightAlignHeader ? 'right' : 'left'}
                    className="mb-0"
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
                weight="normal"
                align={rightAlignHeader ? 'right' : 'left'}
                color={bgColor === 'black' ? 'black-20' : 'black-80'}
                noMargin
                className={cnb('relative z-10 max-w-prose ml-0 rs-mt-3', rightAlignHeader ? 'mr-0 ml-auto' : 'ml-0')}
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
            className="caption children:leading-display mt-08em max-w-prose-wide"
          />
        </WidthBox>
      )}
    </Container>
  );
};
