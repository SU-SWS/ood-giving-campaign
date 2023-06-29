import React, { useEffect, useState, HTMLAttributes } from 'react';
import {
  m, useMotionValueEvent, useScroll, useVelocity, useWillChange,
} from 'framer-motion';
import { cnb } from 'cnbuilder';
import { FlexBox } from '../FlexBox';
import { Logo } from '../Logo';
import { CtaLink, CtaButton } from '../Cta';
import { ood } from '../../utilities/externalLinks';
import { HeroIcon } from '../HeroIcon';

type MastheadProps = HTMLAttributes<HTMLDivElement>;

export const Masthead = ({ className }: MastheadProps) => {
  const slideDistance = 86;
  const threshold = 90;

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
    setIsAtTop(latest <= 90);
  });

  useEffect(() => setIsVisible(isScrollingBack || isAtTop), [
    isScrollingBack,
    isAtTop,
  ]);

  return (
    <m.div
      className={cnb(
        'su-w-full su-fixed su-top-0 su-z-50 su-transition-colors',
        !isAtTop && isScrollingBack ? 'su-bg-gc-black su-border-b su-border-b-black-80' : 'su-bg-transparent su-border-b-transparent',
        className,
      )}
      animate={{ y: isVisible ? 0 : -slideDistance, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3, delay: 0, ease: 'easeInOut' }}
      style={{ height: slideDistance, willChange }}
    >
      <FlexBox
        justifyContent="between"
        alignItems="center"
        className={cnb('su-cc su-transition-all su-py-18', !isAtTop ? 'lg:su-py-3' : 'md:su-py-26')}
      >
        <Logo
          isLink
          className={cnb('su-w-[17rem] sm:su-w-[24rem] su-transition-all', isAtTop ? 'lg:su-w-[32rem]' : 'lg:su-w-[28rem]')}
        />
        {/* The scale3d here solves a Firefox only rendering bug with blurry curved borders when using transform */}
        <FlexBox alignItems="center" className={cnb('su-transition-all', isAtTop ? '' : 'su-origin-right lg:[transform:scale3d(0.75,0.75,0.75)]')}>
          <CtaLink
            href={ood.give}
            variant={!isAtTop && isScrollingBack ? 'mainNavUp' : 'mainNav'}
            className={cnb(
              'su-rounded-bl-[1.4rem] lg:su-rounded-bl-[2rem]',
              isAtTop ? 'su-mt-10 lg:su-mt-26' : 'su-mt-5 lg:su-mt-16',
            )}
          >
            Make a gift
          </CtaLink>
          <CtaButton
            onClick={() => alert('Hello world')}
            variant={!isAtTop && isScrollingBack ? 'mainNavUp' : 'mainNav'}
            className={cnb(
              'su--ml-2 su-rounded-tr-[1.4rem] lg:su-rounded-tr-[2rem]',
              isAtTop ? 'su--mt-10 lg:su--mt-26' : 'su--mt-5 lg:su--mt-10',
            )}
          >
            <HeroIcon icon="menu" title="Main menu" noBaseStyle className="su-w-20 lg:su-w-32 group-hocus:su-scale-y-75 su-will-change-transform" />
          </CtaButton>
        </FlexBox>
      </FlexBox>
    </m.div>
  );
};
