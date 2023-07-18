import React from 'react';
import { cnb } from 'cnbuilder';
import { Container } from '../Container';
import { CtaLink } from '../Cta';
import { Grid } from '../Grid';
import { FlexBox } from '../FlexBox';
import { Heading, Text, Paragraph } from '../Typography';
import { paletteAccentColors, PaletteAccentColorType } from '@/utilities/colorPalettePlugin';
import {
  accentBorderColors, storyHeroAspectRatios, storyHeroAspectRatiosDesktop, StoryHeroAspectRatioType,
} from '@/utilities/datasource';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { slugify } from '@/utilities/slugify';
import { SbImageType } from '../Storyblok/Storyblok.types';

import * as styles from './StoryHero.styles';

export type StoryHeroProps = {
  title: string;
  byline?: string;
  publishedDate?: string;
  dek?: string;
  heroImage?: SbImageType;
  mobileImage?: SbImageType;
  caption?: string;
  aspectRatio?: StoryHeroAspectRatioType;
  mobileAspectRatio?: StoryHeroAspectRatioType;
  isVerticalHero?: boolean;
  isLeftImage?: boolean;
  isLightHero?: boolean;
  tabColor?: {
    value?: PaletteAccentColorType;
  }
  topics?: string[];
};

export const StoryHero = ({
  title,
  byline,
  dek,
  publishedDate,
  heroImage: { filename, focus } = {},
  mobileImage: { filename: mobileFilename, focus: mobileFocus } = {},
  caption,
  isVerticalHero = false,
  isLeftImage = false,
  isLightHero = false,
  aspectRatio = isVerticalHero ? '5x8' : '2x1',
  mobileAspectRatio = '1x1',
  tabColor: { value: tabColorValue } = {},
  topics,
}: StoryHeroProps) => {
  const useTwoColLayout = isVerticalHero && !!filename;
  const date = publishedDate && new Date(publishedDate);
  const formattedDate = date && date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });

  return (
    <Container
      as="header"
      width="full"
      bgColor={isLightHero ? 'white' : 'black'}
      pb={8}
      className={styles.root}
    >
      <Grid lg={useTwoColLayout ? 2 : 1} alignItems="start">
        <div className={styles.content(!!filename, isVerticalHero, isLeftImage)}>
          <div className={cnb(
            styles.tabSection(!!tabColorValue, isVerticalHero, isLeftImage),
            accentBorderColors[paletteAccentColors[tabColorValue || '']],
          )}
          >
            <Heading
              as="h1"
              leading="tight"
              size={useTwoColLayout ? 'f5' : 'f6'}
              className={styles.heading(!!filename, !!tabColorValue, isVerticalHero, isLeftImage)}
            >
              {title}
            </Heading>
            {(byline || date) && (
              <div className={styles.byline(!!filename, !!tabColorValue, isVerticalHero, isLeftImage)}>
                {byline && (
                  <Text variant="caption">
                    {byline}
                  </Text>
                )}
                {date && (
                  <Text as="time" variant="caption">
                    {formattedDate}
                  </Text>
                )}
              </div>
            )}
          </div>
          <div className={styles.chipDek(!!filename, isVerticalHero, isLeftImage)}>
            <Heading srOnly>Topics</Heading>
            {/* Display max 3 topic tags */}
            {!!topics?.length && (
              <FlexBox wrap="wrap" as="ul" className={styles.taxonomy}>
                {topics.slice(0, 3).map((topic) => (
                  <li key={topic} className={styles.taxonomyItem}>
                    <CtaLink href={`/stories?topic=${slugify(topic)}`} variant="chip">{topic}</CtaLink>
                  </li>
                ))}
              </FlexBox>
            )}
            <Paragraph
              variant="overview"
              font="serif"
              className={styles.body(!!filename, isVerticalHero)}
            >
              {dek}
            </Paragraph>
          </div>
        </div>
        {filename && (
          <figure>
            <div className={cnb(
              styles.imageWrapper(isVerticalHero, isLeftImage),
              storyHeroAspectRatios[mobileAspectRatio],
              storyHeroAspectRatiosDesktop[aspectRatio],
            )}>
              <img
                alt=""
                width={isVerticalHero ? 1000 : 2000}
                height={isVerticalHero ? 1600 : 1000}
                src={getProcessedImage(filename, isVerticalHero ? '1000x1600' : '2000x1000', focus)}
                className={styles.image}
              />
            </div>
            {caption && (
              <figcaption className={styles.caption(isVerticalHero, isLeftImage)}>
                <Text
                  variant="caption"
                  color={isLightHero ? 'black-70' : 'black-20'}
                  className={styles.captionText(isVerticalHero, isLeftImage)}
                >
                  {caption}
                </Text>
              </figcaption>
            )}
          </figure>
        )}
      </Grid>
    </Container>
  );
};
