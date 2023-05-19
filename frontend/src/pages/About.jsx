import React from "react";
import Layout from "../Components/Layout/Layout";
import aboutUsImage from "../images/About-Us-page.png";

const About = () => {
  return (
    <Layout title={"About - Easykart"}>
      <div className="row aboutus">
        <div className="col-mid-6 image">
          <img src={aboutUsImage} alt="About Us" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-1 text-white text-center">About Us</h1>
          <p className="text-justify mt-2">
            Welcome to our ecommerce website! We are an online store dedicated
            to providing you with a seamless and enjoyable shopping experience.
            Our platform offers a wide range of products from various
            categories, ensuring that you can find everything you need in one
            convenient place.
          </p>
          <p>
            At our ecommerce website, we prioritize customer satisfaction above
            all else. We strive to offer high-quality products at competitive
            prices, so you can shop with confidence knowing that you are getting
            great value for your money. Our team carefully selects each item in
            our inventory, ensuring that they meet our strict standards of
            quality and reliability.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
