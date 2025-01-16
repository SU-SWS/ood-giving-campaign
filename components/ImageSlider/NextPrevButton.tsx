import { HeroIcon } from '@/components/HeroIcon';
import { SrOnlyText } from '@/components/Typography';
import { cnb } from 'cnbuilder';
import * as styles from './NextPrevButton.styles';

type NextPrevButtonProps = {
  direction: 'next' | 'prev';
  isLightText?: boolean;
  onClick?: () => void;
  className?: string;
};

export const NextPrevButton = ({
  direction = 'next',
  isLightText,
  onClick,
  className,
}: NextPrevButtonProps) => (
  <button
    type="button"
    className={cnb(styles.root(isLightText), className)}
    onClick={onClick}
  >
    <SrOnlyText>{`${direction === 'next' ? 'Next' : 'Previous'} slide`}</SrOnlyText>
    <HeroIcon
      icon={direction === 'next' ? 'chevron-right' : 'chevron-left'}
      className={styles.icon(isLightText)}
    />
  </button>
);
