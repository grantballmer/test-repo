import React from "react";
import "./loading.scss";
import Loader from "./icons/loader.svg";

const Loading = () => {
  return (
    <section className="form-loading">
      <img src={Loader} alt="loading" />
    </section>
  );
};

export default Loading;
