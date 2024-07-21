import { createSlice } from '@reduxjs/toolkit';
import { IDrive } from '../componnent/interface/IDrive';
import { RootState } from '../Store';

const initValue: { drives: IDrive[] } = {
    drives: [
        // {id: "string", driver: "string", leavingTime:  new Date(), startingPoint: { city: 'בני ברק', street: 'הרב שך', numBuild: 16 }, destination: { city: 'מודעין עילית', street: 'מרומי שדה', numBuild: 20 }, price: 6, places: 4, passengers: ['אפרת','רבקי'] },
        // {id: "string", driver: "string", leavingTime:  new Date(), startingPoint: { city: 'בית שמש', street: 'ריש לקיש', numBuild: 6 }, destination: { city: 'טלזטון', street: 'רימונים', numBuild: 4 }, price: 6, places: 4, passengers: ['אלישבע'] }
    ]
};

const DriveSlice = createSlice({
    name: "drive",
    initialState: initValue,
    reducers: {
        getAll: (state, action) => {
            console.log("drive getAll", action.payload.res);
            state.drives = action.payload.res
        },
        createDrive: (state, action) => {
            // state.drives.push(action.payload.drive);
            console.log("action.payload.drive",action.payload.drive);
            
            state.drives = [... state.drives,...action.payload.drive]
        },
        deleteDrive: (state, action) => {
            console.log('state.drives slice');
            state.drives = state.drives.filter(drive => drive.id?.toString() !== action.payload.id);
            console.log('state.drives slice', state.drives);

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
                    drive.target = {
                        city: action.payload.newDestination.city,
                        street: action.payload.newDestination.street,
                        numBuild: action.payload.newDestination.numBuild
                    }
                    drive.price = action.payload.newPrice;
                    drive.places = action.payload.newPlaces;
                    drive.passengers = action.payload.newPassengers;
                }
                return drive;
            });
        },
        updatePassengersDrive: (state, action) => {
            state.drives = state.drives.map(drive => {
                if (drive.id === action.payload.id) {
                    drive.passengers.push(action.payload.newPassenger);
                }
                return drive;
            });
        }

    }
});

export const { createDrive, deleteDrive, updateDrive, updatePassengersDrive, getAll } = DriveSlice.actions;
export default DriveSlice.reducer;