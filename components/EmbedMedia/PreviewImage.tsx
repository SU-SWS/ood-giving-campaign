import { getProcessedImage } from '@/utilities/getProcessedImage';
import { getSbImageSize } from '@/utilities/getSbImageSize';
import * as styles from './EmbedMedia.styles';

export const PreviewImage = ({ previewImageSrc }: { previewImageSrc: string }) => {
  const { width: originalWidth, height: originalHeight } = getSbImageSize(previewImageSrc);
  const cropHeight = Math.round((originalHeight * 1500) / originalWidth);

  return (
    <picture>
      <source srcSet={getProcessedImage(previewImageSrc, '1500x0')} media="(min-width: 1200px)" />
      <source srcSet={getProcessedImage(previewImageSrc, '1200x0')} media="(min-width: 992px)" />
      <source srcSet={getProcessedImage(previewImageSrc, '1000x0')} media="(min-width: 768px)" />
      <source srcSet={getProcessedImage(previewImageSrc, '800x0')} media="(min-width: 576px)" />
      <source srcSet={getProcessedImage(previewImageSrc, '600x0')} media="(max-width: 575px)" />
      <img
        src={getProcessedImage(previewImageSrc, '1500x0')}
        loading="lazy"
        width={1500}
        height={cropHeight}
        alt=""
        className={styles.previewImage}
      />
    </picture>
  );
};
