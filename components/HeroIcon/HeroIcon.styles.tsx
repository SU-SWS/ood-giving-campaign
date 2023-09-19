import {
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  Bars3Icon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CursorArrowRaysIcon,
  EnvelopeIcon,
  LinkIcon,
  MinusIcon,
  PauseCircleIcon,
  PlayCircleIcon,
  PlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import { PlayIcon } from '@heroicons/react/24/solid';

export const iconMap = {
  action: ChevronRightIcon,
  'arrow-right': ArrowRightIcon,
  'arrow-left': ArrowLeftIcon,
  'arrow-up': ArrowUpIcon,
  'arrow-down': ArrowDownIcon,
  back: ArrowLeftIcon,
  'chevron-down': ChevronDownIcon,
  'chevron-right': ChevronRightIcon,
  'chevron-up': ChevronUpIcon,
  'triangle-down': PlayIcon,
  'triangle-right': PlayIcon,
  'triangle-up': PlayIcon,
  cursor: CursorArrowRaysIcon,
  close: XMarkIcon,
  email: EnvelopeIcon,
  external: ArrowUpRightIcon,
  left: ArrowLeftIcon,
  link: LinkIcon,
  menu: Bars3Icon,
  minus: MinusIcon,
  more: ArrowRightIcon,
  pause: PauseCircleIcon,
  play: PlayCircleIcon,
  'play-outline': PlayCircleIcon,
  plus: PlusIcon,
  right: ArrowRightIcon,
  up: ArrowUpIcon,
};
export type IconType = keyof typeof iconMap;

/**
 * Normalized base size and position of each icon (finetuned manually) for use in eg, buttons
 * Only add to this map if different from default class w-1em
 * If you wish to use the HeroIcon without any base styles, set the noBaseStyle boolean prop to true
 */

// This basically means that the keys from iconBaseStyle are from the keys of iconMap
type IconBaseStyleType = Partial<{
  [Key in IconType]: string;
}>;

export const iconBaseStyleDefault = 'w-1em';
export const iconBaseStyle: IconBaseStyleType = {
  'arrow-left': 'w-09em -mt-01em',
  'arrow-right': 'w-09em -mt-01em',
  'triangle-right': 'w-09em scale-x-[0.9] mt-01em',
  'triangle-down': 'w-09em scale-x-[0.9] rotate-90 mt-01em',
  'triangle-up': 'w-09em scale-x-[0.9] -rotate-90 mt-02em',
  email: 'w-[1.2em]',
  external: 'w-08em',
  left: 'w-08em',
  link: '-mt-01em',
  more: 'w-08em',
  plus: 'w-08em',
  right: 'w-08em',
};
