'use client';
import { useEffect, useState, HTMLAttributes } from 'react';
import {
  m, useMotionValueEvent, useScroll, useVelocity, useWillChange,
} from 'framer-motion';
import { cnb } from 'cnbuilder';
import { FlexBox } from '../FlexBox';
import { Logo } from '../Logo';
import { CtaLink, CtaButton, CtaVariantType } from '../Cta';
import { ood } from '@/utilities/externalLinks';
import { HeroIcon } from '../HeroIcon';

type MastheadProps = HTMLAttributes<HTMLDivElement> & {
  isLight?: boolean;
};

export const Masthead = ({ isLight, className }: MastheadProps) => {
  const slideDistance = 86;
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
    setIsAtTop(latest <= 200);
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
        !isAtTop && isScrollingBack ? 'bg-gc-black border-b border-b-black-80' : 'bg-transparent border-b-transparent',
        className,
      )}
      animate={{ y: isVisible ? 0 : -slideDistance, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2, delay: 0, ease: 'easeInOut' }}
      style={{ height: slideDistance, willChange }}
    >
      <FlexBox
        justifyContent="between"
        alignItems="center"
        className={cnb('cc transition py-18', !isAtTop ? 'lg:py-3' : 'md:py-26')}
      >
        <Logo
          color={isLight && isAtTop ? 'black' : 'white'}
          isLink
          className={cnb('w-170 sm:w-240 transition-[width] !duration-100', isAtTop ? 'lg:w-[32rem]' : 'lg:w-280')}
        />
        {/* The scale3d here solves a Firefox only rendering bug with blurry curved borders when using transform */}
        <m.div
          animate={{ scale: isAtTop ? 1 : 0.75 }}
          transition={{ duration: 0.1, ease: 'easeInOut' }}
          className="origin-right"
        >
          <FlexBox alignItems="center">
            <CtaLink
              href={ood.give}
              variant={ctaVariant}
              color="current"
              className={cnb(
                'rounded-bl-[1.4rem] lg:rounded-bl-[2rem]',
                isAtTop ? 'mt-10 lg:mt-26' : 'mt-5 lg:mt-16',
              )}
            >
              Make a gift
            </CtaLink>
            <CtaButton
              onClick={() => alert('Hello world')}
              variant={ctaVariant}
              color="current"
              className={cnb(
                '-ml-2 rounded-tr-[1.4rem] lg:rounded-tr-[2rem]',
                isAtTop ? '-mt-10 lg:-mt-26' : '-mt-5 lg:-mt-10',
              )}
            >
              <HeroIcon icon="menu" title="Main menu" noBaseStyle className="w-20 lg:w-32 group-hocus:scale-y-75 will-change-transform" />
            </CtaButton>
          </FlexBox>
        </m.div>
      </FlexBox>
    </m.div>
  );
};
