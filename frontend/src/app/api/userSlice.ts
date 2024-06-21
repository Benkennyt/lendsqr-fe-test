import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./agent";


export const getUsers = createAsyncThunk<User[], void>(
  'users/getUsers',
  async (_, thunkAPI) => {
    try {
      const response = await api.get<User[]>('2d32fd9a-a765-458a-b7e3-92f2790a1ea0');
      return response.data; 
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);


const initialState: UsersState = {
  isLoading: false,
  data: [],
  isError: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
        state.isError = false; 
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false; 
      })
      .addCase(getUsers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default usersSlice.reducer;
