import { Paragraph, Heading, Text } from '../Typography';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { Logo } from '../Logo';
import { CtaLink } from '../Cta';
import { schools } from '@/utilities/externalLinks';
import { initiatives, themes } from '@/utilities/routes';

/**
 * This is the earlier version of the local footer.
 * Currently not in used but we might come back to this later.
 * See LocalFooterMvp for current implementation.
 */

export const LocalFooter = () => (
  <Container bgColor="white" py={8}>
    <Logo isLink color="black" className="w-300 md:w-400 2xl:w-[56rem] fill-gc-black" />
    <Grid gap="default" as="nav" aria-label="Local footer" xl={3} pt={7}>
      <div>
        <section>
          <Heading as="h3" size={1} font="druk-wide" uppercase className="rs-mb-0">
            About
          </Heading>
          <Text as="address" leading="normal">
            <Text weight="semibold" className="whitespace-pre-line">Stanford Office of Development</Text>
            P.O. Box 20466<br />
            Stanford, CA 94309-0466<br />
            (650) 724-0627<br />
          </Text>
          <Text className="rs-mt-0 rs-mb-3">Tax ID: 94-1156365</Text>
          <ul className="list-unstyled *:mb-04em">
            <li><CtaLink color="black" icon="arrow-right" href="contact-us" className="inline-block">Contact us</CtaLink></li>
            <li><CtaLink color="black" icon="arrow-right" href="faq" className="inline-block">FAQs</CtaLink></li>
          </ul>
          <CtaLink
            color="black"
            variant="ghost-swipe"
            icon="arrow-right"
            curve="br"
            href="faq"
            className="rs-mt-2"
          >
            How to give
          </CtaLink>
        </section>
        <section className="rs-mt-4">
          <Heading as="h3" size={1} font="druk-wide" uppercase className="rs-mb-0">
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
            className="rs-mt-0"
          >
            Sign up
          </CtaLink>
        </section>
      </div>
      <div>
        <section>
          <Heading as="h3" size={1} font="druk-wide" uppercase className="rs-mb-0">
            Initiatives
          </Heading>
          <ul className="list-unstyled *:mb-06em">
            {Object.values(initiatives).map((initiative) => (
              <li key={initiative.name}>
                <CtaLink color="black" href={initiative.path} className="inline-block">{initiative.name}</CtaLink>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div>
        <section>
          <Heading as="h3" size={1} font="druk-wide" uppercase className="rs-mb-0">
            Themes
          </Heading>
          <ul className="list-unstyled *:mb-06em">
            {Object.values(themes).map((theme) => (
              <li key={theme.name}>
                <CtaLink color="black" href={theme.path} className="inline-block">{theme.name}</CtaLink>
              </li>
            ))}
          </ul>
        </section>
        <section className="rs-mt-6">
          <Heading as="h3" size={1} font="druk-wide" uppercase className="rs-mb-0">
            Schools
          </Heading>
          <ul className="list-unstyled *:mb-06em">
            {Object.values(schools).map((school) => (
              <li key={school.name}>
                <CtaLink color="black" href={school.href} className="inline-block">{school.name}</CtaLink>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Grid>
  </Container>
);
