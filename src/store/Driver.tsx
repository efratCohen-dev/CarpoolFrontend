import { createSlice } from "@reduxjs/toolkit";
import { IDriver } from "../componnent/interface/IDriver";

const initValue = {
    drivers: [] as IDriver[]
}

const DriverSlice = createSlice({
    name: "driver",
    initialState: initValue,
    reducers: {
        getAll: (state, action) => {
            state.drivers = action.payload.res;
        },
        createDriver: (state, action) => {
            state.drivers.push(action.payload.driver);
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

export const { createDriver, deleteDriver, updateDriver, getAll } = DriverSlice.actions;
export default DriverSlice.reducer;