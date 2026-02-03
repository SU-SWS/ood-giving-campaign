'use client';

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
import { FlexBox } from '@/components/FlexBox';
import { Grid } from '@/components/Grid';
import { RichText } from '@/components/RichText';
import {
  Heading, SrOnlyText, Text, type HeadingType,
} from '@/components/Typography';
import { type SbTabItemType } from '@/components/Storyblok/Storyblok.types';
import { hasRichText } from '@/utilities/hasRichText';
import { slugify } from '@/utilities/slugify';
import { siteConfig } from '@/utilities/siteConfig';
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
  useLabelFor = 'superhead',
  superhead,
  heading,
  featuredMedia,
  id,
  body,
  otherContent,
}: TabContentProps) => {
  const visibleSuperhead = useLabelFor === 'superhead' ? label : superhead;

  return (
    <AnimateInView animation={animation} id={id}>
      <FlexBox direction="col" className={styles.contentWrapper}>
        <CreateBloks blokSection={featuredMedia} />
        <div>
          {visibleSuperhead && (
            <Text
              size={1}
              weight="semibold"
              aria-hidden="true"
              color={isLightText ? 'white' : 'black'}
              leading="display"
              className={styles.superhead}
            >
              {visibleSuperhead}
            </Text>
          )}
          <Heading
            as={headingLevel}
            font={isSerifHeading ? 'serif' : 'druk'}
            color={isLightText ? 'white' : 'black'}
            className={styles.heading(headingSize)}
          >
            {visibleSuperhead && <SrOnlyText>{`${visibleSuperhead}:`}</SrOnlyText>}
            {useLabelFor === 'heading' ? label : heading}
          </Heading>
          {hasRichText(body) && (
            <RichText
              wysiwyg={body}
              textColor={isLightText ? 'white' : 'black'}
              linkColor={isLightText ? 'digital-red-xlight' : 'unset'}
            />
          )}
          <CreateBloks blokSection={otherContent} />
        </div>
      </FlexBox>
    </AnimateInView>
  );
};

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
  const isRenderTabs = useMediaQuery(`(min-width: ${siteConfig.breakpoints.sm}px)`);

  /**
   * We need a unique id for each tab group when there are multiple
   * on a page for the framer motion layout animation to work
   */
  const tabGroupId = encodeURIComponent(useId());
  const tabGroupRef = useRef<HTMLDivElement>(null);

  /**
   * We need a unique prefix for each tab group to set the hash in the URL
   * The user can add an id through storyblok, but we use the tabGroupId as a fallback
   */
  const uniquePrefix = `${id || tabGroupId}-`;

  const tabItemsWithSlug = tabItems.map((tabItem) => ({
    ...tabItem,
    slug: slugify(tabItem.label),
  }));

  // Calculate initial selected index from URL hash
  const getInitialIndex = () => {
    if (typeof window === 'undefined') return 0;
    const pageHash = window.location.hash.slice(1);
    if (pageHash.startsWith(uniquePrefix)) {
      const strippedHash = pageHash.replace(uniquePrefix, '');
      const index = tabItemsWithSlug.findIndex(tabItem => tabItem.slug === strippedHash);
      return index !== -1 ? index : 0;
    }
    return 0;
  };

  const [selectedIndex, setSelectedIndex] = useState(getInitialIndex);

  const handleTabChange = (index: number) => {
    setSelectedIndex(index);
    const tabHash = `#${uniquePrefix}${tabItemsWithSlug[index].slug}`;
    window.history.replaceState(null, '', tabHash); // Update hash without adding to history
  };

  // Scroll to the correct position on initial load if there's a matching hash
  useEffect(() => {
    const pageHash = window.location.hash.slice(1);
    if (pageHash.startsWith(uniquePrefix)) {
      const strippedHash = pageHash.replace(uniquePrefix, '');
      const index = tabItemsWithSlug.findIndex(tabItem => tabItem.slug === strippedHash);

      if (index !== -1) {
        /**
         * For SM breakpoint and above, if the page hash matches a tab hash,
         * scroll to the top of the correct tab group
         */
        if (isRenderTabs) {
          tabGroupRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // On mobile (XS), scroll to the id anchor at the top of the exposed item content
        else {
          const element = document.getElementById(`${uniquePrefix}${tabItemsWithSlug[index].slug}`);
          element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
    // Run only on mount
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div ref={tabGroupRef} className={styles.root} {...props} id={id}>
      {/* For SM breakpoint and above, display tab group */}
      <TabGroup vertical className={styles.tabGroup} selectedIndex={selectedIndex} onChange={handleTabChange}>
        <TabList className={styles.tabList(isKeyboardUser)}>
          {tabItemsWithSlug.map((tabItem) => (
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
          {tabItemsWithSlug.map((tabItem) => (
            <TabPanel key={tabItem._uid}>
              <TabContent
                label={tabItem.label}
                useLabelFor={tabItem.useLabelFor || 'superhead'}
                superhead={tabItem.superhead}
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
        {tabItemsWithSlug.map((tabItem) => (
          <li key={tabItem._uid} id={`${uniquePrefix}${tabItem.slug}`} className={styles.li}>
            <TabContent
              label={tabItem.label}
              useLabelFor={tabItem.useLabelFor || 'superhead'}
              superhead={tabItem.superhead}
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
