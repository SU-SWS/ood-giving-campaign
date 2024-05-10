/**
 * Momentum custom base styles extending Decanter 7 base
 */

module.exports = function () {
  return function ({ addBase, config }) {
    addBase({
      html: {
        overflowY: 'visible !important', // Need this for sticky nav to work
        color: '#17171A', // Momentum black
      },
      body: {
        fontSize: '1.8rem',
        color: '#17171A',

        '@screen md': {
          fontSize: '1.9rem',
        },
        '@screen lg': {
          fontSize: '2.1rem',
        },
        '@screen 2xl': {
          fontSize: '2.3rem',
        },
      },
      a: {
        color: config('theme.colors.digital-red.DEFAULT'),
        transition: 'color 0.25s ease-in-out',

        '&:hover, &:focus': {
          color: config('theme.colors.digital-red.dark'),
        },
      },
      figcaption: {
        fontSize: 'max(1.5rem, 0.81em)',
      },
    });
  };
};
