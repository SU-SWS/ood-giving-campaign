import * as styles from './typography.styles';

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type NonHeadingTypographyType = 'p' | 'span' | 'div' | 'label' | 'legend' | 'figcaption' | 'blockquote' | 'cite' | 'q' | 'small' | 'strong' | 'em' | 'del' | 'ins' | 'sub' | 'sup' | 'address' | 'pre' | 'ul' | 'ol' | 'li' | 'time';

export type TextType = HeadingType | NonHeadingTypographyType;

export type FontFamilyType = keyof typeof styles.fontFamilies;

export type FontWeightType = keyof typeof styles.fontWeights;

export type FontSizeType = keyof typeof styles.fontSizes;

export type FontLeadingType = keyof typeof styles.fontLeadings;

export type TextAlignType = keyof typeof styles.textAligns;

export type TextColorType = keyof typeof styles.textColors;

export type TextVariantType = keyof typeof styles.textVariants;
