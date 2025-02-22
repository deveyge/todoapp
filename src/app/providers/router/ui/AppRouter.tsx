
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { routeConfig } from "app/providers/router/routeConfig/routeConfig";

export default function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {Object.values(routeConfig).map(({element, path}) => (
        <Route 
            key={path}
            element={element}
            path={path}
        />
      ))};
    </Routes>
  </Suspense>
  )
}
