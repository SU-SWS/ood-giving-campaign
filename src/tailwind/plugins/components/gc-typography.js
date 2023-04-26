/**
 * Campaign specific typography styles
 */
module.exports = function () {
  return function ({ addComponents, theme }) {
    const components = {
      '.gc-card': {
        fontSize: '1.6rem',
        lineHeight: '1.3',
      },
      '.jumbo': {
        fontSize: '2.8rem',
        '@screen lg': {
          fontSize: '4rem',
        },
      },
    };

    addComponents(components);
  };
};
