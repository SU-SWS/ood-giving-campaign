import { Paragraph, Heading, Text } from '../Typography';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { LogoLockup } from '../Logo';
import { CtaLink } from '../Cta';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { FlexBox } from '../FlexBox';

export const LocalFooterMvp = () => (
  <Container as="nav" bgColor="black" py={10} aria-label="Local footer menu">
    <div className="w-full">
      <LogoLockup text="Impact Stories" color="white" isLink className="text-[1.6em]" />
      <FlexBox wrap="wrap" className="list-unstyled divide-x divide-white children:inline-block children:mb-0 children:px-16 md:children:px-48 children:leading-display first:children:pl-0 last:children:pr-0 mx-auto w-fit rs-mt-2 gap-y-10">
        <li><CtaLink color="white" href="faq" className="inline-block" size="large">Giving to Stanford</CtaLink></li>
        <li><CtaLink color="white" href="contact-us" className="inline-block" size="large">Contact us</CtaLink></li>
        <li><CtaLink color="white" href="contact-us" className="inline-block" size="large">Leadership</CtaLink></li>
        <li><CtaLink color="white" href="contact-us" className="inline-block" size="large">How to make a gift</CtaLink></li>
      </FlexBox>
      <Grid lg={2} gap="default" pt={8}>
        <div>
          <Heading as="h3" size={3}>
            Get the latest in your inbox
          </Heading>
          <Paragraph variant="big">
            Sign up to receive Stanford’s storytelling newsletter.
          </Paragraph>
          <CtaLink href="/" variant="solid">Sign up</CtaLink>
        </div>
        <div>
          <Heading as="h3" size={3}>
            We can do this, together
          </Heading>
          <Paragraph variant="big">
            With your support, this vision will become reality.
          </Paragraph>
          <CtaLink href="/" variant="ghost-swipe" color="white">Find ways to give</CtaLink>
        </div>
      </Grid>
    </div>
  </Container>
);
