import { auth } from "shared/config/firebase";
import { useDispatch } from "react-redux";
import { logout } from "redux/authSlice";
import { useNavigate } from "react-router-dom";

export default function LogoutBtn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      dispatch(logout());
      navigate("/login");
    } catch (error: any) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <button
      className="rounded-md bg-[var(--primary)] px-5 py-2 text-center text-base font-medium text-white hover:bg-accent"
      onClick={handleLogout}
    >
      Выход
    </button>
  );
}
