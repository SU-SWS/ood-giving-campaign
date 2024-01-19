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
  slug: string;
  title?: string;
  isTop?: boolean; // The widget at the top of the story has different styles
};

export const SocialSharing = ({
  slug,
  title,
  isTop,
  className,
}: SocialSharingProps) => {
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

  const safeUrl = encodeURIComponent(`${config.siteUrlProd}/${slug}`);
  const safeTitle = encodeURIComponent(title);
  const facebookBaseURL = 'https://www.facebook.com/sharer/sharer.php?u=';
  const twitterBaseURL = 'https://twitter.com/intent/tweet?url=';
  const linkedinBaseURL = 'https://www.linkedin.com/shareArticle?mini=true&url=';

  return (
    <Container pt={8} className={className}>
      <WidthBox width="6">
        <FlexBox alignItems="center" justifyContent="between" className={styles.flexbox(isTop)}>
          <Heading as="h2" font="sans" size="base" weight="semibold" leading="none" className={styles.heading}>
            Share this story
          </Heading>
          <FlexBox className={styles.buttonWrapper}>
            <SocialButton
              onClick={handleCopyClick}
              aria-label={buttonState === 'copied' ? 'URL has been copied' : 'Copy story URL'}
            >
              {buttonState === 'copied' ? <HeroIcon icon="copy" /> : <LinkIcon aria-hidden width="20" />}
            </SocialButton>
            <SocialButton
              aria-label="Share via email"
              href={`mailto:?subject=${title ? safeTitle : 'Check out this story'}&body=${safeUrl}`}
            >
              <EmailIcon aria-hidden width="18" />
            </SocialButton>
            <SocialButton
              aria-label="Share on Facebook"
              href={`${facebookBaseURL}${safeUrl}`}
            >
              <FacebookF aria-hidden width="12" />
            </SocialButton>
            <SocialButton
              aria-label="Share on X (formerly Twitter)"
              href={`${twitterBaseURL}${safeUrl}${title ? `&text=${safeTitle}` : ''}`}
            >
              <TwitterX aria-hidden width="18" />
            </SocialButton>
            <SocialButton
              aria-label="Share on LinkedIn"
              href={`${linkedinBaseURL}${safeUrl}`}
            >
              <LinkedinIn aria-hidden width="17" />
            </SocialButton>
          </FlexBox>
        </FlexBox>
      </WidthBox>
    </Container>
  );
};
