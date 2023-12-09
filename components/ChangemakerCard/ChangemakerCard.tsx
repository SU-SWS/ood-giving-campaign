import { cnb } from 'cnbuilder';
import { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { AnimateInView, type AnimationType } from '../Animate';
import {
  Heading, type HeadingType, Text,
} from '../Typography';
import { FlexBox } from '../FlexBox';
import { HeroIcon } from '../HeroIcon';
import { ImageOverlay } from '../ImageOverlay';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import * as styles from './ChangemakerCard.styles';


export type ChangemakerCardProps = React.HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  headingLevel?: HeadingType;
  subheading?: string;
  imageSrc?: string;
  imageFocus?: string;
  ctaLabel?: string;
  ctaSrText?: string;
  animation?: AnimationType;
  delay?: number;
  // children serves as what's on the back of the card
  children?: React.ReactNode;
};

export const ChangemakerCard = ({
  heading,
  headingLevel = 'h3',
  subheading,
  imageSrc,
  imageFocus,
  ctaLabel,
  ctaSrText,
  animation = 'none',
  delay,
  children,
  className,
  ...props
}: ChangemakerCardProps) => {
  const cardInnerRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  // Toggle the card's isFlipped state
  const toggleCard = () => {
    setIsFlipped(!isFlipped);
  };

  // Onclick function to rotate cardInnerRef around the Y axis
  const flipCard = (degrees: number) => {
    if (cardInnerRef.current) {
      cardInnerRef.current.style.transform = `rotateY(${degrees}deg)`;
      toggleCard();
    }
  };

  // If card is flipped, clicking outside of the card will flip it back
  useOnClickOutside(cardInnerRef, () => {
    if (isFlipped) {
      flipCard(0);
    }
  });

  return (
    <AnimateInView animation={animation} delay={delay}>
      <article
        className={cnb(styles.root, className)}
        {...props}
      >
        <div ref={cardInnerRef} className={styles.cardInner}>
          {/* Front of the card */}
          <div aria-hidden={isFlipped} className={styles.cardFront}>
            {imageSrc && (
              <div className={cnb(styles.imageWrapper)}>
                <ImageOverlay
                  imageSrc={getProcessedImage(imageSrc, '500x1000', imageFocus)}
                  overlay="black-gradient-dark"
                />
              </div>
            )}
            <div className={styles.content}>
              {heading && (
                <Heading
                  as={headingLevel}
                  size={2}
                  leading="tight"
                  align="center"
                  className={styles.heading}
                >
                  {heading}
                </Heading>
              )}
              {subheading && (
                <Text variant="card" align="center">{subheading}</Text>
              )}
            </div>
            <button
              type="button"
              onClick={() => flipCard(180)}
              aria-label={`Read more about ${heading}`}
              className={cnb(styles.button, styles.buttonFront)}
            >
              <HeroIcon
                noBaseStyle
                icon='flip'
                className={styles.flipIcon}
              />
            </button>
          </div>
          {/* Back of the card */}
          <FlexBox
            direction="col"
            className={styles.cardBack}
            aria-hidden={!isFlipped}
          >
            {children}
            <button
              type="button"
              onClick={() => flipCard(0)}
              aria-label="Dismiss"
              className={cnb(styles.button, styles.buttonBack)}
            >
              <HeroIcon
                noBaseStyle
                icon='flip'
                className={styles.flipIcon}
              />
            </button>
          </FlexBox>
        </div>
      </article>
    </AnimateInView>
  );
};
