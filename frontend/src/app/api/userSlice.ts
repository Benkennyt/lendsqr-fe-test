import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import api from "./agent";
import axios from "axios";


export const getUsers = createAsyncThunk<User[], void>(
  'getUsers',
  async (_, thunkAPI) => {
    try {
      const response = await api.get<User[]>('2d32fd9a-a765-458a-b7e3-92f2790a1ea0');
      return response.data; 
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(`Error: ${error.response.status} - ${error.response.data}`);
      } else if (axios.isAxiosError(error) && error.request) {
        return thunkAPI.rejectWithValue('Network error: Please check your internet connection.');
      } else {
        return thunkAPI.rejectWithValue('An unexpected error occurred.');
      }
    }
  }
);

const initialState: UsersState = {
  isLoading: false,
  data: [],
  isError: false,
  errorMessage: '',
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
        state.errorMessage = '';
      })
      .addCase(getUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
        state.errorMessage = '';
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = String(action.payload);
      });
  },
});

export default usersSlice.reducer;
