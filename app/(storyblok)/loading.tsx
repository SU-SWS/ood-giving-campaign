import { Grid } from '@/components/Grid';
import { Masthead } from '@/components/Masthead';
import dynamic from 'next/dynamic';
import 'react-loading-skeleton/dist/skeleton.css';

const Loading = () => {
const Skeleton = dynamic(() => import('react-loading-skeleton'), { ssr: false });
  return (
    <>
      <Masthead />
      <Grid>
        <Skeleton height={200} count={4} />
      </Grid>
    </>

  );
};

export default Loading;