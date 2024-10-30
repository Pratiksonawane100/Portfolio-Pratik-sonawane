// EmailInfo.js

import React from "react";
import "./Emaillink.css";

const EmailInfo = () => {
  const email = "Pratik30sonawane@email.com";
  const subject = "Hello";
  const body = "Write your message here.";

  const handleClick = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  
  return (
    <div className="email-info" onClick={handleClick}>
      <p>{email}</p>
      <div className="line"></div>
    </div>
  );
};

export default EmailInfo;
