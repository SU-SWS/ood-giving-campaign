import { storyblokEditable } from '@storyblok/react/rsc';
import { RichText } from '@/components/RichText';
import { StoryVideo } from '@/components/Video';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { type ImageAspectRatioType } from '@/utilities/datasource';
import { type WidthType } from '@/components/WidthBox';
import { type PaddingType } from '@/utilities/datasource';
import { type CaptionBgColorType } from '@/components/StoryImage';
import { type AnimationType } from '@/components/Animate';
import { type SbImageType } from './Storyblok.types';
import { hasRichText } from '@/utilities/hasRichText';

type SbVideoProps = {
  blok: {
    _uid: string;
    videoWebm: SbImageType;
    videoMp4: SbImageType;
    videoPoster: SbImageType;
    caption?: StoryblokRichtext;
    aspectRatio?: ImageAspectRatioType;
    isFullScreen?: boolean;
    boundingWidth?: 'site' | 'full';
    width?: WidthType;
    spacingTop?: PaddingType;
    spacingBottom?: PaddingType;
    isCaptionLight?: boolean;
    captionBgColor?: CaptionBgColorType;
    animation?: AnimationType;
    delay?: number;
    isHidden?: boolean;
  };
};

export const SbVideo = ({
  blok: {
    videoWebm: { filename: webmSrc } = {},
    videoMp4: { filename: mp4Src } = {},
    videoPoster: { filename: posterSrc } = {},
    caption,
    aspectRatio,
    isFullScreen,
    boundingWidth = 'full',
    width,
    spacingTop,
    spacingBottom,
    isCaptionLight,
    captionBgColor = 'transparent',
    animation = 'none',
    delay,
    isHidden,
  },
  blok,
}: SbVideoProps) => {
  if (isHidden) {
    return null;
  }

  const Caption = hasRichText(caption)
    ? <RichText
        textColor={isCaptionLight ? 'white' : 'black-70'}
        linkColor={isCaptionLight ? 'digital-red-xlight' : 'unset'}
        wysiwyg={caption}
      />
    : undefined;

  return (
    <StoryVideo
      {...storyblokEditable(blok)}
      videoWebm={webmSrc}
      videoMp4={mp4Src}
      videoPosterSrc={posterSrc}
      caption={Caption}
      aspectRatio={aspectRatio}
      isFullScreen={isFullScreen}
      boundingWidth={boundingWidth}
      width={width}
      pt={spacingTop}
      pb={spacingBottom}
      captionBgColor={captionBgColor}
      animation={animation}
      delay={delay}
    />
  );
};
