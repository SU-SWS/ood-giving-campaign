/**
 * Central place for commonly used external links
 * Esp for links that are used in multiple places and might change URL in the future
 */

const isProd = process.env.CONTEXT === 'production';
const giveBaseUrl = isProd ? 'https://give.stanford.edu' : 'https://dev--online-giving.netlify.app';
const givingBaseUrl = isProd ? 'https://giving.stanford.edu' : 'https://dev--adapt-giving.stanford.edu';

export const ood = {
  give: giveBaseUrl,
  giving: givingBaseUrl,
  contact: `${givingBaseUrl}/contact/`,
  howToGive: `${givingBaseUrl}/how-to-make-a-gift/`,
  areasToSupport: `${givingBaseUrl}/areas-to-support/`,
};

export const schools = {
  gsb: {
    name: 'Graduate School of Business',
    href: 'https://www.gsb.stanford.edu/',
  },
  doerr: {
    name: 'Stanford Doerr School of Sustainability',
    href: 'https://sustainability.stanford.edu/',
  },
  ed: {
    name: 'Graduate School of Education',
    href: 'https://ed.stanford.edu/',
  },
  engineering: {
    name: 'School of Engineering',
    href: 'https://engineering.stanford.edu/',
  },
  humSci: {
    name: 'School of Humanities and Sciences',
    href: 'https://humsci.stanford.edu/',
  },
  law: {
    name: 'Stanford Law School',
    href: 'https://law.stanford.edu/',
  },
  med: {
    name: 'School of Medicine',
    href: 'https://medicine.stanford.edu/',
  },
};
