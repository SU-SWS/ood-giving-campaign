import {
  Popover, PopoverButton, PopoverPanel, Transition,
} from '@headlessui/react';
import { cnb } from 'cnbuilder';
import { useReducedMotion } from 'framer-motion';
import { Grid } from '@/components/Grid';
import { Heading } from '@/components/Typography';
import { HeroIcon } from '@/components/HeroIcon';
import { type SbImageHotspotType } from '../Storyblok/Storyblok.types';
import * as styles from './ImageHotspot.styles';

// export type ImageHotspotType = {
//   positionX: number;
//   positionY: number;
//   heading?: string;
//   subhead?: string;
//   description?: React.ReactNode;
//   imageSrc?: string;
//   imageFocus?: string;
// }

export const ImageHotspot = ({
  positionX: { value: x } = {},
  positionY: { value: y } = {},
  heading,
  ariaLabel,
  subhead,
  description,
  image,
}: SbImageHotspotType) => {
  // Reduce motion users will only see opacity change when opening/closing the modal
  const preferReducedMotion = useReducedMotion();

  return (
    <Popover aria-label={ariaLabel}>
    {({ open }) => (
      <>
        <PopoverButton
          aria-label={`Open ${ariaLabel}`}
          className={styles.button(open)}
          style={{ top: `${y * 100}%`, left: `${x * 100}%` }}
        >
          <HeroIcon noBaseStyle icon={open ? 'close' : 'menu'} strokeWidth={1.8} className={styles.menuIcon(open)} />
        </PopoverButton>
        <Transition
          enter="duration-300 ease-out"
          enterFrom={cnb('opacity-0', !preferReducedMotion && '-translate-y-30')}
          enterTo="opacity-100 translate-y-0"
          leave="duration-200 ease-out"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo={cnb('opacity-0', !preferReducedMotion && '-translate-y-30')}
          >
          <PopoverPanel className={styles.panel}>
            <div className={styles.panelWrapper}>
              <Grid sm={2} xxl={3} className={styles.panelOuterGrid}>
                Placeholder
              </Grid>
            </div>
          </PopoverPanel>
        </Transition>
      </>
    )}
  </Popover>
  );
};
