import React, { HTMLAttributes } from 'react';
import { dcnb } from 'cnbuilder';
import { FlexBox } from '../FlexBox';
import { Heading, HeadingType, Paragraph } from '../Typography';
import { TextColorType } from './VerticalCard.styles';
import * as styles from './VerticalCard.styles';

type VerticalCardProps = HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  headingLevel?: HeadingType;
  body?: string;
  imageSrc?: string;
  imageFocus?: string;
  alt?: string;
  textColor?: TextColorType;
};

export const VerticalCard = ({
  heading,
  headingLevel = 'h3',
  body,
  imageSrc,
  imageFocus,
  alt,
  textColor = 'black',
  className,
  ...props
}: VerticalCardProps) => (
  <FlexBox
    direction="col"
    className={dcnb(styles.textColors[textColor], className)}
    {...props}
  >
    {imageSrc && (
      <div className="su-aspect-w-1 su-aspect-h-1">
        <img
          src={imageSrc}
          alt={alt}
          className="su-object-cover su-w-full su-h-full"
        />
      </div>
    )}
    {heading && (
      <Heading
        as={headingLevel}
        font="sans"
        size={3}
        className="su-mt-08em"
      >
        {heading}
      </Heading>
    )}
    {body && (
      <Paragraph noMargin className="">{body}</Paragraph>
    )}
  </FlexBox>
);
