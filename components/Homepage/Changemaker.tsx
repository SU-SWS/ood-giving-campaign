import { AnimateInView } from '@/components/Animate';
import { Container } from '@/components/Container';
import { FlexBox } from '@/components/FlexBox';
import { Heading, Paragraph, Text } from '@/components/Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';

type ChangemakerProps = React.HTMLAttributes<HTMLDivElement> & {
  changemakerCards?: React.ReactNode;
  changemakerBgImageSrc?: string;
  changemakerBgImageFocus?: string;
  changemakerHeading1?: string;
  changemakerHeading2?: string;
  changemakerHeading3?: React.ReactNode;
  changemakerIntro?: string;
  changemakerCta?: React.ReactNode;
};

export const Changemaker = ({
  changemakerCards,
  changemakerBgImageSrc,
  changemakerBgImageFocus,
  changemakerHeading1,
  changemakerHeading2,
  changemakerHeading3,
  changemakerIntro,
  changemakerCta,
}: ChangemakerProps) => {
  if (!changemakerCards) {
    return null;
  }
  const bgImage = getProcessedImage(changemakerBgImageSrc, '2000x1500', changemakerBgImageFocus);

  return (
    <Container
      width="full"
      className="relative overflow-hidden lg:bg-fixed bg-no-repeat bg-top bg-cover"
      bgColor="black"
      style={{ backgroundImage: `url('${bgImage}')` }}
      py={10}
    >
      <div className="absolute top-0 left-0 size-full bg-gradient-to-t from-gc-black to-black/30 lg:to-transparent via-gc-black/40" />
      <Container className="relative z-10">
        <Heading font="serif" leading="tight" align="center" className="fluid-type-6 md:fluid-type-7 max-w-[110rem] mx-auto rs-mb-4">
          {changemakerHeading1 &&
            <AnimateInView animation="slideInFromRight">
              <Text as="span" font="serif" className="block">
                {changemakerHeading1}
              </Text>
            </AnimateInView>
          }
          {changemakerHeading2 &&
            <AnimateInView animation="slideInFromLeft" delay={0.1}>
              <Text as="span" font="serif" className="block">
                {changemakerHeading2}
              </Text>
            </AnimateInView>
          }
          {changemakerHeading3 &&
            <AnimateInView animation="slideInFromRight" delay={0.2}>
              <Text as="span" font="serif" className="block">
                {changemakerHeading3}
              </Text>
            </AnimateInView>
          }
        </Heading>
        {changemakerIntro &&
          <AnimateInView animation="slideUp" delay={0.4}>
            <Paragraph size={2} weight="semibold" noMargin font="serif" align="center" className="max-w-700 mx-auto rs-my-4 text-balance" leading="display">
              {changemakerIntro}
            </Paragraph>
          </AnimateInView>
        }
        {changemakerCards}
        {changemakerCta &&
          <FlexBox justifyContent="center" className="rs-mt-4">
            {changemakerCta}
          </FlexBox>
        }
      </Container>
    </Container>
  );
};
