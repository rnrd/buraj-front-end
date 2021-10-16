import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Footer.css";

//this componet will always be seen on the page
function Footer() {
    return (
      <div className="div-footer">
        <section className="section-footer justify-content-center">
          <div className="container.fluid  border-top" id="myfooter">
            <div className="row justify-content-center">
                <p className="footer-p">Copyright 2021 Eren ERDİ</p>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Footer;