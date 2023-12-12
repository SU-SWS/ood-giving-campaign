import { cnb } from 'cnbuilder';
import { useId, useRef } from 'react';
import { useOnClickOutside, useToggle } from 'usehooks-ts';
import { AnimateInView, type AnimationType } from '../Animate';
import {
  Heading, type HeadingType, Text,
} from '../Typography';
import { FlexBox } from '../FlexBox';
import { HeroIcon } from '../HeroIcon';
import { ImageOverlay } from '../ImageOverlay';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import useEscape from '@/hooks/useEscape';
import * as styles from './ChangemakerCard.styles';


export type ChangemakerCardProps = React.HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  headingLevel?: HeadingType;
  subheading?: string;
  imageSrc?: string;
  imageFocus?: string;
  animation?: AnimationType;
  delay?: number;
  // children gets rendered as the content layer
  children?: React.ReactNode;
};

export const ChangemakerCard = ({
  heading,
  headingLevel = 'h3',
  subheading,
  imageSrc,
  imageFocus,
  animation = 'none',
  delay,
  children,
  className,
  ...props
}: ChangemakerCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const contentId = useId();
  const headingId = useId();
  const [isShown, toggle, setIsShown] = useToggle()

  // If card content is shown, clicking outside it will dismiss its
  useOnClickOutside(cardRef, () => {
    if (isShown) {
      setIsShown(false);
    }
  });

  // If card content is shown, pressing escape will dismiss it
  useEscape(() => {
    if (isShown) {
      setIsShown(false);
    }
  });

  return (
    <AnimateInView animation={animation} delay={delay}>
      <article
        ref={cardRef}
        className={cnb(styles.root, className)}
        {...props}
      >
        <div className={styles.cardInner}>
          {/* Front of the card */}
          <div aria-hidden={isShown} className={styles.cardFront}>
            {imageSrc && (
              <div className={cnb(styles.imageWrapper)}>
                <ImageOverlay
                  imageSrc={getProcessedImage(imageSrc, '500x1000', imageFocus)}
                  overlay="gradient-changemaker"
                />
              </div>
            )}
            <FlexBox direction="col" className={styles.info}>
              {heading && (
                <Heading
                  as={headingLevel}
                  id={headingId}
                  size={2}
                  leading="tight"
                  align="center"
                  className={styles.heading}
                >
                  {heading}
                </Heading>
              )}
              {subheading && (
                <Text variant="card" align="center" leading="display">{subheading}</Text>
              )}
            </FlexBox>
          </div>
          {/* Content layer */}
          <FlexBox
            id={contentId}
            aria-labelledby={headingId}
            direction="col"
            className={styles.cardContent}
            aria-hidden={!isShown}
          >
            {children}
          </FlexBox>
          <button
            ref={buttonRef}
            type="button"
            onClick={toggle}
            aria-label={isShown ? 'Dismiss' : `Read more about ${heading}`}
            aria-controls={contentId}
            aria-expanded={isShown}
            className={styles.button}
          >
            <HeroIcon
              noBaseStyle
              icon='plus'
              className={styles.icon}
            />
          </button>
        </div>
      </article>
    </AnimateInView>
  );
};
