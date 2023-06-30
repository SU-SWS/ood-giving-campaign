import React from 'react';
import { cnb } from 'cnbuilder';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { Heading, Text, Paragraph } from '../Typography';
import { paletteAccentColors, PaletteAccentColorType } from '../../utilities/colorPalettePlugin';
import { accentBorderColors } from '../../utilities/datasource';
import { getProcessedImage } from '../../utilities/getProcessedImage';
import { SbImageType } from '../Storyblok/Storyblok.types';
import * as styles from './StoryHero.styles';

type StoryHeroProps = {
  title: string;
  byline?: string;
  intro?: string;
  publishedDate?: string;
  heroImage?: SbImageType;
  isVerticalHero?: boolean;
  isLeftImage?: boolean;
  isLightHero?: boolean;
  tabColor?: {
    value?: PaletteAccentColorType;
  }
  taxonomy?: string[];
};

export const StoryHero = ({
  title,
  byline,
  intro,
  publishedDate,
  heroImage: { filename, focus } = {},
  isVerticalHero,
  isLeftImage,
  isLightHero,
  tabColor: { value: tabColorValue } = {},
  taxonomy,
}: StoryHeroProps) => {
  const date = publishedDate && new Date(publishedDate);
  const formattedDate = date && date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });

  return (
    <Container
      width="full"
      bgColor={isLightHero ? 'white' : 'black'}
      pb={8}
      className="su-pt-80 md:su-pt-120 lg:su-pt-[15rem] su-relative"
    >
      <Grid md={isVerticalHero ? 2 : 1}>
        {filename && (
          <div className={styles.imageWrapper(isVerticalHero, isLeftImage)}>
            <img
              alt=""
              src={getProcessedImage(filename, isVerticalHero ? '1000x1600' : '2000x1000', focus)}
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.content(isVerticalHero, isLeftImage)}>
          <div className={cnb(
            styles.tabSection(!!tabColorValue, isVerticalHero),
            accentBorderColors[paletteAccentColors[tabColorValue]],
          )}
          >
            <Heading
              as="h1"
              leading="tight"
              size={isVerticalHero ? 'f5' : 'f6'}
              className={styles.heading(!!tabColorValue, isVerticalHero)}
            >
              {title}
            </Heading>
            {(byline || date) && (
              <Text variant="caption" className={styles.heading(!!tabColorValue, isVerticalHero)}>
                {formattedDate}{byline && date ? ' | ' : ''}{`By: ${byline}`}
              </Text>
            )}
          </div>
          <div className={isVerticalHero ? 'su-px-20 sm:su-px-30 md:su-px-50 lg:su-px-80 xl:su-px-100' : 'su-cc'}>
            <Paragraph
              variant="overview"
              font="serif"
              className={styles.body(isVerticalHero)}
            >
              {intro}
            </Paragraph>
          </div>
        </div>
      </Grid>
    </Container>
  );
};
