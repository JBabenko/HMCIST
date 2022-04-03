import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { withNoAuth } from '~/server/sspMiddlewares/withNoAuth';
import { SignUpPage } from '~/modules/auth/components/SignUpPage';

const SignUp: NextPage = () => (
  <div>
    <Head>
      <title>How Match Can I Spend Today?</title>
      <meta name="description" content="How Match Can I Spend Today app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <SignUpPage />
  </div>
);

export const getServerSideProps = withNoAuth;

export default SignUp;
