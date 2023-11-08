import { cnb } from 'cnbuilder';
import { useRef, useState } from 'react';
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
  body?: string;
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
  body,
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

  // Toggle the card's flipped state and update isFlipped state
  const toggleCard = () => {
    setIsFlipped(!isFlipped);
  };

  // Onclick function to rotate cardInnerRef by 180 degrees in the Y axis
  const flipCard = (degrees: number) => {
    if (cardInnerRef.current) {
      cardInnerRef.current.style.transform = `rotateY(${degrees}deg)`;
      toggleCard();
    }
  };

  return (
    <AnimateInView animation={animation} delay={delay}>
      <article
        className={cnb(styles.root, className)}
        {...props}
      >
        <div ref={cardInnerRef} className={styles.cardInner}>
          {/* Front of the card */}
          <div className={styles.cardFront}>
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
                  size={3}
                  leading="tight"
                  align="center"
                  className={styles.heading}
                >
                  {heading}
                </Heading>
              )}
              {body && (
                <Text variant="card" align="center">{body}</Text>
              )}
              <FlexBox direction="col" alignItems="center" className="absolute bottom-50 right-36 text-white">
                <button
                  type="button"
                  onClick={() => flipCard(180)}
                  aria-label={`Flip card to read more about ${heading}`}
                >
                  <HeroIcon
                    noBaseStyle
                    icon='plus'
                    className="w-65 h-65 border-2 border-white rounded-full p-16"
                  />
                </button>
                <Text as="span" font="serif" color="white" variant="caption">
                  {ctaLabel}
                </Text>
              </FlexBox>
            </div>
          </div>
          {/* Back of the card */}
          <FlexBox
            direction="col"
            className={styles.cardBack}
            aria-hidden={!isFlipped}
          >
            {children}
            <FlexBox direction="col" alignItems="center" className="absolute bottom-50 right-36 text-white">
              <button type="button" onClick={() => flipCard(0)} aria-label="Dismiss">
                <HeroIcon
                  noBaseStyle
                  icon='plus'
                  className="w-65 h-65 border-2 border-white rounded-full p-16 rotate-45"
                />
              </button>
              <Text as="span" font="serif" color="white" variant="caption">
                {ctaLabel}
              </Text>
            </FlexBox>
          </FlexBox>
        </div>
      </article>
    </AnimateInView>
  );
};
