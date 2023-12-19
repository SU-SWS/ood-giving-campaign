import { FlexBox } from '@/components/FlexBox';
import { Masthead } from '@/components/Masthead';
import DynamicLoad from 'next/dynamic';
import { Container } from '@/components/Container';
const Skeleton = DynamicLoad(() => import('react-loading-skeleton'), { ssr: false });

const Loading = () => {
  return (
    <div className='bg-black'>
      <Masthead />
      <main>
        <Container width='site' className='rs-my-8'>
          <FlexBox gap direction='row' wrap='wrap'>
            <Skeleton height={300} highlightColor='rgba(67,66,62,.8)' containerClassName='w-full'/>
            <Skeleton height={300} highlightColor='rgba(67,66,62,.8)' containerClassName='min-w-[25%] flex-grow' />
            <Skeleton height={300} highlightColor='rgba(67,66,62,.8)' containerClassName='min-w-[25%] flex-grow' />
            <Skeleton height={300} highlightColor='rgba(67,66,62,.8)' containerClassName='min-w-[25%] flex-grow' />
            <Skeleton height={200} highlightColor='rgba(67,66,62,.8)' containerClassName='min-w-[40%] flex-grow' />
          </FlexBox>
        </Container>
      </main>
    </div>
  );
};

export default Loading;