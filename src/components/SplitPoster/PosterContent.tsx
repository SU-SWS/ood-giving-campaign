import React, { HTMLAttributes } from 'react';
import { dcnb } from 'cnbuilder';
import { FlexBox } from '../FlexBox';
import { Heading, Paragraph, HeadingType } from '../Typography';

type PosterContentProps = HTMLAttributes<HTMLDivElement> & {
  headingLevel?: HeadingType;
  heading?: string;
  body?: string;
};

export const PosterContent = ({
  headingLevel = 'h3',
  heading,
  body,
  children,
  className,
  ...props
}: PosterContentProps) => (
  <FlexBox
    direction="col"
    className={dcnb('su-relative su-p-0 su-m-0', className)}
    {...props}
  >
    {heading && (
      <Heading
        as={headingLevel}
        size={3}
        font="druk-wide"
        leading="none"
        uppercase
        className="su-max-w-400"
      >
        {heading}
      </Heading>
    )}
    {body && <Paragraph noMargin>{body}</Paragraph>}
    {children}
  </FlexBox>
);
