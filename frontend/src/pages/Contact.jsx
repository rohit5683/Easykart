import React from "react";
import Layout from "../Components/Layout/Layout";
import contactImage from "../images/HomeTown-Fan-Support-Web.png";
import { TfiEmail, TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineAddIcCall } from "react-icons/md";

const Contact = () => {
  return (
    <Layout title={"Contact - Easykart"}>
      <div className="row contactus">
        <div className="col-mid-6 image">
          <img src={contactImage} alt="Contact Us" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">Contact Us</h1>
          <p className="text-justify mt-2">
            Thank you for visiting our website! We value your interest and are
            here to assist you in any way we can. If you have any questions,
            concerns, or feedback, please don't hesitate to get in touch with
            us. We are committed to providing exceptional support and ensuring
            your experience with our ecommerce platform is seamless.
          </p>
          <p className="mt-3">
            <TfiEmail /> www.help@easykart.com
          </p>
          <p className="mt-3">
            <TfiHeadphoneAlt /> +91 8969989233
          </p>
          <p className="mt-3">
            <MdOutlineAddIcCall /> 1800-0000-0000
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
