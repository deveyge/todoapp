import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "shared/config/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "redux/store";
import { setError, setUser, clearError, setLoading } from "redux/authSlice";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>(); // Типизируем dispatch
  const { isLoading, error } = useSelector((state: RootState) => state.auth);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));
    dispatch(clearError());

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      dispatch(setUser({ uid: user.uid, email: user.email }));
      navigate("/");
    } catch (error: any) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight">
            Войдите в свой аккаунт
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md bg-foreground px-3 py-1.5 text-base placeholder:text-gray-400 focus:outline-none focus:-outline-offset-2 focus:outline-[var(--primary)] sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md bg-foreground px-3 py-1.5 text-base placeholder:text-gray-400 focus:outline-none focus:-outline-offset-2 focus:outline-[var(--primary)] sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="shadow-xs flex w-full justify-center rounded-md bg-[var(--primary)] px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                {isLoading ? "Вход в систему..." : "Войти"}
              </button>
              {error && (
                <p className="text-red-500">Неправильный email или пароль</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
