import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { userValidationSchema } from '~/modules/auth/models/User.model';
import { useDispatch } from 'react-redux';
import { signInRequestAction, TSignInPayload } from '~/modules/auth/actions/signInRequestAction';
import { AppDispatch } from '~/store';
import Router from 'next/router';

export const SignInPage = React.memo(() => {
  const dispatch = useDispatch() as AppDispatch;

  const initialValues: TSignInPayload = {
    email: '',
    password: '',
  };

  const onSubmit = async (values: TSignInPayload) => {
    try {
      await dispatch(signInRequestAction(values));
      Router.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
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
});
