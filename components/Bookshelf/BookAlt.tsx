import { m, AnimatePresence, useWillChange } from 'framer-motion';
import { cnb } from 'cnbuilder';
import { FlexBox } from '../FlexBox';
import { Heading, Text, Paragraph } from '../Typography';
import { HeroIcon } from '../HeroIcon';
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
          src={getProcessedImage(imgSrc, '1600x1300')}
          alt=""
          className="w-full h-full object-cover object-left-top"
        />
        <span className="absolute block bottom-0 right-0 bg-gradient-to-t from-gc-black via-50% via-gc-black/50 w-full h-2/5 group-hocus-visible:h-1/2 transition-all" />
        <Text
          as="span"
          color="white"
          font="mono"
          size={4}
          leading="none"
          weight="bold"
          align="left"
          className={cnb(
            !isOpen && expanded ? '-rotate-180 left-140 bottom-300 [writing-mode:vertical-rl] h-400' : 'rs-px-2 bottom-350',
            'block transition-transform origin-top-left relative z-10 group-hocus:no-underline',
          )}
        >
          {title}
        </Text>
        <FlexBox direction="col" alignItems="center" className="absolute bottom-50 3xl:bottom-95 right-[5.3rem] text-white">
          <HeroIcon
            noBaseStyle
            icon={isOpen ? 'minus' : 'plus'}
            className="w-75 h-75 border-2 border-white rounded-full p-19 mb-04em group-hocus-visible:border-dashed group-hocus-visible:bg-gc-black"
          />
          <Text as="span" font="serif" color="white" variant="caption">
            {isOpen ? 'minimize' : 'explore'}
          </Text>
        </FlexBox>
        {isOpen && (
          <Paragraph variant="card" color="white" leading="snug" className="absolute bottom-100 z-20 rs-px-3 max-w-[74rem]" align="left">
            {body}
          </Paragraph>
        )}
      </button>
    </>
  );
};
