import { Container } from '../Container';
import { Heading } from '../Typography';
import { FlexBox } from '../FlexBox';
import { TwitterX } from './TwitterX';
import { FacebookF } from './FacebookF';
import { LinkedinIn } from './LinkedinIn';
import { EmailIcon } from './EmailIcon';
import { LinkIcon } from './LinkIcon';
import { WidthBox } from '../WidthBox';

type SocialSharingProps = React.HTMLAttributes<HTMLDivElement> & {
  slug?: string;
};

export const SocialSharing = ({ slug, className }: SocialSharingProps) => {
  return (
    <Container pt={8}>
      <WidthBox width="6">
        <FlexBox justifyContent="between" className="border-b-2 border-b-black">
          <Heading as="h2" font="sans" size="base" weight="semibold">Share this story</Heading>
          <FlexBox>
            <LinkIcon />
            <EmailIcon />
            <FacebookF />
            <TwitterX />
            <LinkedinIn />
          </FlexBox>
        </FlexBox>
      </WidthBox>
    </Container>
  );
};
