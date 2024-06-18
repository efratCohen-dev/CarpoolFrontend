import { configureStore } from '@reduxjs/toolkit';
import DriverSlice from './store/Driver';
import DriveSlice from './store/Drive'

export const myStore = configureStore({
    reducer: {
        DriveSlice,
        DriverSlice,
    }
})

export type AppDispatch = typeof myStore.dispatch;
export type RootState  = ReturnType<typeof myStore.getState>;