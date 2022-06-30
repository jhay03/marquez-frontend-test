import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer class="bg-light text-center text-lg-start">
        <div
          className="text-muted bg-dark py-4 text-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <div className="container">
            <span>&copy; Some Corp.</span>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
