import { storyblokEditable} from '@storyblok/react/rsc';
import { Embed } from '@/components/Embed';
import { type WidthType } from '../WidthBox';
import { type PaddingType } from '@/utilities/datasource';

type SbEmbedProps = {
  blok: {
    _uid: string;
    src?: string;
    content?: string;
    boundingWidth?: 'site' | 'full';
    width?: WidthType;
    spacingTop?: PaddingType;
    spacingBottom?: PaddingType;
  };
};

export const SbEmbed = ({ blok, blok: { _uid } }:SbEmbedProps) => {

  return (
    <Embed
      {...storyblokEditable(blok)}
      {...blok}
      id={_uid}
    />
  );
};
