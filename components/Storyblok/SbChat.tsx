import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { Chat } from '@/components/Chat';
import { WidthBox, type WidthType } from '@/components/WidthBox';
import { CreateBloks } from '@/components/CreateBloks';
import { type MarginType } from '@/utilities/datasource';

type SbChatProps = {
  blok: {
    _uid: string;
    id: string;
    //gap?: GridGapType;
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
    //gap,
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
      <Chat>
        <CreateBloks blokSection={messages} />
      </Chat>
    </WidthBox>
  );
};
