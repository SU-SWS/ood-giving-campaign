import React from 'react';
import { StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { RichText } from '../RichText';

type SbWysiwygProps = {
  blok: {
    _uid: string;
    content: StoryblokRichtext;
    isLightText?: boolean;
  };
};

export const SbWysiwyg = ({
  blok: {
    _uid,
    content,
    isLightText,
  },
  blok,
}: SbWysiwygProps) => (
  <RichText
    {...storyblokEditable(blok)}
    key={_uid}
    wysiwyg={content}
    isLightText={isLightText}
  />
);
