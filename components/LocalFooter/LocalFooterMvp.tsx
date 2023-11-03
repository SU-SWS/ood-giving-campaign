import { Paragraph, Heading, Text } from '../Typography';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { LogoLockup } from '../Logo';
import { CtaLink } from '../Cta';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { FlexBox } from '../FlexBox';
import * as links from '@/utilities/externalLinks';
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
    <div className={styles.overlay} />
    <FlexBox direction="col" className={styles.flexWrapper}>
      <LogoLockup text="Impact Stories" color="white" isLink className={styles.logo} />
      <FlexBox as="ul" wrap="wrap" className={styles.ul}>
        <li><CtaLink color="white" href={links.ood.giving} size="large">Giving to Stanford</CtaLink></li>
        <li><CtaLink color="white" href={links.ood.contact} size="large">Contact us</CtaLink></li>
        <li><CtaLink color="white" href={links.ood.leadership} size="large">Leadership</CtaLink></li>
        <li><CtaLink color="white" href={links.ood.waysToGive} size="large">How to make a gift</CtaLink></li>
      </FlexBox>
      <Grid lg={2} pt={8} gap="default" className={styles.grid}>
        <div>
          <Heading as="h3" size={3} leading="tight">
            Get the latest in your inbox
          </Heading>
          <Paragraph variant="big" leading="display">
            Sign up to receive Stanford’s storytelling newsletter.
          </Paragraph>
          <CtaLink
            href={links.ood.newsletterSignUp}
            variant="solid"
            icon="arrow-right"
          >
            Sign up
          </CtaLink>
        </div>
        <div className={styles.column2}>
          <Heading as="h3" size={3} leading="tight">
            We can do this, together
          </Heading>
          <Paragraph variant="big" leading="display">
            With your support, this vision will become reality.
          </Paragraph>
          <CtaLink
            href={links.ood.waysToGive}
            variant="ghost-swipe"
            color="white"
            icon="arrow-right"
          >
            Find ways to give
          </CtaLink>
        </div>
      </Grid>
    </FlexBox>
  </Container>
);
