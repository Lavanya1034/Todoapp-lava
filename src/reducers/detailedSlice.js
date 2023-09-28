import { createSlice } from "@reduxjs/toolkit";

const initialState=[]
   
export const detailedSlice = createSlice({
    name:"detailed",
    initialState,
    reducers:{

        addTasks:(state,action)=>{
            state.push(action.payload)
        },
        deletedetTasks:(state,payload)=>{
           state.splice(payload,1)
        },
        updateDetTask:(state,action)=>{
            console.log(action.payload)
        
            state.map((task,ind)=>(
                {...task,completed:
             ind===action.payload?task.completed=true:task.completed}))
            
        }
        }
    }
)

export const {addTasks,deletedetTasks,updateDetTask}=detailedSlice.actions;

export default detailedSlice.reducer;