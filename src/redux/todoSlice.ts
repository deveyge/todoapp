import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { db } from 'shared/config/firebase';
import { collection, addDoc } from "firebase/firestore";
import { Todo } from 'app/types/Todo';

interface TodoState {
  todos: Todo[];
  isLoading: boolean;
  error: string | null;
}

const initialState: TodoState = {
  todos: [],
  isLoading: false,
  error: null,
};



// добавление задачи в firebase
export const addTodo = createAsyncThunk<Todo, { text: string, userId: string }>(
  'todos/addTodo',
  async ({ text, userId }: { text: string, userId: string }) => {
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        text: text,
        completed: false,
        userId: userId
      });
      return { id: docRef.id, text: text, completed: false, userId: userId };
    } catch (error: any) {
      console.error("Error adding todo:", error);
      throw error;
    }
  }
);


const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.todos.push(action.payload);
      })
  },
});

export default todoSlice.reducer;