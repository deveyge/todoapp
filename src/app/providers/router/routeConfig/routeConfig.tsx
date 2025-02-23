import { LoginPage } from "pages/LoginPage";
import { RegisterPage } from "pages/RegisterPage";
import { MainPage } from "pages/MainPage";
import { Navigate, RouteProps } from "react-router-dom";
import useAuth from "shared/lib/hooks/useAuth";

export enum AppRoutes {
  MAIN = "main",
  LOGIN = "login",
  REGISTER = "register",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.REGISTER]: "/register",
};

export const routeConfig = (user: any): Record<AppRoutes, RouteProps> => ({
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: user ? <MainPage /> : <Navigate to="/register" />,
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: user ? <Navigate to="/" /> : <LoginPage />,
  },
  [AppRoutes.REGISTER]: {
    path: RoutePath.register,
    element: user ? <Navigate to="/" /> : <RegisterPage />,
  },
});
