import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={"footer"}>
      <h4 className="text-center">All Right Reserved &copy; Easykart</h4>
      <p className="text-center mt-3">
        <Link to="/about">About</Link> | <Link to="/contact">Contact Us</Link> |{" "}
        <Link to="/policy">Privary Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
