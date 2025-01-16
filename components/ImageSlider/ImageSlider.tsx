import React, { useState, useRef } from 'react';
import {
  Dialog, DialogPanel, DialogTitle, Transition, TransitionChild,
} from '@headlessui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { useOnClickOutside } from 'usehooks-ts';
import { type WidthType } from '@/components/WidthBox';
import { HeroIcon } from '@/components/HeroIcon';
import { NextPrevButton } from '@/components/ImageSlider/NextPrevButton';
import { RichText } from '@/components/RichText';
import { type MarginType } from '@/utilities/datasource';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { getIsSbImagePortrait } from '@/utilities/getIsSbImagePortrait';
import { SbSliderImageType } from '@/components/Storyblok/Storyblok.types';
import * as styles from './ImageSlider.styles';
import { SrOnlyText } from '../Typography';

type ImageSliderProps = React.HTMLAttributes<HTMLDivElement> & {
  slides: SbSliderImageType[];
  isLightText?: boolean;
  ariaLabel?: string;
  showExpandLink?: boolean;
  boundingWidth?: 'site' | 'full';
  width?: WidthType;
  marginTop?: MarginType;
  marginBottom?: MarginType;
}

export const ImageSlider = ({
  slides,
  isLightText,
  ariaLabel,
  showExpandLink,
  boundingWidth = 'site',
  width,
  marginTop,
  marginBottom,
  ...props
}: ImageSliderProps) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [pagerOffset, setPagerOffset] = useState(0);
  const pagerWindowRef = useRef<HTMLDivElement>(null);
  const pagerRef = useRef<HTMLUListElement>(null);
  const expandButtonRef = useRef<HTMLButtonElement>(null);
  const slideshow = useRef(null);
  const modalSlideshow = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(panelRef, () => {
    setIsModalOpen(false);
  });

  const sliderSettings = {
    arrows: false,
    nextArrow: (
      <NextPrevButton
        direction="next"
        isLightText={isLightText}
      />
    ),
    prevArrow: (
      <NextPrevButton
        direction="prev"
        isLightText={isLightText}
      />
    ),
    accessibility: true,
    swipeToSlide: true,
    lazyLoad: 'ondemand' as const,
    customPaging: (i: number) => {
      const slide = slides[i];
      const isPortrait = getIsSbImagePortrait(slide?.image.filename);
      return (
        <button
          type="button"
          key={slide?._uid}
          aria-label={`Go to slide ${i + 1} ${slide?.alt || ''}`}
          aria-current={activeSlide === i ? 'true' : undefined}
          className={styles.thumbButton(activeSlide === i, isPortrait)}
        >
          <img
            src={isPortrait ? getProcessedImage(slide?.image.filename, '65x0') : getProcessedImage(slide?.image.filename, '100x0')}
            alt=""
          />
        </button>
      );
    },
    afterChange: (i: number) => {
      setActiveSlide(i);
      adjustPagerPosition();
    },
    // This provides the JSX template for the lower half of the slider.
    appendDots: (dots: React.ReactNode) => {
      return (
        <div>
          <NextPrevButton
            direction="prev"
            isLightText={isLightText}
            onClick={clickPrev}
            className="absolute -left-80 top-[-30cqw]"
          />
          <NextPrevButton
            direction="next"
            isLightText={isLightText}
            onClick={clickNext}
            className="absolute -right-80 top-[-30cqw]"
          />
          <div className="infobar flex justify-between mt-9">
            <div aria-hidden="true" className="counter leading-none">
              {`${activeSlide + 1}/${slides?.length}`}
            </div>
            <SrOnlyText>{`Slide ${activeSlide + 1} of ${slides?.length}`}</SrOnlyText>
            {showExpandLink && (
              <button
                type="button"
                onClick={openModal}
                aria-haspopup="dialog"
                className={styles.expandButton(isLightText)}
                aria-label="Expand gallery"
                ref={expandButtonRef}
              >
                Expand
                <HeroIcon icon="expand" className="inline-block ml-02em group-hocus-visible:scale-110" />
              </button>
            )}
          </div>

          <RichText
            textColor={isLightText ? 'white' : 'black-70'}
            linkColor={isLightText ? 'digital-red-xlight' : 'unset'}
            wysiwyg={slides[activeSlide]?.caption}
            className="rs-mt-0 max-w-prose *:leading-snug *:gc-caption"
          />

          <div className="flex items-center justify-center rs-mt-0">
            <div
              className="relative hidden sm:block overflow-hidden grow"
              ref={pagerWindowRef}
            >
              <ul
                className="pager flex list-unstyled items-end *:mb-0 *:leading-[0] gap-10"
                ref={pagerRef}
                style={{ transform: `translateX(${pagerOffset}px)` }}
              >
                {dots}
              </ul>
              {/* <div aria-hidden="true" className={styles.thumbWindowOverlay(isLightText)} /> */}
            </div>
          </div>
        </div>
      );
    },
    dots: true,
    dotsClass: 'relative gallery-slideshow--bottom @container',
  };

  const modalSliderSettings = {
    accessibility: true,
    swipeToSlide: true,
    lazyLoad: 'ondemand' as const,
    nextArrow: (
      <NextPrevButton
        direction="next"
        isLightText
        isModalDesktopButton
      />
    ),
    prevArrow: (
      <NextPrevButton
        direction="prev"
        isLightText
        isModalDesktopButton
      />
    ),
    afterChange: (i: number) => {
      setActiveSlide(i);
    },
    initialSlide: activeSlide,
  };

  const adjustPagerPosition = () => {
    const windowBox = pagerWindowRef.current?.getBoundingClientRect();
    const pagerBox = pagerRef.current?.getBoundingClientRect();
    const activeItem =
      pagerWindowRef.current?.getElementsByClassName('slick-active')[0];
    const activeItemBox = activeItem.getBoundingClientRect();

    if (activeItemBox.right > windowBox.right) {
      const rightGutter = 26;
      const currentOffset = pagerBox.left - windowBox.left;
      const newOffset =
        currentOffset + (windowBox.right - activeItemBox.right) - rightGutter;
      setPagerOffset(newOffset);
    } else if (activeItemBox.left < windowBox.left) {
      const currentOffset = pagerBox.left - windowBox.left;
      const newOffset = currentOffset + (windowBox.left - activeItemBox.left);
      setPagerOffset(newOffset);
    }
  };

  const clickPrev = () => {
    slideshow.current?.slickPrev();
  };

  const clickNext = () => {
    slideshow.current?.slickNext();
  };

  const clickModalPrev = () => {
    modalSlideshow.current?.slickPrev();
  }

  const clickModalNext = () => {
    modalSlideshow.current?.slickNext();
  }

  const closeModal = () => {
    setIsModalOpen(false);
    if (expandButtonRef.current) {
      expandButtonRef.current.focus();
    }
    slideshow.current.slickGoTo(activeSlide, true);
  };

  const openModal = () => {
    if (modalSlideshow.current) {
      modalSlideshow.current.slickGoTo(activeSlide, true);
    }
    setIsModalOpen(true);
  };

  return (
    <>
      <section aria-label={ariaLabel} {...props}>
        <Slider
          className="leading-none grid grid-rows-2"
          ref={slideshow}
          {...sliderSettings}
        >
          {slides?.map((slide) => (
            <div
              className="aspect-w-16 aspect-h-9"
              key={slide._uid}
            >
              <img
                src={getProcessedImage(slide?.image.filename, '0x900')}
                alt={slide?.image.alt}
                className="object-contain object-bottom"
              />
            </div>
          ))}
        </Slider>
      </section>
      <Transition show={isModalOpen}>
        <Dialog onClose={closeModal} className={styles.dialog}>
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
                <DialogTitle className={styles.srOnly}>{`${ariaLabel} full screen view`}</DialogTitle>
                <div ref={panelRef} className={styles.contentWrapper}>
                  <button
                    type="button"
                    aria-label="Close modal"
                    onClick={closeModal}
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
                  <section aria-label={`${ariaLabel} full screen view`} className="mt-90 md:mt-100 relative cc max-w-1500 mx-auto">
                    <Slider
                      className="relative !flex items-center gap-30 leading-none"
                      ref={modalSlideshow}
                      {...modalSliderSettings}
                    >
                      {slides.map((slide) => (
                        <div
                          className="aspect-w-16 aspect-h-9"
                          key={slide?._uid}
                        >
                          <img
                            src={getProcessedImage(slide?.image.filename, '0x800')}
                            alt={slide?.image.alt}
                            className="object-contain object-bottom"
                          />
                        </div>
                      ))}
                    </Slider>
                  </section>
                  <div className="relative mt-9">
                    <span aria-hidden="true" className="block leading-none shrink-0 text-center">
                      {`${activeSlide + 1}/${slides?.length}`}
                    </span>
                    <SrOnlyText>{`Slide ${activeSlide + 1} of ${slides?.length}`}</SrOnlyText>
                    <RichText
                      textColor="white"
                      linkColor="digital-red-xlight"
                      wysiwyg={slides[activeSlide]?.caption}
                      className="rs-mt-0 max-w-prose mx-auto *:leading-snug *:gc-caption"
                    />
                  </div>
                </div>
                <div className="flex gap-16 items-center justify-center mt-9">
                  <NextPrevButton
                    direction="prev"
                    isLightText
                    onClick={clickModalPrev}
                    className="block sm:hidden"
                  />
                  <NextPrevButton
                    direction="next"
                    isLightText
                    onClick={clickModalNext}
                    className="block sm:hidden"
                  />
                </div>
              </DialogPanel>
            </div>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
};
