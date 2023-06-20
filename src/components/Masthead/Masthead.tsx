import React, { useEffect, useState, HTMLAttributes } from 'react';
import {
  m, useMotionValueEvent, useScroll, useVelocity,
} from 'framer-motion';
import { cnb } from 'cnbuilder';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Logo } from '../Logo';
import { CtaLink, CtaButton } from '../Cta';
import { ood } from '../../utilities/externalLinks';
import { HeroIcon } from '../HeroIcon';

type MastheadProps = HTMLAttributes<HTMLDivElement>;

export const Masthead = ({ className }: MastheadProps) => {
  const slideDistance = 144;
  const threshold = 200;

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const [isScrollingBack, setIsScrollingBack] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useMotionValueEvent(scrollVelocity, 'change', (latest) => {
    if (latest > 0) {
      setIsScrollingBack(false);
      return;
    }
    if (latest < -threshold) {
      setIsScrollingBack(true);
    }
  });

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsAtTop(latest <= 200);
  });

  useEffect(() => setIsVisible(isScrollingBack || isAtTop), [
    isScrollingBack,
    isAtTop,
  ]);

  return (
    <m.div
      className={cnb(
        'su-w-full su-fixed su-top-0 su-z-[100] su-transition-all',
        !isAtTop && isScrollingBack ? 'su-bg-white su-border-b su-border-b-black-20' : 'su-bg-transparent su-border-b-transparent',
        className,
      )}
      animate={{ y: isVisible ? 0 : -slideDistance, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3, delay: 0.1, ease: 'easeInOut' }}
      style={{ height: slideDistance }}
    >
      <Container>
        <FlexBox
          justifyContent="between"
          alignItems="center"
          className="su-rs-py-1"
        >
          <Logo
            isLink
            className="su-w-160 sm:su-w-[24rem] md:su-w-[32rem] su-fill-white"
            color={!isAtTop && isScrollingBack ? 'black' : 'white'}
          />
          <FlexBox alignItems="center">
            <CtaLink
              href={ood.give}
              variant={!isAtTop && isScrollingBack ? 'mainNavBlack' : 'mainNav'}
              className="su-rounded-bl-[1.4rem] lg:su-rounded-bl-[2rem] su-mt-10 lg:su-mt-26"
            >
              Make a gift
            </CtaLink>
            <CtaButton
              onClick={() => alert('Hello world')}
              variant={!isAtTop && isScrollingBack ? 'mainNavBlack' : 'mainNav'}
              className="su--ml-2 su-rounded-tr-[1.4rem] lg:su-rounded-tr-[2rem] su--mt-10 lg:su--mt-26"
            >
              <HeroIcon icon="menu" title="Main menu" noBaseStyle className="su-w-20 lg:su-w-32 group-hover:su-scale-y-75" />
            </CtaButton>
          </FlexBox>
        </FlexBox>
      </Container>
    </m.div>
  );
};
