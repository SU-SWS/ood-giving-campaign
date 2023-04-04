import React, { HTMLAttributes } from 'react';
import { dcnb } from 'cnbuilder';
import { StanfordLogo } from '../StanfordLogo';
import { SrOnlyText } from '../Typography';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import * as styles from './GlobalFooter.styles';

type GlobalFooterProps = Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
  className?: string;
};

export const GlobalFooter = ({ className, ...rest }: GlobalFooterProps) => (
  <Container
    {...rest}
    className={dcnb('su-basefont-20 su-rs-py-1 su-text-white su-bg-cardinal-red', className)}
    width="site"
  >
    <FlexBox direction="col" className="lg:su-flex-row">
      <div className="su-text-center su-mt-5 su-mb-9">
        <StanfordLogo isLink className="su-type-3" type="stacked" color="white" />
      </div>
      <div className="lg:su-pl-45 xl:su-pl-50 su-text-left sm:su-text-center lg:su-text-left su-grow">
        <nav
          aria-label="global footer menu"
          className="su-flex su-flex-row sm:su-flex-col su-justify-center sm:su-items-center lg:su-items-start su-mb-10"
        >
          <ul className="su-list-unstyled su-mb-10 sm:su-mb-4 su-mr-19 sm:su-mr-0 su-p-0 su-text-15 md:su-text-17 2xl:su-text-18 su-flex su-flex-col sm:su-flex-row">
            <li className={styles.listItem}>
              <a
                href="https://www.stanford.edu"
                className={styles.link}
              >
                Stanford Home
                <SrOnlyText />
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                href="https://visit.stanford.edu/plan/"
                className={styles.link}
              >
                Maps &amp; Directions
                <SrOnlyText />
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                href="https://www.stanford.edu/search/"
                className={styles.link}
              >
                Search Stanford
                <SrOnlyText />
              </a>
            </li>
            <li>
              <a
                href="https://emergency.stanford.edu"
                className={styles.link}
              >
                Emergency Info
                <SrOnlyText />
              </a>
            </li>
          </ul>
          <ul className="su-list-unstyled su-mb-10 sm:su-mb-0 su-ml-19 sm:su-ml-0 su-p-0 su-text-15 sm:su-text-14 md:su-text-15 xl:su-text-16 su-flex su-flex-col sm:su-flex-row sm:su-link-regular">
            <li className={styles.listItem}>
              <a
                href="https://www.stanford.edu/site/terms/"
                title="Terms of use for sites"
                className={styles.link}
              >
                Terms of Use
                <SrOnlyText />
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                href="https://www.stanford.edu/site/privacy/"
                title="Privacy and cookie policy"
                className={styles.link}
              >
                Privacy
                <SrOnlyText />
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                href="https://uit.stanford.edu/security/copyright-infringement"
                title="Report alleged copyright infringement"
                className={styles.link}
              >
                Copyright
                <SrOnlyText />
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                href="https://adminguide.stanford.edu/chapter-1/subchapter-5/policy-1-5-4"
                title="Ownership and use of Stanford trademarks and images"
                className={styles.link}
              >
                Trademarks
                <SrOnlyText />
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                href="https://studentservices.stanford.edu/more-resources/student-policies/non-academic/non-discrimination"
                title="Non-discrimination policy"
                className={styles.link}
              >
                Non-Discrimination
                <SrOnlyText />
              </a>
            </li>
            <li>
              <a
                href="https://www.stanford.edu/site/accessibility"
                title="Report web accessibility issues"
                className={styles.link}
              >
                Accessibility
                <SrOnlyText />
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.copyright}>
          <span className={styles.copyrightText}>&copy; Stanford University.</span>
          <span className={styles.copyrightText}>&nbsp; Stanford, California 94305.</span>
        </div>
      </div>
    </FlexBox>
  </Container>
);
