import { useRef, useState } from 'react';
import {
  Description, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild,
} from '@headlessui/react';
import { useOnClickOutside } from 'usehooks-ts';
import { CreateBloks } from '../CreateBloks';
import { Grid } from '@/components/Grid';
import { Heading, Text } from '@/components/Typography';
import { HeroIcon } from '@/components/HeroIcon';
import { RichText } from '@/components/RichText';
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
  ? <RichText wysiwyg={description} baseFontSize={descriptionSize} className="rs-mt-3 *:max-w-prose *:leading-snug rs-pl-4" />
  : undefined;

  const Caption = hasRichText(caption)
  ? <RichText wysiwyg={caption} textColor="white" linkColor="digital-red-xlight" className="first:*:mt-0 *:leading-display" />
  : undefined;

  return (
    <>
      <div className={styles.hotspotWrapper} style={{ top: `${y * 100}%`, left: `${x * 100}%` }}>
        <button
            type="button"
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
                <div ref={panelRef} className={styles.contentWrapper(modalContentType, isVerticalCard)}>
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
                  {/* Content for modals with text+image, fullwidth image or text only */}
                  {(modalContentType !== 'component' && modalContentType !== 'image-quote') && (
                  <Grid xl={modalContentType === 'text-image' && !isVerticalCard ? 12 : 1} className={styles.grid}>
                    {(modalContentType === 'text-image' || modalContentType === 'text') && (
                    <div className={styles.textWrapper(isVerticalCard)}>
                      {(heading || subhead) && (
                      <div className={styles.header}>
                        {heading &&
                        <Heading size={3} className={styles.heading}>{heading}</Heading>
                                }
                        {subhead &&
                        <Text weight="semibold" className={styles.subhead}>{subhead}</Text>
                                }
                      </div>
                            )}
                      {DescriptionRichText}
                    </div>
                        )}
                    {(modalContentType === 'fullwidth-image' || modalContentType === 'text-image') && filename && (
                    <figure className={styles.figure(isVerticalCard)}>
                      {modalContentType === 'fullwidth-image' && (
                      <picture>
                        <source
                                  media="(min-width: 1200px)"
                                  src={getProcessedImage(filename, '1500x750', focus)}
                                />
                        <source
                                  media="(min-width: 992px)"
                                  src={getProcessedImage(filename, '1200x600', focus)}
                                />
                        <source
                                  media="(min-width: 576x)"
                                  src={getProcessedImage(filename, '1000x500', focus)}
                                />
                        <source
                                  media="(max-width: 575px)"
                                  src={getProcessedImage(filename, '600x300', focus)}
                                />
                        <img
                                  alt={alt || ''}
                                  fetchPriority="high"
                                  src={getProcessedImage(filename, '1500x750', focus)}
                                  className={styles.image}
                                  width="1500"
                                  height="750"
                                />
                      </picture>
                            )}
                      {modalContentType === 'text-image' && (
                      <picture>
                        {isVerticalCard ? (
                          <source
                                    media="(min-width: 1200px)"
                                    src={getProcessedImage(filename, '1200x800', focus)}
                                  />
                                ): (
                                  <>
                                    <source
                                      media="(min-width: 1500px)"
                                      src={getProcessedImage(filename, '800x600', focus)}
                                    />
                                    <source
                                      media="(min-width: 1200px)"
                                      src={getProcessedImage(filename, '700x700', focus)}
                                    />
                                  </>
                                )}
                        <source
                                  media="(min-width: 992px)"
                                  src={getProcessedImage(filename, '1200x800', focus)}
                                />
                        <source
                                  media="(min-width: 768px)"
                                  src={getProcessedImage(filename, '1000x750', focus)}
                                />
                        <source
                                  media="(min-width: 576px)"
                                  src={getProcessedImage(filename, '810x540', focus)}
                                />
                        <source
                                  media="(max-width: 575px)"
                                  src={getProcessedImage(filename, '600x400', focus)}
                                />
                        <img
                                  alt={alt || ''}
                                  fetchPriority="high"
                                  src={getProcessedImage(filename, isVerticalCard ? '1200x800' : '800x600', focus)}
                                  className={styles.image}
                                  width={isVerticalCard ? 1200 : 800}
                                  height={isVerticalCard ? 800 : 600}
                                />
                      </picture>
                            )}
                      {hasRichText(caption) && (
                      <figcaption className={styles.figcaption}>
                        {Caption}
                      </figcaption>
                            )}
                    </figure>
                        )}
                  </Grid>
                    )}
                  {(modalContentType === 'component' || modalContentType === 'image-quote') && !!getNumBloks(content) && (
                  <div className={styles.nestedComponentWrapper(modalContentType)}>
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
