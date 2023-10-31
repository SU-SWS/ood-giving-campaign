import { cnb } from 'cnbuilder';

type SocialSharingProps = React.HTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
};

export const SocialButton = ({ children, className, ...props }: SocialSharingProps) => {
  return (
    <button
      type="button"
      className={cnb('rounded-full flex items-center justify-center w-36 h-36 md:w-44 md:h-44 border-2 border-black', className)}
      {...props}
    >
      {children}
    </button>
  );
};
