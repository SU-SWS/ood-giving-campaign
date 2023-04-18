import * as React from 'react';
import { Layout } from '../components/Layout';
import { Heading, Paragraph } from '../components/Typography';

const NotFoundPage = () => (
  <Layout>
    <Heading as="h1">404: Not Found</Heading>
    <Paragraph>You just hit a route that doesn&#39;t exist... the sadness.</Paragraph>
  </Layout>
);

export default NotFoundPage;
