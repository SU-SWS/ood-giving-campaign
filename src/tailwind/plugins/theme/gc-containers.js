/**
 * Overriding the container size of the tailwind container query plugin because we have a 10px root font size
 */
module.exports = function () {
  return {
    xs: '32rem', // = 32 x 10px = 320px etc.
    sm: '38.4rem',
    md: '44.8rem',
    lg: '51.2rem',
    xl: '57.6rem',
    '2xl': '67.2rem',
    '3xl': '76.8rem',
    '4xl': '89.6rem',
    '5xl': '102.4rem',
    '6xl': '115.2rem',
    '7xl': '128rem',
  };
};
