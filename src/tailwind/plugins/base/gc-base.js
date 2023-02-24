/**
 * Campaign custom base styles extending Decanter 7 base
 */

module.exports = function () {
  return function ({ addBase, config }) {
    addBase({
      html: {
        scrollBehavior: 'smooth',
        overflowY: 'visible !important', // Need this for sticky nav to work
      },
      a: {
        color: config('theme.colors.digital-red.light'),
        transition: 'color 0.25s ease-in-out',

        '&:hover, &:focus': {
          color: config('theme.colors.cardinal-red.DEFAULT'),
        },
      },
    });
  };
};
