import { configureStore} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import usersReducer from "../api/userSlice";





export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});



export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
