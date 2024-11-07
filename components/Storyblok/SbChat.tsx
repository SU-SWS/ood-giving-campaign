import { storyblokEditable, StoryblokComponent, type SbBlokData } from '@storyblok/react/rsc';
import { Chat } from '@/components/Chat';
import { WidthBox, type WidthType } from '@/components/WidthBox';
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
  if (isHidden || !messages.length) {
    return null;
  }

  /**
   * We calculate the delay for each message within a Chat session component and store the values in an array.
   * The firs message has no delay (0 seconds).
   * There is a base delay of 0.8 second between each subsequent message.
   * If a message has the typing animation enabled (2 seconds),
   * we add anotehr 2 second delay on top of the base 0.8 second to the next message.
   */
  const delays: number[] = [];
  let cumulativeDelay = 0;

  for (const message of messages) {
    delays.push(cumulativeDelay);
    cumulativeDelay += 0.8 + (message.showTyping ? 2 : 0);
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
        {messages.map((message, index) => (
          <StoryblokComponent blok={message} key={message._uid} delay={delays[index]} />
        ))}
      </Chat>
    </WidthBox>
  );
};
