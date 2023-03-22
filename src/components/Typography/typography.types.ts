import * as styles from './typography.styles';

export type PolymorphicType = keyof JSX.IntrinsicElements | React.ComponentType<any>;

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type FontStackType = keyof typeof styles.fontStacks;

export type FontWeightType = keyof typeof styles.fontWeights;

export type FontSizeType = keyof typeof styles.fontSizes;

export type FontLeadingType = keyof typeof styles.fontLeadings;

export type TextAlignType = keyof typeof styles.textAligns;

export type TextColorType = keyof typeof styles.textColors;

export type TextVariantType = keyof typeof styles.textVariants;
