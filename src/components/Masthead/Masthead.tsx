import React, { HTMLAttributes } from 'react';
import { dcnb } from 'cnbuilder';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Logo } from '../Logo';
import * as styles from './Masthead.styles';

type MastheadProps = HTMLAttributes<HTMLDivElement>;

export const Masthead = ({ className, ...props }: MastheadProps) => (
  <div className={dcnb('su-bg-black', className)} {...props}>
    <Container>
      <FlexBox
        justifyContent="between"
        alignItems="center"
        className="su-rs-pt-2 su-rs-pb-1"
      >
        <Logo color="white" variant="horizontal" isLink className={styles.logo} />
      </FlexBox>
    </Container>
  </div>
);
