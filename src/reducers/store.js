import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasksSlice";
import detailedSlice from "./detailedSlice";
import filterSlice from "./filterSlice";

export const store = configureStore({
    reducer:{
        tasks:tasksSlice,
        detailed:detailedSlice,
        filter:filterSlice,
    }
})