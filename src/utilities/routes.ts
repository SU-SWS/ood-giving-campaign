/**
 * Convenience functions for centralized routing
 * NOTE: These are represented as functions to handle optional route and query params if/when needed
 */

// Initiatives
export const initiatives = () => 'initiatives';
export const changingHumanExperience = () => `${initiatives}/changing-human-experience`;
export const ethicsSocietyTech = () => `${initiatives}/ethics-society-technology`;
export const humanCenteredAI = () => `${initiatives}/human-centered-artificial-intelligence`;
export const innovativeMedicinesAccelerator = () => `${initiatives}/innovative-medicines-accelerator`;
export const racialJusticeInitiative = () => `${initiatives}/racial-justice-initiative`;
export const stanfordDataScience = () => `${initiatives}/stanford-data-science`;
export const stanfordImpactLabs = () => `${initiatives}/stanford-impact-labs`;
export const stanfordScienceFellows = () => `${initiatives}/stanford-science-fellows`;
export const townCenter = () => `${initiatives}/town-center`;
export const stanfordAcceleratorForLearning = () => `${initiatives}/stanford-accelerator-for-learning`;
export const stanfordAthletics = () => `${initiatives}/stanford-athletics`;
export const financialAid = () => `${initiatives}/financial-aid`;
export const internationalNeedBasedAid = () => `${initiatives}/international-need-based-aid`;
export const undergradEducationStudentLife = () => `${initiatives}/undergraduate-education-and-student-life`;
export const resX = () => `${initiatives}/resx`;

// Themes
export const themes = () => 'themes';
export const sustainingLife = () => `${themes}/sustaining-life`;
export const acceleratingSolutions = () => `${themes}/accelerating-solutions`;
export const catalyzingDiscovery = () => `${themes}/catalyzing-discovery`;
export const preparingCitizens = () => `${themes}/preparing-citizens`;

export default {
  initiatives,
  changingHumanExperience,
  ethicsSocietyTech,
  humanCenteredAI,
  innovativeMedicinesAccelerator,
  racialJusticeInitiative,
  stanfordDataScience,
  stanfordImpactLabs,
  stanfordScienceFellows,
  townCenter,
  stanfordAcceleratorForLearning,
  stanfordAthletics,
  financialAid,
  internationalNeedBasedAid,
  undergradEducationStudentLife,
  resX,
  themes,
  sustainingLife,
  acceleratingSolutions,
  catalyzingDiscovery,
  preparingCitizens,
};
