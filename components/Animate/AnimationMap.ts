export const AnimationMap = {
  fadeIn: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  },
  zoomIn: {
    hidden: {
      opacity: 0,
      scale: 0.6,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  },
  zoomSharpen: {
    hidden: {
      opacity: 0.3,
      scale: 0.6,
      filter: 'blur(20px)',
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
    },
  },
  sharpen: {
    hidden: {
      opacity: 0.3,
      filter: 'blur(20px)',
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
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
  slideInFromRight: {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },
  slideUp: {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
  slideDown: {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
  bubble: {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: 'auto',
    },
  },
};
export type AnimationType = keyof typeof AnimationMap | 'none';
