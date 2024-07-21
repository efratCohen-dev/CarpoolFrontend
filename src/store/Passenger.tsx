import { createSlice } from "@reduxjs/toolkit";
import { IPassenger } from "../componnent/interface/IPassenger";

const initValue= {
    passenger: {} as IPassenger  
  };

const PassengerSlice = createSlice({
    name: 'passenger',
    initialState: initValue,
    reducers: {
        getCurrentPassenger: (state, action) => {
            state.passenger = action.payload.res;            
        }, 
    }
});

export const { getCurrentPassenger } = PassengerSlice.actions;
export default PassengerSlice.reducer;