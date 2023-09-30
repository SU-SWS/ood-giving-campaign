/**
 * Half centered container.
 */
module.exports = function () {
  return function ({ addComponents, theme }) {
    // Find and set the padding based on the screen margins
    const screens = theme('screens');
    const paddingLeft = {};
    const paddingRight = {};

    // Create padding for each screen size which equals to the screen margin setting.
    const keys = Object.keys(screens);
    keys.forEach((key) => {
      paddingLeft[`@screen ${key}`] = {
        paddingLeft: theme(`decanter.screenMargins.${key}`),
      };
    });
    keys.forEach((key) => {
      paddingRight[`@screen ${key}`] = {
        paddingRight: theme(`decanter.screenMargins.${key}`),
      };
    });

    const components = {
      '.cc-left': {
        paddingLeft: theme('decanter.screenMargins.xs'),
        marginLeft: 0,
        ...paddingLeft,
        '@media only screen and (min-width: 1700px)': {
          paddingLeft: 'calc(100% - 750px)',
        },
      },
      '.cc-right': {
        paddingRight: theme('decanter.screenMargins.xs'),
        marginRight: 0,
        ...paddingRight,
        '@media only screen and (min-width: 1700px)': {
          paddingRight: 'calc(100% - 750px)',
        },
      },
    };

    addComponents(components);
  };
};
