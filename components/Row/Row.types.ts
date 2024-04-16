import * as styles from './Row.styles';

export type RowElementType = 'div' | 'section' | 'article' | 'main' | 'footer' | 'aside' | 'header' | 'nav' | 'form' | 'button' | 'fieldset' | 'ul' | 'ol' | 'li';

export type RowGapType = keyof typeof styles.rowGaps;
