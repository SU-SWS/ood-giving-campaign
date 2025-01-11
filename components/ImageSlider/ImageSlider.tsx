import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { WidthBox, type WidthType } from '@/components/WidthBox';
import { type MarginType } from '@/utilities/datasource';
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
  const pagerWindow = useRef(null);
  const pager = useRef(null);
  const expandButton = useRef(null);
  const slideshow = useRef(null);
  const modalSlideshow = useRef(null);

  const sliderSettings = {
    arrows: false,
    accessibility: true,
    lazyLoad: true,
    // This provides the JSX template for the lower half of the slider.
    /* eslint-disable-next-line react/display-name */
    appendDots: (dots: React.ReactNode) => {
      return (
        <div>
          <div className="gallery-slideshow--infobar">
            <div className="gallery-slideshow--counter">
              {`${activeSlide + 1}/${slides.length}`}
              <span className="sr-only">{`Slide ${activeSlide + 1} of ${
                slides.length
              }`}</span>
            </div>
            {showExpandLink && (
              <div className="gallery-slideshow--expand">
                <button
                  type="button"
                  onClick={openModal}
                  className="gallery-slideshow--expand-btn"
                  aria-label="Expand gallery"
                  ref={expandButton}
                >
                  Expand <i className="fas fa-expand" aria-hidden="true"></i>
                </button>
              </div>
            )}
          </div>

          <div className="gallery-slideshow--caption">
            <RichTextField data={slides[activeSlide]['caption']} />
          </div>

          <div className="gallery-slideshow--controls">
            <button
              type="button"
              className="gallery-slideshow--prev"
              onClick={clickPrev}
            >
              <span className="sr-only">Previous Slide</span>
              <i className="fas fa-chevron-left" aria-hidden="true"></i>
            </button>
            <div
              className={`gallery-slideshow--pager-window ${
                showOverlay ? 'overlay' : ''
              }`}
              ref={pagerWindow}
            >
              <ul
                className="gallery-slideshow--pager"
                ref={pager}
                style={{ transform: `translateX(${pagerOffset}px)` }}
              >
                {dots}
              </ul>
            </div>
            <button
              type="button"
              className="gallery-slideshow--next"
              onClick={clickNext}
            >
              <span className="sr-only">Next Slide</span>
              <i className="fas fa-chevron-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      );
    },
    /* eslint-disable-next-line react/display-name */
    customPaging: (i: number) => {
      const slide = slides[i];
      return (
        <div className="gallery-slideshow--thumbnail" key={slide._uid}>
          <AspectRatioImage
            blok={blok}
            filename={slide.image.filename}
            alt={slide.image.alt}
            classPrefix={'ood-gallery-slide'}
            aspectRatio="16x9"
            imageSize="thumbnail"
          />
        </div>
      );
    },
    afterChange: (i: number) => {
      setActiveSlide(i);
      adjustPagerPosition();
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
    const windowBox = pagerWindow.current.getBoundingClientRect();
    const pagerBox = pager.current.getBoundingClientRect();
    const activeItem =
      pagerWindow.current.getElementsByClassName('slick-active')[0];
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
    if (expandButton.current) {
      expandButton.current.focus();
    }
    slideshow.current.slickGoTo(activeSlide, true);
  };
  const openModal = () => {
    modalSlideshow.current.slickGoTo(activeSlide, true);
    setModalOpen(true);
  };

  return (
    <>
      <div aria-label={ariaLabel}>
        <div>
          <Slider
            className="gallery-slideshow--slides"
            ref={slideshow}
            {...sliderSettings}
          >
            {slides.map((slide, index) => {
              return (
                <div
                  className="gallery-slideshow--slide"
                  index={index}
                  key={slide._uid}
                >
                  <AspectRatioImage
                    blok={blok}
                    filename={slide.image.filename}
                    alt={slide.image.alt}
                    classPrefix={'ood-gallery-slide'}
                    aspectRatio="16x9"
                    imageSize="gallery-slide"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <Modal
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
                  <AspectRatioImage
                    blok={blok}
                    filename={slide.image.filename}
                    alt={slide.image.alt}
                    classPrefix={'ood-gallery-slide'}
                    aspectRatio="16x9"
                    imageSize="gallery-slide"
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
              <RichTextField data={slides[activeSlide]['caption']} />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
