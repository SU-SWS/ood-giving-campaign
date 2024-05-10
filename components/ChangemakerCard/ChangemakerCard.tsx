import { cnb } from 'cnbuilder';
import { useId, useRef } from 'react';
import { useOnClickOutside, useToggle } from 'usehooks-ts';
import { AnimateInView, type AnimationType } from '@/components/Animate';
import {
  Heading, type HeadingType, Text,
} from '@/components/Typography';
import { FlexBox } from '@/components/FlexBox';
import { HeroIcon } from '@/components/HeroIcon';
import { ImageOverlay } from '@/components/ImageOverlay';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import useEscape from '@/hooks/useEscape';
import * as styles from './ChangemakerCard.styles';


export type ChangemakerCardProps = React.HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  headingLevel?: HeadingType;
  subheading?: string;
  imageSrc?: string;
  imageFocus?: string;
  isHorizontal?: boolean;
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
  isHorizontal,
  animation = 'none',
  delay,
  children,
  className,
  ...props
}: ChangemakerCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const contentId = useId();
  const headingId = useId();
  const [isShown, toggle, setIsShown] = useToggle();

  const handleClick = () => {
    // toggle the card content and if it is shown, focus on contentRef
    toggle();
    if (!isShown) {
      contentRef.current?.focus();
    }
  };

  // If card content is shown, clicking outside it will dismiss it
  useOnClickOutside(cardRef, () => {
    if (isShown) {
      setIsShown(false);
    }
  });

  // If card content is shown, pressing escape will dismiss it
  // and focus on the button
  useEscape(() => {
    if (isShown) {
      setIsShown(false);
      buttonRef.current?.focus();
    }
  });

  return (
    <AnimateInView animation={animation} delay={delay}>
      <article
        ref={cardRef}
        className={cnb(styles.root(isHorizontal), className)}
        {...props}
      >
        <div className={styles.cardInner(isHorizontal)}>
          {/* Front of the card */}
          <div aria-hidden={isShown} className={styles.cardFront}>
            {imageSrc && (
              <div className={styles.imageWrapper(isHorizontal)}>
                <ImageOverlay
                  imageSrc={getProcessedImage(imageSrc, isHorizontal ? '1500x1000' : '400x800', imageFocus)}
                  overlay="gradient-changemaker"
                  loading="eager"
                  width={339}
                  height={678}
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
                  color="white"
                  className={styles.heading}
                >
                  {heading}
                </Heading>
              )}
              {subheading && (
                <Text variant="card" align="center" leading="display" color="white">{subheading}</Text>
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
            <div ref={contentRef} tabIndex={isShown ? 0 : -1}>
              {children}
            </div>
          </FlexBox>
          <button
            ref={buttonRef}
            type="button"
            onClick={handleClick}
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
