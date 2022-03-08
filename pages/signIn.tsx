import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { IUser, userValidationSchema } from '~/models/User.model';

const SignUp: NextPage = () => {
  const initialValues: IUser = {
    email: '',
    password: '',
  };

  const onSubmit = async (values: IUser) => {
    try {
      const res = await axios.post('/api/auth/login', values);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Head>
        <title>How Match Can I Spend Today?</title>
        <meta name="description" content="How Match Can I Spend Today app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Formik
        initialValues={initialValues}
        validationSchema={userValidationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
