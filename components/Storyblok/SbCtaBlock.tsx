import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { CreateBloks } from '@/components/CreateBloks';
import { Heading, type HeadingType } from '@/components/Typography';
import { RichText } from '@/components/RichText';
import { hasRichText } from '@/utilities/hasRichText';
import { getNumBloks } from '@/utilities/getNumBloks';


type SbCtaBlockProps = {
  blok: {
    _uid: string;
    heading?: string;
    headingLevel?: HeadingType;
    body?: StoryblokRichtext;
    cta?: SbBlokData[];
  };
};

export const SbCtaBlock = ({
  blok: {
    heading,
    headingLevel,
    body,
    cta,
  },
  blok,
}: SbCtaBlockProps) => {
  const Body = hasRichText(body) ? <RichText wysiwyg={body} textColor="white" /> : undefined;

  return (
    <section {...storyblokEditable(blok)}>
      <Heading as={headingLevel || 'h2'} size={1} color="white" className="rs-mb-0">{heading}</Heading>
      <div className="rs-mb-0 *:*:*:leading-cozy">{Body}</div>
      <CreateBloks blokSection={cta} />
    </section>
  );
};

