import { type AccentColorType } from './datasource';
/**
 * Maps of color utilities for the Storyblok palette plugin
 */

export type PaletteAccentColorType = {
  [key: string]: AccentColorType;
};

export const paletteAccentColors: PaletteAccentColorType = {
  '#ECC7CD': 'flamingo',
  '#E31C79': 'fuchsia',
  '#C5B4E3': 'lavender',
  '#DBE442': 'lime',
  '#175E54': 'palo-alto',
  '#485CC7': 'periwinkle',
  '#E98300': 'poppy',
  '#77C5D5': 'robins-egg',
  '#005776': 'sapphire',
  '#E04F39': 'spirited',
  '#8C1515': 'cardinal-red',
  '#B1040E': 'digital-red',
  '#E50808': 'digital-red-light',
  '#F83535': 'digital-red-xlight',
  '#FFFFFF': 'white',
  '#00000080': 'black-50',
};

/**
 * Writing all the hex colors out for PaletteAccentHexColorType since when I tried to use
 * keyof typeof paletteAccentColors, it infers that the type is string | number which is incorrect
 */
export type PaletteAccentHexColorType = '#ECC7CD' | '#E31C79' | '#C5B4E3' | '#DBE442' | '#175E54' | '#485CC7' | '#E98300' | '#77C5D5' | '#005776' | '#E04F39' | '#8C1515' | '#B1040E' | '#E50808' | '#F83535' | '#FFFFFF' | '#00000080';

/**
 * Use for Framer Motion color mapping animation only
 */
export const colorNameToHex = {
  flamingo: '#ECC7CD',
  fog: '#DAD7CB',
  fuchsia: '#E31C79',
  lavender: '#C5B4E3',
  lime: '#DBE442',
  'palo-alto': '#175E54',
  periwinkle: '#485CC7',
  poppy: '#E98300',
  'robins-egg': '#77C5D5',
  sapphire: '#005776',
  slate: '#4E4B48',
  spirited: '#E04F39',
  'cardinal-red': '#8C1515',
  'digital-red': '#B1040E',
  'digital-red-light': '#E50808',
  'digital-red-xlight': '#F83535',
  white: '#FFFFFF',
  'plum-light': '#734675',
  'black-50': '#00000080',
};
