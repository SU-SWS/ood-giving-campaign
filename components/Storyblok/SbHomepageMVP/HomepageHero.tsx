import { type SbBlokData } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { CreateBloks } from '@/components/CreateBloks';
import { RichText } from '@/components/RichText';
import { Container } from '@/components/Container';
import { AnimateInView } from '@/components/Animate';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { hasRichText } from '@/utilities/hasRichText';
import { getNumBloks } from '@/utilities/getNumBloks';
import { type SbImageType } from '../Storyblok.types';
import { type MarginType } from '@/utilities/datasource';

type HomepageHeroProps = {
  heading?: SbBlokData[];
  intro?: StoryblokRichtext;
  image?: SbImageType;
  spacingTop?: MarginType;
  spacingBottom?: MarginType;
  isHidden?: boolean;
};

export const HomepageHero = ({
  heading,
  intro,
  image: { filename: imageSrc, focus: imageFocus, alt: imageAlt } = {},
  spacingTop,
  spacingBottom,
  isHidden,
}: HomepageHeroProps) => {
  const hasHeadingBloks = !!getNumBloks(heading);
  const hasIntroText = hasRichText(intro);

  return (
    <Container
      width="full"
      bgColor="black"
      pt={8}
      mb={spacingBottom}
      className="relative grid xl:grid-cols-2 overflow-hidden gap-50 ml-0 mr-auto"
    >
      {/* Content */}
      <div className="max-w-prose ml-0 mr-auto">
        {/* Heading with nested blocks */}
        {hasHeadingBloks && (
          <AnimateInView animation="slideUp" delay={0.1} className="mb-8">
            <CreateBloks blokSection={heading} />
          </AnimateInView>
        )}

        {/* Intro Rich Text */}
        {hasIntroText && (
          <AnimateInView animation="slideUp" delay={0.2}>
            <RichText
              wysiwyg={intro}
              textColor={imageSrc ? 'white' : 'black'}
              linkColor={imageSrc ? 'digital-red-xlight' : 'unset'}
              className="rs-mt-4 font-semibold *:fluid-type-1 *:leading-cozy"
            />
          </AnimateInView>
        )}
      </div>
      {/* Background Image */}
      {imageSrc && (
        <div className="relative aspect-[16/9]">
          <picture>
            <source
              srcSet={getProcessedImage(imageSrc, '2000x1200', imageFocus)}
              media="(min-width: 1200px)"
              width={2000}
              height={1200}
            />
            <source
              srcSet={getProcessedImage(imageSrc, '1200x900', imageFocus)}
              media="(min-width: 768px)"
              width={1200}
              height={900}
            />
            <source
              srcSet={getProcessedImage(imageSrc, '800x600', imageFocus)}
              media="(min-width: 576px)"
              width={800}
              height={600}
            />
            <img
              src={getProcessedImage(imageSrc, '2000x1200', imageFocus)}
              alt={imageAlt || ''}
              width={2000}
              height={1200}
              className="w-full h-full object-cover"
            />
          </picture>
        </div>
      )}
    </Container>
  );
};
