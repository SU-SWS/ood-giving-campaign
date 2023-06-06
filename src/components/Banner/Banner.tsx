import React from 'react';
import { Container } from '../Container';
import { Heading, Paragraph } from '../Typography';
import { FlexBox } from '../FlexBox';
import { CtaLink } from '../Cta';
import { getProcessedImage } from '../../utilities/getProcessedImage';

type BannerProps = {
  heading?: string;
  body?: string;
  ctaText?: string;
  href?: string;
};

export const Banner = ({
  heading,
  body,
  ctaText,
  href,
}: BannerProps) => (
  <div>
    <img
      alt=""
      src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2000x40/f23b53c0e4/steve-johnson-cropped-2000x40-02.jpg')}
      className="su-w-full"
    />
    <Container bgColor="white" className="lg:su-pr-0" py={9}>
      <FlexBox alignItems="start" justifyContent="between" className="su-mr-0 au-ml-auto su-flex-col lg:su-flex-row">
        <div className="su-rs-pr-9 lg:su-max-w-[70%]">
          <Heading size="f8" font="druk" leading="none" className="su-whitespace-pre-line su--mt-02em su-rs-mb-2">
            {heading}
          </Heading>
          <Paragraph font="serif" variant="overview" weight="semibold" className="su-max-w-[50ch] su-rs-mb-3">
            {body}
          </Paragraph>
          <CtaLink variant="ghost" color="black" icon="arrow-right" animate="right" href={href}>
            {ctaText}
          </CtaLink>
        </div>
        <img
          alt=""
          src={getProcessedImage('https://a-us.storyblok.com/f/1005200/7539x5029/df3ccadc57/20200219_diamonds_sra7839.jpg', '360x360')}
          className="su-rounded-bl-[12rem] su-w-[25rem] xl:su-w-[36rem]"
        />
      </FlexBox>
    </Container>
    <img
      alt=""
      src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2000x40/c4777a4925/steve-johnson-cropped-2000x40-01.jpg')}
      className="su-w-full"
    />
  </div>
);
