import { AppDispatch, RootState } from "redux/store";
import AddTask from "./Tasks/AddTask";
import Task from "./Tasks/Task";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchTodos } from "redux/todoSlice";
import useAuth from "shared/lib/hooks/useAuth";
import { useEffect } from "react";

export default function TodoList() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useAuth();
  const { todos, isLoading, error } = useSelector(
    (state: RootState) => state.todos,
  );

  useEffect(() => {
    if (user) {
      dispatch(fetchTodos(user.uid));
    } else {
      navigate("/login");
    }
  }, [dispatch, user, navigate]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mx-auto mt-5 flex flex-col px-6 py-12">
      <div className="flex flex-col gap-4 sm:mx-auto sm:w-full sm:max-w-md">
        <AddTask />
        <ul>
          {todos.map((todo) => (
            <Task key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}
