export const BubbleColors = {
  blue: 'bg-digital-blue',
  green: 'bg-digital-green',
  'black-10': 'bg-black-10',
  'stone-dark': 'bg-stone-dark',
  black: 'bg-black',
};
export type BubbleColorType = keyof typeof BubbleColors;

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
