import { useId, useRef, useState } from 'react';
import {
  Description, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild,
} from '@headlessui/react';
import { useOnClickOutside } from 'usehooks-ts';
import { cnb } from 'cnbuilder';
import { CreateBloks } from '../CreateBloks';
import { Grid } from '@/components/Grid';
import { Heading } from '@/components/Typography';
import { HeroIcon } from '@/components/HeroIcon';
import { type SbImageHotspotType } from '../Storyblok/Storyblok.types';
import * as styles from './ImageHotspot.styles';

export const ImageHotspot = ({
  positionX: { value: x } = {},
  positionY: { value: y } = {},
  heading,
  ariaLabel,
  subhead,
  description,
  image,
  content,
}: SbImageHotspotType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isClicked, setIsClicked] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsModalOpen(true)
    if (!isClicked) {
      setIsClicked(true)
    }
  };

  useOnClickOutside(panelRef, () => {
    setIsModalOpen(false);
  });

  return (
      <>
        <button
          type="button"
          ref={buttonRef}
          onClick={handleClick}
          aria-haspopup="dialog"
          aria-label={`Open ${ariaLabel || heading}`}
          className={styles.button(isClicked)}
          style={{ top: `${y * 100}%`, left: `${x * 100}%` }}
        >
          <HeroIcon noBaseStyle icon="plus" strokeWidth={2} className={styles.icon} />
        </button>
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
                  <DialogTitle className={styles.srOnly}>{heading}</DialogTitle>
                  {subhead && (
                    <Description className={styles.srOnly}>{subhead}</Description>
                  )}
                  <div ref={panelRef} className="relative flex items-center justify-center text-white bg-black-true/60 w-full h-screen md:h-auto md:aspect-1 lg:aspect-[3/2] 2xl:aspect-[16/9] 3xl:aspect-2">
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
                    <Heading size={3}>{heading}</Heading>
                    <span>{subhead}</span>
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
