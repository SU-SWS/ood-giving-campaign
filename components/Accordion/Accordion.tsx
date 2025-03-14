import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Typography';
import { RichText } from '@/components/RichText';
import { hasRichText } from '@/utilities/hasRichText';
import { type MarginType } from '@/utilities/datasource';
import { type HeadingType } from '@/components/Typography';
import { type SbAccordionItemsTypes } from '@/components/Storyblok/Storyblok.types';
import * as styles from './Accordion.styles';

type AccordionProps = React.HTMLAttributes<HTMLDivElement> & {
  isHidden?: boolean;
  heading?: string;
  headingLevel?: HeadingType;
  intro?: React.ReactNode;
  items: SbAccordionItemsTypes[];
  id?: string;
  isDarkTheme?: boolean;
  showControls?: boolean;
  marginTop?: MarginType;
  marginBottom?: MarginType;
}

export const Accordion = ({
  isHidden,
  heading,
  headingLevel = 'h2',
  intro,
  items,
  id,
  isDarkTheme,
  showControls,
  marginTop,
  marginBottom,
  ...props
}: AccordionProps) => {
  return (
    <Container mt={marginTop} mb={marginBottom} className={styles.root} {...props}>
      <Heading as={headingLevel}>{heading}</Heading>
      {intro && <div className="*:max-w-prose *:*:leading-snug">{intro}</div>}
      <ul className="list-unstyled">
        {items.map((item, index) => (
          <Disclosure key={item._uid} as="li">
            <Heading size={1} as={item.headingLevel} >
              <DisclosureButton >
                {item.heading}
              </DisclosureButton>
            </Heading>
            <DisclosurePanel>
              {hasRichText(item.content) ? (
                <RichText
                  textColor={isDarkTheme ? 'white' : 'black'}
                  linkColor={isDarkTheme ? 'digital-red-xlight' : 'unset'}
                  wysiwyg={item.content}
                  className="*:max-w-prose-wide"
                />
              ) : undefined}
            </DisclosurePanel>
          </Disclosure>
        ))}
      </ul>
    </Container>
  );
};
