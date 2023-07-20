import { cnb } from 'cnbuilder';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Paragraph } from '../Typography';
import { WordBlock } from '../WordBlock';

export type BlockPosterProps = React.HTMLAttributes<HTMLDivElement> & {
  imageSrc?: string;
  phrase1?: string;
  phrase2?: string;
  body?: string;
}

export const BlockPoster = ({
  imageSrc,
  phrase1,
  phrase2,
  body,
  className,
  ...props
}: BlockPosterProps) => (
  <Container
    {...props}
    width="full"
    bgColor="black"
    className={cnb('pb-200 2xl:pb-400 relative', className)}
  >
    <img
      src={imageSrc}
      alt=""
      loading="lazy"
      className="absolute w-full h-full object-cover"
    />
    <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-gc-black via-transparent via-40% to-gc-black" />
    <Container pt={10} className="relative z-20">
      <FlexBox direction="col" alignItems="center">
        <WordBlock animation="slideInFromLeft" isLarge className="md:self-start 2xl:self-center 2xl:-ml-250">{phrase1}</WordBlock>
        <WordBlock animation="slideInFromRight" isLarge className="md:self-end 2xl:self-center 2xl:ml-450">{phrase2}</WordBlock>
        <Paragraph size={2} weight="semibold" leading="tight" className="rs-my-6 max-w-[85rem] text-shadow-md">
          {body}
        </Paragraph>
      </FlexBox>
    </Container>
  </Container>
);
