import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    origin: null,
    destination: null,
    travelTimeInformation: null,
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin =  action.payload;
        },
        setDestination: (state, action) => {
            state.destination =  action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation =  action.payload;
        },
    },
});

export const {setOrigin, setDestination, 
    setTravelTimeInformation} = navSlice.actions;

//include selectors to be able to grab data from the data layout
//A good practice is to have one selector for each case

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;