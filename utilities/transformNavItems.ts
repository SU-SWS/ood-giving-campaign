import { type SbNavItemProps } from '@/components/Storyblok/Storyblok.types';
import { type navItemProps } from '@/components/MainNav';

/**
 * This transform an array of objects from an array of Storyblok component SbNavItem
 * into a processed array that can be used in a reusable component.
 *
 * @param {Array} navItems An array of Storyblok components SbNavItem.
 * @returns {Array} An array of objects with 3 properties: _uid, label, and href.
 */
export const transformNavItems = (navItems: SbNavItemProps[]): navItemProps[] => {
  if (!Array.isArray(navItems) || navItems.length === 0) {
    return [];
  }

  return navItems.map(navItem => ({
    _uid: navItem._uid,
    label: navItem.label,
    href: navItem.link?.url || navItem.link?.cached_url,
  }));
};
