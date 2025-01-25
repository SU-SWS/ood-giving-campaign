import Sa11yLangEn from 'sa11y/dist/js/lang/en.js';

declare module 'sa11y/dist/js/sa11y.esm.js' {
  export const Sa11y: unknown;
  export const Lang: unknown;
}

declare module 'sa11y/dist/js/lang/en.js' {
  const Sa11yLangEn: unknown;
  export default Sa11yLangEn;
}
