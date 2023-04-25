/**
 * 2 extra breakpoints + print support
 * 3xl: 2xl + 2 x the screen edge margins
 * 4xl: 2000px
 */

module.exports = function () {
  return {
    '3xl': '1700px',
    '4xl': '2000px',
    print: { raw: 'print' },
  };
};
