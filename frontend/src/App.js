import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivatRoute';
import Loader from './components/Loader/Loader';

// import Header from "./components/Header/Header";
// import Navigation from "./components/Navigation/Navigation";
// import DashboardPage from "./views/DashboardPage";

const RegisterPage = lazy(() => import('./views/RegisterPage'));
const LoginPage = lazy(() => import('./views/LoginPage'));
const DashboardPage = lazy(() => import('./views/DashboardPage'));

function App() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/register"
            element={
              <PublicRoute restricted redirectTo="/login">
                <RegisterPage />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <PublicRoute restricted redirectTo="/">
                <LoginPage />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/"
            element={
              <PrivateRoute redirectTo="/login">
                <DashboardPage />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
