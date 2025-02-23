import { AppDispatch, RootState } from "redux/store";
import AddTask from "./Tasks/AddTask";
import Task from "./Tasks/Task";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchTodos, toggleComplete, deleteTodo } from "redux/todoSlice";
import useAuth from "shared/lib/hooks/useAuth";
import { useEffect } from "react";

export default function TodoList() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useAuth();
  const { todos, isLoading, error } = useSelector(
    (state: RootState) => state.todos,
  );

  // получение задач из firebase(read)
  useEffect(() => {
    if (user) {
      dispatch(fetchTodos(user.uid));
    } else {
      navigate("/login");
    }
  }, [dispatch, user, navigate]);

  // обновление статуса задачи в firebase(update)
  const handleToggleComplete = (id: string, completed: boolean) => {
    dispatch(toggleComplete({ id, completed }));
  };

  // удаление задачи из firebase(delete)
  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mx-auto mt-5 flex flex-col px-6 py-12">
      <div className="flex flex-col gap-4 sm:mx-auto sm:w-full sm:max-w-md">
        <AddTask />
        <ul>
          {todos.map((todo) => (
            <Task
              key={todo.id}
              todo={todo}
              onToggleComplete={handleToggleComplete}
              onDeleteTodo={handleDeleteTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
