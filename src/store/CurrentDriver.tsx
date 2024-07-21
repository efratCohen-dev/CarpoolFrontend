import { createSlice } from "@reduxjs/toolkit";
import { IDriver } from "../componnent/interface/IDriver";

const initValue= {
    currentDriver: {} as IDriver  
  };

const CurrentDriverSlice = createSlice({
    name: "driver",
    initialState: initValue,
    reducers: {
        getCurrentDriver: (state, action) => {
            state.currentDriver = action.payload.res;
            
        },
    
        updateDriver: (state, action) => {
           
        }

    }
});

export const { updateDriver, getCurrentDriver } = CurrentDriverSlice.actions;
export default CurrentDriverSlice.reducer;