import { Grid } from '@/components/Grid';
import { Masthead } from '@/components/Masthead';
import dynamic from 'next/dynamic';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingRoot = () => {
const Skeleton = dynamic(() => import('react-loading-skeleton'), { ssr: false });
  return (
    <>
      <Masthead />
      <Grid>
        <Skeleton height={400} count={6} />
      </Grid>
    </>

  );
};

export default LoadingRoot;