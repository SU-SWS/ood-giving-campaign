import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { storyblokEditable } from '@storyblok/react/rsc';
import { ChatBubble, BubbleColorType } from '@/components/ChatBubble';
import { RichText, type RichTextBaseFontSizeType } from '@/components/RichText';

type SbChatBubbleProps = {
  blok: {
    _uid: string;
    content: StoryblokRichtext;
    bgColor: BubbleColorType;
    align: 'left' | 'right';
  };
};
