import React, {
  useCallback, useMemo, useState, useRef,
} from 'react';
import {
  Dialog, DialogPanel, DialogTitle, Transition, TransitionChild,
} from '@headlessui/react';
import Slider from 'react-slick';
import { useOnClickOutside } from 'usehooks-ts';
import { Container } from '@/components/Container';
import { FlexBox } from '@/components/FlexBox';
import { HeroIcon } from '@/components/HeroIcon';
import { NextPrevButton } from '@/components/ImageSlider/NextPrevButton';
import { ThumbnailButton } from '@/components/ImageSlider/ThumbnailButton';
import { Slide } from '@/components/ImageSlider/Slide';
import { RichText } from '@/components/RichText';
import { SrOnlyText, Text } from '@/components/Typography';
import { type MarginType } from '@/utilities/datasource';
import { type SbSliderImageType } from '@/components/Storyblok/Storyblok.types';
import * as styles from './ImageSlider.styles';

type ImageSliderProps = React.HTMLAttributes<HTMLDivElement> & {
  slides: SbSliderImageType[];
  isLightText?: boolean;
  ariaLabel?: string;
  showExpandLink?: boolean;
  marginTop?: MarginType;
  marginBottom?: MarginType;
}

export const ImageSlider = ({
  slides,
  isLightText,
  ariaLabel,
  showExpandLink,
  marginTop,
  marginBottom,
  ...props
}: ImageSliderProps) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [pagerOffset, setPagerOffset] = useState(0);
  const pagerWindowRef = useRef<HTMLDivElement>(null);
  const pagerRef = useRef<HTMLUListElement>(null);
  const sliderRef = useRef<Slider>(null);

  // Modal states and refs
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalSliderRef = useRef<Slider>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalContentRef, () => {
    setIsModalOpen(false);
  });

  const clickPrev = useCallback(() => sliderRef.current?.slickPrev(), []);
  const clickNext = useCallback(() => sliderRef.current?.slickNext(), []);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    sliderRef.current?.slickGoTo(activeSlide, true);
  }, [activeSlide]);

  // This moves the thumbnail into view when the active slide changes.
  const adjustPagerPosition = useCallback(() => {
    if (!pagerRef.current || !pagerWindowRef.current) return;
    const activeItem = pagerWindowRef.current.getElementsByClassName('slick-active')[0];
    if (!activeItem) return;

    const windowBox = pagerWindowRef.current.getBoundingClientRect();
    const pagerBox = pagerRef.current.getBoundingClientRect();
    const activeItemBox = activeItem?.getBoundingClientRect();

    if (activeItemBox.right > windowBox.right) {
      const rightGutter = 10;
      const currentOffset = pagerBox.left - windowBox.left;
      const newOffset = currentOffset + (windowBox.right - activeItemBox.right) - rightGutter;
      setPagerOffset(newOffset);
    } else if (activeItemBox.left < windowBox.left) {
      const currentOffset = pagerBox.left - windowBox.left;
      const newOffset = currentOffset + (windowBox.left - activeItemBox.left);
      setPagerOffset(newOffset);
    }
  }, []);

  const sliderSettings = useMemo(() => ({
    arrows: false,
    accessibility: true,
    swipeToSlide: true,
    lazyLoad: 'ondemand' as const,
    dots: true,
    dotsClass: 'relative @container',
    customPaging: (i: number) => (
      <ThumbnailButton
        slide={slides[i]}
        isActive={activeSlide === i}
        ariaLabel={`Go to slide ${i + 1} ${slides[i]?.alt || ''}`}
      />
    ),
    afterChange: (i: number) => {
      setActiveSlide(i);
      adjustPagerPosition();
    },
    appendDots: (dots: React.ReactNode) => (
      <div>
        <FlexBox justifyContent="center" className={styles.buttonWrapper}>
          <NextPrevButton
            direction="prev"
            isLightText={isLightText}
            onClick={clickPrev}
            className={styles.nextButton}
          />
          <NextPrevButton
            direction="next"
            isLightText={isLightText}
            onClick={clickNext}
            className={styles.prevButton}
          />
        </FlexBox>
        <FlexBox justifyContent="center" className={styles.counterExpandWrapper}>
          <Text as="span" aria-hidden="true" leading="none" align="center">
            {`${activeSlide + 1}/${slides?.length}`}
          </Text>
          <SrOnlyText>{`Slide ${activeSlide + 1} of ${slides?.length}`}</SrOnlyText>
          {showExpandLink && (
            <button
              type="button"
              onClick={openModal}
              aria-haspopup="dialog"
              className={styles.expandButton(isLightText)}
              aria-label="Expand gallery in full screen modal"
            >
              Expand
              <HeroIcon icon="expand" className={styles.expandIcon} />
            </button>
          )}
        </FlexBox>
        <RichText
          textColor={isLightText ? 'white' : 'black-70'}
          linkColor={isLightText ? 'digital-red-xlight' : 'unset'}
          wysiwyg={slides[activeSlide]?.caption}
          className={styles.caption}
        />
        <div ref={pagerWindowRef} className={styles.pagerWindow}>
          <FlexBox
            as="ul"
            alignItems="end"
            className={styles.pagerList}
            ref={pagerRef}
            style={{ transform: `translateX(${pagerOffset}px)` }}
          >
            {dots}
          </FlexBox>
        </div>
      </div>
    ),
  }), [
    activeSlide,
    adjustPagerPosition,
    clickNext,
    clickPrev,
    isLightText,
    openModal,
    pagerOffset,
    showExpandLink,
    slides,
  ]);

  const modalSliderSettings = useMemo(() => ({
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
    afterChange: (i: number) => setActiveSlide(i),
    initialSlide: activeSlide,
  }), [activeSlide]);

  return (
    <>
      <Container as="section" width="full" mt={marginTop} mb={marginBottom} aria-label={ariaLabel} className={styles.root} {...props}>
        <Slider
          className={styles.slider}
          ref={sliderRef}
          {...sliderSettings}
        >
          {slides?.map((slide) => (
            <Slide
              key={slide._uid}
              imageSrc={slide.image?.filename}
              alt={slide.alt}
            />
          ))}
        </Slider>
        {/* Content from appendDots appears here */}
      </Container>
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
                <div ref={modalContentRef} className={styles.contentWrapper}>
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
                  <section aria-label={`${ariaLabel} full screen view`}>
                    <div className={styles.modalSliderWrapper}>
                      <Slider
                        className={styles.modalSlider}
                        ref={modalSliderRef}
                        {...modalSliderSettings}
                      >
                        {slides?.map((slide) => (
                          <Slide
                            key={slide._uid}
                            imageSrc={slide.image?.filename}
                            alt={slide.alt}
                          />
                        ))}
                      </Slider>
                    </div>
                    <div className={styles.belowModalSlider}>
                      <Text as="span" leading="none" align="center" aria-hidden="true" className={styles.modalCounter}>
                        {`${activeSlide + 1}/${slides?.length}`}
                      </Text>
                      <SrOnlyText>{`Slide ${activeSlide + 1} of ${slides?.length}`}</SrOnlyText>
                      <RichText
                        textColor="white"
                        linkColor="digital-red-xlight"
                        wysiwyg={slides[activeSlide]?.caption}
                        className={styles.modalCaption}
                      />
                    </div>
                  </section>
                </div>
              </DialogPanel>
            </div>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
};
