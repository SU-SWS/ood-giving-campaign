import { storyblokEditable } from '@storyblok/react/rsc';
import { Tabs } from '@/components/Tabs';
import { type SbTabItemType } from '@/components/Storyblok/Storyblok.types';
import { type HeadingType } from '@/components/Typography';
import { type AnimationType } from '@/components/Animate';

export type SbTabGroupProps = {
  blok: {
    _uid: string;
    isHidden?: boolean;
    tabItems?: SbTabItemType[];
    id?: string;
    headingLevel?: HeadingType;
    isSerifHeading?: boolean;
    isLightText?: boolean;
    animation?: AnimationType;
  };
};
export const SbTabGroup = ({
  blok: {
    isHidden,
    tabItems,
    id,
    headingLevel,
    isSerifHeading,
    isLightText,
    animation,
  },
  blok,
}: SbTabGroupProps) => {
  if (isHidden || !tabItems?.length) {
    return null;
  }

  return (
    <Tabs
      {...storyblokEditable(blok)}
      id={id}
      tabItems={tabItems}
      headingLevel={headingLevel || 'h3'}
      isSerifHeading={isSerifHeading}
      isLightText={isLightText}
      animation={animation}
    />
  );
};
