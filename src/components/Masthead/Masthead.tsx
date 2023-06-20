import React, { useEffect, useState, HTMLAttributes } from 'react';
import {
  m, useMotionValueEvent, useScroll, useVelocity,
} from 'framer-motion';
import { cnb } from 'cnbuilder';
import { FlexBox } from '../FlexBox';
import { Logo } from '../Logo';
import { CtaLink, CtaButton } from '../Cta';
import { ood } from '../../utilities/externalLinks';
import { HeroIcon } from '../HeroIcon';

type MastheadProps = HTMLAttributes<HTMLDivElement>;

export const Masthead = ({ className }: MastheadProps) => {
  const slideDistance = 142;
  const threshold = 300;

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
      className={cnb('su-w-full su-fixed su-top-0 su-z-50 su-transition-all su-border-b', className)}
      animate={{
        y: isVisible ? 0 : -slideDistance,
        opacity: isVisible ? 1 : 0,
        backgroundColor: isScrollingBack && !isAtTop ? 'rgba(255,255,255)' : 'rgba(255,255,255,0)',
        borderBottomColor: isScrollingBack && !isAtTop ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0)',
        height: isVisible ? slideDistance : 0,
      }}
      transition={{ duration: 0.4, delay: 0.1, ease: 'easeInOut' }}
    >
      <FlexBox
        justifyContent="between"
        alignItems="center"
        className="su-py-26 su-cc"
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
    </m.div>
  );
};
