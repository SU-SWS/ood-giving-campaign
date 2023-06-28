import React from 'react';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { Banner } from '../Banner';
import { CreateBloks } from '../CreateBloks';
import { RichText } from '../RichText';
import { SbImageType } from './Storyblok.types';
import { BgTextColorPairBlackWhiteType } from '../../utilities/datasource';

type SbBannerProps = {
  blok: {
    _uid: string;
    heading?: string;
    isSmallHeading?: boolean;
    body?: StoryblokRichtext;
    cta?: any[];
    image?: SbImageType;
    bgColor?: BgTextColorPairBlackWhiteType;
  };
};

export const SbBanner = ({
  blok: {
    _uid,
    heading,
    isSmallHeading,
    body,
    cta,
    image: { filename, focus } = {},
    bgColor,
  },
  blok,
}: SbBannerProps) => {
  const Cta = <CreateBloks blokSection={cta} />;
  const Body = <RichText wysiwyg={body} isLightText={bgColor === 'black'} />;

  return (
    <Banner
      {...storyblokEditable(blok)}
      key={_uid}
      heading={heading}
      isSmallHeading={isSmallHeading}
      body={Body}
      cta={Cta}
      imageSrc={filename}
      imageFocus={focus}
      bgColor={bgColor}
    />
  );
};
