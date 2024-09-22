import { useRef, useState } from 'react';
import {
  Description, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild,
} from '@headlessui/react';
import { useOnClickOutside } from 'usehooks-ts';
import { cnb } from 'cnbuilder';
import { CreateBloks } from '../CreateBloks';
import { Grid } from '@/components/Grid';
import { Heading, Text } from '@/components/Typography';
import { HeroIcon } from '@/components/HeroIcon';
import { RichText } from '@/components/RichText';
import { type SbImageHotspotType } from '@/components/Storyblok/Storyblok.types';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { hasRichText } from '@/utilities/hasRichText';
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
  alt,
  content,
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

  const DescriptionRichText = hasRichText(description) ? <RichText wysiwyg={description} baseFontSize="card" className="rs-mt-3 *:max-w-prose" /> : undefined;

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
                <DialogPanel className={styles.dialogPanel}>
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
                    {modalContentType === 'text-image' && (
                      <Grid xl={12} className="h-full">
                        <div className="xl:col-span-6 2xl:col-span-5 rs-pt-5 rs-pb-3 rs-px-3">
                          <Heading size={3} className="mb-02em leading-tight">{heading}</Heading>
                          <Text as="span" weight="semibold">{subhead}</Text>
                          {DescriptionRichText}
                        </div>
                        <div className="xl:col-span-6 2xl:col-span-7">
                          <img
                            alt={alt || ''}
                            src={getProcessedImage(filename, '1200x800', focus) || ''}
                            className="object-cover size-full"
                          />
                        </div>
                      </Grid>
                    )}
                    <CreateBloks blokSection={content} />
                  </div>
                </DialogPanel>
              </div>
            </TransitionChild>
          </Dialog>
        </Transition>
      </>
  );
};
