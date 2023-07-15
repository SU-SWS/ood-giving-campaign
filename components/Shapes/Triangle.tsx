import { cnb } from 'cnbuilder';

type TriangleProps = React.SVGProps<SVGSVGElement>;

export const Triangle = ({ className, ...rest }: TriangleProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 30"
    aria-hidden
    className={cnb('fill-digital-red-light w-30 sm:w-40 lg:w-60 motion-safe:animate-bounce', className)}
    {...rest}
  >
    <path d="M60 0H0l29.23 30L60 0z" />
  </svg>
);
