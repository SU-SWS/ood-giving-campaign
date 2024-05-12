import { cnb } from 'cnbuilder';
import { useId, useRef, useState } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useMediaQuery, useOnClickOutside, useToggle } from 'usehooks-ts';
import { AnimateInView, type AnimationType } from '@/components/Animate';
import { Heading, type HeadingType, Text } from '@/components/Typography';
import { FlexBox } from '@/components/FlexBox';
import { HeroIcon } from '@/components/HeroIcon';
import useEscape from '@/hooks/useEscape';
import { config } from '@/utilities/config';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import * as styles from './ChangemakerCard.styles';


export type ChangemakerCardProps = React.HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  headingLevel?: HeadingType;
  subheading?: string;
  imageSrc?: string;
  imageFocus?: string;
  isHorizontal?: boolean;
  animation?: AnimationType;
  delay?: number;
  // children gets rendered as the content layer
  children?: React.ReactNode;
};

export const ChangemakerCard = ({
  heading,
  headingLevel = 'h3',
  subheading,
  imageSrc,
  imageFocus,
  isHorizontal,
  animation = 'none',
  delay,
  children,
  className,
  ...props
}: ChangemakerCardProps) => {
  const isNotPhone = useMediaQuery(`(min-width: ${config.breakpoints.sm}px)`);

  const cardRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const contentId = useId();
  const headingId = useId();
  const [isShown, toggle, setIsShown] = useToggle();

  // For the mobile modal
  const [isModalOpen, toggleModal, setIsModalOpen] = useToggle();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    // toggle the card content and if it is shown, focus on contentRef
    toggle();
    if (!isShown) {
      contentRef.current?.focus();
    }
  };

  const handleModalButtonClick = () => {
    setIsModalOpen(true);
  };

  // If card content is shown, clicking outside it will dismiss it
  useOnClickOutside(cardRef, () => {
    if (isShown) {
      setIsShown(false);
    }
  });

  // If card content is shown, pressing escape will dismiss it
  // and focus on the button
  useEscape(() => {
    if (isShown) {
      setIsShown(false);
      buttonRef.current?.focus();
    }
  });

  return (
    <>
      <AnimateInView animation={animation} delay={delay}>
        <article
          ref={cardRef}
          className={cnb(styles.root(isHorizontal), className)}
          {...props}
        >
          <div className={styles.cardInner(isHorizontal)}>
            {/* Front of the card */}
            <div aria-hidden={isShown} className={styles.cardFront}>
              {!!imageSrc && (
                <>
                  {/* No need to use different sources for vertical cards because
                    it stays about the same size for all breakpoints */}
                  {isHorizontal ? (
                    <picture>
                      <source
                        srcSet={getProcessedImage(imageSrc, '1200x800', imageFocus)}
                        media="(min-width: 1500px)"
                        // Exact height and width don't matter as long as aspect ratio is the same as the image
                        width={1200}
                        height={800}
                      />
                      <source
                        srcSet={getProcessedImage(imageSrc, '1000x667', imageFocus)}
                        media="(min-width: 1200px)"
                        width={1000}
                        height={667}
                      />
                      <source
                        srcSet={getProcessedImage(imageSrc, '720x1080', imageFocus)}
                        media="(min-width: 576px)"
                        width={720}
                        height={1080}
                      />
                      <source
                        srcSet={getProcessedImage(imageSrc, '540x810', imageFocus)}
                        media="(max-width: 575px)"
                        width={540}
                        height={810}
                      />
                      <img
                        src={getProcessedImage(imageSrc, '1200x800', imageFocus)}
                        alt=""
                        loading="lazy"
                        width={1200}
                        height={800}
                        className={styles.image}
                      />
                    </picture>
                  ) : (
                    <img
                      src={getProcessedImage(imageSrc, '350x700', imageFocus)}
                      alt=""
                      loading="lazy"
                      width={350}
                      height={700}
                      className={styles.image}
                    />
                  )}
                  <div className={styles.overlay} />
                </>
              )}
              <FlexBox direction="col" className={styles.info(isHorizontal)}>
                {heading && (
                  <Heading
                    as={headingLevel}
                    id={headingId}
                    leading="tight"
                    align="center"
                    color="white"
                    className={styles.heading(isHorizontal)}
                  >
                    {heading}
                  </Heading>
                )}
                {subheading && (
                  <Text align="center" leading="display" color="white" className={styles.subhead}>{subheading}</Text>
                )}
              </FlexBox>
            </div>
            {/* Content layer */}
            <FlexBox
              id={contentId}
              aria-labelledby={headingId}
              direction="col"
              className={styles.cardContent(isHorizontal)}
              aria-hidden={!isShown}
            >
              <div ref={contentRef} tabIndex={isShown ? 0 : -1} className={styles.contentWrapper(isHorizontal)}>
                {children}
              </div>
            </FlexBox>
            <button
              ref={buttonRef}
              type="button"
              onClick={isNotPhone ? handleClick : () => setIsOpen(true)}
              aria-label={isShown ? 'Dismiss' : `Read more about ${heading}`}
              aria-controls={contentId}
              aria-expanded={isShown}
              className={styles.button}
            >
              <HeroIcon
                noBaseStyle
                icon='plus'
                className={styles.icon(isHorizontal)}
              />
            </button>
          </div>
        </article>
      </AnimateInView>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-[60]">
        <div className="fixed inset-0 bg-black-true/90 z-[70]" aria-hidden="true" />
        <div className="fixed z-[80] inset-0 w-screen overflow-y-auto p-4">
          <div className="cc flex min-h-full items-start justify-center">
            <DialogPanel className="bg-transparent text-white">
              <DialogTitle className="sr-only">{heading}</DialogTitle>
              <div className="text-white">{children}</div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

    </>
  );
};
