import { cnb } from 'cnbuilder';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Paragraph } from '../Typography';
import { WordBlock } from '../WordBlock';
import { ImageOverlay } from '../ImageOverlay';

export type BlockBannerProps = React.HTMLAttributes<HTMLDivElement> & {
  imageSrc?: string;
  phrase1?: string;
  phrase2?: string;
  body?: string;
}

export const BlockBanner = ({
  imageSrc,
  phrase1,
  phrase2,
  body,
  className,
  ...props
}: BlockBannerProps) => (
  <Container
    {...props}
    width="full"
    bgColor="black"
    className={cnb('pb-200 2xl:pb-400 relative', className)}
  >
    <ImageOverlay imageSrc={imageSrc} overlay="black-top-bottom" />
    <Container pt={10} className="relative z-20">
      <FlexBox direction="col" alignItems="center">
        <WordBlock animation="slideInFromLeft" isLarge className="md:self-start 2xl:self-center 2xl:-ml-250">{phrase1}</WordBlock>
        <WordBlock animation="slideInFromRight" isLarge className="md:self-end 2xl:self-center 2xl:ml-450 -mt-6 md:-mt-8 lg:-mt-12">{phrase2}</WordBlock>
        <Paragraph size={2} weight="semibold" leading="tight" className="rs-my-6 max-w-[85rem] text-shadow-md">
          {body}
        </Paragraph>
      </FlexBox>
    </Container>
  </Container>
);
