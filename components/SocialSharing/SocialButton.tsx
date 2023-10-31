import { cnb } from 'cnbuilder';
import * as styles from './SocialSharing.styles';

type SocialSharingProps = React.HTMLAttributes<HTMLButtonElement> & Omit<React.HTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href?: string;
  children?: React.ReactNode;
};

export const SocialButton = ({
  href,
  children,
  className,
  ...props
}: SocialSharingProps) => {
  return (
    <>
      {href ? (
        <a
          href={href}
          className={cnb(styles.button, className)}
          {...props}>
          {children }
        </a>
      ) : (
        <button
          type="button"
          className={cnb(styles.button, className)}
          {...props}
        >
          {children}
        </button>
      )}
    </>
  );
};
