import React from "react";
import "./form-message.scss";
import Checkmark from "./icons/checkmark.svg";

const Success = ({ name }) => {
  return (
    <section className="form-message form-message__success">
      <img src={Checkmark} alt="success" />
      <h2>Submission Successful</h2>
      <p>
        We appreciate you reaching out and will respond to your message shortly.
      </p>
    </section>
  );
};

export default Success;
