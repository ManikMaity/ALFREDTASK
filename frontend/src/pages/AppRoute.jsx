import { Route, Routes } from "react-router-dom"
import HomePage from "./HomePage"
import SiginPage from "./SiginPage"
import SignupPage from "./SignupPage"
import ProfilePage from "./ProfilePage"

function AppRoute() {
  return (
    <Routes>
      <Route path="/signin" element={<SiginPage/>} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/profile" element={<ProfilePage/>} />
      <Route path="/" element={<HomePage/>} />
    </Routes>
  )
}

export default AppRoute
