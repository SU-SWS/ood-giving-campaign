import { storyblokEditable } from '@storyblok/react/rsc';
import { AnimateInView, type AnimationType } from '@/components/Animate';
import { Text } from '@/components/Typography';
import { WidthBox } from '@/components/WidthBox';
import { type MarginType, type PaddingType } from '@/utilities/datasource';
import {
  type FontFamilyType,
  type FontSizeType,
  type FontLeadingType,
  type FontWeightType,
  type TextVariantType,
  type TextColorType,
  type TextAlignType,
  type HeadingType,
} from '../Typography';

export type SbTextProps = {
  blok: {
    _uid: string;
    text: string;
    color?: TextColorType;
    headingLevel?: HeadingType;
    font?: FontFamilyType;
    size?: FontSizeType;
    variant?: TextVariantType;
    leading?: FontLeadingType;
    align?: TextAlignType;
    weight?: FontWeightType;
    italic?: boolean;
    srOnly?: boolean;
    boundingWidth?: 'site' | 'full';
    width?: '12' | '10' | '8' | '6' | '4';
    marginTop?: MarginType;
    marginBottom?: MarginType;
    paddingTop?: PaddingType;
    paddingBottom?: PaddingType;
    animation?: AnimationType;
    delay?: number;
  };
};

export const SbText = ({
  blok: {
    text,
    color,
    headingLevel,
    font,
    size,
    variant,
    leading,
    align,
    weight,
    italic,
    srOnly,
    boundingWidth,
    marginTop,
    marginBottom,
    paddingTop,
    paddingBottom,
    width,
    animation,
    delay,
  },
  blok,
}: SbTextProps) => (
  <AnimateInView {...storyblokEditable(blok)} animation={animation} delay={delay}>
    <WidthBox
      boundingWidth={boundingWidth}
      width={width}
      mt={marginTop}
      mb={marginBottom}
      pt={paddingTop}
      pb={paddingBottom}
    >
      <Text
        as={headingLevel || 'div'}
        font={font}
        color={color}
        size={size}
        variant={variant}
        leading={leading}
        align={align}
        weight={weight}
        italic={italic}
        srOnly={srOnly}
        className="whitespace-pre-line mb-0"
      >
        {text}
      </Text>
    </WidthBox>
  </AnimateInView>
);
