import React from 'react';
import { StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { Container } from '../Container';
import { RichText } from '../RichText';
import { WidthBox, WidthType } from '../WidthBox';
import { PaddingType } from '../../utilities/datasource';

type SbWysiwygProps = {
  blok: {
    _uid: string;
    content: StoryblokRichtext;
    // TODO: I might remove this option and just pass down the color from the parent
    isLightText?: boolean;
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
    <RichText wysiwyg={content} isLightText={isLightText} />
  </WidthBox>
);
