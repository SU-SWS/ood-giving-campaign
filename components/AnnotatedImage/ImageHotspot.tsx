import { useRef, useState } from 'react';
import {
  Description, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild,
} from '@headlessui/react';
import { useOnClickOutside } from 'usehooks-ts';
import { cnb } from 'cnbuilder';
import { CreateBloks } from '../CreateBloks';
import { Grid } from '@/components/Grid';
import { FlexBox } from '@/components/FlexBox';
import { Heading, Text } from '@/components/Typography';
import { HeroIcon } from '@/components/HeroIcon';
import { RichText } from '@/components/RichText';
import { StoryImage } from '@/components/StoryImage';
import { type SbImageHotspotType } from '@/components/Storyblok/Storyblok.types';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { hasRichText } from '@/utilities/hasRichText';
import { getNumBloks } from '@/utilities/getNumBloks';
import * as styles from './ImageHotspot.styles';

export const ImageHotspot = ({
  positionX: { value: x } = {},
  positionY: { value: y } = {},
  modalContentType,
  heading,
  ariaLabel,
  subhead,
  description,
  image: { filename, focus } = {},
  caption,
  alt,
  content,
  isVerticalCard,
  descriptionSize,
}: SbImageHotspotType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isClicked, setIsClicked] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsModalOpen(true);
    if (!isClicked) {
      setIsClicked(true);
    }
  };

  useOnClickOutside(panelRef, () => {
    setIsModalOpen(false);
  });

  const DescriptionRichText = hasRichText(description)
  ? <RichText wysiwyg={description} baseFontSize={descriptionSize} className="rs-mt-3 *:max-w-prose *:leading-snug rs-px-4" />
  : undefined;

  const Caption = hasRichText(caption)
  ? <RichText wysiwyg={caption} textColor="white" linkColor="digital-red-xlight" className="first:*:mt-0 *:leading-display" />
  : undefined;

  return (
      <>
        <div className={styles.hotspotWrapper} style={{ top: `${y * 100}%`, left: `${x * 100}%` }}>
          <button
            type="button"
            ref={buttonRef}
            onClick={handleClick}
            aria-haspopup="dialog"
            aria-label={`Open modal ${ariaLabel || heading}`}
            className={styles.button}
          >
            <HeroIcon noBaseStyle icon="plus" strokeWidth={2} className={styles.icon} />
          </button>
          {!isClicked && (
            <span aria-hidden="true" className={styles.hotspotRing} />
          )}
        </div>
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
                <DialogPanel className={styles.dialogPanel(modalContentType)}>
                  <DialogTitle className={styles.srOnly}>{heading || ariaLabel}</DialogTitle>
                  {subhead && (
                    <Description className={styles.srOnly}>{subhead}</Description>
                  )}
                  <div ref={panelRef} className={styles.contentWrapper(modalContentType)}>
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
                        icon='close'
                        className={styles.modalIcon}
                      />
                    </button>
                    {modalContentType !== 'component' && (
                      <Grid xl={modalContentType === 'text-image' ? 12 : 1} className="h-full">
                        {(modalContentType === 'text-image' || modalContentType === 'text') && (
                          <div className="xl:col-span-6 2xl:col-span-5 pt-90 rs-pb-4 bg-white">
                            <div className="border-l-[1.2rem] md:border-l-[1.8rem] border-digital-red-light">
                              <Heading size={3} className="mb-02em leading-tight ml-22 md:ml-40 2xl:ml-43">{heading}</Heading>
                              <Text as="span" weight="semibold" className="ml-22 md:ml-40 2xl:ml-43">{subhead}</Text>
                            </div>
                            {DescriptionRichText}
                          </div>
                        )}
                        {(modalContentType === 'fullwidth-image' || modalContentType === 'text-image') && (
                          <figure className="relative xl:col-span-6 2xl:col-span-7">
                            <picture>
                              <source
                                src={getProcessedImage(filename, '1500x750', focus)}
                                media="(min-width: 1500px)"
                              />
                              <source
                                src={getProcessedImage(filename, '1200x600', focus)}
                                media="(max-width: 1199px)"
                              />
                              <source
                                media="(max-width: 991px)"
                                src={getProcessedImage(filename, '1000x500', focus)}
                              />
                              <source
                                media="(max-width: 575px)"
                                src={getProcessedImage(filename, '600x300', focus)}
                              />
                              <img
                                alt={alt || ''}
                                src={getProcessedImage(filename, '1500x750', focus)}
                                className="xl:object-cover w-full xl:h-full"
                                width="1500"
                                height="750"
                              />
                            </picture>
                            {hasRichText(caption) && (
                              <figcaption className="sm:absolute px-18 pt-14 pb-16 bg-black-true/90 sm:bg-black-true/70 sm:bottom-20 sm:left-20 md:bottom-30 md:left-30 max-w-full sm:max-w-[30rem] md:max-w-[40rem] 2xl:max-w-400s z-[110]">
                                {Caption}
                              </figcaption>
                            )}
                          </figure>
                        )}
                      </Grid>
                    )}
                    {modalContentType === 'component' && !!getNumBloks(content) && (
                      <div className="py-100 rs-px-1">
                        <CreateBloks blokSection={content} />
                      </div>
                    )}
                  </div>
                </DialogPanel>
              </div>
            </TransitionChild>
          </Dialog>
        </Transition>
      </>
  );
};
