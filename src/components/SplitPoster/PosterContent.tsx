import React, { HTMLAttributes } from 'react';
import { dcnb } from 'cnbuilder';
import { FlexBox } from '../FlexBox';
import { Heading, Paragraph, HeadingType } from '../Typography';
import { getProcessedImage } from '../../utilities/getProcessedImage';

type PosterContentProps = HTMLAttributes<HTMLDivElement> & {
  headingLevel?: HeadingType;
  heading?: string;
  body?: string;
  imageSrc?: string;
  imageFocus?: string;
  contentAlign?: 'left' | 'right';
};

export const PosterContent = ({
  headingLevel = 'h3',
  heading,
  body,
  imageSrc,
  imageFocus,
  contentAlign = 'left',
  children,
  className,
  ...props
}: PosterContentProps) => (
  <FlexBox {...props} alignItems="end" className={dcnb('su-relative su-rs-px-8 su-min-h-[50rem] lg:su-min-h-[84rem] su-pb-100', contentAlign === 'right' ? 'xl:su-pb-[18rem]' : 'xl:su-pb-[11.8rem]', className)}>
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
      className="su-relative su-w-full"
      alignItems={contentAlign === 'left' ? 'start' : 'end'}
    >
      {heading && (
        <Heading
          as={headingLevel}
          size={3}
          font="druk-wide"
          leading="tight"
          uppercase
          className="su-max-w-400 su-rs-mb-3 su-text-shadow-md"
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
