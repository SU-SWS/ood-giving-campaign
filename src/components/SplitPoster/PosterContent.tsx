import React, { HTMLAttributes } from 'react';
import { dcnb } from 'cnbuilder';
import { FlexBox } from '../FlexBox';
import { Heading, Paragraph, HeadingType } from '../Typography';
import { getProcessedImage } from '../../utilities/getProcessedImage';
import * as styles from './SplitPoster.styles';

type PosterContentProps = HTMLAttributes<HTMLDivElement> & {
  headingLevel?: HeadingType;
  heading?: string;
  body?: string;
  imageSrc?: string;
  imageFocus?: string;
  contentAlign?: 'left' | 'right';
  bgColor?: styles.BgColorType;
};

export const PosterContent = ({
  headingLevel = 'h3',
  heading,
  body,
  imageSrc,
  imageFocus,
  contentAlign = 'left',
  bgColor,
  children,
  className,
  ...props
}: PosterContentProps) => (
  <FlexBox {...props} alignItems="end" className={dcnb('sm:su-max-w-[53rem] md:su-max-w-[60rem] lg:su-max-w-[75rem] su-relative su-px-60 2xl:su-px-126 su-min-h-[45rem] md:su-min-h-[60rem] xl:su-min-h-[84rem] su-pb-60 md:su-pb-100', contentAlign === 'right' ? 'xl:su-pb-[18rem]' : 'xl:su-pb-[11.8rem]', styles.bgColors[bgColor], className)}>
    {imageSrc && (
      <img
        alt=""
        src={getProcessedImage(imageSrc, '750x840', imageFocus)}
        loading="lazy"
        className="su-absolute su-w-full su-h-full su-object-cover su-top-0 su-left-0"
      />
    )}
    <FlexBox
      direction="col"
      className="su-relative su-w-full su-break-words"
      alignItems={contentAlign === 'left' ? 'start' : 'end'}
    >
      {heading && (
        <Heading
          as={headingLevel}
          size={3}
          font="druk-wide"
          leading="tight"
          uppercase
          className={styles.heading(!!imageSrc)}
          align={contentAlign}
        >
          {heading}
        </Heading>
      )}
      {body && (
        <Paragraph size={1} leading="snug" align={contentAlign} className={children ? 'su-rs-mb-2' : 'su-mb-0'}>
          {body}
        </Paragraph>
      )}
      {children}
    </FlexBox>
  </FlexBox>
);
