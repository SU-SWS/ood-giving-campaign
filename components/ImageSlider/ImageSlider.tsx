import React, { useState, useRef } from 'react';
import { cnb } from 'cnbuilder';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { WidthBox, type WidthType } from '@/components/WidthBox';
import { HeroIcon } from '@/components/HeroIcon';
import { RichText } from '@/components/RichText';
import { type MarginType } from '@/utilities/datasource';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { SbSliderImageType } from '@/components/Storyblok/Storyblok.types';

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
  const [modalOpen, setModalOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const pagerWindowRef = useRef<HTMLDivElement>(null);
  const pagerRef = useRef<HTMLUListElement>(null);
  const expandButtonRef = useRef<HTMLButtonElement>(null);
  const slideshow = useRef(null);
  const modalSlideshow = useRef(null);

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
          key={slide._uid}
          aria-label={`Go to slide ${i + 1}`}
          aria-current={activeSlide === i ? true : undefined}
          className={cnb('gallery-slideshow--thumbnail h-70 inline-block box-content hocus:opacity-100 transition-all border-b-[3px] py-6', activeSlide === i ? 'opacity-100 border-b-[3px] border-b-digital-red-light' : 'opacity-60 border-b-transparent')}
        >
          <img
            src={getProcessedImage(slide?.image.filename, '0x70')}
            alt={slide?.image.alt || ''}
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
            <div className="counter">
              {`${activeSlide + 1}/${slides?.length}`}
              <span className="sr-only">{`Slide ${activeSlide + 1} of ${slides.length}`}</span>
            </div>
            {showExpandLink && (
              <button
                type="button"
                onClick={openModal}
                className="font-semibold text-digital-red-light"
                aria-label="Expand gallery"
                ref={expandButtonRef}
              >
                Expand <HeroIcon icon="expand" className="inline-block" />
              </button>
            )}
          </div>

          <RichText
            textColor="black-70"
            wysiwyg={slides[activeSlide]['caption']}
            className="rs-mt-0 max-w-prose *:leading-display *:gc-caption"
          />

          <div className="controls flex items-center rs-mt-1">
            <button
              type="button"
              className="flex items-center justify-center size-55 rounded-full border-[3px] border-gc-black shrink-0 mr-10"
              onClick={clickPrev}
            >
              <span className="sr-only">Previous Slide</span>
              <HeroIcon icon="chevron-left" className="inline-block stroke-2" />
            </button>
            <div
              className={`pager-window relative overflow-hidden grow ${
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
              className="flex items-center justify-center size-55 rounded-full border-[3px] border-gc-black shrink-0 ml-10"
              onClick={clickNext}
            >
              <span className="sr-only">Next Slide</span>
              <HeroIcon icon="chevron-right" className="inline-block stroke-2" />
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
        <i className="fas fa-chevron-right" aria-hidden="true"></i>
      </button>
    ),
    prevArrow: (
      <button type="button">
        <span className="sr-only">Previous Slide</span>
        <i className="fas fa-chevron-left" aria-hidden="true"></i>
      </button>
    ),
    afterChange: (i: number) => {
      setActiveSlide(i);
    },
    initialSlide: activeSlide,
  };

  const adjustPagerPosition = () => {
    const windowBox = pagerWindowRef.current.getBoundingClientRect();
    const pagerBox = pagerRef.current.getBoundingClientRect();
    const activeItem =
      pagerWindowRef.current.getElementsByClassName('slick-active')[0];
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
    setModalOpen(false);
    if (expandButtonRef.current) {
      expandButtonRef.current.focus();
    }
    slideshow.current.slickGoTo(activeSlide, true);
  };

  const openModal = () => {
    modalSlideshow.current.slickGoTo(activeSlide, true);
    setModalOpen(true);
  };

  return (
    <>
      <WidthBox boundingWidth={boundingWidth} width={width} aria-label={ariaLabel} {...props}>
        <Slider
          className="gallery-slideshow--slides leading-none"
          ref={slideshow}
          {...sliderSettings}
        >
          {slides?.map((slide) => {
            return (
              <div
                className="gallery-slideshow--slide"
                key={slide._uid}
              >
                <img
                  src={getProcessedImage(slide?.image.filename, '1500x0')}
                  alt={slide?.image.alt}
                />
              </div>
            );
          })}
        </Slider>
      </WidthBox>
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
    </>
  );
};
