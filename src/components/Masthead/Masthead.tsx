import React, { HTMLAttributes } from 'react';
import { dcnb } from 'cnbuilder';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Logo } from '../Logo';

type MastheadProps = HTMLAttributes<HTMLDivElement>;

export const Masthead = ({ className, ...props }: MastheadProps) => (
  <div className={dcnb('su-bg-transparent su-w-full su-absolute su-z-10', className)} {...props}>
    <Container>
      <FlexBox
        justifyContent="between"
        alignItems="center"
        className="su-rs-py-4"
      >
        <Logo isLink className="su-w-200 sm:su-w-[24rem] md:su-w-[32rem] su-fill-white" />
      </FlexBox>
    </Container>
  </div>
);
