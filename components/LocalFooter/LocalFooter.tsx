import React from 'react';
import Image from 'next/image';
import { Paragraph, Heading, Text } from '../Typography';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { Logo } from '../Logo';
import { CtaLink } from '../Cta';
import { schools } from '@/utilities/externalLinks';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { initiatives, themes } from '@/utilities/routes';

export const LocalFooter = () => (
  <>
    <Image
      width={2000}
      height={40}
      alt=""
      loading="lazy"
      src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2000x40/f23b53c0e4/steve-johnson-cropped-2000x40-02.jpg') || ''}
      className="su-w-full"
    />
    <Container bgColor="white" py={8}>
      <Logo isLink color="black" className="su-w-300 md:su-w-400 2xl:su-w-[56rem] su-fill-gc-black" />
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
              <li><CtaLink color="black" icon="arrow-right" href="contact-us" className="su-inline-block">Contact us</CtaLink></li>
              <li><CtaLink color="black" icon="arrow-right" href="faq" className="su-inline-block">FAQs</CtaLink></li>
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
              {Object.values(initiatives).map((initiative) => (
                <li key={initiative.name}>
                  <CtaLink color="black" href={initiative.path} className="su-inline-block">{initiative.name}</CtaLink>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div>
          <section>
            <Heading as="h3" size={1} font="druk-wide" uppercase className="su-rs-mb-0">
              Themes
            </Heading>
            <ul className="su-list-unstyled children:su-mb-06em">
              {Object.values(themes).map((theme) => (
                <li key={theme.name}>
                  <CtaLink color="black" href={theme.path} className="su-inline-block">{theme.name}</CtaLink>
                </li>
              ))}
            </ul>
          </section>
          <section className="su-rs-mt-6">
            <Heading as="h3" size={1} font="druk-wide" uppercase className="su-rs-mb-0">
              Schools
            </Heading>
            <ul className="su-list-unstyled children:su-mb-06em">
              {Object.values(schools).map((school) => (
                <li key={school.name}>
                  <CtaLink color="black" href={school.href} className="su-inline-block">{school.name}</CtaLink>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Grid>
    </Container>
  </>
);
