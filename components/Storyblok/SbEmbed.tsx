import { storyblokEditable} from '@storyblok/react/rsc';
import { Embed } from '@/components/Embed';

type SbEmbedProps = {
  blok: {
    _uid: string;
    src?: string;
    content?: string;
  };
};

export const SbEmbed = ({ blok, blok: { _uid } }:SbEmbedProps) => {

  return (
    <Embed
      {...storyblokEditable}
      {...blok}
      id={_uid}
    />
  );
};
