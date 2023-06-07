import React from 'react';
import { Paragraph, Heading, Text } from '../Typography';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { Logo } from '../Logo';
import { CtaLink } from '../Cta';
import { schools } from '../../utilities/externalLinks';
import routes from '../../utilities/routes';

export const LocalFooter = () => (
  <Container bgColor="white" py={8}>
    <Logo className="su-w-300 md:su-w-400 2xl:su-w-[56rem] su-fill-gc-black" />
    <Grid gap="default" as="nav" aria-label="Local footer" xl={3} pt={7}>
      <div>
        <section>
          <Heading as="h3" size={1} font="druk-wide" uppercase className="su-rs-mb-0">
            About
          </Heading>
          <Text as="address" leading="normal">
            <Text weight="semibold" className="su-whitespace-pre-line">Stanford Office of Development</Text>
            P.O. Box 20466<br />
            Stanford, CA 94309-0466<br />
            (650) 724-0627<br />
          </Text>
          <Text className="su-rs-mt-0 su-rs-mb-3">Tax ID: 94-1156365</Text>
          <ul className="su-list-unstyled children:su-mb-04em">
            <li><CtaLink color="black" icon="arrow-right" href="contact-us">Contact us</CtaLink></li>
            <li><CtaLink color="black" icon="arrow-right" href="faq">FAQs</CtaLink></li>
          </ul>
          <CtaLink
            color="black"
            variant="ghost-swipe"
            icon="arrow-right"
            curve="br"
            href="faq"
            className="su-rs-mt-2"
          >
            How to give
          </CtaLink>
        </section>
        <section className="su-rs-mt-4">
          <Heading as="h3" size={1} font="druk-wide" uppercase className="su-rs-mb-0">
            The Latest
          </Heading>
          <Paragraph noMargin>
            Sign up to receive Stanford’s On Purpose campaign newsletter.
          </Paragraph>
          <CtaLink
            variant="solid"
            icon="arrow-right"
            curve="br"
            href="faq"
            className="su-rs-mt-0"
          >
            Sign up
          </CtaLink>
        </section>
      </div>
      <div>
        <section>
          <Heading as="h3" size={1} font="druk-wide" uppercase className="su-rs-mb-0">
            Initiatives
          </Heading>
          <ul className="su-list-unstyled children:su-mb-06em">
            <li><CtaLink color="black" href={routes.changingHumanExperience()}>Changing Human Experience</CtaLink></li>
          </ul>
        </section>
      </div>
      <div>
        <section>
          <Heading as="h3" size={1} font="druk-wide" uppercase className="su-rs-mb-0">
            Schools
          </Heading>
          <ul className="su-list-unstyled children:su-mb-06em">
            {Object.values(schools).map((school) => (
              <li key={school.name} className="children:su-inline-block">
                <CtaLink color="black" href={school.href}>{school.name}</CtaLink>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Grid>
  </Container>
);
