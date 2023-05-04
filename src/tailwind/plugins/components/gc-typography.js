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
      /**
       * Fluid type that scales up smoothly between a min and max font size
       * over the viewport range 360px to 1500px
       * See concept on https://www.aleksandrhovhannisyan.com/blog/fluid-type-scale-with-css-clamp/
       */
      '.fluid-type-4': {
        fontSize: 'clamp(3.1rem, 2.19vw + 2.31rem, 5.6rem)',
      },
      '.fluid-type-5': {
        fontSize: 'clamp(3.6rem, 2.98vw + 2.53rem, 7rem)',
      },
      '.fluid-type-6': {
        fontSize: 'clamp(4.2rem, 4.04vw + 2.75rem, 8.8rem)',
      },
      '.fluid-type-7': {
        fontSize: 'clamp(4.8rem, 5.44vw + 2.84rem, 11rem)',
      },
      '.fluid-type-8': {
        fontSize: 'clamp(5.5rem, 7.19vw + 2.91rem, 13.7rem)',
      },
      '.fluid-type-9': {
        fontSize: 'clamp(6.3rem, 9.47vw + 2.89rem, 17.1rem)',
      },
      '.fluid-type-10': {
        fontSize: 'clamp(7.3rem, 12.37vw + 2.85rem, 21.4rem)',
      },
      // Custom fluid type for homepage hero
      // Slightly smaller than fluid-type-9 so we can fit each line on a 360px viewport
      '.gc-splash': {
        fontSize: 'clamp(5.8rem, 8.95vw + 2.58rem, 16rem)',
      }
    };

    addComponents(components);
  };
};
