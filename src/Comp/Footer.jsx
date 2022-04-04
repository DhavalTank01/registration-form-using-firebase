import React from "react";

const Footer = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex align-items-center justify-content-center flex-wrap">
          <h5 className="text-capitalize text-center">
            © copyright @ {new Date().getFullYear().toString()} All Rights
            Reserved
          </h5>
        </div>
      </nav>
    </>
  );
};

export default Footer;
