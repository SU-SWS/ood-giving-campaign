import { m, AnimatePresence, useWillChange } from 'framer-motion';
import { cnb } from 'cnbuilder';
import { FlexBox } from '../FlexBox';
import { Heading, Text, Paragraph } from '../Typography';
import { ImageOverlay } from '../ImageOverlay';
import { getProcessedImage } from '@/utilities/getProcessedImage';

type BookAltProps = {
  title: string;
  body?: string;
  i?: number;
  expanded?: false | number;
  setExpanded?: React.Dispatch<React.SetStateAction<number | false>>;
  buttonClassName?: string;
  contentClassName?: string;
  imgSrc?: string;
};

export const BookAlt = ({
  title,
  body,
  i,
  expanded,
  setExpanded,
  buttonClassName,
  contentClassName,
  imgSrc,
}: BookAltProps) => {
  const willChange = useWillChange();
  const isOpen = i === expanded;

  return (
    <>
      <button
        aria-expanded={isOpen}
        onClick={() => setExpanded(isOpen ? false : i)}
        className={cnb(
          'group relative transition-all top-0 overflow-hidden bg-black-50 h-900 2xl:h-1200 shrink-0 rounded-[3rem] 2xl:rounded-[5rem]',
          isOpen ? 'w-[calc(100%_-_60px_-_120px*3)] 2xl:w-[calc(100%_-_144px_-_180px*3)]' : 'w-120 2xl:w-180',
          expanded === false ? '!w-[calc((100%_-_60px)/4)] 2xl:!w-[calc((100%_-_144px)/4)]' : '',
          buttonClassName,
        )}
      >
        <img
          src={getProcessedImage(imgSrc, '1400x1300')}
          alt=""
          className="w-full h-full object-cover object-left-top"
        />
        <div className="absolute top-0 right-0 bg-gradient-to-t from-black/70 via-50% via-transparent w-full h-full" />
        <Text
          color="white"
          font="mono"
          size={4}
          leading="none"
          weight="bold"
          align="left"
          className={cnb(
            !isOpen && expanded ? '-rotate-180 left-140 [writing-mode:vertical-rl] h-400' : 'rs-px-2',
            'transition-transform origin-top-left relative z-10 bottom-300 group-hocus:no-underline',
          )}
        >
          {title}
        </Text>
        {isOpen && (
          <Paragraph variant="card" color="white" leading="display" className="absolute bottom-60 z-20 rs-px-3 max-w-[74rem]" align="left">
            {body}
          </Paragraph>
        )}
      </button>
    </>
  );
};
