/**
 * Momentum specific typography styles
 */
module.exports = function () {
  return function ({ addComponents, theme }) {
    const components = {
      '.overview': {
        fontSize: '2.2rem',
        lineHeight: theme('lineHeight.snug'),
        fontWeight: theme('fontWeight.semibold'),
        '@screen md': {
          fontSize: '2.7rem',
        },
        '@screen xl': {
          fontSize: '3.4rem',
        },
      },
      '.gc-caption': {
        fontSize: 'max(1.5rem, 0.81em)',
      },
      '.gc-card': {
        fontSize: '0.93em',
        lineHeight: theme('lineHeight.snug'),
      },
      '.gc-changemaker': {
        fontSize: '1.5rem',
        lineHeight: theme('lineHeight.snug'),
        '@screen 3xl': {
          fontSize: '1.6rem',
          lineHeight: theme('lineHeight.cozy'),
        },
      },
      '.gc-intro-text': {
        ...theme('decanter.typography.type2'),
        lineHeight: theme('lineHeight.cozy'),
      },
      // Custom fluid type for homepage hero
      // Slightly smaller than fluid-type-9 so we can fit each line on a 360px viewport
      '.gc-splash': {
        fontSize: 'clamp(5.8rem, 8.95vw + 2.58rem, 16rem)',
      },
      '.hero': {
        fontSize: 'clamp(4.5rem, 7.01vw + 1.98rem, 16rem)',
      },
    };

    addComponents(components);
  };
};
