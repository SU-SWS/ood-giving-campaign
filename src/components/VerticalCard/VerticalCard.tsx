import React, { HTMLAttributes } from 'react';
import { dcnb } from 'cnbuilder';
import { Cta } from '../Cta';
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
  href?: string;
};

export const VerticalCard = ({
  heading,
  headingLevel = 'h3',
  body,
  imageSrc,
  imageFocus,
  alt,
  textColor = 'black',
  href,
  className,
  ...props
}: VerticalCardProps) => (
  <article
    className={dcnb('su-relative su-z-10', styles.textColors[textColor], className)}
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
        font="druk"
        size={5}
        leading="none"
        className="su-mt-04em su-mb-02em"
      >
        {heading}
      </Heading>
    )}
    <div className="su-mb-06em">
      <Cta href="/" className="su-z-20 su-relative" variant="chip">Taxonomy</Cta>
    </div>
    {body && (
      <Paragraph size={1} noMargin leading="snug">{body}</Paragraph>
    )}
    {href && <Cta href={href} uppercase className="su-stretched-link">Learn How</Cta>}
  </article>
);
