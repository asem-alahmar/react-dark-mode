import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Asem Alahmar</h1>
          <a href="https://github.com/asem-alahmar">GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Header;
