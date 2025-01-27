'use client';

import { useEffect } from 'react';
import 'sa11y/dist/css/sa11y.min.css';

export const Sa11yInit: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (async () => {
        // Dynamically import Sa11y and related dependencies
        const { Sa11y, Lang } = await import('sa11y/dist/js/sa11y.esm.js');
        const { default: Sa11yLangEn } = await import('sa11y/dist/js/lang/en.js');

        // Set translations
        Lang.addI18n(Sa11yLangEn.strings);

        // Check if the custom element is already defined
        if (!customElements.get('sa11y-heading-label')) {
          // Instantiate and run Sa11y
          const sa11y = new Sa11y({
            checkRoot: 'body',
          });
        }
      })();
    }
  }, []);

  return null;
};
