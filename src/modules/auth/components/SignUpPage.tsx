import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import Router from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { signUpRequestAction } from '~/modules/auth/actions/signUpRequestAction';
import { IUser, userValidationSchema } from '~/modules/auth/models/User.model';
import { AppDispatch } from '~/store';

export const SignUpPage = React.memo(() => {
  const dispatch = useDispatch() as AppDispatch;

  const initialValues: IUser = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };

  const onSubmit = async (values: IUser) => {
    try {
      await dispatch(signUpRequestAction(values));
      Router.push('/signIn');
    } catch (err) {
      console.error(err);
    }
  };

  return (
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
        <Field name="firstName" />
        <ErrorMessage name="firstName" component="div" />
        <Field name="lastName" />
        <ErrorMessage name="lastName" component="div" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
});
