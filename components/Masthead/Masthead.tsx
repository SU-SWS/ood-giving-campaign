'use client';
import { useEffect, useState, HTMLAttributes } from 'react';
import {
  m, useMotionValueEvent, useScroll, useVelocity, useWillChange,
} from 'framer-motion';
import { cnb } from 'cnbuilder';
import { FlexBox } from '../FlexBox';
import { LogoLockup } from '@/components/Logo/LogoLockup';
import { CtaLink, type CtaVariantType } from '../Cta';
import { ood } from '@/utilities/externalLinks';

type MastheadProps = HTMLAttributes<HTMLDivElement> & {
  isLight?: boolean;
};

export const Masthead = ({ isLight, className }: MastheadProps) => {
  const slideDistance = 76;
  const threshold = 200;

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const willChange = useWillChange();

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
    setIsAtTop(latest <= 40);
  });

  useEffect(() => setIsVisible(isScrollingBack || isAtTop), [
    isScrollingBack,
    isAtTop,
  ]);

  let ctaVariant: CtaVariantType = 'mainNav';
  if (!isAtTop && isScrollingBack) {
    ctaVariant = 'mainNavUp';
  }
  if (isLight && isAtTop) {
    ctaVariant = 'mainNavBlack';
  }

  return (
    <m.div
      className={cnb(
        'w-full fixed top-0 z-50 transition-colors will-change-transform',
        !isAtTop && isScrollingBack ? 'bg-gc-black border-b border-b-black-80 h-60 lg:h-[6.8rem]' : 'bg-transparent border-b-transparent h-[7.6rem]',
        className,
      )}
      animate={{ y: isVisible ? 0 : -slideDistance, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2, delay: !isAtTop && isScrollingBack ? 0.4 : 0, ease: 'easeInOut' }}
    >
      <FlexBox
        justifyContent="between"
        alignItems="center"
        className={cnb('cc transition py-12', !isAtTop ? 'lg:py-11' : 'md:py-26')}
      >
        <LogoLockup
          isLink
          color={isLight && isAtTop ? 'default' : 'white'}
          text="Giving"
          className=""
        />
        {/* The scale3d here solves a Firefox only rendering bug with blurry curved borders when using transform */}
        <FlexBox alignItems="center">
          <CtaLink
            href={ood.give}
            variant={ctaVariant}
            color="current"
          >
            Make a gift
          </CtaLink>
        </FlexBox>
      </FlexBox>
    </m.div>
  );
};
