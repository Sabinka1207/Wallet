import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";

const RegisterPage = lazy(() => import("./views/RegisterPage"));
const LoginPage = lazy(() => import("./views/LoginPage"));
const DashboardPage = lazy(() => import("./views/DashboardPage"));

function App() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
