import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import SiginPage from "./SiginPage";
import SignupPage from "./SignupPage";
import ProfilePage from "./ProfilePage";
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
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default AppRoute;
