import React, { HTMLAttributes } from 'react';
import { dcnb } from 'cnbuilder';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Logo } from '../Logo';
import { CtaLink, CtaButton } from '../Cta';
import { ood } from '../../utilities/externalLinks';
import { HeroIcon } from '../HeroIcon';

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
        <FlexBox alignItems="center">
          <CtaLink href={ood.give} variant="mainNav" className="su-rounded-bl-[1.4rem] lg:su-rounded-bl-[2rem]">
            Make a gift
          </CtaLink>
          <CtaButton onClick={() => alert('Hello world')} variant="mainNav" className="su--ml-2 su-rounded-tr-[1.4rem] lg:su-rounded-tr-[2rem] su--mt-20 lg:su--mt-36">
            <HeroIcon icon="menu" noBaseStyle className="su-w-20 lg:su-w-32" />
          </CtaButton>
        </FlexBox>
      </FlexBox>
    </Container>
  </div>
);
