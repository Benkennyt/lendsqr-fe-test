import { configureStore} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";





export const store = configureStore({
  reducer: {
   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});



export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
