import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { storyblokEditable } from '@storyblok/react/rsc';
import { RichText } from '../RichText';
import { type TextAlignType } from '../Typography';
import { WidthBox, type WidthType } from '../WidthBox';
import { type PaddingType } from '@/utilities/datasource';

type SbWysiwygProps = {
  blok: {
    _uid: string;
    content: StoryblokRichtext;
    // TODO: I might remove this option and just pass down the color from the parent
    isLightText?: boolean;
    textAlign?: TextAlignType;
    boundingWidth?: 'site' | 'full';
    width?: WidthType;
    spacingTop?: PaddingType;
    spacingBottom?: PaddingType;
  },
  isDarkTheme?: boolean;
};

export const SbWysiwyg = ({
  blok: {
    content,
    isLightText,
    textAlign,
    boundingWidth = 'full',
    width,
    spacingTop,
    spacingBottom,
  },
  blok,
  isDarkTheme,
}: SbWysiwygProps) => (
  <WidthBox
    {...storyblokEditable(blok)}
    boundingWidth={boundingWidth}
    width={width}
    pt={spacingTop}
    pb={spacingBottom}
  >
    <RichText wysiwyg={content} isLightText={isDarkTheme || isLightText} textAlign={textAlign} />
  </WidthBox>
);
