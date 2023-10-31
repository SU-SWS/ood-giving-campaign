import { useState } from 'react';
import { useCopyToClipboard } from 'usehooks-ts';
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
import { HeroIcon } from '../HeroIcon';
import { config } from '@/utilities/config';
import * as styles from './SocialSharing.styles';

type SocialSharingProps = React.HTMLAttributes<HTMLDivElement> & {
  slug?: string;
  isTop?: boolean; // The widget at the top of the story has different styles
};

export const SocialSharing = ({ slug, isTop, className }: SocialSharingProps) => {
  const [copiedText, copy] = useCopyToClipboard();
  const [buttonState, setButtonState] = useState('default');

  const handleCopyClick = () => {
    copy(`${config.siteUrlProd}/${slug}`);
    setButtonState('copied');

    // Reset the button state after 5 seconds
    setTimeout(() => {
      setButtonState('default');
    }, 5000);
  };

  return (
    <Container pt={8}>
      <WidthBox width="6">
        <FlexBox alignItems="center" justifyContent="between" className={styles.flexbox(isTop)}>
          <Heading as="h2" font="sans" size="base" weight="semibold" leading="none" className="mb-0">
            Share this story
          </Heading>
          <FlexBox className="gap-6 md:gap-12">
            <SocialButton
              onClick={handleCopyClick}
              aria-label={buttonState === 'copied' ? 'URL has been copied' : 'Copy story URL'}
            >
              {buttonState === 'copied' ? <HeroIcon icon="copy" /> : <LinkIcon />}
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
