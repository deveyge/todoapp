import AddTask from "../../../components/Tasks/AddTask";
import Task from "../../../components/Tasks/Task";
import { auth } from "shared/config/firebase";
import { useDispatch } from "react-redux";
import { logout } from "redux/authSlice";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await auth.signOut(); // Выходим из Firebase
      dispatch(logout()); // Очищаем данные пользователя в Redux
      navigate("/login"); // Перенаправляем на страницу логина
    } catch (error: any) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <div className="mx-auto mt-5 flex flex-col px-6 py-12">
      <div className="flex flex-col gap-4 sm:mx-auto sm:w-full sm:max-w-md">
        <button onClick={handleLogout}>Logout</button>
        <AddTask />
        <ul>
          <Task />
        </ul>
      </div>
    </div>
  );
}
