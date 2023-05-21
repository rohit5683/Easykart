import Layout from "../../Components/Layout/Layout";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <Layout title={"Forgot Password - Easykart"}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>FORGOT PASSWORD</h2>
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
              value={newPassword}
              className="form-control"
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Set your new Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              className="form-control"
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Your Favorite Laptop Company"
              required
            />
          </div>
          <div className="mb-2 py-2">
            <button type="submit">RESET PASSWORD</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
