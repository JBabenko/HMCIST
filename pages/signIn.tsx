import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { SignInPage } from '~/modules/auth/components/SignInPage';
import { withNoAuth } from '~/server/sspMiddlewares/withNoAuth';

const SignIn: NextPage = () => (
  <div>
    <Head>
      <title>How Match Can I Spend Today?</title>
      <meta name="description" content="How Match Can I Spend Today app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <SignInPage />
  </div>
);

export const getServerSideProps = withNoAuth;

export default SignIn;
