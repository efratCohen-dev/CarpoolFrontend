import { createSlice } from "@reduxjs/toolkit";
import {IDrive} from "../componnent/interface/IDrive";

const initValue = {
    drives: [] as IDrive[]
}

const DriveSlice = createSlice({
    name: "drive",
    initialState: initValue,
    reducers: {
        getAll: (state, action) => {
            state.drives = action.payload.res
        },
        createDrive: (state, action) => {
            state.drives.push(action.payload.drive);
        },
        deleteDrive: (state, action) => {
            state.drives = state.drives.filter(drive => drive.id !== action.payload.id);
        },
        updateDrive: (state, action) => {
            state.drives = state.drives.map(drive => {
                if (drive.id === action.payload.id) {
                    drive.driver = action.payload.newDriver;
                    drive.leavingTime = action.payload.newLeavingTime;
                    drive.startingPoint = {
                        city: action.payload.newStartingPoint.city,
                        street: action.payload.newStartingPoint.street,
                        numBuild: action.payload.newStartingPoint.numBuild
                    };
                    drive.destination = {
                        city: action.payload.newDestination.city,
                        street: action.payload.newDestination.street,
                        numBuild: action.payload.newDestination.numBuild
                    }
                    drive.price = action.payload.newPrice;
                    drive.availablePlaces = action.payload.newAvailablePlaces;
                    drive.passengers = action.payload.newPassengers;
                }
                return drive;
            });
        }

    }
});

export const { createDrive, deleteDrive, updateDrive, getAll } = DriveSlice.actions;
export default DriveSlice.reducer;