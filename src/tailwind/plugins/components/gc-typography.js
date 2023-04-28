/**
 * Campaign specific typography styles
 */
module.exports = function () {
  return function ({ addComponents, theme }) {
    const components = {
      '.jumbo': {
        fontSize: '2.5rem',
        lineHeight: '1.2',
        fontWeight: '600',
        '@screen md': {
          fontSize: '3rem',
        },
        '@screen xl': {
          fontSize: '4rem',
        },
      },
    };

    addComponents(components);
  };
};
