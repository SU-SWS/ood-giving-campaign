import { cnb } from 'cnbuilder';
import { Text, type TypographyProps } from './Text';

type ParagraphProps = Omit<TypographyProps, 'className'> & React.HTMLAttributes<HTMLParagraphElement> & {
  noMargin?: boolean; // If true, remove the bottom margin from base styles
};

// Convenience component for paragraphs
export const Paragraph = ({ noMargin, className, ...rest }: ParagraphProps) => (
  <Text {...rest} as="p" className={cnb(noMargin ? 'mb-0' : '', className)} />
);
