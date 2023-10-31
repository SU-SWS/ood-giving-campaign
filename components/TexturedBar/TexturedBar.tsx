import { getProcessedImage } from '@/utilities/getProcessedImage';

type TexturedBarProps = {
  imageSrc: string;
}

export const TexturedBar= ({
  imageSrc,
}: TexturedBarProps) => (
  <div className="relative w-full h-20 md:h-30 lg:h-40">
    <img
      src={getProcessedImage(imageSrc, '3000x60')}
      loading="lazy"
      alt=""
      width={3000}
      height={60}
      className="w-full h-full object-cover"
    />
  </div>
);
