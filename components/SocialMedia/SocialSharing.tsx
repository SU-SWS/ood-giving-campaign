'use client';
import { useState } from 'react';
import { useCopyToClipboard } from 'usehooks-ts';
import { Container } from '@/components/Container';
import { Heading, Text } from '@/components/Typography';
import { FlexBox } from '@/components/FlexBox';
import { TwitterX } from './TwitterX';
import { FacebookF } from './FacebookF';
import { LinkedinIn } from './LinkedinIn';
import { EmailIcon } from './EmailIcon';
import { LinkIcon } from './LinkIcon';
import { SocialButton } from './SocialButton';
import { WidthBox } from '@/components/WidthBox';
import { HeroIcon } from '@/components/HeroIcon';
import { config } from '@/utilities/config';
import * as styles from './SocialSharing.styles';

type SocialSharingProps = React.HTMLAttributes<HTMLDivElement> & {
  slug: string;
  title?: string;
  isDark?: boolean; // Use dark theme if true (light text and icons)
  isTop?: boolean; // The widget at the top of the story has different styles
};

export const SocialSharing = ({
  slug,
  title,
  isDark,
  isTop,
  className,
}: SocialSharingProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        <FlexBox alignItems="center" justifyContent="between" className={styles.flexbox(isTop, isDark)}>
          <Heading color={isDark ? 'white' : 'black'} as="h2" font="sans" size="base" weight="semibold" leading="none" className={styles.heading}>
            Share this story
          </Heading>
          <FlexBox as="ul" className={styles.buttonWrapper}>
            <li>
              <SocialButton
                isDark={isDark}
                onClick={handleCopyClick}
                aria-label={buttonState === 'copied' ? 'Story link has been copied' : 'Copy story link'}
              >
                {buttonState === 'copied' ? <HeroIcon icon="copy" /> : <LinkIcon aria-hidden width="20" />}
              </SocialButton>
              <Text
                color={isDark ? 'black' : 'white'}
                className={styles.copiedTextBubble(isDark)}
                weight="semibold"
                leading="none"
                icon="check"
                aria-hidden={buttonState !== 'copied'}
              >
                Link copied
              </Text>
            </li>
            <li>
              <SocialButton
                isDark={isDark}
                aria-label="Share via email"
                href={`mailto:?subject=${title ? safeTitle : 'Check out this story'}&body=${safeUrl}`}
              >
                <EmailIcon aria-hidden width="18" />
              </SocialButton>
            </li>
            <li>
              <SocialButton
                isDark={isDark}
                aria-label="Share on Facebook"
                href={`${facebookBaseURL}${safeUrl}`}
              >
                <FacebookF aria-hidden width="12" />
              </SocialButton>
            </li>
            <li>
              <SocialButton
                isDark={isDark}
                aria-label="Share on X (formerly Twitter)"
                href={`${twitterBaseURL}${safeUrl}${title ? `&text=${safeTitle}` : ''}`}
              >
                <TwitterX aria-hidden width="18" />
              </SocialButton>
            </li>
            <li>
              <SocialButton
                isDark={isDark}
                aria-label="Share on LinkedIn"
                href={`${linkedinBaseURL}${safeUrl}`}
              >
                <LinkedinIn aria-hidden width="17" />
              </SocialButton>
            </li>
          </FlexBox>
        </FlexBox>
      </WidthBox>
    </Container>
  );
};
