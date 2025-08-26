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
  if (isHidden) {
    return null;
  }

  const hasHeadingBloks = !!getNumBloks(heading);
  const hasIntroText = hasRichText(intro);

  return (
    <Container
      width="full"
      mt={spacingTop}
      mb={spacingBottom}
      className="relative overflow-hidden"
    >
      {/* Background Image */}
      {imageSrc && (
        <div className="absolute inset-0 z-0">
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
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}

      {/* Content */}
      <Container className="relative z-10 py-20 md:py-32 lg:py-40">
        <div className="text-center max-w-4xl mx-auto">
          {/* Heading with nested blocks */}
          {hasHeadingBloks && (
            <AnimateInView animation="slideUp" delay={0.1} className="mb-8">
              <CreateBloks blokSection={heading} />
            </AnimateInView>
          )}

          {/* Intro Rich Text */}
          {hasIntroText && (
            <AnimateInView animation="slideUp" delay={0.2} className="max-w-3xl mx-auto">
              <RichText
                wysiwyg={intro}
                textColor={imageSrc ? 'white' : 'black'}
                textAlign="center"
                baseFontSize="big"
                linkColor={imageSrc ? 'digital-red-xlight' : 'unset'}
              />
            </AnimateInView>
          )}
        </div>
      </Container>
    </Container>
  );
};
