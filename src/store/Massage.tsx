import { createSlice } from "@reduxjs/toolkit";
import { IMassage } from "../componnent/interface/IMassage";

const initValue = {
    massages: [] as IMassage[]
}

const MassageSlice = createSlice({
    name: "massage",
    initialState: initValue,
    reducers: {
        getAll: (state, action) => {
            state.massages = action.payload.res;
        },
        createMassage: (state, action) => {
            state.massages.push(action.payload.driver);
        },
        deleteMassage: (state, action) => {
            state.massages = state.massages.filter(massage => massage.id !== action.payload.id);
        }
    }
});

export const { createMassage, deleteMassage, getAll } = MassageSlice.actions;
export default MassageSlice.reducer;