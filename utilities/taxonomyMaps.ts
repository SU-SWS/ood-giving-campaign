// TODO after vacation: https://stanfordits.atlassian.net/browse/GIVCAMP-355
// Per PR discussion with Shea https://github.com/SU-SWS/ood-giving-campaign/pull/290#discussion_r1602386147

export const initiativesMap = {
  'ethics-society-technology': 'Ethics, Society & Technology',
  'human-centered-artificial-intelligence': 'Human-Centered Artificial Intelligence',
  'innovative-medicines-accelerator': 'Innovative Medicines Accelerator',
  'racial-justice-initiative' : 'Racial Justice Initiative',
  'stanford-accelerator-for-learning': 'Stanford Accelerator for Learning',
  'stanford-arts': 'Stanford Arts',
  'stanford-athletics': 'Stanford Athletics',
  'stanford-business': 'Stanford Business',
  'stanford-data-science': 'Stanford Data Science',
  'stanford-impact-labs': 'Stanford Impact Labs',
  'stanford-public-humanities': 'Stanford Public Humanities',
  'stanford-science-fellows': 'Stanford Science Fellows',
  'undergraduate-education-student-life': 'Undergraduate Education & Student Life',
  'undergraduate-financial-aid': 'Undergraduate Financial Aid',
};
export type InitiativesType = keyof typeof initiativesMap;

export const schoolsMap = {
  'graduate-school-of-business': 'Graduate School of Business',
  'stanford-doerr-school-of-sustainability': 'Stanford Doerr School of Sustainability',
  'graduate-school-of-education': 'Graduate School of Education',
  'school-of-engineering': 'School of Engineering',
  'school-of-humanities-and-sciences': 'School of Humanities and Sciences',
  'school-of-law': 'School of Law',
  'school-of-medicine': 'School of Medicine',
};
export type SchoolsType = keyof typeof schoolsMap;

export const themesMap = {
  'accelerating-solutions': 'Accelerating Solutions',
  'catalyzing-discovery': 'Catalyzing Discovery',
  'living-our-values': 'Living Our Values',
  'preparing-citizens': 'Preparing Citizens',
  'sustaining-life': 'Sustaining Life',
};
export type ThemesType = keyof typeof themesMap;

export const taxonomyMap = {
  ...initiativesMap,
  ...schoolsMap,
  ...themesMap,
};
export type TaxonomyType = keyof typeof taxonomyMap;
