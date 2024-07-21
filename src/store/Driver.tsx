import { createSlice } from "@reduxjs/toolkit";
import { IDriver } from "../componnent/interface/IDriver";

const initValue = {
    drivers: [] as IDriver[]
}

const DriverSlice = createSlice({
    name: "driver",
    initialState: initValue,
    reducers: {
        getAllDrivers: (state, action) => {
            state.drivers = action.payload.res;
        },
        createDriver: (state, action) => {
            console.log('slice 1 createDriver',action.payload.driver);
            // state.drivers.push(action.payload.driver);
            state.drivers = [... state.drivers,action.payload.driver]
            console.log('slice 2 state.drivers', state.drivers);
            
        },
        deleteDriver: (state, action) => {
            state.drivers = state.drivers.filter(driver => driver.id !== action.payload.id);
        },
        updateDriver: (state, action) => {
            state.drivers = state.drivers.map(driver => {
                if (driver.id === action.payload.id) {
                    driver.name = action.payload.newName;
                    driver.password = action.payload.newPassword;
                    driver.email = action.payload.newEmail;
                    driver.phone = action.payload.newPhone;
                }
                return driver;
            });
        }

    }
});

export const { createDriver, deleteDriver, updateDriver, getAllDrivers } = DriverSlice.actions;
export default DriverSlice.reducer;