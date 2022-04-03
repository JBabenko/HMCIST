import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';
import { IUser } from '~/modules/auth/models/User.model';

export type TSignInPayload = Pick<IUser, 'email' | 'password'>;

export interface ISignInResponse {
  token: string;
}

export const signInRequestAction = createAsyncThunk(
  'signInRequest',
  async (payload: TSignInPayload) => {
    const res = await axios.post<ISignInResponse>('/api/auth/login', payload);
    Cookies.set('token', res.data.token);
    return res.data;
  },
);
