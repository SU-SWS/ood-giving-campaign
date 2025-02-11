import { cnb } from 'cnbuilder';
import { HeroIcon } from '@/components/HeroIcon';
import { FlexBox } from '@/components/FlexBox';
import * as styles from './VideoButton.styles';

type VideoButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  /**
   * if isPause is true, the button is a pause button, otherwise it's a play button
   */
  isPause?: boolean;
}

export const VideoButton = ({ isPause, className, ...props }: VideoButtonProps) => (
  <FlexBox
    as="button"
    alignItems="center"
    justifyContent="center"
    className={cnb(styles.root, className)}
    {...props}
  >
    <HeroIcon
      icon={isPause ? 'pause' : 'play'}
      title={`${isPause ? 'Pause' : 'Play'} video`}
      noBaseStyle
      className={styles.icon(isPause)}
    />
  </FlexBox>
);
