import React from 'react';
import { cnb } from 'cnbuilder';
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
    <Grid md={isVerticalHero ? 2 : 1}>
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
        <div className={cnb('md:su-px-50 lg:su-px-80 xl:su-px-100')}>
          <Heading as="h1" leading="tight" size="f5" className="su-mb-02em xl:su-max-w-700">{title}</Heading>
          {byline && (
            <Text variant="caption">{`By: ${byline}`}</Text>
          )}
        </div>
        <div className="md:su-px-50 lg:su-px-80 xl:su-px-100">
          <Paragraph variant="overview" font="serif" className="su-rs-mt-4 xl:su-max-w-[56rem] su-mb-0">{intro}</Paragraph>
        </div>
      </div>
    </Grid>
  </Container>
);
