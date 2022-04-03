import React from 'react';
import type { NextPage } from 'next';
import { Test } from '~/components/Test';
import { withAuth } from '~/server/sspMiddlewares/withAuth';

const Home: NextPage = () => (
  <div><Test /></div>
);

export const getServerSideProps = withAuth;

export default Home;
