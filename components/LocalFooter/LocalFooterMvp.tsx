import { Paragraph, Heading, Text } from '../Typography';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { LogoLockup } from '../Logo';
import { CtaLink } from '../Cta';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { FlexBox } from '../FlexBox';
import * as links from '@/utilities/externalLinks';

export const LocalFooterMvp = () => (
  <Container
    as="nav"
    bgColor="black"
    py={10}
    aria-label="Local footer menu"
    className="relative overflow-hidden bg-no-repeat bg-bottom bg-cover md:bg-contain"
    style={{ backgroundImage: `url('${getProcessedImage('https://a-us.storyblok.com/f/1005200/3200x2134/f8433eac94/fdf67c168f2e36a6bc30c085eb392c13.jpg', '2000x0')}')` }}
  >
    {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black-true/60" /> */}
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black-true via-black-true/80 to-black-true/40" />
    <FlexBox direction="col" className="items-start lg:items-center relative z-10 w-full">
      <LogoLockup text="Impact Stories" color="white" isLink className="scale-125 origin-left sm:scale-100 text-[1.6em]" />
      <FlexBox wrap="wrap" className="list-unstyled divide-x divide-white children:inline-block children:mb-0 children:px-16 md:children:px-30 xl:children:px-48 children:leading-display first:children:pl-0 last:children:pr-0 lg:mx-auto w-fit rs-mt-2 gap-y-10">
        <li><CtaLink color="white" href={links.ood.giving} size="large">Giving to Stanford</CtaLink></li>
        <li><CtaLink color="white" href={links.ood.contact} size="large">Contact us</CtaLink></li>
        <li><CtaLink color="white" href={links.ood.leadership} size="large">Leadership</CtaLink></li>
        <li><CtaLink color="white" href={links.ood.waysToGive} size="large">How to make a gift</CtaLink></li>
      </FlexBox>
      <Grid lg={2} pt={8} gap="default" className="w-full xl:gap-x-[7vw] 3xl:gap-x-300">
        <div>
          <Heading as="h3" size={3}>
            Get the latest in your inbox
          </Heading>
          <Paragraph variant="big" leading="display">
            Sign up to receive Stanford’s storytelling newsletter.
          </Paragraph>
          <CtaLink
            // This might become a button to activate a Typeform widget in-situ
            href={links.ood.newsletterSignUp}
            variant="solid"
            icon="arrow-right"
          >
            Sign up
          </CtaLink>
        </div>
        <div className="rs-mt-3 lg:mt-0">
          <Heading as="h3" size={3}>
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
