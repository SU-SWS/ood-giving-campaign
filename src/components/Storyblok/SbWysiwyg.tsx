import React from 'react';
import { StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { RichText } from '../RichText';
import { TextAlignType } from '../Typography';
import { WidthBox, WidthType } from '../WidthBox';
import { PaddingType } from '../../utilities/datasource';

type SbWysiwygProps = {
  blok: {
    _uid: string;
    content: StoryblokRichtext;
    // TODO: I might remove this option and just pass down the color from the parent
    isLightText?: boolean;
    textAlign?: TextAlignType;
    width?: WidthType;
    spacingTop?: PaddingType;
    spacingBottom?: PaddingType;
  };
};

export const SbWysiwyg = ({
  blok: {
    _uid,
    content,
    isLightText,
    textAlign,
    width,
    spacingTop,
    spacingBottom,
  },
  blok,
}: SbWysiwygProps) => (
  <WidthBox
    {...storyblokEditable(blok)}
    key={_uid}
    width={width}
    pt={spacingTop}
    pb={spacingBottom}
  >
    <RichText wysiwyg={content} isLightText={isLightText} textAlign={textAlign} />
  </WidthBox>
);
