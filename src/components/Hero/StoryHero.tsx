import React from 'react';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Grid } from '../Grid';
import { Heading, Text, Paragraph } from '../Typography';
import { accentBorderColors, AccentBorderColorType } from '../../utilities/datasource';
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
  tabColor?: AccentBorderColorType;
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
  tabColor,
  taxonomy,
}: StoryHeroProps) => (
  <Container width="full" bgColor={isLightHero ? 'white' : 'black'} className="su-relative su-rs-pt-9" pb={9}>
    <Grid lg={isVerticalHero ? 2 : 1}>
      {filename && (
        <div className={styles.imageWrapper(isVerticalHero)}>
          <img
            alt=""
            src={getProcessedImage(filename, isImageLeft ? '1000x1600' : '2000x1000', focus)}
            className={styles.image}
          />
        </div>
      )}
      <div>
        <Heading as="h1" size={6}>{title}</Heading>
        {byline && (
          <Text variant="caption">{`By: ${byline}`}</Text>
        )}
        <Paragraph variant="overview" font="serif">{intro}</Paragraph>
      </div>
    </Grid>
  </Container>
);
