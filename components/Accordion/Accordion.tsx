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
      <Heading size={3} as={headingLevel} className="text-pretty">{heading}</Heading>
      {intro && <div className="*:max-w-prose *:*:leading-snug">{intro}</div>}
      <ul className="list-unstyled rs-mt-2 max-w-1000">
        {items?.map((item, index) => (
          <Disclosure
            key={item._uid}
            as="li"
            defaultOpen={item.defaultOpen}
            className="border-b first:border-t border-black-60 pt-16 pb-18 pl-10 md:pl-20 pr-50"
          >
            <Heading variant="big" as={item.headingLevel} leading="tight" className="w-full mb-0">
              <DisclosureButton className="w-full text-left hocus-visible:underline">
                {item.heading}
              </DisclosureButton>
            </Heading>
            <DisclosurePanel
              transition
              className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
            >
              {hasRichText(item.content) ? (
                <RichText
                  type="card"
                  textColor={isDarkTheme ? 'white' : 'black'}
                  linkColor={isDarkTheme ? 'digital-red-xlight' : 'unset'}
                  wysiwyg={item.content}
                  className="*:max-w-prose-wide rs-mt-2"
                />
              ) : undefined}
            </DisclosurePanel>
          </Disclosure>
        ))}
      </ul>
    </Container>
  );
};
