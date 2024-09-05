import { type ImageHotspotType } from '@/components/AnnotatedImage/ImageHotspot';
import { StoryImage, type StoryImageProps } from '@/components/StoryImage';
import { type MarginType } from '@/utilities/datasource';

type AnnotatedImageProps = StoryImageProps & {
  hotspots: ImageHotspotType[];
  marginTop: MarginType;
  marginBottom: MarginType;
};
