import { FlexBox } from '@/components/FlexBox';
import { Masthead } from '@/components/Masthead';
import DynamicLoad from 'next/dynamic';
import { Container } from '@/components/Container';
const Skeleton = DynamicLoad(() => import('react-loading-skeleton'), { ssr: false });

const Loading = () => {
  return (
    <div className="bg-black">
      <Masthead />
      <main>
        <Container width="site" className="rs-my-10">
          <FlexBox gap direction="row" wrap="wrap">
            <Skeleton height={500} highlightColor="rgba(255,255,255,0.2)" baseColor="rgba(0,0,0,0.6)" containerClassName="w-full"/>
            <Skeleton height={300} highlightColor="rgba(255,255,255,0.2)" baseColor="rgba(0,0,0,0.6)" containerClassName="w-full"/>
          </FlexBox>
        </Container>
      </main>
    </div>
  );
};

export default Loading;
