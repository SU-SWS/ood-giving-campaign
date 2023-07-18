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
  aspectRatio?: styles.ImageCropType;
  mobileImage?: SbImageType;
  mobileAspectRatio?: styles.ImageCropType;
  alt?: string;
  caption?: string;
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
  alt,
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

  const cropSize = styles.imageCrops[aspectRatio];
  const cropWidth = parseInt(cropSize.split('x')[0], 10);
  const cropHeight = parseInt(cropSize.split('x')[1], 10);

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
              className={styles.heading(!!filename, !!tabColorValue, isVerticalHero, isLeftImage)}
            >
              {title}
            </Heading>
            {(byline || date) && (
              <div className={styles.byline(!!filename, !!tabColorValue, isVerticalHero, isLeftImage)}>
                {byline && (
                  <Text>{byline}</Text>
                )}
                {date && (
                  <time dateTime={publishedDate}>{formattedDate}</time>
                )}
              </div>
            )}
          </div>
          <div className={styles.chipDek(!!filename, isVerticalHero, isLeftImage)}>
            <Heading srOnly>Top 3 related topics</Heading>
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
                alt={alt}
                loading="eager"
                width={cropWidth}
                height={cropHeight}
                src={getProcessedImage(filename, styles.imageCrops[aspectRatio], focus)}
                sizes={isVerticalHero ? '(max-width: 991px) 100vw, 50vw' : '100vw'}
                className={styles.image}
              />
            </div>
            {caption && (
              <figcaption className={styles.caption(isVerticalHero, isLeftImage)}>
                <Text
                  variant="caption"
                  color={isLightHero ? 'black-80' : 'black-20'}
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
