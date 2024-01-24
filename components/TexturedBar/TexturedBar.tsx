import { HTMLAttributes } from 'react';
import { getProcessedImage } from '@/utilities/getProcessedImage';

type TexturedBarProps = HTMLAttributes<HTMLDivElement> & {
  imageSrc: string;
}

export const TexturedBar = ({
  imageSrc,
  ...props
}: TexturedBarProps) => (
  <div {...props} className="relative w-full h-20 md:h-30 lg:h-40 bg-black-40">
    <img
      src={getProcessedImage(imageSrc, '3000x60')}
      srcSet={`
        ${getProcessedImage(imageSrc, '800x20')} 800w,
        ${getProcessedImage(imageSrc, '1200x30')} 1200w,
        ${getProcessedImage(imageSrc, '2000x40')} 2000w,
        ${getProcessedImage(imageSrc, '3000x60')} 3000w
      `}
      loading="lazy"
      alt=""
      width={3000}
      height={60}
      sizes="100vw"
      className="w-full h-full object-cover"
    />
  </div>
);
