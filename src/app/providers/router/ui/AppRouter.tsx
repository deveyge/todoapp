import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { routeConfig } from "app/providers/router/routeConfig/routeConfig";
import Preloader from "shared/ui/Preloader";

export default function AppRouter() {
  return (
    <Suspense fallback={<Preloader />}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} element={element} path={path} />
        ))}
        ;
      </Routes>
    </Suspense>
  );
}
