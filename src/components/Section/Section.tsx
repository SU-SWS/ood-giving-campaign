import React, { ReactNode, HTMLAttributes } from 'react';
import { dcnb } from 'cnbuilder';
import { Container } from '../Container';
import * as styles from './Section.styles';

type SectionProps = HTMLAttributes<HTMLDivElement> & {
  bgColor?: styles.BgColorType;
  children?: ReactNode;
  className?: string;
  id?: string;
};

export const Section = ({
  bgColor = 'black',
  children,
  className,
  id,
  ...props
}: SectionProps) => (
  <Container
    {...props}
    id={id}
    className={dcnb(styles.root, styles.bgColors[bgColor], className)}
  >
    {children}
  </Container>
);
