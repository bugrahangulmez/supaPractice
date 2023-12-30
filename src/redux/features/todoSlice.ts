import {createSlice} from '@reduxjs/toolkit';

interface Task {
  title: string;
  description: string;
  time?: number;
}

interface TodoState {
  task: Task;
  todoList: Task[];
  refresh: boolean;
}

const initialState: TodoState = {
  task: {
    title: '',
    description: '',
    time: 0,
  },
  todoList: [],
  refresh: true,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTask: (state, {payload}: {payload: Task}) => {
      state.task = payload;
    },
    setTodoList: (state, {payload}: {payload: Task[]}) => {
      state.todoList = payload;
    },
    setRefresh: (state, {payload}: {payload: boolean}) => {
      state.refresh = payload;
    },
  },
});

export default todoSlice.reducer;

export const {setTask, setTodoList, setRefresh} = todoSlice.actions;
