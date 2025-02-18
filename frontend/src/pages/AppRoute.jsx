import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import SignupPage from "./SignupPage";
import AuthLayout from "@/layouts/AuthLayout";
import SigninPage from "./SiginPage";
import PrivateRoute from "./PrivateRoute";

function AppRoute() {
  return (
    <Routes>
      <Route
        path="/signin"
        element={
          <AuthLayout>
            <SigninPage />
          </AuthLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <AuthLayout>
            <SignupPage />
          </AuthLayout>
        }
      />
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default AppRoute;
