'use client';

import { useEffect } from 'react';
import { Sa11y, Lang } from 'sa11y/dist/js/sa11y.esm.js';
import Sa11yLangEn from 'sa11y/dist/js/lang/en.js';
import 'sa11y/dist/css/sa11y.min.css';

export const Sa11yInit: React.FC = () => {
  useEffect(() => {
    // Ensure Sa11y only runs in the browser
    if (typeof window !== 'undefined') {
      // Set translations
      Lang.addI18n(Sa11yLangEn.strings);

      // Check if the custom element is already defined
      if (!customElements.get('sa11y-heading-label')) {
        // Instantiate and run Sa11y
        const sa11y = new Sa11y.Sa11y({
          checkRoot: 'body',
        });
      }
    }
  }, []);

  return null;
};
