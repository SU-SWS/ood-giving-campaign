import React from 'react';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { AnimationType } from '../Animate';
import { TextCard } from '../TextCard/TextCard';
import * as styles from '../TextCard/TextCard.styles';
import { BgTextColorPairBlackWhiteType } from '../../utilities/datasource';

type SbTextCardProps = {
  blok: {
    _uid: string;
    text?: string;
    color?: BgTextColorPairBlackWhiteType;
    font?: 'serif' | 'druk6' | 'druk7';
    colSpan?: styles.ColSpanType;
    animation?: AnimationType;
    delay?: number;
  };
};

export const SbTextCard = ({
  blok: {
    _uid,
    text,
    color,
    font,
    colSpan,
    animation,
    delay,
  },
  blok,
}: SbTextCardProps) => (
  <TextCard
    {...storyblokEditable(blok)}
    key={_uid}
    text={text}
    color={color}
    font={font}
    colSpan={colSpan}
    animation={animation}
    delay={delay}
  />
);
