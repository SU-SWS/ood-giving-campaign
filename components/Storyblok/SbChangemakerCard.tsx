import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { ChangemakerCard } from '@/components/ChangemakerCard';
import { type AnimationType } from '@/components/Animate';
import { type HeadingType } from '@/components/Typography';
import { CreateBloks } from '@/components/CreateBloks';
import { type SbImageType } from '@/components/Storyblok/Storyblok.types';
import { getNumBloks } from '@/utilities/getNumBloks';


export type SbChangemakerCardProps = {
  blok: {
    _uid: string;
    heading?: string;
    headingLevel?: HeadingType;
    subheading?: string;
    image?: SbImageType;
    body?: SbBlokData[];
    animation?: AnimationType;
    delay?: number;
  };
};

export const SbChangemakerCard = ({
  blok: {
    heading,
    headingLevel,
    subheading,
    image: { filename, focus } = {},
    body,
    animation,
    delay,
  },
  blok,
}: SbChangemakerCardProps) => {
  const Body = !!getNumBloks(body) ? <CreateBloks blokSection={body} /> : undefined;

  return (
    <ChangemakerCard
      {...storyblokEditable(blok)}
      heading={heading}
      headingLevel={headingLevel}
      subheading={subheading}
      imageSrc={filename}
      imageFocus={focus}
      animation={animation}
      delay={delay}
    >
      {Body}
    </ChangemakerCard>
  );
};
