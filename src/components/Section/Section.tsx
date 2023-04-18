import React, { ReactNode, HTMLAttributes } from 'react';
import { dcnb } from 'cnbuilder';
import { Container } from '../Container';
import * as styles from './Section.styles';

type SectionProps = HTMLAttributes<HTMLDivElement> & {
  bgColor?: styles.BgColorType;
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
};

export const Section = ({
  bgColor = 'black',
  children,
  className,
  style,
  id,
  ...props
}: SectionProps) => (
  <Container
    {...props}
    style={style}
    id={id}
    className={dcnb(styles.root, styles.bgColors[bgColor], className)}
  >
    {children}
  </Container>
);
