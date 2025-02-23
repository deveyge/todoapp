import { Route, Routes } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { routeConfig } from "app/providers/router/routeConfig/routeConfig";
import Preloader from "shared/ui/Preloader";
import { AppDispatch, RootState } from "redux/store";
import { useDispatch, useSelector } from "react-redux";
import { clearError } from "redux/authSlice";
import { setUser } from "redux/authSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "shared/config/firebase";

export default function AppRouter() {
  const { user, isLoading } = useSelector((state: RootState) => state.auth);
  const routes = routeConfig(user);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(clearError()); // Очищаем ошибки при изменении состояния аутентификации
      if (user) {
        dispatch(setUser({ uid: user.uid, email: user.email }));
      } else {
        dispatch(setUser(null));
      }
    });

    return () => unsubscribe(); // Отписываемся при размонтировании компонента
  }, [dispatch]);

  if (isLoading) {
    return <Preloader />;
  }
  return (
    <Suspense fallback={<Preloader />}>
      <Routes>
        {Object.values(routes).map(({ element, path }) => (
          <Route key={path} element={element} path={path} />
        ))}
      </Routes>
    </Suspense>
  );
}
