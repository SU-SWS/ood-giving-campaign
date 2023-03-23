import {
  ArrowUpIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  EnvelopeIcon,
  LinkIcon,
  PlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

export const iconMap = {
  action: ChevronRightIcon,
  'arrow-right': ArrowRightIcon,
  'arrow-left': ArrowLeftIcon,
  'arrow-up': ArrowUpIcon,
  back: ArrowLeftIcon,
  'chevron-down': ChevronDownIcon,
  'chevron-right': ChevronRightIcon,
  close: XMarkIcon,
  email: EnvelopeIcon,
  external: ArrowUpRightIcon,
  left: ArrowLeftIcon,
  link: LinkIcon,
  more: ArrowRightIcon,
  plus: PlusIcon,
  right: ArrowRightIcon,
  up: ArrowUpIcon,
};

/**
 * Normalized base size and position of each icon (finetuned manually) for use in eg, buttons
 * Only add to this map if different from default class su-w-1em
 * If you wish to use the HeroIcon without any base styles, set the noBaseStyle boolean prop to true
 */
// TODO: Adjust these base styles as they were ported over when we were using v1 of Heroicons
export const iconBaseStyle = {
  default: 'su-w-1em',
  'arrow-left': 'su-w-08em su--mt-02em',
  'arrow-right': 'su-w-08em su--mt-02em',
  back: 'su-w-1em su--mt-02em',
  'chevron-right': 'su-w-1em su--mt-02em',
  'chevron-down': 'su-w-1em su--mt-01em',
  email: 'su-w-[1.2em]',
  external: 'su-w-08em',
  left: 'su-w-08em su--mt-02em',
  link: 'su--mt-01em',
  more: 'su-w-08em su--mt-02em',
  plus: 'su-w-08em su--mt-02em',
  right: 'su-w-08em su--mt-02em',
  up: 'su-w-1em su--mt-03em',
};
