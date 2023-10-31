import { Container } from '../Container';
import { Heading } from '../Typography';
import { FlexBox } from '../FlexBox';
import { TwitterX } from './TwitterX';
import { FacebookF } from './FacebookF';
import { LinkedinIn } from './LinkedinIn';
import { EmailIcon } from './EmailIcon';
import { LinkIcon } from './LinkIcon';
import { WidthBox } from '../WidthBox';
import { SocialButton } from './SocialButton';

type SocialSharingProps = React.HTMLAttributes<HTMLDivElement> & {
  slug?: string;
  isTopVersion?: boolean;
};

export const SocialSharing = ({ slug, isTopVersion, className }: SocialSharingProps) => {
  return (
    <Container pt={8}>
      <WidthBox width="6">
        <FlexBox alignItems="center" justifyContent="between" className="border-b-2 border-b-black rs-pb-1">
          <Heading as="h2" font="sans" size="base" weight="semibold" leading="none" className="mb-0">
            Share this story
          </Heading>
          <FlexBox className="gap-12">
            <SocialButton aria-label="Copy story URL">
              <LinkIcon />
            </SocialButton>
            <SocialButton aria-label="Share this story via email">
              <EmailIcon />
            </SocialButton>
            <SocialButton aria-label="Share this story on Facebook">
              <FacebookF />
            </SocialButton>
            <SocialButton aria-label="Share this story on X">
              <TwitterX />
            </SocialButton>
            <SocialButton aria-label="Share this story on LinkedIn">
              <LinkedinIn />
            </SocialButton>
          </FlexBox>
        </FlexBox>
      </WidthBox>
    </Container>
  );
};
