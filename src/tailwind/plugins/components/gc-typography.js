/**
 * Campaign specific typography styles
 */
module.exports = function () {
  return function ({ addComponents, theme }) {
    const components = {
      '.overview': {
        fontSize: '2.3rem',
        lineHeight: theme('lineHeight.display'),
        fontWeight: theme('fontWeight.semibold'),
        '@screen md': {
          fontSize: '2.6rem',
        },
        '@screen xl': {
          fontSize: '4rem',
        },
      },
      '.gc-card': {
        fontSize: '0.93em',
        lineHeight: theme('lineHeight.snug'),
      },
      '.gc-caption': {
        lineHeight: theme('lineHeight.display'),
      },
      '.gc-intro-text': {
        ...theme('decanter.typography.type2'),
        lineHeight: theme('lineHeight.cozy'),
      },
    };

    addComponents(components);
  };
};
