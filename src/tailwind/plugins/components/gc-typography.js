/**
 * Campaign specific typography styles
 */
module.exports = function () {
  return function ({ addComponents, theme }) {
    const components = {
      '.overview': {
        fontSize: '2.3rem',
        lineHeight: '1.2',
        fontWeight: '600',
        '@screen md': {
          fontSize: '2.6rem',
        },
        '@screen xl': {
          fontSize: '4rem',
        },
      },
    };

    addComponents(components);
  };
};
