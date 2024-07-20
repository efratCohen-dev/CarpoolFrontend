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
            console.log('getCurrentDriver slice');
            state.currentDriver = action.payload.res;
            console.log('slice2 currentDriver:', state.currentDriver );
            
        },
    
        updateDriver: (state, action) => {
           
        }

    }
});

export const { updateDriver, getCurrentDriver } = CurrentDriverSlice.actions;
export default CurrentDriverSlice.reducer;