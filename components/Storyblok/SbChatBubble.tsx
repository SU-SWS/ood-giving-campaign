import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { storyblokEditable } from '@storyblok/react/rsc';
import { type AnimationType } from '@/components/Animate';
import { ChatBubble, paletteBubbleColors, type PaletteBubbleHexColorType  } from '@/components/ChatBubble';
import { RichText, type RichTextBaseFontSizeType } from '@/components/RichText';

type SbChatBubbleProps = {
  blok: {
    _uid: string;
    content: StoryblokRichtext;
    bgColor: {
      value?: PaletteBubbleHexColorType;
    }
    align: 'left' | 'right';
    animation: AnimationType;
    delay: number;
  };
};

export const SbChatBubble = ({
  blok: {
    content,
    bgColor: { value } = {},
    align,
    animation,
    delay,
  },
  blok,
}: SbChatBubbleProps) => {
  return (
    <ChatBubble
      {...storyblokEditable(blok)}
      bgColor={paletteBubbleColors[value]}
      align={align}
      animation={animation}
      delay={delay}
    >
      <RichText
        textColor="white"
        wysiwyg={content}
      />
    </ChatBubble>
  );
};
