import {
  Fragment, useEffect, useId, useRef, useState,
} from 'react';
import {
  Tab, TabGroup, TabList, TabPanel, TabPanels,
} from '@headlessui/react';
import { m } from 'framer-motion';
import { useMediaQuery } from 'usehooks-ts';
import { useKeyboard } from '@/hooks/useKeyboard';
import { AnimateInView, type AnimationType } from '@/components/Animate';
import { CreateBloks } from '@/components/CreateBloks';
import { Grid } from '@/components/Grid';
import { RichText } from '@/components/RichText';
import {
  Heading, SrOnlyText, Text, type HeadingType,
} from '@/components/Typography';
import { type SbTabItemType } from '@/components/Storyblok/Storyblok.types';
import { hasRichText } from '@/utilities/hasRichText';
import { slugify } from '@/utilities/slugify';
import { config } from '@/utilities/config';
import * as styles from './Tabs.styles';

type TabsProps = React.HTMLAttributes<HTMLDivElement> & {
  tabItems: SbTabItemType[];
  isSerifHeading?: boolean;
  headingLevel?: HeadingType;
  isLightText?: boolean;
  animation?: AnimationType;
};

type TabContentProps = Omit<TabsProps, 'tabItems'> & Omit<SbTabItemType, '_uid'>;

/**
 * Content inside each tab item that will be display expanded on mobile
 */
const TabContent = ({
  isSerifHeading,
  headingLevel,
  headingSize,
  isLightText,
  animation,
  label,
  heading,
  featuredMedia,
  id,
  body,
  otherContent,
}: TabContentProps) => (
  <AnimateInView animation={animation} id={id}>
    <CreateBloks blokSection={featuredMedia} />
    <Text
      size={1}
      weight="semibold"
      aria-hidden="true"
      color={isLightText ? 'white' : 'black'}
      leading="display"
      className={styles.superhead}
    >
      {label}
    </Text>
    <Heading
      as={headingLevel}
      font={isSerifHeading ? 'serif' : 'druk'}
      color={isLightText ? 'white' : 'black'}
      className={styles.heading(headingSize)}
    >
      <SrOnlyText>{`${label}:`}</SrOnlyText>{heading}
    </Heading>
    {hasRichText(body) && (
      <RichText
        wysiwyg={body}
        textColor={isLightText ? 'white' : 'black'}
        linkColor={isLightText ? 'digital-red-xlight' : 'unset'}
      />
    )}
    <CreateBloks blokSection={otherContent} />
  </AnimateInView>
);

export const Tabs = ({
  tabItems,
  isSerifHeading,
  headingLevel,
  isLightText,
  animation,
  id,
  ...props
}: TabsProps) => {
  const isKeyboardUser = useKeyboard();

  // We only render the component as tabs on SM breakpoint and above
  const isRenderTabs = useMediaQuery(`(min-width: ${config.breakpoints.sm}px)`);

  /**
   * We need a unique id for each tab group when there are multiple
   * on a page for the framer motion layout animation to work
   */
  const tabGroupId = encodeURIComponent(useId());
  const tabGroupRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  /**
   * We need a unique prefix for each tab group to set the hash in the URL
   * The user can add an id through storyblok, but we use the tabGroupId as a fallback
   */
  const uniquePrefix = `${id || tabGroupId}-`;

  const handleTabChange = (index: number) => {
    setSelectedIndex(index);
    const tabHash = `#${uniquePrefix}${slugify(tabItems[index].label)}`;
    window.history.replaceState(null, '', tabHash); // Update hash without adding to history
  };

  // Check URL hash on initial load, update the selected tab and scroll to the correct position
  useEffect(() => {
    const pageHash = window.location.hash.slice(1); // Remove the "#" from the hash

    // Check if the current page hash starts with the unique prefix
    if (pageHash.startsWith(uniquePrefix)) {
      // Remove the unique prefix from the page hash
      const strippedHash = pageHash.replace(uniquePrefix, '');

      // Find the index of the tab item with a tab hash that matches the stripped page shash
      const index = tabItems.findIndex(tabItem => slugify(tabItem.label) === strippedHash);

      if (index !== -1) {
        /**
         * For SM breakpoint and above, if the page hash matches a tab hash,
         * set that tab as active and scroll to the top of the correct tab group
         */
        if (isRenderTabs) {
          setSelectedIndex(index);
          tabGroupRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // On mobile (XS), scroll to the id anchor at the top of the exposed item content
        else {
          const element = document.getElementById(`#${uniquePrefix}${slugify(tabItems[index].label)}`);
          element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  }, [isRenderTabs, tabItems, uniquePrefix]);

  return (
    <div ref={tabGroupRef} className={styles.root} {...props} id={id}>
      {/* For SM breakpoint and above, display tab group */}
      <TabGroup vertical className={styles.tabGroup} selectedIndex={selectedIndex} onChange={handleTabChange}>
        <TabList className={styles.tabList(isKeyboardUser)}>
          {tabItems?.map((tabItem) => (
            <Tab as={Fragment} key={tabItem._uid}>
              {({ selected }) => (
                <button className={styles.tabItem(isLightText)}>
                  {tabItem.label}
                  {selected && (
                    <m.div
                      className={styles.tabItemBar(isLightText)}
                      layoutId={tabGroupId}
                    />
                  )}
                </button>
              )}
            </Tab>
          ))}
        </TabList>
        <TabPanels className={styles.tabPanel(isLightText)}>
          {tabItems?.map((tabItem) => (
            <TabPanel key={tabItem._uid}>
              <TabContent
                label={tabItem.label}
                heading={tabItem.heading}
                featuredMedia={tabItem.featuredMedia}
                body={tabItem.body}
                otherContent={tabItem.otherContent}
                headingSize={tabItem.headingSize}
                isSerifHeading={isSerifHeading}
                headingLevel={headingLevel || 'h3'}
                isLightText={isLightText}
                animation={animation}
              />
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
      {/* For mobile (XS only), display expanded list of all the tab item content */}
      <Grid as="ul" gap="card" className={styles.mobileGrid}>
        {tabItems.map((tabItem, index) => (
          <li key={tabItem._uid} id={`#${uniquePrefix}${slugify(tabItems[index].label)}`} className={styles.li}>
            <TabContent
              label={tabItem.label}
              heading={tabItem.heading}
              featuredMedia={tabItem.featuredMedia}
              body={tabItem.body}
              otherContent={tabItem.otherContent}
              headingSize={tabItem.headingSize}
              isSerifHeading={isSerifHeading}
              headingLevel={headingLevel || 'h3'}
              isLightText={isLightText}
              animation={animation}
            />
          </li>
        ))}
      </Grid>
    </div>
  );
};
