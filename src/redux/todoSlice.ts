import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { db } from 'shared/config/firebase';
import { collection, addDoc, query, where, getDocs, doc, updateDoc } from "firebase/firestore";
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

// обновление статуса задачи в firebase(update)
export const toggleComplete = createAsyncThunk<string, { id: string, completed: boolean }>(
  'todos/toggleComplete',
  async ({ id, completed }: { id: string, completed: boolean }) => {
    try {
      const todoDoc = doc(db, "todos", id);
      await updateDoc(todoDoc, {
        completed: !completed
      });
      return id;
    } catch (error: any) {
      console.error("Error updating todo:", error);
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
      .addCase(toggleComplete.fulfilled, (state, action: PayloadAction<string>) => {
        const id = action.payload;
        const todo = state.todos.find(todo => todo.id === id);
        if (todo) {
          todo.completed = !todo.completed;
        }
      })
  },
});

export default todoSlice.reducer;