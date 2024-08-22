import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { storyblokEditable } from '@storyblok/react/rsc';
import { type AnimationType } from '@/components/Animate';
import { ChatBubble, paletteBubbleColors, type PaletteBubbleHexColorType  } from '@/components/ChatBubble';
import { RichText } from '@/components/RichText';
import { hasRichText } from '@/utilities/hasRichText';

type SbChatBubbleProps = {
  blok: {
    _uid: string;
    content: StoryblokRichtext;
    plainText: string;
    bgColor: {
      value?: PaletteBubbleHexColorType;
    }
    align: 'left' | 'right';
    addTail: boolean;
    animation: AnimationType;
    delay: number;
  };
};

export const SbChatBubble = ({
  blok: {
    content,
    plainText,
    bgColor: { value } = {},
    align,
    addTail,
    animation,
    delay,
  },
  blok,
}: SbChatBubbleProps) => {
  if (!hasRichText(content) && !plainText) {
    return null;
  }

  return (
    <ChatBubble
      {...storyblokEditable(blok)}
      bgColor={paletteBubbleColors[value]}
      align={align}
      addTail={addTail}
      animation={animation}
      delay={delay}
    >
      {hasRichText(content) && (
        <RichText
          textColor="white"
          wysiwyg={content}
        />
      )}
      {plainText}
    </ChatBubble>
  );
};
