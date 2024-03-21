import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Documentation from "./pages/Documentation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from "./pages/user-routes/AdminDashboard";
import Privateroute from "./components/Privateroute";
import ProfileInfo from "./pages/user-routes/ProfileInfo";
import UserManagment from "./pages/user-routes/UserManagment";
import ToggleManagement from "./pages/user-routes/ToggleManagement";
import CreateUser from "./pages/user-routes/CreateUser";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/user" element={<Privateroute />}>
          <Route path="admin-dashboard" element={<AdminDashboard />} />
          <Route path="profile-info" element={<ProfileInfo />} />
          <Route path="user-management" element={<UserManagment />} />
          <Route path="add-user" element={<CreateUser />} />
          <Route path="toggle-management" element={<ToggleManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
