import { cnb } from 'cnbuilder';
import { Container } from '@/components/Container';
import * as styles from './MediaWrapper.styles';

/**
 * This is a caption component for images, looping video and embedded video
 * that provides a shared set of layout and options.
 */

export type CaptionProps = React.HTMLAttributes<HTMLDivElement> & {
  caption?: React.ReactNode;
  // Inset the caption to centered container width when the media is full screen width
  isCaptionInset?: boolean;
  captionBgColor?: styles.CaptionBgColorType;
};

export const Caption = ({
  caption,
  isCaptionInset,
  captionBgColor = 'transparent',
  className,
  ...props
}: CaptionProps) => {
  return (
    <Container
      as="figcaption"
      width={isCaptionInset ? 'site' : 'full'}
      className={cnb(styles.captionWrapper, styles.captionBgColors[captionBgColor])}
      {...props}
    >
      <div className={styles.caption(captionBgColor)}>
        {caption}
      </div>
    </Container>
  );
};
