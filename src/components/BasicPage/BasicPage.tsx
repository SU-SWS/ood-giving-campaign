import * as React from 'react';
import { Layout } from '../Layout';

type BasicPageProps = {
  heading: string;
  children?: React.ReactNode;
};

export const BasicPage = ({ heading, children }: BasicPageProps) => (
  <Layout>
    {children}
  </Layout>
);
