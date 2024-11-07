import { cnb } from 'cnbuilder';

export const bubbleColors = {
  blue: 'bg-digital-blue',
  green: 'bg-digital-green',
  'black-10': 'bg-black-10',
  'stone-dark': 'bg-stone-dark',
  black: 'bg-black',
  'cardinal-red-xdark': 'bg-cardinal-red-xdark',
  'cardinal-red': 'bg-cardinal-red',
  'digital-red': 'bg-digital-red',
  'digital-red-light': 'bg-digital-red-light',
};
export type BubbleColorType = keyof typeof bubbleColors;

export const bubbleTailLeftColors = {
  blue: 'after:border-l-digital-blue',
  green: 'after:border-l-digital-green',
  'black-10': 'after:border-l-black-10',
  'stone-dark': 'after:border-l-stone-dark',
  black: 'after:border-l-black',
  'cardinal-red-xdark': 'after:border-l-cardinal-red-xdark',
  'cardinal-red': 'after:border-l-cardinal-red',
  'digital-red': 'after:border-l-digital-red',
  'digital-red-light': 'after:border-l-digital-red-light',
};

export const bubbleTailRightColors = {
  blue: 'after:border-r-digital-blue',
  green: 'after:border-r-digital-green',
  'black-10': 'after:border-r-black-10',
  'stone-dark': 'after:border-r-stone-dark',
  black: 'after:border-r-black',
  'cardinal-red-xdark': 'after:border-r-cardinal-red-xdark',
  'cardinal-red': 'after:border-r-cardinal-red',
  'digital-red': 'after:border-r-digital-red',
  'digital-red-light': 'after:border-r-digital-red-light',
};

export const bubbleTailTopColors = {
  blue: 'after:border-t-digital-blue',
  green: 'after:border-t-digital-green',
  'black-10': 'after:border-t-black-10',
  'stone-dark': 'after:border-t-stone-dark',
  black: 'after:border-t-black',
  'cardinal-red-xdark': 'after:border-t-cardinal-red-xdark',
  'cardinal-red': 'after:border-t-cardinal-red',
  'digital-red': 'after:border-t-digital-red',
  'digital-red-light': 'after:border-t-digital-red-light',
};

export type PaletteBubbleColorType = {
  [key: string]: BubbleColorType;
}

export const paletteBubbleColors: PaletteBubbleColorType = {
  '#006CB8': 'blue',
  '#008566': 'green',
  '#EAEAEA': 'black-10',
  '#544948': 'stone-dark',
  '#2E2D29': 'black',
  '#7A0000': 'cardinal-red-xdark',
  '#8C1515': 'cardinal-red',
  '#B1040E': 'digital-red',
  '#E50808': 'digital-red-light',
};
export type PaletteBubbleHexColorType = '#006CB8' | '#008566' | '#EAEAEA' | '#544948' | '#2E2D29' | '#7A0000' | '#8C1515' | '#B1040E' | '#E50808';

export const flexbox = (align: 'left' | 'right', addTopSpacing: boolean) => cnb(
  'flex gap-10 md:gap-20',
  addTopSpacing && 'rs-mt-4',
  align === 'right' && 'flex-row-reverse',
);
export const avatar = 'rounded-full w-40 md:w-60';
export const bubble = (
  bgColor: BubbleColorType,
  isRenderLightText: boolean,
  align: 'left' | 'right',
  isRenderBubbleTail: boolean,
  addIndent: boolean,
) => cnb('relative w-fit leading-cozy *:*:leading-cozy *:*:font-sans max-w-[80%] 2xl:max-w-500 whitespace-pre-line',
  align === 'right' && 'mr-0 ml-auto',
  !!bgColor && bubbleColors[bgColor],
  isRenderBubbleTail && bubbleTailTopColors[bgColor],
  (isRenderBubbleTail && align === 'left') && bubbleTailLeftColors[bgColor],
  (isRenderBubbleTail && align === 'right') && bubbleTailRightColors[bgColor],
  {
    'after:content-[""] after:absolute after:border-[1rem] after:border-b-transparent after:-bottom-12': isRenderBubbleTail && !!bgColor,
    'after:border-r-transparent after:left-10 after:rotate-[12deg]': isRenderBubbleTail && align === 'left',
    'after:border-l-transparent after:right-10 after:rotate-[-12deg]': isRenderBubbleTail && align === 'right',
  },
  {
    'rounded-[2rem] rs-px-1 pt-18 pb-16 md:pt-21 md:pb-19 2xl:pt-23 2xl:pb-21': !!bgColor,
    'text-gc-black': bgColor === 'black-10' || (!isRenderLightText && !bgColor),
    'text-white': (!!bgColor && bgColor !== 'black-10') || (isRenderLightText && !bgColor),
  },
  {
    'ml-50 md:ml-80': addIndent && align === 'left',
    'mr-50 md:mr-80': addIndent && align === 'right',
  },
);
