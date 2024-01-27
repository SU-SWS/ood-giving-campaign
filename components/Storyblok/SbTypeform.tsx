import { storyblokEditable } from '@storyblok/react/rsc';
import {
  PopOver, PopUp, SideTab, Slider, Widget,
} from '@/components/TypeForm';
import { Container } from '@/components/Container';
import { type PaddingType } from '@/utilities/datasource';
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
    hideFooter: boolean;
    hideHeader: boolean;
    buttonLabel: string;
    embedHeight: string;
    disableScroll: boolean;
    enableSandbox: boolean;
    transitiveSearchParams: string;
    displayAsFullScreenModal: boolean;
    transparent: boolean;
    paddingTop: PaddingType;
    paddingBottom: PaddingType;
  };
};

export const styles = {
  container: 'flex flex-col place-items-center',
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
    hideFooter,
    hideHeader,
    buttonLabel,
    embedHeight,
    disableScroll,
    enableSandbox,
    transitiveSearchParams,
    transparent,
    displayAsFullScreenModal,
    paddingTop,
    paddingBottom,
  } = blok;

  const transitiveParams = transitiveSearchParams.split(`\n`);
  const height = parseInt(embedHeight, 10);
  const resize = autoResize || !height;
  const opacity = transparent ? 0 : 100;

  switch (embedType) {
    case 'slider': {
      return (
        <Container
          pt={paddingTop}
          pb={paddingBottom}
          {...storyblokEditable(blok)}
          className={styles.container}
        >
          <Slider
            id={id}
            autoClose={10000}
            disableScroll={disableScroll}
            enableSandbox={enableSandbox}
            hideFooter={hideFooter}
            hideHeaders={hideHeader}
            transitiveSearchParams={transitiveParams}
            displayAsFullScreenModal={displayAsFullScreenModal}
          >
            <span className={styles.fauxCTA}>{buttonLabel}</span>
          </Slider>
        </Container>
      );
    }
    case 'sidetab': {
      return (
        <SideTab
          {...storyblokEditable(blok)}
          id={id}
          autoClose={10000}
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
          autoClose={10000}
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
        <Container
          pt={paddingTop}
          pb={paddingBottom}
          {...storyblokEditable(blok)}
          className={styles.container}
        >
          <PopUp
            id={id}
            autoClose={10000}
            fullScreen={fullScreen}
            disableScroll={disableScroll}
            enableSandbox={enableSandbox}
            hideFooter={hideFooter}
            hideHeaders={hideHeader}
            transitiveSearchParams={transitiveParams}
            displayAsFullScreenModal={displayAsFullScreenModal}
            autoResize={resize}
            height={!resize ? embedHeight : undefined}
            className={styles.fauxCTA}
          >
            {buttonLabel}
          </PopUp>
        </Container>
      );
    }
    case 'widget':
    default: {
      return (
        <Container
          pt={paddingTop}
          pb={paddingBottom}
          {...storyblokEditable(blok)}
          className={styles.container}
        >
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
            opacity={opacity}
            height={!resize ? embedHeight : undefined}
            className='w-full'
          />
        </Container>
      );
    }
  }
};
