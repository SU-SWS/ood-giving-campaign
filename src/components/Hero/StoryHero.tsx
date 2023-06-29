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
  heroImage?: SbImageType;
  isVerticalHero?: boolean;
  isImageLeft?: boolean;
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
  heroImage: { filename, focus } = {},
  isVerticalHero,
  isImageLeft,
  isLightHero,
  tabColor: { value: tabColorValue } = {},
  taxonomy,
}: StoryHeroProps) => (
  <Container
    width="full"
    bgColor={isLightHero ? 'white' : 'black'}
    pt={10}
    pb={8}
    className="su-relative"
  >
    <Grid md={isVerticalHero ? 2 : 1}>
      {filename && (
        <div className={styles.imageWrapper(isVerticalHero)}>
          <img
            alt=""
            src={getProcessedImage(filename, isVerticalHero ? '1000x1600' : '2000x1000', focus)}
            className={styles.image}
          />
        </div>
      )}
      <div className={isVerticalHero ? 'su-pt-40 xl:su-rs-pt-9' : ''}>
        <div className={cnb(
          styles.tabSection(!!tabColorValue),
          accentBorderColors[paletteAccentColors[tabColorValue]],
        )}
        >
          <Heading
            as="h1"
            leading="tight"
            size="f5"
            className={styles.heading(!!tabColorValue)}
          >
            {title}
          </Heading>
          {byline && (
            <Text variant="caption" className={styles.heading(!!tabColorValue)}>
              {`By: ${byline}`}
            </Text>
          )}
        </div>
        <div className="su-px-20 sm:su-px-30 md:su-px-50 lg:su-px-80 xl:su-px-100">
          <Paragraph
            variant="overview"
            font="serif"
            className="su-rs-mt-4 xl:su-max-w-[56rem] su-mb-0"
          >
            {intro}
          </Paragraph>
        </div>
      </div>
    </Grid>
  </Container>
);
