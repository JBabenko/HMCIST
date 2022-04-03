import { PayloadAction } from '@reduxjs/toolkit/src/createAction';
import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '~/models/User.model';

export interface IAuthInitialState {
  user: IUser | null;
  token: string | null;
}

export const authInitialState: IAuthInitialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setUser: (draftState, action: PayloadAction<IUser>) => {
      draftState.user = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
