import { AppDispatch, RootState } from "redux/store";
import AddTask from "./Tasks/AddTask";
import Task from "./Tasks/Task";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchTodos, toggleComplete, deleteTodo } from "redux/todoSlice";
import useAuth from "shared/lib/hooks/useAuth";
import { useEffect, useState } from "react";
import Modal from "shared/ui/Modal";
import SmallPreloader from "shared/ui/SmallPreloader";
export default function TodoList() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useAuth();
  const { todos, isLoading, error } = useSelector(
    (state: RootState) => state.todos,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState<string | null>(null);

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

  //логика модального окна
  const handleOpenModal = (id: string) => {
    setTodoToDelete(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTodoToDelete(null);
  };

  // подтверждение удаления задачи из firebase(delete)
  const handleConfirmDelete = () => {
    if (todoToDelete) {
      dispatch(deleteTodo(todoToDelete));
      handleCloseModal();
    }
  };

  if (isLoading) {
    return <SmallPreloader />;
  }

  return (
    <div className="mx-auto mt-5 flex flex-col px-6 py-12">
      <div className="flex flex-col gap-4 sm:mx-auto sm:w-full sm:max-w-md">
        <AddTask />
        <ul className="flex flex-col gap-4">
          {todos.map((todo) => (
            <Task
              key={todo.id}
              todo={todo}
              onToggleComplete={handleToggleComplete}
              onDeleteTodo={handleOpenModal}
            />
          ))}
        </ul>
        <Modal
          isOpen={isModalOpen}
          onCancel={handleCloseModal}
          onConfirm={handleConfirmDelete}
          title="Удалить задачу?"
          message="Вы действительно хотите удалить задачу?"
        />
      </div>
    </div>
  );
}
