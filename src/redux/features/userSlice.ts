import {createSlice} from '@reduxjs/toolkit';

interface UserState {
  id: string;
  email: string;
}

const initialState: UserState = {
  id: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, {payload}: {payload: {id: string; email: string}}) => {
      state.id = payload.id;
      state.email = payload.email;
    },
  },
});

export default userSlice.reducer;

export const {setUser} = userSlice.actions;
