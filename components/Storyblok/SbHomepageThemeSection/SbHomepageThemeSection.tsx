import { cnb } from 'cnbuilder';
import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { CreateBloks } from '@/components/CreateBloks';
import { FlexBox } from '@/components/FlexBox';
import { Heading, SrOnlyText, Text } from '@/components/Typography';
import { Container } from '@/components/Container';
import { RichText } from '@/components/RichText';
import { type SbImageType } from '../Storyblok.types';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { hasRichText } from '@/utilities/hasRichText';

type SbHomepageThemeSectionProps = {
  blok: {
    _uid: string;
    superhead?: string;
    heading?: string;
    intro?: StoryblokRichtext;
    content?: SbBlokData[];
    bgImage?: SbImageType;
  };
};

export const SbHomepageThemeSection = ({
  blok: {
    superhead,
    heading,
    intro,
    content,
    bgImage: { filename, focus } = {},
  },
  blok,
}: SbHomepageThemeSectionProps) => {
  const hasHeader = heading || superhead || intro;

  return (
    <Container
      width="full"
      className="relative overflow-hidden"
      {...storyblokEditable(blok)}
    >
      <Container
        width="full"
        bgColor="black"
        pt={8}
        pb={9}
        className="relative overflow-hidden"
      >
        {(heading || superhead) && (
          <FlexBox className={cnb('relative z-10')}>
            {superhead && (
              <Text
                size={2}
                leading="tight"
                font="serif"
                weight="semibold"
                aria-hidden={!!heading}
              >
                {superhead}
              </Text>
            )}
            {heading && (
              <Heading
                as="h2"
                size={6}
                leading="none"
                uppercase
                font="druk"
                className="mb-0"
              >
                {superhead && <SrOnlyText>{`${superhead}:`}</SrOnlyText>}{heading}
              </Heading>
            )}
          </FlexBox>
        )}
        {intro && (
          <Container>
            <RichText
              wysiwyg={intro}
              textColor="white"
              className="*:leading-display mt-08em max-w-prose-wide"
            />
          </Container>
        )}
        <Container pt={hasHeader ? 8 : undefined} width="full" className="relative z-10">
          <CreateBloks blokSection={content} isDarkTheme />
        </Container>
      </Container>
    </Container>
  );
};
