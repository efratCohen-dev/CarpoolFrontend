import { configureStore } from '@reduxjs/toolkit';
import DriverSlice from './store/Driver';
import DriveSlice from './store/Drive'
import CurrentDriverSlice from './store/CurrentDriver'
import PassengerSlice from './store/Passenger'

export const myStore = configureStore({
    reducer: {
        DriveSlice,
        DriverSlice,
        CurrentDriverSlice,
        PassengerSlice,
    }
})

export type AppDispatch = typeof myStore.dispatch;
export type RootState  = ReturnType<typeof myStore.getState>;