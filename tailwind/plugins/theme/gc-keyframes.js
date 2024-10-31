/**
 * Momentum keyframe animations
 */
module.exports = function () {
  return {
    ellipsis: {
      '100%': {
        transform: 'scale(1)',
        opacity: '1',
      },
    },
    hotspot: {
      '75%, 100%': {
        transform: 'scale(1.4)',
        opacity: '0',
      },
    },
  }
};
