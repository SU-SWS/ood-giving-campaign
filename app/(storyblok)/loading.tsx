import { FlexBox } from '@/components/FlexBox';
import { Masthead } from '@/components/Masthead';
import { Container } from '@/components/Container';
import { Rectangle } from '@/components/Skeletons';

const Loading = () => {
  return (
    <div className='bg-black'>
      <Masthead />
      <main>
        <Container width='site' className='rs-my-8'>
          <FlexBox gap direction='row' wrap='wrap'>
            <Rectangle />
          </FlexBox>
        </Container>
      </main>
    </div>
  );
};

export default Loading;