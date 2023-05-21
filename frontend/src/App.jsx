import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Policy from "./pages/Policy";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/user/Dashboard";
import PrivateRaute from "./Components/Routes/Private";
import ForgotPassword from "./pages/Auth/ForgotPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<PrivateRaute />}>
          <Route path="" element={<Dashboard />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
