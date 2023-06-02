import {
  ArrowUpIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  EnvelopeIcon,
  LinkIcon,
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
  back: ArrowLeftIcon,
  'chevron-down': ChevronDownIcon,
  'triangle-down': PlayIcon,
  'chevron-right': ChevronRightIcon,
  'triangle-right': PlayIcon,
  'triangle-up': PlayIcon,
  close: XMarkIcon,
  email: EnvelopeIcon,
  external: ArrowUpRightIcon,
  left: ArrowLeftIcon,
  link: LinkIcon,
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
 * Only add to this map if different from default class su-w-1em
 * If you wish to use the HeroIcon without any base styles, set the noBaseStyle boolean prop to true
 */
// TODO: Adjust these base styles as they were ported over when we were using v1 of Heroicons
export const iconBaseStyle = {
  default: 'su-w-1em',
  'arrow-left': 'su-w-08em',
  'arrow-right': 'su-w-08em',
  back: 'su-w-1em',
  'chevron-right': 'su-w-1em',
  'chevron-down': 'su-w-1em',
  'triangle-right': 'su-w-09em su-scale-x-[0.9] su-mt-01em',
  'triangle-down': 'su-w-09em su-scale-x-[0.9] su-rotate-90 su-mt-01em',
  'triangle-up': 'su-w-09em su-scale-x-[0.9] su--rotate-90 su-mt-02em',
  email: 'su-w-[1.2em]',
  external: 'su-w-08em',
  left: 'su-w-08em',
  link: 'su--mt-01em',
  more: 'su-w-08em',
  plus: 'su-w-08em',
  right: 'su-w-08em',
  up: 'su-w-1em',
};
