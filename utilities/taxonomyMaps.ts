export const initiativesMap = {
  'ethics-society-and-technology': 'Ethics, Society & Technology',
  'human-centered-artificial-intelligence': 'Human-Centered Artificial Intelligence',
  'innovative-medicines-accelerator': 'innovative-medicines-accelerator',
  'racial-justice-initiative' : 'Racial Justice Initiative',
  'stanford-accelerator-for-learning': 'Stanford Accelerator for Learning',
  'stanford-arts': 'Stanford Arts',
  'stanford-athletics': 'Stanford Athletics',
  'stanford-business': 'Stanford Business',
  'stanford-data-science': 'Stanford Data Science',
  'stanford-impact-labs': 'Stanford Impact Labs',
  'stanford-public-humanities': 'Stanford Public Humanities',
  'stanford-science-fellows': 'Stanford Science Fellows',
  'undergraduate-education-and-student-life': 'Undergraduate Education & Student Life',
  'undergraduate-financial-aid': 'Undergraduate Financial Aid',
};
export type InitiativesType = keyof typeof initiativesMap;

export const themesMap = {
  'accelerating-solutions': 'Accelerating Solutions',
  'catalyzing-discovery': 'Catalyzing Discovery',
  'preparing-citizens': 'Preparing Citizens',
  'sustaining-life': 'Sustaining Life',
};
export type ThemesType = keyof typeof themesMap;

export const taxonomyMap = {
  ...initiativesMap,
  ...themesMap,
};
export type TaxonomyType = keyof typeof taxonomyMap;
