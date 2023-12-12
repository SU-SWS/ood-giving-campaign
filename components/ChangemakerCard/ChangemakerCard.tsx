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
  animation = 'none',
  delay,
  children,
  className,
  ...props
}: ChangemakerCardProps) => {
  const cardInnerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isShown, setIsShown] = useState(false);

  // Toggle card content
  const toggleCard = () => {
    setIsShown(!isShown);
  };

  // If card content is shown, clicking outside it will dismiss its
  useOnClickOutside(cardInnerRef, () => {
    if (isShown) {
      setIsShown(false);
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
          <div aria-hidden={isShown} className={styles.cardFront}>
            {imageSrc && (
              <div className={cnb(styles.imageWrapper)}>
                <ImageOverlay
                  imageSrc={getProcessedImage(imageSrc, '500x1000', imageFocus)}
                  overlay="gradient-changemaker"
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
          </div>
          {/* Content layer */}
          <FlexBox
            direction="col"
            className={styles.cardContent}
            aria-hidden={!isShown}
          >
            {children}
          </FlexBox>
          <button
            ref={buttonRef}
            type="button"
            onClick={toggleCard}
            aria-label={isShown ? 'Dismiss' : `Read more about ${heading}`}
            className={cnb(styles.button, styles.buttonBack)}
          >
            <HeroIcon
              noBaseStyle
              icon='plus'
              className={styles.flipIcon}
            />
          </button>
        </div>
      </article>
    </AnimateInView>
  );
};
