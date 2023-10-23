import { cnb } from 'cnbuilder';
import { StanfordLogo } from '../StanfordLogo';
import { SrOnlyText } from '../Typography';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import * as styles from './GlobalFooter.styles';

type GlobalFooterProps = {
  className?: string;
};

export const GlobalFooter = ({ className }: GlobalFooterProps) => (
  <Container className={cnb(styles.root, className)}>
    <FlexBox direction="col" className={styles.outerWrapper}>
      <div className={styles.logoWrapper}>
        <StanfordLogo isLink tabIndex={-1} aria-hidden className={styles.logo} type="stacked" color="white" />
      </div>
      <div className={styles.contentWrapper}>
        <FlexBox
          as="nav"
          justifyContent="center"
          aria-label="global footer menu"
          className={styles.menusWrapper}
        >
          <ul className={styles.stanfordMenu}>
            <li className={styles.listItem}>
              <a
                href="https://www.stanford.edu"
                rel="nofollow"
                className={styles.link}
              >
                Stanford Home
                <SrOnlyText />
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                href="https://visit.stanford.edu/plan/"
                rel="nofollow"
                className={styles.link}
              >
                Maps &amp; Directions
                <SrOnlyText />
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                href="https://www.stanford.edu/search/"
                rel="nofollow"
                className={styles.link}
              >
                Search Stanford
                <SrOnlyText />
              </a>
            </li>
            <li>
              <a
                href="https://emergency.stanford.edu"
                rel="nofollow"
                className={styles.link}
              >
                Emergency Info
                <SrOnlyText />
              </a>
            </li>
          </ul>
          <ul className={styles.legalMenu}>
            <li className={styles.listItem}>
              <a
                href="https://www.stanford.edu/site/terms/"
                rel="nofollow"
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
                rel="nofollow"
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
                rel="nofollow"
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
                rel="nofollow"
                title="Ownership and use of Stanford trademarks and images"
                className={styles.link}
              >
                Trademarks
                <SrOnlyText />
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                href="https://non-discrimination.stanford.edu/"
                rel="nofollow"
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
                rel="nofollow"
                title="Report web accessibility issues"
                className={styles.link}
              >
                Accessibility
                <SrOnlyText />
              </a>
            </li>
          </ul>
        </FlexBox>
        <div className={styles.copyright}>
          <span className={styles.copyrightText}>&copy; Stanford University.</span>
          <span className={styles.copyrightText}>&nbsp; Stanford, California 94305.</span>
        </div>
      </div>
    </FlexBox>
  </Container>
);
