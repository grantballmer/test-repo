import React from "react";
import "./info.scss";
import { FaEnvelope, FaPhone, FaFacebookF } from "react-icons/fa";

const Info = () => {
  return (
    <div className="contact-info">
      <div className="contact-info__item contact-info__item--email">
        <div className="contact-info__item--details">
          <p>
            <span className="icon-left">
              <FaEnvelope />
            </span>
            Email
          </p>
          <a
            href="mailto:Nathan@purchaseproductions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="break-email"
          >
            <p>
              Nathan<span className="break-word">@purchaseproductions.com</span>
            </p>
          </a>
        </div>
      </div>

      <div className="contact-info__item">
        <div className="contact-info__item--details">
          <p>
            <span className="icon-left">
              <FaPhone />
            </span>
            Phone
          </p>
          <a href="tel:1-231-206-0527">
            <p>231-206-0527</p>
          </a>
        </div>
      </div>

      <div className="contact-info__item contact-info__item--social">
        <div className="contact-info__item--details">
          <p>
            <span className="icon-left">
              <FaFacebookF />
            </span>
            Facebook
          </p>
          <a
            href="https://www.facebook.com/pg/purchaseproductionsllc/about/?ref=page_internal"
            className="nobreak-facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            Purchase Productions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
