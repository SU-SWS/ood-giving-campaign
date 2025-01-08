import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { storyblokEditable } from '@storyblok/react/rsc';
import { ChatBubble, paletteBubbleColors, type PaletteBubbleHexColorType } from '@/components/Chat';
import { RichText } from '@/components/RichText';
import { hasRichText } from '@/utilities/hasRichText';
import { type SbImageType } from './Storyblok.types';

type SbChatBubbleProps = {
  blok: {
    _uid: string;
    content: StoryblokRichtext;
    plainText: string;
    avatarImage?: SbImageType;
    avatarAlt?: string;
    bgColor: {
      value?: PaletteBubbleHexColorType;
    }
    isLightText: boolean;
    align: 'left' | 'right';
    addTail: boolean;
    showTyping: boolean;
    addTopSpacing: boolean;
    addIndent: boolean;
    isAvatarAlignBottom: boolean;
  };
  delay: number;
};

export const SbChatBubble = ({
  blok: {
    content,
    plainText,
    avatarImage: { filename, focus } = {},
    avatarAlt,
    bgColor: { value } = {},
    isLightText,
    align,
    addTail,
    showTyping,
    addTopSpacing,
    addIndent,
    isAvatarAlignBottom,
  },
  delay,
  blok,
}: SbChatBubbleProps) => {
  if (!hasRichText(content) && !plainText) {
    return null;
  }

  const isRenderLightText = !!value && paletteBubbleColors[value] !== 'black-10' || (isLightText && !value);

  return (
    <ChatBubble
      {...storyblokEditable(blok)}
      avatarImageSrc={filename}
      avatarImageFocus={focus}
      avatarAlt={avatarAlt}
      bgColor={paletteBubbleColors[value]}
      isRenderLightText={isRenderLightText}
      align={align}
      addTail={addTail}
      showTyping={showTyping}
      addTopSpacing={addTopSpacing}
      addIndent={addIndent}
      isAvatarAlignBottom={isAvatarAlignBottom}
      delay={delay}
    >
      {hasRichText(content) && (
        <RichText
          type="card"
          textColor={isRenderLightText ? 'white' : 'black'}
          linkColor={isRenderLightText ? 'white' : 'unset'}
          wysiwyg={content}
        />
      )}
      {plainText}
    </ChatBubble>
  );
};
