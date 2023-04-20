import React, { HTMLAttributes, useRef } from 'react';
import { useInView } from 'framer-motion';
import { dcnb } from 'cnbuilder';
import { CtaLink } from '../Cta/CtaLink';
import { Heading, HeadingType, Paragraph } from '../Typography';
import { SbLinkType } from '../Storyblok/Storyblok.types';
import { TextColorType } from './VerticalCard.styles';
import { getProcessedImage } from '../../utilities/getProcessedImage';
import * as styles from './VerticalCard.styles';
import * as datasource from '../../utilities/datasource';

type VerticalCardProps = HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  headingLevel?: HeadingType;
  isSmallHeading?: boolean;
  body?: string;
  imageSrc?: string;
  imageFocus?: string;
  alt?: string;
  textColor?: TextColorType;
  tabColor?: datasource.AccentBgColorType;
  href?: string;
  link?: SbLinkType;
};

export const VerticalCard = ({
  heading,
  headingLevel = 'h3',
  isSmallHeading,
  body,
  imageSrc,
  imageFocus,
  alt = '',
  textColor = 'black',
  tabColor,
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
            src={getProcessedImage(imageSrc, '600x600', imageFocus)}
            alt={alt}
            className="su-object-cover su-w-full su-h-full"
          />
        </div>
      )}
      {heading && (
        <Heading
          as={headingLevel}
          size={isSmallHeading ? 3 : 4}
          leading="tight"
          className="su-rs-mt-1 su-mb-03em"
        >
          {heading}
        </Heading>
      )}
      {tabColor && (
        <div className={dcnb(styles.tab, datasource.accentBgColors[tabColor])} />
      )}
      {body && (
        <Paragraph variant="big" leading="snug">{body}</Paragraph>
      )}
      {(href || link) && (
        <CtaLink
          color={textColor}
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
