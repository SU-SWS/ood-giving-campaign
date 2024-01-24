'use client';
import { Container } from '@/components/Container';
import { Card } from '@/components/Skeletons';
import { FlexBox } from '@/components/FlexBox';

const Loading = () => {
  return (
    <Container width='site' className='rs-my-6'>
      <FlexBox gap direction='row' wrap='wrap'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </FlexBox>
    </Container>
  );
};

export default Loading;