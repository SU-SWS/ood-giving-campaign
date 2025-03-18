import { useState, useEffect } from 'react';
import { m } from 'framer-motion';
import { CtaButton } from '@/components/Cta';
import { Container } from '@/components/Container';
import { FlexBox } from '@/components/FlexBox';
import { HeroIcon } from '@/components/HeroIcon';
import { Heading } from '@/components/Typography';
import { RichText } from '@/components/RichText';
import { hasRichText } from '@/utilities/hasRichText';
import { type MarginType } from '@/utilities/datasource';
import { type HeadingType } from '@/components/Typography';
import { type SbAccordionItemsTypes } from '@/components/Storyblok/Storyblok.types';
import * as styles from './Accordion.styles';

type AccordionProps = React.HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  headingLevel?: HeadingType;
  intro?: React.ReactNode;
  items: SbAccordionItemsTypes[];
  id?: string;
  isDarkTheme?: boolean;
  hideControls?: boolean;
  marginTop?: MarginType;
  marginBottom?: MarginType;
}

export const Accordion = ({
  heading,
  headingLevel = 'h2',
  intro,
  items,
  id,
  isDarkTheme,
  hideControls,
  marginTop,
  marginBottom,
  ...props
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<boolean[]>([]);

  useEffect(() => {
    if (!items?.length) return;
    const initialState = items.map(item => item.defaultOpen);
    setOpenItems(initialState);
  }, [items]);

  const toggleItem = (index: number) => {
    setOpenItems(prevState => prevState.map((item, i) => i === index ? !item : item));
  };

  const allExpanded = openItems.every(item => item);
  const allCollapsed = openItems.every(item => !item);

  const expandAll = () => {
    setOpenItems(items.map(() => true));
  };

  const collapseAll = () => {
    setOpenItems(items.map(() => false));
  };

  const showControls = !hideControls && items?.length > 1;

  return (
    <Container mt={marginTop} mb={marginBottom} className={styles.root} {...props}>
      {heading && <Heading size={3} as={headingLevel} className={styles.heading}>{heading}</Heading>}
      {intro && <div className={styles.intro}>{intro}</div>}
      {showControls && (
        <FlexBox justifyContent="end" className={styles.controls}>
          <CtaButton
            disabled={allExpanded}
            variant="ghost"
            size="small"
            color={isDarkTheme ? 'white' : 'black'}
            icon="plus"
            iconProps={{ className: styles.expandAllIcon}}
            onClick={expandAll}
            className={styles.controlButton(isDarkTheme)}
          >
            Expand All
          </CtaButton>
          <CtaButton
            disabled={allCollapsed}
            variant="ghost"
            size="small"
            color={isDarkTheme ? 'white' : 'black'}
            icon="minus"
            iconProps={{ className: styles.collapseAllIcon}}
            onClick={collapseAll}
            className={styles.controlButton(isDarkTheme)}
          >
            Collapse All
          </CtaButton>
        </FlexBox>
      )}
      <ul className={styles.list}>
        {items?.map((item, index) => (
          <li key={item._uid} className={styles.listItem}>
            <Heading as={item.headingLevel} color={isDarkTheme ? 'white' : 'black'} leading="tight" className={styles.itemHeading}>
              <CtaButton
                id={`button-${item._uid}`}
                onClick={() => toggleItem(index)}
                variant="unset"
                color={isDarkTheme ? 'white' : 'black'}
                aria-expanded={openItems[index] || false}
                aria-controls={`content-${item._uid}`}
                className={styles.button}
              >
                <span aria-hidden="true" className={styles.bar} />
                {item.heading}
                <HeroIcon icon={openItems[index] ? 'minus' : 'plus'} className={styles.circleIcon} />
              </CtaButton>
            </Heading>
            <m.div
              role="region"
              aria-labelledby={`button-${item._uid}`}
              id={`content-${item._uid}`}
              aria-hidden={!openItems[index]}
              animate={{
                height: openItems[index] ? 'auto' : 0,
                visibility: openItems[index] ? 'visible' : 'hidden',
              }}
              initial={false}
              transition={{ duration: 0.3, ease: 'easeIn' }}
              className={styles.contentWrapper}
            >
              <div className={styles.richtextWrapper}>
                {hasRichText(item.content) && (
                  <RichText
                    type="card"
                    textColor={isDarkTheme ? 'white' : 'black'}
                    linkColor={isDarkTheme ? 'digital-red-xlight' : 'unset'}
                    wysiwyg={item.content}
                    className={styles.richtext}
                  />
                )}
              </div>
            </m.div>
          </li>
        ))}
      </ul>
    </Container>
  );
};
