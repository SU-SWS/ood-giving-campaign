import React, { HTMLAttributes, useRef } from 'react';
import { useInView } from 'framer-motion';
import { dcnb } from 'cnbuilder';
import { CtaLink } from '../Cta/CtaLink';
import { Heading, HeadingType, Paragraph } from '../Typography';
import { SbLinkType } from '../Storyblok/Storyblok.types';
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
  link?: SbLinkType;
};

export const VerticalCard = ({
  heading,
  headingLevel = 'h3',
  body,
  imageSrc,
  imageFocus,
  alt = '',
  textColor = 'black',
  link,
  href,
  className,
  ...props
}: VerticalCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <article
      style={{
        transform: isInView ? 'none' : 'scale(0.8)',
        opacity: isInView ? 1 : 0.6,
        transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
      }}
      ref={ref}
      className={dcnb('su-group su-relative su-z-10', styles.textColors[textColor], className)}
      {...props}
    >
      {imageSrc && (
        <div className="su-transition-all su-aspect-w-1 su-aspect-h-1 su-rounded-none group-hover:su-rounded-tl-[10rem] group-hover:su-rounded-br-[10rem] group-focus-within:su-rounded-tl-[10rem] group-focus-within:su-rounded-br-[10rem] su-overflow-hidden">
          <img
            src={imageSrc}
            alt={alt}
            className="su-object-cover su-w-full su-h-full"
          />
        </div>
      )}
      <div aria-hidden className={styles.tab} />
      {heading && (
        <Heading
          as={headingLevel}
          font="druk"
          size={5}
          leading="none"
          className="su-mt-01em su-mb-02em"
        >
          {heading}
        </Heading>
      )}
      <div className="su-mb-06em">
        <CtaLink href="/about-test" className="su-z-20 su-relative" variant="chip">Taxonomy</CtaLink>
      </div>
      {body && (
        <Paragraph size={1} leading="snug">{body}</Paragraph>
      )}
      {(href || link) && (
        <CtaLink
          icon="triangle-right"
          animate="right"
          sbLink={link}
          href={href}
          uppercase
          className="su-stretched-link"
        >
          Learn How
        </CtaLink>
      )}
    </article>
  );
};
