import { storyblokEditable } from '@storyblok/react/rsc';
import { type AnimationType } from '../Animate';
import { TextCard } from '../TextCard/TextCard';
import { ColSpanType } from '../TextCard/TextCard.styles';
import { type BgTextColorPairBlackWhiteType } from '@/utilities/datasource';

type SbTextCardProps = {
  blok: {
    _uid: string;
    text?: string;
    color?: BgTextColorPairBlackWhiteType;
    font?: 'serif' | 'druk6' | 'druk7';
    xsColSpan?: ColSpanType;
    smColSpan?: ColSpanType;
    mdColSpan?: ColSpanType;
    lgColSpan?: ColSpanType;
    xlColSpan?: ColSpanType;
    xxlColSpan?: ColSpanType;
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
