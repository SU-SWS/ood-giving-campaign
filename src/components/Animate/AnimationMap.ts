export const AnimationMap = {
  zoomIn: {
    hidden: {
      opacity: 0,
      scale: 0.7,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  },
  slideInFromLeft: {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },
  slideUp: {
    hidden: {
      opacity: 0,
      y: 300,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
  slideDown: {
    hidden: {
      opacity: 0,
      y: -300,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
};
export type AnimationType = keyof typeof AnimationMap;
