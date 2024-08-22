import { cnb } from 'cnbuilder';

export const bubbleColors = {
  blue: 'bg-digital-blue',
  green: 'bg-digital-green',
  'black-10': 'bg-black-10',
  'stone-dark': 'bg-stone-dark',
  black: 'bg-black',
};
export type BubbleColorType = keyof typeof bubbleColors;

export const bubbleTailLeftColors = {
  blue: 'after:border-l-digital-blue',
  green: 'after:border-l-digital-green',
  'black-10': 'after:border-l-black-10',
  'stone-dark': 'after:border-l-stone-dark',
  black: 'after:border-l-black',
};

export const bubbleTailRightColors = {
  blue: 'after:border-r-digital-blue',
  green: 'after:border-r-digital-green',
  'black-10': 'after:border-r-black-10',
  'stone-dark': 'after:border-r-stone-dark',
  black: 'after:border-r-black',
};

export const bubbleTailTopColors = {
  blue: 'after:border-t-digital-blue',
  green: 'after:border-t-digital-green',
  'black-10': 'after:border-t-black-10',
  'stone-dark': 'after:border-t-stone-dark',
  black: 'after:border-t-black',
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
};
export type PaletteBubbleHexColorType = '#006CB8' | '#008566' | '#EAEAEA' | '#544948' | '#2E2D29';

export const bubble = (bgColor: BubbleColorType, align: 'left' | 'right', addTail: boolean) => cnb('relative rounded-[2rem] bg-black text-white rs-p-0 w-fit text-16 md:text-19 max-w-[80%] 2xl:max-w-500 whitespace-pre-line',
  align === 'right' && 'mr-0 ml-auto',
  addTail && bubbleTailTopColors[bgColor],
  addTail && align === 'left' && bubbleTailLeftColors[bgColor],
  addTail && align === 'right' && bubbleTailRightColors[bgColor],
  bubbleColors[bgColor],
  {
    'after:content-[""] after:absolute after:border-[1rem] after:border-b-transparent after:-bottom-12': addTail,
    'after:border-r-transparent after:left-10 after:rotate-[12deg]': addTail && align === 'left',
    'after:border-l-transparent after:right-10 after:rotate-[-12deg]': addTail && align === 'right',
  },
);
