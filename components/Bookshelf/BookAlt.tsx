import { m, AnimatePresence, useWillChange } from 'framer-motion';
import { cnb } from 'cnbuilder';
import { FlexBox } from '../FlexBox';
import { Heading, Text, Paragraph } from '../Typography';
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
          'group relative transition-all overflow-hidden bg-black-50 h-1200 shrink-0 hocus-visible:underline decoration-white rounded-[5rem]',
          isOpen ? 'w-1200' : 'w-[calc((100%_-_144px_-_1200px)/3)]',
          expanded === false ? '!w-[calc((100%_-_144px)/4)]' : '',
          buttonClassName,
        )}
      >
        <img
          src={getProcessedImage(imgSrc, '1200x1200')}
          alt=""
          className="w-full h-full object-cover object-left"
        />
        <div className="">
          <Text
            color="white"
            font="mono"
            size={4}
            leading="tight"
            weight="bold"
            align="left"
            className={cnb(
              !isOpen && expanded ? '-rotate-90 w-400 left-[7vw]' : 'left-48',
              'transition-transform origin-bottom-left absolute bottom-200 z-10',
            )}
          >
            {title}
          </Text>
          {isOpen && (
            <Paragraph variant="card" color="white" leading="display" className="absolute bottom-40 z-20 rs-px-3 max-w-[74rem]" align="left">
              {body}
            </Paragraph>
          )}
        </div>
      </button>
    </>
  );
};
