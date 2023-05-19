import React from "react";
import Layout from "../Components/Layout/Layout";
import policyImage from "../images/privacy.png";

const Policy = () => {
  return (
    <Layout title={"Policy - Easykart"}>
      <div className="row policy">
        <div className="col-mid-6 image">
          <img src={policyImage} alt="policy" />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">Privacy Policy</h1>
          <p
            className="text-justify mt-2"
            style={{ padding: "5px", lineHeight: "30px" }}
          >
            <ol type="1">
              <li className="policyList">Information collection</li>
              <li className="policyList">Data usage</li>
              <li className="policyList">Data sharing</li>
              <li className="policyList">Cookies and tracking technologies</li>
              <li className="policyList">Security measures</li>
              <li className="policyList">User choices and rights</li>
              <li className="policyList">Data retention</li>
              <li className="policyList">Legal basis</li>
              <li className="policyList">Updates to the privacy policy</li>
            </ol>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
