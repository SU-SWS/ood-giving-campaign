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
      pt={9}
      mb={spacingBottom}
      className="relative grid xl:grid-cols-12 overflow-hidden gap-y-40 md:gap-y-60 lg:gap-y-80 ml-0 mr-auto"
    >
      {/* Content */}
      <div className="pt-40 md:pt-0 xl:col-span-8 2xl:col-span-7 3xl:col-span-6 ml-0 mr-auto px-20 sm:px-30 md:px-50 lg:px-80 xl:pl-100 4xl:pl-[calc(100%-900px)]">
        {/* Heading with nested blocks */}
        {hasHeadingBloks && (
          <AnimateInView animation="slideUp" delay={0.1} aria-hidden className="mb-8">
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
              className="rs-mt-4 *:fluid-type-1 *:leading-cozy max-w-prose-wide xl:max-w-[50ch] ml-0 mr-auto *:text-pretty"
            />
          </AnimateInView>
        )}
      </div>
      {/* Background Image */}
      {imageSrc && (
        <div className="relative aspect-[16/9] ml-auto mr-0 max-w-[85%] sm:max-w-[80%] lg:max-w-[70%] xl:max-w-full xl:col-span-4 2xl:col-span-5 3xl:col-span-6">
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
