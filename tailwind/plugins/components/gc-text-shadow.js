/**
 * Text shadow styles
 */
module.exports = function () {
  return function ({ addComponents }) {
    const components = {
      '.text-shadow-sm': {
        textShadow: 'rgba(0, 0, 0, 20%) 0 0 18px, rgba(0, 0, 0, 60%) 0 0 2px',
      },
    };

    addComponents(components);
  };
};
