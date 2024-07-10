import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Task} from '../models/task';

export interface User {
  name: string | null;
  taskList: Task[];
}

const initialState: User = {
  name: null,
  taskList: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    addTask: (state, action: PayloadAction<string>) => {
      state.taskList.push({
        desc: action.payload,
        id: Date.now().toString(),
      });
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.taskList = state.taskList.filter(item => item.id != action.payload);
    },
    updateTask:(state, action: PayloadAction<{id:string,textValue:string}>) =>{
      state.taskList=state.taskList.map(item => {
        if(item.id==action.payload.id){
          item.desc=action.payload.textValue
        }
        return item
      });
    }
  },
});


export const {setName, addTask, deleteTask ,updateTask} = userSlice.actions;

export default userSlice.reducer;
