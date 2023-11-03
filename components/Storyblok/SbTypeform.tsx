import { storyblokEditable } from '@storyblok/react/rsc';
import {
 PopOver, PopUp, SideTab, Slider, Widget,
} from '@/components/TypeForm';

export type SbTypeformProps = {
  blok: {
    _uid: string;
    id: string;
    autoFocus: false;
    component: string;
    embedType: 'slider' | 'popup' | 'popover' | 'sidetab' | 'widget';
    autoResize: boolean;
    fullScreen: boolean;
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

export const SbTypeform = ({
  blok,
}: SbTypeformProps) => {

  const {
    id,
    autoFocus,
    embedType,
    autoResize,
    fullScreen,
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

  switch (embedType) {
    case 'slider': {
      return (
        <Slider
          {...storyblokEditable(blok)}
          id={id}
          autoClose={1000}
          disableScroll={disableScroll}
          enableSandbox={enableSandbox}
          hideFooter={hideFooter}
          hideHeaders={hideHeader}
          transitiveSearchParams={transitiveParams}
          displayAsFullScreenModal={displayAsFullScreenModal}
        >
          {buttonLabel}
        </Slider>
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
          autoResize={autoResize}
          height={embedHeight}
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
          autoResize={autoResize}
          height={embedHeight}
        />
      );
    }
    case 'popup': {
      return (
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
          autoResize={autoResize}
          height={embedHeight}>
          {buttonLabel}
        </PopUp>
      );
    }
    case 'widget':
    default: {
      return (
        <div {...storyblokEditable(blok)}>
          <Widget
            {...storyblokEditable(blok)}
            id={id}
            autoFocus={autoFocus}
            fullScreen={fullScreen}
            disableScroll={disableScroll}
            enableSandbox={enableSandbox}
            height={embedHeight}
            hideFooter={hideFooter}
            hideHeaders={hideHeader}
            transitiveSearchParams={transitiveParams}
            displayAsFullScreenModal={displayAsFullScreenModal}
            autoResize={autoResize}
          />
        </div>
      );
    }
  }
};
