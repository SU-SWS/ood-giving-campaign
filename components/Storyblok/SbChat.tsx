import { storyblokEditable, StoryblokComponent, type SbBlokData } from '@storyblok/react/rsc';
import { Chat } from '@/components/Chat';
import { WidthBox, type WidthType } from '@/components/WidthBox';
import { CreateBloks } from '@/components/CreateBloks';
import { type MarginType } from '@/utilities/datasource';
import { type GridGapType } from '@/components/Grid/Grid.types';

type SbChatProps = {
  blok: {
    _uid: string;
    id: string;
    gap?: GridGapType;
    boundingWidth?: 'site' | 'full';
    width?: WidthType;
    messages: SbBlokData[];
    marginTop?: MarginType;
    marginBottom?: MarginType;
    isHidden?: boolean;
  };
};

export const SbChat = ({
  blok: {
    id,
    gap,
    boundingWidth = 'full',
    width,
    messages,
    marginTop,
    marginBottom,
    isHidden,
  },
  blok,
}: SbChatProps) => {
  if (isHidden) {
    return null;
  }

  return (
    <WidthBox
      {...storyblokEditable(blok)}
      id={id}
      boundingWidth={boundingWidth}
      width={width}
      mt={marginTop}
      mb={marginBottom}
    >
      <Chat gap={gap}>
        {messages.map((message, index) => {
          // Calculate cumulative delay up to the current index
          const cumulativeDelay = messages.slice(0, index).reduce((delay, message) => {
            return delay + 0.6 + (message.showTyping ? 2 : 0);
          }, 0);

          return (
            <StoryblokComponent blok={message} key={message._uid} delay={cumulativeDelay} />
          );
    })}
      </Chat>
    </WidthBox>
  );
};
