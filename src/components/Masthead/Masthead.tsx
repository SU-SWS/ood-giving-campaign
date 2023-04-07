import React, { HTMLAttributes } from 'react';
import { dcnb } from 'cnbuilder';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Logo } from '../Logo';

type MastheadProps = HTMLAttributes<HTMLDivElement>;

export const Masthead = ({ className, ...props }: MastheadProps) => (
  <div className={dcnb('su-bg-black', className)} {...props}>
    <Container>
      <FlexBox
        justifyContent="between"
        alignItems="center"
        className="su-rs-py-2"
      >
        <Logo color="white" variant="horizontal" size={5} isLink />
      </FlexBox>
    </Container>
  </div>
);
