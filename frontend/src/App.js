// import { Suspense, lazy } from "react";
// import { Routes, Route } from "react-router-dom";
// import PrivateRoute from "PrivateRoute";
// import PublicRoute from "PublicRoute";

import { TestMainView } from "./views";

// const RegisterPage = lazy(() => import("./views/RegisterPage"));
// const LoginPage = lazy(() => import("./views/LoginPage"));
// const DashboardPage = lazy(() => import("./views/DashboardPage"));

function App() {
  return (
    <div>
      <TestMainView>
        {/* <Suspense fallback="loader"> */}
        {/* <Routes> */}
        {/* <Route
          path=""
          element={
            <PublicRoute restricted redirectTo="">
              <RegisterPage />
            </PublicRoute>
          }
        ></Route> */}

        {/* <Route
          path=""
          element={
            <PublicRoute restricted redirectTo="">
              <LoginPage />
            </PublicRoute>
          }
        ></Route> */}

        {/* <Route
          path=""
          element={
            <PrivateRoute redirectTo="">
              <DashboardPage />
            </PrivateRoute>
          }
        ></Route> */}
        {/* </Routes> */}
        {/* </Suspense> */}
      </TestMainView>
    </div>
  );
}

export default App;
