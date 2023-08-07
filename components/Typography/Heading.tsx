import { Text, type TypographyProps } from './Text';
import * as types from './typography.types';

type HeadingProps = Omit<TypographyProps, 'as'> & React.HTMLAttributes<HTMLHeadingElement> & {
  as?: types.HeadingType;
};

// Convenience component for paragraphs
export const Heading = ({
  as = 'h2',
  font = 'serif',
  weight = font === 'druk' ? 'black' : 'bold',
  ...rest
}: HeadingProps) => <Text {...rest} font={font} weight={weight} as={as} />;
