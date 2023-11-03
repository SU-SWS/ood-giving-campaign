import { storyblokEditable } from '@storyblok/react/rsc';
import {
 PopOver, PopUp, SideTab, Slider, Widget,
} from '@/components/TypeForm';
import { Heading } from '@/components/Typography';
import * as CTAStyles from '@/components/Cta/Cta.styles';
import { cnb } from 'cnbuilder';

export type SbTypeformProps = {
  blok: {
    _uid: string;
    id: string;
    autoFocus: false;
    component: string;
    embedType: 'slider' | 'popup' | 'popover' | 'sidetab' | 'widget';
    autoResize: boolean;
    fullScreen: boolean;
    heading: string;
    hideFooter: boolean;
    hideHeader: boolean;
    buttonLabel: string;
    embedHeight: string;
    disableScroll: boolean;
    enableSandbox: boolean;
    transitiveSearchParams: string;
    displayAsFullScreenModal: boolean;
  };
};

// TODO: Move this to the non-storyblok Typeform component dir.
export const styles = {
  container: 'cc flex flex-col place-items-center rs-py-6',
  heading: 'px-[40px] tf-sm:px-[80px] max-w-[878px]',
  fauxCTA: cnb(CTAStyles.cta, CTAStyles.ctaVariants.solid, CTAStyles.ctaSizes.large),
};

export const SbTypeform = ({
  blok,
}: SbTypeformProps) => {

  const {
    id,
    autoFocus,
    embedType,
    autoResize,
    fullScreen,
    heading,
    hideFooter,
    hideHeader,
    buttonLabel,
    embedHeight,
    disableScroll,
    enableSandbox,
    transitiveSearchParams,
    displayAsFullScreenModal,
  } = blok;

  const transitiveParams = transitiveSearchParams.split(`\n`);
  const height = parseInt(embedHeight, 10);
  const resize = autoResize || !height;

  switch (embedType) {
    case 'slider': {
      return (
        <div {...storyblokEditable(blok)} className={styles.container}>
          <Heading as='h2' size={3} className={styles.heading}>{heading}</Heading>
          <Slider
            id={id}
            autoClose={1000}
            disableScroll={disableScroll}
            enableSandbox={enableSandbox}
            hideFooter={hideFooter}
            hideHeaders={hideHeader}
            transitiveSearchParams={transitiveParams}
            displayAsFullScreenModal={displayAsFullScreenModal}
          >
            <span className={styles.fauxCTA}>{buttonLabel}</span>
          </Slider>
        </div>
      );
    }
    case 'sidetab': {
      return (
        <SideTab
          {...storyblokEditable(blok)}
          id={id}
          autoClose={1000}
          buttonText={buttonLabel}
          fullScreen={fullScreen}
          disableScroll={disableScroll}
          enableSandbox={enableSandbox}
          hideFooter={hideFooter}
          transitiveSearchParams={transitiveParams}
          displayAsFullScreenModal={displayAsFullScreenModal}
          autoResize={resize}
          height={!resize ? embedHeight : undefined}
        />
      );
    }
    case 'popover': {
      return (
        <PopOver
          {...storyblokEditable(blok)}
          id={id}
          fullScreen={fullScreen}
          disableScroll={disableScroll}
          enableSandbox={enableSandbox}
          hideFooter={hideFooter}
          hideHeaders={hideHeader}
          transitiveSearchParams={transitiveParams}
          displayAsFullScreenModal={displayAsFullScreenModal}
          autoResize={resize}
          height={!resize ? embedHeight : undefined}
        />
      );
    }
    case 'popup': {
      return (
        <div {...storyblokEditable(blok)} className={styles.container}>
          <Heading as='h2' size={3} className={styles.heading}>{heading}</Heading>
          <PopUp
            {...storyblokEditable(blok)}
            id={id}
            autoClose={1000}
            fullScreen={fullScreen}
            disableScroll={disableScroll}
            enableSandbox={enableSandbox}
            hideFooter={hideFooter}
            hideHeaders={hideHeader}
            transitiveSearchParams={transitiveParams}
            displayAsFullScreenModal={displayAsFullScreenModal}
            autoResize={resize}
            height={!resize ? embedHeight : undefined}>
            <span className={styles.fauxCTA}>{buttonLabel}</span>
          </PopUp>
        </div>
      );
    }
    case 'widget':
    default: {
      return (
        <div {...storyblokEditable(blok)} className={styles.container}>
          <Heading as='h2' size={3} className={styles.heading}>{heading}</Heading>
          <Widget
            id={id}
            autoFocus={autoFocus}
            fullScreen={fullScreen}
            disableScroll={disableScroll}
            enableSandbox={enableSandbox}
            hideFooter={hideFooter}
            hideHeaders={hideHeader}
            transitiveSearchParams={transitiveParams}
            displayAsFullScreenModal={displayAsFullScreenModal}
            autoResize={resize}
            height={!resize ? embedHeight : undefined}
            className='w-full'
          />
        </div>
      );
    }
  }
};
