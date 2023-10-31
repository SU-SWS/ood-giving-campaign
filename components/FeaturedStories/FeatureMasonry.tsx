import React from 'react';
import { Container } from '@/components/Container';
import { Grid } from '@/components/Grid';
import { FlexBox } from '@/components/FlexBox';
import { EmbedMedia } from '@/components/EmbedMedia';
import { getProcessedImage } from '@/utilities/getProcessedImage';


type FeatureMasonryProps = React.HTMLAttributes<HTMLDivElement> & {
  videoUrl?: string;
  audioUrl?: string;
  imageSrc1?: string;
  imageFocus1?: string;
  imageSrc2?: string;
  imageFocus2?: string;
  quoteBody?: React.ReactNode;
}

export const FeatureMasonry = ({
  videoUrl,
  audioUrl,
  imageSrc1,
  imageFocus1,
  imageSrc2,
  imageFocus2,
  quoteBody,
  className,
  ...props
}: FeatureMasonryProps) => {
  return (
    <Container {...props} width="full">
      <Grid sm={12} gap="xs">
        <FlexBox alignItems="center" className="md:col-span-7 bg-fog-light">
          <EmbedMedia
            mediaUrl={audioUrl}
            className="rs-px-6"
            aspectRatio="4x1"
          />
        </FlexBox>
        <div className="md:col-span-5 w-full h-full">
          <img
            src={getProcessedImage(imageSrc1, '1200x800', imageFocus1)}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-3 w-full h-full">
          <img
            src={getProcessedImage(imageSrc2, '900x900', imageFocus2)}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-3 bg-digital-red rs-p-2 text-white">
          <div className="children:children:font-serif big leading-display">
            {quoteBody}
          </div>
        </div>
        <EmbedMedia
          mediaUrl={videoUrl}
          className="md:col-span-6"
          aspectRatio="16x9"
        />
      </Grid>
    </Container>
  );
};
