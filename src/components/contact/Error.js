import React from "react";
import "./form-message.scss";
import Warning from "./icons/warning.svg";

class Error extends React.Component {
  render() {
    return (
      <section className="form-message form-message__error">
        <img src={Warning} alt="error" />
        <p>Oops! something went wrong, please try again.</p>
        <button
          className="btn btn-link"
          onClick={() => window.location.reload()}
        >
          Return to form
        </button>
      </section>
    );
  }
}

export default Error;
