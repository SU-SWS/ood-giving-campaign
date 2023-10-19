'use client';

import { useEffect, useState, HTMLAttributes } from 'react';
import {
  m, useMotionValueEvent, useScroll, useVelocity,
} from 'framer-motion';
import { cnb } from 'cnbuilder';
import { FlexBox } from '../FlexBox';
import { LogoLockup } from '@/components/Logo/LogoLockup';
import { CtaLink, type CtaVariantType } from '../Cta';
import { ood } from '@/utilities/externalLinks';
import * as styles from './Masthead.styles';

type MastheadProps = HTMLAttributes<HTMLDivElement> & {
  isLight?: boolean;
};

export const Masthead = ({ isLight, className }: MastheadProps) => {
  const slideDistance = 76;
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
    setIsAtTop(latest <= 40);
  });

  useEffect(() => setIsVisible(isScrollingBack || isAtTop), [
    isScrollingBack,
    isAtTop,
  ]);

  let ctaVariant: CtaVariantType = 'mainNav';
  let givingLinkVariant: CtaVariantType = 'mastheadGiving';

  if (!isAtTop && isScrollingBack) {
    ctaVariant = 'mainNavUp';
    givingLinkVariant = 'mastheadGiving';
  }
  if (isLight && isAtTop) {
    ctaVariant = 'mainNavBlack';
    givingLinkVariant = 'mastheadGivingBlack';
  }

  return (
    <m.header
      className={cnb(styles.root(isAtTop, isScrollingBack), className)}
      animate={{ y: isVisible ? 0 : -slideDistance, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2, delay: !isAtTop && isScrollingBack ? 0.4 : 0, ease: 'easeInOut' }}
    >
      <FlexBox
        justifyContent="between"
        alignItems="center"
        className={styles.wrapper(isAtTop)}
      >
        <LogoLockup
          isLink
          color={isLight && isAtTop ? 'default' : 'white'}
          text="Impact Stories"
          className={styles.lockup}
        />
        <FlexBox alignItems="center" className={styles.ctaWrapper}>
          <CtaLink
            href={ood.giving}
            variant={givingLinkVariant}
            icon="external"
            color="current"
            animate="top-right"
          >
            Giving to Stanford
          </CtaLink>
          <CtaLink
            href={ood.give}
            variant={ctaVariant}
            color="current"
          >
            Make a gift
          </CtaLink>
        </FlexBox>
      </FlexBox>
    </m.header>
  );
};
