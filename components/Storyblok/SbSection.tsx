import { cnb } from 'cnbuilder';
import { storyblokEditable } from '@storyblok/react/rsc';
import { CreateBloks } from '../CreateBloks';
import { FlexBox } from '../FlexBox';
import {
  Heading, HeadingType, SrOnlyText, Text,
} from '../Typography';
import { Container, BgColorType } from '../Container';
import { accentBgColors, AccentBgColorType, PaddingType } from '@/utilities/datasource';
import { paletteAccentColors, PaletteAccentColorType } from '@/utilities/colorPalettePlugin';

type SbSectionProps = {
  blok: {
    _uid: string;
    content?: any[];
    superhead?: string;
    heading?: string;
    headingLevel?: HeadingType;
    barColor?: {
      value?: PaletteAccentColorType;
    }
    bgColor?: BgColorType;
    paddingTop?: PaddingType;
    paddingBottom?: PaddingType;
  };
};

export const SbSection = ({
  blok: {
    content,
    superhead,
    heading,
    headingLevel,
    barColor: { value: barColorValue } = {},
    bgColor,
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
    {(heading || superhead) && (
      <FlexBox className="rs-mb-6">
        {barColorValue && (
          <div className={cnb(
            'block w-8 md:w-20 lg:w-40',
            accentBgColors[paletteAccentColors[barColorValue] as AccentBgColorType],
          )}
          />
        )}
        <div className={cnb(
          'cc whitespace-pre-line w-full 3xl:max-w-3/5',
          barColorValue ? '-ml-8 md:-ml-20 lg:-ml-40' : '',
          superhead ? '' : '-mt-05em',
        )}
        >
          {superhead && (
            <Text size={2} leading="tight" font="serif" aria-hidden>
              {superhead}
            </Text>
          )}
          {heading && (
            <Heading
              as={headingLevel}
              size="splash"
              leading="none"
              uppercase
              font="druk"
              className="mb-0"
            >
              {superhead && <SrOnlyText>{`${superhead}:`}</SrOnlyText>}{heading}
            </Heading>
          )}
        </div>
      </FlexBox>
    )}
    <Container>
      <CreateBloks blokSection={content} isDarkTheme={bgColor === 'black'} />
    </Container>
  </Container>
);
