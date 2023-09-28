import { createSlice } from "@reduxjs/toolkit";

const initialState={
    allCompleted:""
    // tags:"null"
}
   
export const filterSlice = createSlice({
    name:"filter",
    initialState,
    reducers:{

        setAllFilter:(state,action)=>{
            state.allCompleted=action.payload;
        },
        // setTag:(state,action)=>{
        //     state.tags=action.payload;
        // }
        }
    }
)

export const {setAllFilter}=filterSlice.actions;

export default filterSlice.reducer;