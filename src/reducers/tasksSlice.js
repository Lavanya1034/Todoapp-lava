import { createSlice } from "@reduxjs/toolkit";




const initialState=[]
   
export const tasksSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{

        addTasks:(state,action)=>{
            return [...state,action.payload];
        },
        deleteTasks:(state,action)=>{
             state.splice(action.payload,1)
        },
        updateRegTask:(state,action)=>{
            state.map((task,ind)=>({...task,completed:ind===action.payload?task.completed=true:task.completed}))
        }
        }
    }
)

export const {addTasks,deleteTasks,updateRegTask}=tasksSlice.actions;

export default tasksSlice.reducer