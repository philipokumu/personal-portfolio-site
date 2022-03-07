import React from "react";

const Footer = () => {
  return (
    <>
      <div className="inner">
        <div className="copy">
          <p>
            &copy; {new Date().getFullYear()} by Philip O. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
