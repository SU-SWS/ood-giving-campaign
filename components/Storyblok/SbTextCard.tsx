'use client';
import React from 'react';
import { storyblokEditable } from '@storyblok/react/rsc';
import { AnimationType } from '../Animate';
import { TextCard } from '../TextCard/TextCard';
import * as styles from '../TextCard/TextCard.styles';
import { BgTextColorPairBlackWhiteType } from '@/utilities/datasource';

type SbTextCardProps = {
  blok: {
    _uid: string;
    text?: string;
    color?: BgTextColorPairBlackWhiteType;
    font?: 'serif' | 'druk6' | 'druk7';
    xsColSpan?: styles.ColSpanType;
    smColSpan?: styles.ColSpanType;
    mdColSpan?: styles.ColSpanType;
    lgColSpan?: styles.ColSpanType;
    xlColSpan?: styles.ColSpanType;
    xxlColSpan?: styles.ColSpanType;
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
    xsColSpan,
    smColSpan,
    mdColSpan,
    lgColSpan,
    xlColSpan,
    xxlColSpan,
    animation,
    delay,
  },
  blok,
}: SbTextCardProps) => (
  <TextCard
    {...storyblokEditable(blok)}
    text={text}
    color={color}
    font={font}
    xsColSpan={xsColSpan}
    smColSpan={smColSpan}
    mdColSpan={mdColSpan}
    lgColSpan={lgColSpan}
    xlColSpan={xlColSpan}
    xxlColSpan={xxlColSpan}
    animation={animation}
    delay={delay}
  />
);
