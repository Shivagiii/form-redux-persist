import { createSlice } from "@reduxjs/toolkit"

const initialState={
    firstName:'',
    lastName:'',
    number:'',
    email:''
}

const formSlice = createSlice({
    name:'form',
    initialState,
    reducers:{
        updateFormData:(state,action) => {
            return {...state,...action.payload};
        },
        resetFormData:(state,actions) => {
            return initialState;
        }
    }
})

export const {updateFormData,resetFormData} = formSlice.actions;

export default formSlice.reducer;