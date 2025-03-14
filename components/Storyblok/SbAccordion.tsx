import { storyblokEditable } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { Accordion } from '@/components/Accordion';
import { RichText } from '@/components/RichText';
import { hasRichText } from '@/utilities/hasRichText';
import { type MarginType } from '@/utilities/datasource';
import { type SbAccordionItemsTypes } from './Storyblok.types';

type SbAccordionProps = {
  blok: {
    _uid: string;
    heading?: string;
    intro?: StoryblokRichtext;
    items: SbAccordionItemsTypes[];
    id?: string;
    isDarkTheme?: boolean;
    showControls?: boolean;
    marginTop?: MarginType;
    marginBottom?: MarginType;
    isHidden?: boolean;
  }
}

export const SbAccordion = ({
  blok: {
    heading,
    intro,
    items,
    id,
    isDarkTheme,
    showControls,
    marginTop,
    marginBottom,
    isHidden,
  },
  blok,
}: SbAccordionProps) => {
  if (isHidden) {
    return null;
  }

  const Intro = hasRichText(intro)
    ? <RichText
        baseFontSize="big"
        textColor={isDarkTheme ? 'white' : 'black'}
        linkColor={isDarkTheme ? 'digital-red-xlight' : 'unset'}
        wysiwyg={intro}
      />
      : undefined;

  return (
    <Accordion
      {...storyblokEditable(blok)}
      heading={heading}
      intro={Intro}
      items={items}
      id={id}
      isDarkTheme={isDarkTheme}
      showControls={showControls}
      marginTop={marginTop}
      marginBottom={marginBottom}
    />
  );
};
