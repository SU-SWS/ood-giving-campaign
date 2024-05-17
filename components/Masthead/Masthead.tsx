import { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
import { FlexBox } from '../FlexBox';
import { LogoLockup } from '@/components/Logo/LogoLockup';
import { CtaLink } from '../Cta';
import { Skiplink } from '../SkipLink';
import { ood } from '@/utilities/externalLinks';
import * as styles from './Masthead.styles';

type MastheadProps = HTMLAttributes<HTMLDivElement> & {
  isLight?: boolean;
  mainNav?: React.ReactNode;
};

export const Masthead = ({ isLight, mainNav, className }: MastheadProps) => (
  <header className={cnb(styles.root, className)}>
    <Skiplink />
    <FlexBox
      justifyContent="between"
      alignItems="center"
      className={styles.wrapper}
    >
      <LogoLockup
        isLink
        color={isLight ? 'default' : 'white'}
        text="Momentum"
        className={styles.lockup}
      />
      <CtaLink
        href={ood.giving}
        variant={isLight ? 'mastheadGivingBlack' : 'mastheadGiving'}
        icon="external"
        color="current"
        animate="top-right"
      >
        Giving to Stanford
      </CtaLink>
      {mainNav}
    </FlexBox>
  </header>
);
