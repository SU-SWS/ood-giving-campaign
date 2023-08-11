import { m, AnimatePresence, useWillChange } from 'framer-motion';
import { cnb } from 'cnbuilder';
import { Text } from '../Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';

type BookProps = {
  name: string;
  children: React.ReactNode;
  i?: number;
  expanded?: false | number;
  setExpanded?: React.Dispatch<React.SetStateAction<number | false>>;
  buttonClassName?: string;
  contentClassName?: string;
};

export const Book = ({
  name,
  children,
  i,
  expanded,
  setExpanded,
  buttonClassName,
  contentClassName,
}: BookProps) => {
  const willChange = useWillChange();
  const isOpen = i === expanded;

  return (
    <>
      <m.button
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
        // animate={{ backgroundColor: isOpen ? '#FF0088' : '#0055FF' }}
        className={cnb('relative transition-colors w-120 flex justify-center align-start shrink-0 rounded', buttonClassName)}
      >
        <Text
          color="white"
          font="serif"
          size={2}
          leading="tight"
          align="right"
          weight="semibold"
          className="text-vertical-lr -rotate-180 mt-30"
        >
          {name}
        </Text>
        <img
          src={getProcessedImage('https://a-us.storyblok.com/f/1005200/755x477/659626090b/pallas-cat-manul-8.jpg', '100x100')}
          alt=""
          className="rounded-full w-80 h-80 absolute left-20 bottom-15"
        />
      </m.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <m.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {
                opacity: 1, width: 'auto', scaleX: 1,
              },
              collapsed: {
                opacity: 0, width: 0, scaleX: 0,
              },
            }}
            transition={{ duration: 0.2, ease: 'easeIn' }}
            style={{ willChange }}
            className={cnb('origin-left flex bg-gradient-to-r via-fog-light via-20% to-fog-light rs-p-4 -ml-10 gap-30', contentClassName)}
          >
            {children}
          </m.section>
        )}
      </AnimatePresence>
    </>
  );
};
