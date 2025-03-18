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

  const expandAll = () => {
    setOpenItems(items.map(() => true));
  };

  const collapseAll = () => {
    setOpenItems(items.map(() => false));
  };

  return (
    <Container mt={marginTop} mb={marginBottom} className={styles.root} {...props}>
      {heading && <Heading size={3} as={headingLevel} className="text-pretty">{heading}</Heading>}
      {intro && <div className="*:max-w-prose *:*:leading-cozy">{intro}</div>}
      {!hideControls && (
        <FlexBox justifyContent="end" className="mb-4 gap-20 rs-mt-2 first:mt-0">
          <CtaButton
            disabled={openItems.every(item => item)}
            variant="ghost"
            size="small"
            color={isDarkTheme ? 'white' : 'black'}
            icon="plus"
            iconProps={{ className: '-mt-01em'}}
            onClick={expandAll}
          >
            Expand All
          </CtaButton>
          <CtaButton
            disabled={openItems.every(item => !item)}
            variant="ghost"
            size="small"
            color={isDarkTheme ? 'white' : 'black'}
            icon="minus"
            iconProps={{ className: '-mt-02em'}}
            onClick={collapseAll}
          >
            Collapse All
          </CtaButton>
        </FlexBox>
      )}
      <ul className="list-unstyled rs-mt-1 max-w-1000">
        {items?.map((item, index) => (
          <li key={item._uid} className="relative mb-0 border-b first:border-t border-black-60">
            <Heading variant="big" as={item.headingLevel} color={isDarkTheme ? 'white' : 'black'} leading="tight" className="relative w-full mb-0">
              <CtaButton
                id={`heading-${item._uid}`}
                onClick={() => toggleItem(index)}
                variant="unset"
                color={isDarkTheme ? 'white' : 'black'}
                aria-expanded={openItems[index] || false}
                aria-controls={`content-${item._uid}`}
                className="group relative w-full text-left pr-36 md:pr-50 pt-16 pb-18 pl-12 md:pl-22"
              >
                <span aria-hidden="true" className="absolute top-0 left-0 group-hocus-visible:w-6 group-hocus-visible:md:w-8 scale-y-0 transition-transform group-hocus-visible:scale-y-100 bottom-0 bg-digital-red-light" />
                {item.heading}
                <HeroIcon icon={openItems[index] ? 'minus' : 'plus'} className="shrink-0 grow-0 absolute right-0 md:right-20 w-24 h-24 md:w-28 md:h-28 border-black-50 border-2 group-hocus-visible:border-dashed p-2 md:p-3 rounded-full" />
              </CtaButton>
            </Heading>
            <m.div
              role="region"
              aria-labelledby={`heading-${item._uid}`}
              id={`content-${item._uid}`}
              aria-hidden={!openItems[index]}
              animate={{
                height: openItems[index] ? 'auto' : 0,
                visibility: openItems[index] ? 'visible' : 'hidden',
              }}
              initial={false}
              transition={{ duration: 0.3, ease: 'easeIn' }}
              className="overflow-clip"
            >
              <div className="rs-pt-0 rs-pb-2 pl-10 md:px-20">
                {hasRichText(item.content) && (
                  <RichText
                    type="card"
                    textColor={isDarkTheme ? 'white' : 'black'}
                    linkColor={isDarkTheme ? 'digital-red-xlight' : 'unset'}
                    wysiwyg={item.content}
                    className="*:max-w-prose-wide"
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
