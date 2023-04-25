/**
 * 2 extra breakpoints + print support
 * 3xl: 2xl + 2 x the screen edge margins
 * 4xl: 2000px
 */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = function () {
  return {
    ...defaultTheme.screens,
    '3xl': '1736px',
    '4xl': '2000px',
    print: { raw: 'print' },
  };
};
