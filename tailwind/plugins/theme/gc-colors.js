/**
 * Giving Campaign colors
 */
module.exports = function () {
  return {
    flamingo: '#ECC7CD',
    fuchsia: '#E31C79',
    lavender: '#C5B4E3',
    lime: '#DBE442',
    periwinkle: '#485CC7',
    'robins-egg': '#77C5D5',
    sapphire: '#005776',
    slate: '#4E4B48',
    'gc-sky': '#4287BD', // For homepage hero sky gradient
    'gc-black': '#17171A',
    // Colors inherited from the SAA project
    'digital-red': {
      xlight: '#F83535', // Passed contrast test for black background
    },
    'cardinal-red': {
      xdark: '#7A0000', // Passed contrast test with digital-red-xlight as text
      xxdark: '#541107', // Used for hover/focus color for xdark
    },
  };
};
