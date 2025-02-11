import { cnb } from 'cnbuilder';
import { HeroIcon } from '@/components/HeroIcon';
import { FlexBox } from '@/components/FlexBox';
import * as styles from './VideoButton.styles';

type VideoButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  /**
   * if isPause is true, the button is a pause button, otherwise it's a play button
   */
  isPause?: boolean;
  svgTitle?: string;
}

export const VideoButton = ({
  isPause,
  svgTitle = `${isPause ? 'Pause' : 'Play'} video`,
  className,
  ...props
}: VideoButtonProps) => (
  <FlexBox
    as="button"
    alignItems="center"
    justifyContent="center"
    className={cnb(styles.root, className)}
    {...props}
  >
    <HeroIcon
      icon={isPause ? 'pause' : 'play'}
      title={svgTitle}
      noBaseStyle
      className={styles.icon(isPause)}
    />
  </FlexBox>
);
