import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <Layout title={"Login - Easykart"}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>LOGIN</h2>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter your E-mail"
              aria-label="email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              aria-label="password"
              required
            />
          </div>
          <div className="mb-3 py-2">
            <button type="submit">LOGIN</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
