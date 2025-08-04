import { Paragraph, Heading, SrOnlyText } from '@/components/Typography';
import { Container } from '@/components/Container';
import { FlexBox } from '@/components/FlexBox';
import { Grid } from '@/components/Grid';
import { LogoLockup } from '@/components/Logo';
import { CtaLink } from '@/components/Cta';
import { SquareFacebook, SquareInstagram, Linkedin } from '@/components/SocialMedia';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import * as links from '@/utilities/externalLinks';
import * as routes from '@/utilities/routes';
import * as styles from './LocalFooterMvp.styles';

export const LocalFooterMvp = () => (
  <Container
    as="nav"
    bgColor="black"
    py={10}
    aria-label="Local footer menu"
    className={styles.root}
    style={{ backgroundImage: `url('${getProcessedImage('https://a-us.storyblok.com/f/1005200/3200x2134/f8433eac94/fdf67c168f2e36a6bc30c085eb392c13.jpg', '2000x0')}')` }}
  >
    <div className={styles.overlay} aria-hidden="true" />
    <FlexBox direction="col" className={styles.flexWrapper}>
      <LogoLockup text="Momentum" color="white" isLink className={styles.logo} />
      <FlexBox as="ul" wrap="wrap" className={styles.ul}>
        <li><CtaLink color="white" href={routes.storiesRoot} size="large">Stories</CtaLink></li>
        <li><CtaLink color="white" href={routes.changemakers} size="large">Changemakers</CtaLink></li>
        <li><CtaLink color="white" href={routes.initiativesRoot} size="large">Initiatives</CtaLink></li>
        <li><CtaLink color="white" href={routes.contactUs} size="large">Contact us</CtaLink></li>
      </FlexBox>
      <Grid lg={2} pt={8} gap="default" className={styles.grid}>
        <section>
          <Heading as="h3" size={3} leading="tight">
            Get the latest in your inbox
          </Heading>
          <Paragraph variant="big" leading="cozy">
            Sign up to receive <em>The Moment</em> newsletter, telling the stories of Stanford’s impact.
          </Paragraph>
          <CtaLink
            href={routes.newsletterSignup}
            variant="solid"
            icon="arrow-right"
          >
            Sign up
          </CtaLink>
        </section>
        <section>
          <Heading as="h3" size={3} leading="tight">
            We can do this, together
          </Heading>
          <Paragraph variant="big" leading="cozy">
            With your support, this vision will become reality.
          </Paragraph>
          <CtaLink
            href={links.ood.areasToSupport}
            variant="ghost-swipe"
            color="white"
            icon="external"
            animate="top-right"
          >
            Find ways to give
          </CtaLink>
        </section>
        <FlexBox as="ul" className={styles.socialList}>
          <li>
            <a href="https://www.instagram.com/stanfordgiving/" className={styles.socialInstagram}>
              <SrOnlyText>Stanford Giving Instagram</SrOnlyText>
              <SquareInstagram aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/stanford.university.giving/" className={styles.socialFacebook}>
              <SrOnlyText>Stanford University Giving Facebook</SrOnlyText>
              <SquareFacebook aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/school/stanford-giving/" className={styles.socialLinkedin}>
              <SrOnlyText>Stanford Giving LinkedIn</SrOnlyText>
              <Linkedin aria-hidden="true" />
            </a>
          </li>
        </FlexBox>
      </Grid>
    </FlexBox>
  </Container>
);
