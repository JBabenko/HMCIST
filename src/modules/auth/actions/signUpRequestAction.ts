import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser } from '~/modules/auth/models/User.model';

export type TSignUpPayload = IUser;

export interface ISignUpResponse {
  token: string;
}

export const signUpRequestAction = createAsyncThunk(
  'signUpRequest',
  async (payload: TSignUpPayload) => {
    const res = await axios.post<ISignUpResponse>('/api/auth/register', payload);
    return res.data;
  },
);
