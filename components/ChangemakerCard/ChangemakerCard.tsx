'use client';
import { cnb } from 'cnbuilder';
import { useRef, useState } from 'react';
import {
  Description, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild,
} from '@headlessui/react';
import { useOnClickOutside } from 'usehooks-ts';
import { AnimateInView, type AnimationType } from '@/components/Animate';
import { Text } from '@/components/Typography';
import { FlexBox } from '@/components/FlexBox';
import { HeroIcon } from '@/components/HeroIcon';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import * as styles from './ChangemakerCard.styles';


export type ChangemakerCardProps = React.HTMLAttributes<HTMLDivElement> & {
  heading: string;
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(panelRef, () => {
    setIsModalOpen(false);
  });

  return (
    <>
      <AnimateInView animation={animation} delay={delay}>
        <div
          className={cnb('changemaker-card', styles.root(isHorizontal), className)}
          {...props}
        >
          <div className={styles.cardInner(isHorizontal)}>
            {/* Front of the card */}
            <div className={styles.cardFront}>
              {!!imageSrc && (
                <div className={styles.imageWrapper(isHorizontal)}>
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
                </div>
              )}
              <FlexBox direction="col" className={styles.info(isHorizontal)}>
                <Text
                  font="serif"
                  leading="tight"
                  align="center"
                  color="white"
                  weight="bold"
                  className={styles.heading(isHorizontal)}
                >
                  {heading}
                </Text>
                {subheading && (
                  <Text align="center" leading="display" color="white" className={styles.subhead}>{subheading}</Text>
                )}
              </FlexBox>
            </div>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              aria-label={`Read more about ${heading}`}
              aria-haspopup="dialog"
              className={styles.button}
            >
              <HeroIcon
                noBaseStyle
                icon="plus"
                strokeWidth={2}
                className={styles.icon(isHorizontal)}
              />
            </button>
          </div>
        </div>
      </AnimateInView>
      {/* Content is displayed in a modal */}
      <Transition show={isModalOpen}>
        <Dialog onClose={() => setIsModalOpen(false)} className={styles.dialog}>
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={styles.dialogOverlay} />
          </TransitionChild>
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className={styles.dialogWrapper}>
              <DialogPanel className={styles.dialogPanel}>
                <div ref={panelRef} className={styles.dialogContentWrapper}>
                  <button
                    type="button"
                    aria-label="Close modal"
                    onClick={() => setIsModalOpen(false)}
                    className={styles.modalClose}
                  >
                    <HeroIcon
                      noBaseStyle
                      focusable="false"
                      strokeWidth={2}
                      icon="close"
                      className={styles.modalIcon}
                    />
                  </button>
                  <div className={styles.modalTextWrapper}>
                    <header className={styles.modalHeader}>
                      <DialogTitle className={styles.modalHeading}>{heading}</DialogTitle>
                      {subheading &&
                        <Description as="span" className={styles.modalSubhead}>{subheading}</Description>
                      }
                    </header>
                    <div className={styles.nestedBloksWrapper}>{children}</div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
};
