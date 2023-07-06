import React from 'react';
import { cnb } from 'cnbuilder';
import { storyblokEditable } from '@storyblok/react/rsc';
import { CreateBloks } from '../CreateBloks';
import { FlexBox } from '../FlexBox';
import {
  Heading, HeadingType, SrOnlyText, Text,
} from '../Typography';
import { Container, BgColorType } from '../Container';
import { accentBgColors, PaddingType } from '@/utilities/datasource';
import { paletteAccentColors, PaletteAccentColorType } from '@/utilities/colorPalettePlugin';

type SbSectionProps = {
  blok: {
    _uid: string;
    content?: any[];
    superhead?: string;
    heading?: string;
    headingLevel?: HeadingType;
    barColor?: {
      value?: PaletteAccentColorType;
    }
    bgColor?: BgColorType;
    paddingTop?: PaddingType;
    paddingBottom?: PaddingType;
  };
};

export const SbSection = ({
  blok: {
    content,
    superhead,
    heading,
    headingLevel,
    barColor: { value: barColorValue } = {},
    bgColor,
    paddingTop,
    paddingBottom,
  },
  blok,
}: SbSectionProps) => (
  <Container
    {...storyblokEditable(blok)}
    width="full"
    bgColor={bgColor}
    pt={paddingTop}
    pb={paddingBottom}
    className="su-relative su-overflow-hidden"
  >
    {(heading || superhead) && (
      <FlexBox className="su-rs-mb-6">
        {barColorValue && (
          <div className={cnb(
            'su-block su-w-8 md:su-w-20 lg:su-w-40',
            accentBgColors[paletteAccentColors[barColorValue]],
          )}
          />
        )}
        <div className={cnb(
          'su-cc su-whitespace-pre-line su-w-full 3xl:su-max-w-3/5',
          barColorValue ? 'su--ml-8 md:su--ml-20 lg:su--ml-40' : '',
          superhead ? '' : 'su--mt-05em',
        )}
        >
          {superhead && (
            <Text size={2} leading="tight" font="serif" aria-hidden>
              {superhead}
            </Text>
          )}
          {heading && (
            <Heading
              as={headingLevel}
              size="splash"
              leading="none"
              uppercase
              font="druk"
              className="su-mb-0"
            >
              {superhead && <SrOnlyText>{`${superhead}:`}</SrOnlyText>}{heading}
            </Heading>
          )}
        </div>
      </FlexBox>
    )}
    <Container>
      <CreateBloks blokSection={content} isDarkTheme={bgColor === 'black'} />
    </Container>
  </Container>
);
