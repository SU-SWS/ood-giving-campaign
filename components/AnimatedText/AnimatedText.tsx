import { m } from 'framer-motion';

type AnimatedTextProps = {
  text: string;
};

export const AnimatedText = ({ text }: AnimatedTextProps) => {
// splitting text into letters
const words = text.split(' ');

// Variants for Container of words.
const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  }),
};

// Variants for each word.

const child = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    x: 20,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

return (
  <m.span
    className="flex flex-wrap gap-x-[0.3em] w-fit"
    variants={container}
    initial="hidden"
    animate="visible"
  >
    {words.map((word, index) => (
      <m.span
        variants={child}
        key={`${word}-${index}`}
      >
        {word}
      </m.span>
    ))}
  </m.span>
);
};
