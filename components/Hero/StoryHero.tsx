import React from 'react';
import Image from 'next/image';
import { cnb } from 'cnbuilder';
import { Container } from '../Container';
import { CtaLink } from '../Cta';
import { Grid } from '../Grid';
import { FlexBox } from '../FlexBox';
import { Heading, Text, Paragraph } from '../Typography';
import { paletteAccentColors, PaletteAccentColorType } from '@/utilities/colorPalettePlugin';
import { accentBorderColors } from '@/utilities/datasource';
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
  caption?: string;
  aspectRatio?: '2x1' | '16x9' | '5x8';
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
  caption,
  aspectRatio,
  isVerticalHero = false,
  isLeftImage = false,
  isLightHero = false,
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
            styles.tabSection(!!tabColorValue, isVerticalHero),
            accentBorderColors[paletteAccentColors[tabColorValue || '']],
          )}
          >
            <Heading
              as="h1"
              leading="tight"
              size={useTwoColLayout ? 'f5' : 'f6'}
              className={styles.heading(!!filename, !!tabColorValue, !!isVerticalHero)}
            >
              {title}
            </Heading>
            {(byline || date) && (
              <div className={styles.byline(!!filename, !!tabColorValue, isVerticalHero)}>
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
          <div className={isVerticalHero ? 'px-20 sm:px-30 md:px-50 lg:px-80 xl:px-100' : 'cc'}>
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
            <div className={styles.imageWrapper(isVerticalHero, isLeftImage)}>
              <Image
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
