import { HeroIcon } from '@/components/HeroIcon';
import { SrOnlyText } from '@/components/Typography';
import { cnb } from 'cnbuilder';
import * as styles from './NextPrevButton.styles';
import React from 'react';

type NextPrevButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  direction: 'next' | 'prev';
  isModalDesktopButton?: boolean;
  isLightText?: boolean;
  onClick?: () => void;
};

export const NextPrevButton = ({
  direction = 'next',
  isModalDesktopButton,
  isLightText,
  onClick,
  className,
}: NextPrevButtonProps) => (
  <button
    type="button"
    className={cnb(styles.root(isLightText, isModalDesktopButton), className)}
    onClick={onClick}
  >
    <SrOnlyText>{`${direction === 'next' ? 'Next' : 'Previous'} slide`}</SrOnlyText>
    <HeroIcon
      icon={direction === 'next' ? 'chevron-right' : 'chevron-left'}
      className={styles.icon(isLightText)}
    />
  </button>
);
