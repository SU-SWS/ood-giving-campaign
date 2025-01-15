import React, { useState, useRef } from 'react';
import {
  Description, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild,
} from '@headlessui/react';
import { cnb } from 'cnbuilder';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { WidthBox, type WidthType } from '@/components/WidthBox';
import { HeroIcon } from '@/components/HeroIcon';
import { RichText } from '@/components/RichText';
import { type MarginType } from '@/utilities/datasource';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { getIsSbImagePortrait } from '@/utilities/getIsSbImagePortrait';
import { SbSliderImageType } from '@/components/Storyblok/Storyblok.types';
import * as styles from './ImageSlider.styles';

type ImageSliderProps = React.HTMLAttributes<HTMLDivElement> & {
  slides: SbSliderImageType[];
  ariaLabel?: string;
  showExpandLink?: boolean;
  boundingWidth?: 'site' | 'full';
  width?: WidthType;
  marginTop?: MarginType;
  marginBottom?: MarginType;
}

export const ImageSlider = ({
  slides,
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
  const [showOverlay, setShowOverlay] = useState(true);
  const pagerWindowRef = useRef<HTMLDivElement>(null);
  const pagerRef = useRef<HTMLUListElement>(null);
  const expandButtonRef = useRef<HTMLButtonElement>(null);
  const slideshow = useRef(null);
  const modalSlideshow = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const sliderSettings = {
    arrows: false,
    accessibility: true,
    swipeToSlide: true,
    lazyLoad: 'ondemand' as const,
    customPaging: (i: number) => {
      const slide = slides[i];
      return (
        <button
          type="button"
          key={slide?._uid}
          aria-label={`Go to slide ${i + 1}`}
          aria-current={activeSlide === i ? true : undefined}
          className={cnb('gallery-slideshow--thumbnail min-w-60 inline-block box-content hocus-visible:opacity-100 hocus-visible:border-b-digital-red-light transition-all border-b-[3px] py-6', activeSlide === i ? 'opacity-100 border-b-[3px] border-b-digital-red-light' : 'opacity-70 border-b-transparent')}
        >
          <img
            src={getIsSbImagePortrait(slide?.image.filename) ? getProcessedImage(slide?.image.filename, '0x100') : getProcessedImage(slide?.image.filename, '100x0')}
            alt={slide?.image.alt || ''}
            className=""
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
          <div className="infobar flex justify-between mt-9">
            <div className="counter leading-none">
              {`${activeSlide + 1}/${slides?.length}`}
              <span className="sr-only">{`Slide ${activeSlide + 1} of ${slides?.length}`}</span>
            </div>
            {showExpandLink && (
              <button
                type="button"
                onClick={openModal}
                aria-haspopup="dialog"
                className="group font-semibold text-digital-red-light leading-none gc-card hocus-visible:text-gc-black hocus-visible:underline"
                aria-label="Expand gallery"
                ref={expandButtonRef}
              >
                Expand
                <HeroIcon icon="expand" className="inline-block ml-02em group-hocus-visible:scale-110" />
              </button>
            )}
          </div>

          <RichText
            textColor="black-70"
            wysiwyg={slides[activeSlide]['caption']}
            className="rs-mt-0 max-w-prose *:leading-display *:gc-caption"
          />

          <div className="controls flex items-center justify-center rs-mt-0">
            <button
              type="button"
              className="group flex items-center justify-center size-40 md:size-55 rounded-full border-[2px] border-gc-black shrink-0 hocus-visible:border-digital-red-light hocus-visible:bg-digital-red-light mr-10"
              onClick={clickPrev}
            >
              <span className="sr-only">Previous Slide</span>
              <HeroIcon icon="chevron-left" className="inline-block stroke-[3px] group-hocus-visible:text-white" />
            </button>
            <div
              className={`pager-window relative hidden sm:block overflow-hidden grow ${
                showOverlay ? 'overlay' : ''
              }`}
              ref={pagerWindowRef}
            >
              <ul
                className="pager flex list-unstyled items-end *:mb-0 *:leading-[0] gap-10"
                ref={pagerRef}
                style={{ transform: `translateX(${pagerOffset}px)` }}
              >
                {dots}
              </ul>
            </div>
            <button
              type="button"
              className="group flex items-center justify-center size-40 md:size-55 rounded-full border-[2px] border-gc-black shrink-0 hocus-visible:border-digital-red-light hocus-visible:bg-digital-red-light ml-10"
              onClick={clickNext}
            >
              <span className="sr-only">Next Slide</span>
              <HeroIcon icon="chevron-right" className="inline-block stroke-[3px] group-hocus-visible:text-white" />
            </button>
          </div>
        </div>
      );
    },
    dots: true,
    dotsClass: 'gallery-slideshow--bottom',
  };

  const modalSliderSettings = {
    nextArrow: (
      <button type="button">
        <span className="sr-only">Next Slide</span>
        <HeroIcon icon="chevron-right" className="inline-block stroke-[3px] group-hocus-visible:text-white" />
      </button>
    ),
    prevArrow: (
      <button type="button">
        <span className="sr-only">Previous Slide</span>
        <HeroIcon icon="chevron-left" className="inline-block stroke-[3px] group-hocus-visible:text-white" />
      </button>
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
      setShowOverlay(false);
    } else if (activeItemBox.left < windowBox.left) {
      const currentOffset = pagerBox.left - windowBox.left;
      const newOffset = currentOffset + (windowBox.left - activeItemBox.left);
      setPagerOffset(newOffset);
      setShowOverlay(true);
    }
  };

  const clickPrev = () => {
    slideshow.current.slickPrev();
  };

  const clickNext = () => {
    slideshow.current.slickNext();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (expandButtonRef.current) {
      expandButtonRef.current.focus();
    }
    slideshow.current.slickGoTo(activeSlide, true);
  };

  const openModal = () => {
    // if (modalSlideshow.current) {
    //   modalSlideshow.current.slickGoTo(activeSlide, true);
    // }
    setIsModalOpen(true);
  };

  return (
    <>
      <section aria-label={ariaLabel} {...props}>
        <Slider
          className="gallery-slideshow--slides leading-none"
          ref={slideshow}
          {...sliderSettings}
        >
          {slides?.map((slide) => (
            <div
              className="gallery-slideshow--slide aspect-w-16 aspect-h-9"
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
      {/* <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        outerContainerClasses="centered-container flex-container su-pt-1"
        innerContainerClasses="su-pt-2"
        ariaLabel={ariaLabel + ' full screen view'}
      >
        <div className="gallery-slideshow--modal-wrapper">
          <Slider
            className="gallery-slideshow--modal"
            ref={modalSlideshow}
            {...modalSliderSettings}
          >
            {slides.map((slide, index) => {
              return (
                <div
                  className="gallery-slideshow--slide"
                  //index={index}
                  key={slide._uid}
                >
                  <img
                    src={slide?.image.filename}
                    alt={slide?.image.alt}
                  />
                </div>
              );
            })}
          </Slider>
          <div className="gallery-slideshow--infobar">
            <div
              className="gallery-slideshow--counter"
              aria-label={`Slide ${activeSlide + 1} of ${slides.length}`}
            >
              {`${activeSlide + 1}/${slides.length}`}
            </div>
            <div className="gallery-slideshow--caption">
              <RichText wysiwyg={slides[activeSlide]['caption']} />
            </div>
          </div>
        </div>
      </Modal> */}
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
                <DialogTitle className={styles.srOnly}>{ariaLabel}</DialogTitle>
                <div ref={panelRef} className={styles.contentWrapper}>
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
                  <div className="cc max-w-1000">
                    <Slider
                      className="gallery-slideshow--modal"
                      ref={modalSlideshow}
                      {...modalSliderSettings}
                    >
                      {slides.map((slide, index) => {
                        return (
                          <div
                            className="gallery-slideshow--slide"
                            // index={index}
                            key={slide._uid}
                          >
                            <img
                              src={slide?.image.filename}
                              alt={slide?.image.alt}
                            />
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                  <div className="gallery-slideshow--infobar">
                    <div
                      className="gallery-slideshow--counter"
                      aria-label={`Slide ${activeSlide + 1} of ${slides?.length}`}
                    >
                      {`${activeSlide + 1}/${slides?.length}`}
                    </div>
                    <div className="gallery-slideshow--caption">
                      <RichText wysiwyg={slides[activeSlide]['caption']} />
                    </div>
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
