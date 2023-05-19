import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
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
    <Layout title={"Register - Easykart"}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>REGISTER</h2>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Enter your name"
              aria-label="name"
              required
              autoFocus
            />
          </div>
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
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              placeholder="Enter Phone Number"
              aria-label="phone number"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              placeholder="Enter your Address"
              aria-label="address "
              required
            />
          </div>
          <div className="mb-3 py-2">
            <button type="submit">REGISTER</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
