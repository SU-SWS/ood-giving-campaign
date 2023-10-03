import { cnb } from 'cnbuilder';
import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { CreateBloks } from '../CreateBloks';
import { FlexBox } from '../FlexBox';
import {
  Heading, type HeadingType, SrOnlyText, Text, Paragraph,
} from '../Typography';
import { Container, type BgColorType } from '../Container';
import { ImageOverlay } from '../ImageOverlay';
import { accentBgColors, type PaddingType } from '@/utilities/datasource';
import { paletteAccentColors, type PaletteAccentHexColorType } from '@/utilities/colorPalettePlugin';
import { type SbImageType } from './Storyblok.types';
import { getProcessedImage } from '@/utilities/getProcessedImage';

type SbSectionProps = {
  blok: {
    _uid: string;
    content?: SbBlokData[];
    superhead?: string;
    heading?: string;
    isSmallHeading?: boolean;
    headingLevel?: HeadingType;
    subheading?: string;
    rightAlignHeader?: boolean;
    barColor?: {
      value?: PaletteAccentHexColorType;
    }
    bgColor?: BgColorType;
    bgImage?: SbImageType;
    paddingTop?: PaddingType;
    paddingBottom?: PaddingType;
  };
};

export const SbSection = ({
  blok: {
    content,
    superhead,
    heading,
    isSmallHeading,
    headingLevel,
    subheading,
    rightAlignHeader,
    barColor: { value: barColorValue } = {},
    bgColor,
    bgImage: { filename, focus } = {},
    paddingTop,
    paddingBottom,
  },
  blok,
}: SbSectionProps) => (
  <Container
    {...storyblokEditable(blok)}
    width="full"
    bgColor={bgColor}
    pt={paddingTop}
    pb={paddingBottom}
    className="relative overflow-hidden"
  >
    {filename && (
      <ImageOverlay imageSrc={getProcessedImage(filename, '2000x1600', focus)} overlay={bgColor === 'black' ? 'black-70' : 'white-90'} />
    )}
    {(heading || superhead) && (
      <FlexBox className={cnb('relative z-10', rightAlignHeader ? 'mr-0 ml-auto' : 'ml-0')}>
        {barColorValue && (
          <div className={cnb(
            'block w-8 md:w-20 lg:w-40',
            rightAlignHeader ? 'order-last' : 'order-first',
            accentBgColors[paletteAccentColors[barColorValue]],
          )}
          />
        )}
        <div className={cnb(
          'cc whitespace-pre-line w-full 3xl:max-w-[90%]',
          barColorValue && !rightAlignHeader ? '-ml-8 md:-ml-20 lg:-ml-40' : '',
          barColorValue && rightAlignHeader ? '-mr-8 md:-mr-20 lg:-mr-40' : '',
          superhead ? '' : '-mt-05em',
        )}
        >
          {superhead && (
            <Text size={2} leading="tight" font="serif" weight="semibold" align={rightAlignHeader ? 'right' : 'left'} aria-hidden>
              {superhead}
            </Text>
          )}
          {heading && (
            <Heading
              as={headingLevel}
              size={isSmallHeading ? 'f8' : 'splash'}
              leading="none"
              uppercase
              font="druk"
              align={rightAlignHeader ? 'right' : 'left'}
              className="mb-0"
            >
              {superhead && <SrOnlyText>{`${superhead}:`}</SrOnlyText>}{heading}
            </Heading>
          )}
        </div>
      </FlexBox>
    )}
    {subheading && (
      <Container>
        <Paragraph
          variant="overview"
          weight="normal"
          align={rightAlignHeader ? 'right' : 'left'}
          color={bgColor === 'black' ? 'black-20' : 'black-80'}
          noMargin
          className={cnb('relative z-10 max-w-prose ml-0 rs-mt-3', rightAlignHeader ? 'mr-0 ml-auto' : 'ml-0')}
        >
          {subheading}
        </Paragraph>
      </Container>
    )}
    <Container pt={8} width="full">
      <CreateBloks blokSection={content} isDarkTheme={bgColor === 'black'} />
    </Container>
  </Container>
);
