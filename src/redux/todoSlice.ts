import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { db } from 'shared/config/firebase';
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
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



// добавление задачи в firebase(create)
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

// получение задач из firebase(read)
export const fetchTodos = createAsyncThunk<Todo[], string>(
  'todos/fetchTodos',
  async (userId: string) => {
    try {
      const q = query(collection(db, "todos"), where("userId", "==", userId));
      const querySnapshot = await getDocs(q);
      const todos: Todo[] = [];
      querySnapshot.forEach((doc) => {
        todos.push({ id: doc.id, ...doc.data() } as Todo);
      });
      return todos;
    } catch (error: any) {
      console.error("Error fetching todos:", error);
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
      .addCase(fetchTodos.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        state.isLoading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Произошла ошибка";
      })
  },
});

export default todoSlice.reducer;