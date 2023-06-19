import React, { useEffect, useState, HTMLAttributes } from 'react';
import { m, useScroll, useVelocity } from 'framer-motion';
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
  const [isAtTop, setIsAtTop] = useState(true); // true if the page is not scrolled or fully scrolled back
  const [isInView, setIsInView] = useState(true);

  useEffect(
    () => scrollVelocity.onChange((latest) => {
      if (latest > 0) {
        setIsScrollingBack(false);
        return;
      }
      if (latest < -threshold) {
        setIsScrollingBack(true);
      }
    }),
    [scrollVelocity],
  );

  useEffect(() => scrollY.onChange((latest) => setIsAtTop(latest <= 200)), [scrollY]);

  useEffect(() => setIsInView(isScrollingBack || isAtTop), [
    isScrollingBack,
    isAtTop,
  ]);

  return (
    <m.div
      className={cnb('su-bg-transparent su-w-full su-fixed su-top-0 su-z-[100] su-transition-all', !isAtTop && isScrollingBack ? 'su-bg-white' : '', className)}
      animate={{ y: isInView ? 0 : -slideDistance, opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.3, delay: 0.1, ease: 'easeInOut' }}
      style={{ height: slideDistance }}
    >
      <Container>
        <FlexBox
          justifyContent="between"
          alignItems="center"
          className="su-rs-py-1"
        >
          <Logo isLink className="su-w-160 sm:su-w-[24rem] md:su-w-[32rem] su-fill-white" color={!isAtTop && isScrollingBack ? 'black' : 'white'} />
          <FlexBox alignItems="center">
            <CtaLink
              href={ood.give}
              variant="mainNav"
              className="su-rounded-bl-[1.4rem] lg:su-rounded-bl-[2rem] su-mt-10 lg:su-mt-26"
            >
              Make a gift
            </CtaLink>
            <CtaButton
              onClick={() => alert('Hello world')}
              variant="mainNav"
              className="su--ml-2 su-rounded-tr-[1.4rem] lg:su-rounded-tr-[2rem] su--mt-10 lg:su--mt-26"
            >
              <HeroIcon icon="menu" title="Main menu" noBaseStyle className="su-w-20 lg:su-w-32" />
            </CtaButton>
          </FlexBox>
        </FlexBox>
      </Container>
    </m.div>
  );
};
