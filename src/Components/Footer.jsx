import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Footer = () => {
  return (
    <footer className="w-100 pt-5" style={{ backgroundColor: "#ccc" }}>
      <div className="container">
        <div className="row g-4 text-center justify-content-center mx-0">
          <div className="col-6 col-md-3">
            <h6 className="fw-bold mb-3">CALL US</h6>
            <p className="mb-1">+91 98800844329</p>
            <p>+91 8851361171</p>
          </div>
          <div className="col-6 col-md-3">
            <h6 className="fw-bold mb-3">VISIT US</h6>
            <p className="mb-0">271, Milansar Appartments,</p>
            <p className="mb-0">Pashchim Vihar, A1 Block</p>
            <p className="mb-0">New Delhi - 110063, India</p>
          </div>
          <div className="col-6 col-md-3 text-md-start text-center">
            <a href="mds.html">
              <img src="mds_logo_hd.png" alt="Logo" className="mb-3" style={{ height: "50px", width: "50px", objectFit: "cover", cursor: "pointer", margin: "auto" }} />
            </a>
            <div className="social-icons">
              <div className="footer-links d-flex justify-content-center gap-4 fs-5">
                <a href="https://www.facebook.com/Manchitra.studio" className="fs-4 text-dark"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/manchitra.studio/?hl=en" className="fs-4 text-dark"><i className="fab fa-instagram"></i></a>
                <a href="mailto:manchitradesignstudio@gmail.com" className="fs-4 text-dark"><i className="fa-solid fa-envelope"></i></a>
                <a href="https://wa.me/918800844329" className="fs-4 text-dark"><i className="fa-brands fa-whatsapp"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-3" style={{ width: "100%", margin: "auto", height: "0.5px", color: "#333" }} />
      <div className="footer-bottom text-muted py-3" style={{textAlign: "center" }}>
        <span>&copy; 2022 Manchitra Design Studio. All rights reserved.<br />Made with love by Mr. & Mrs. Rana.</span>
      </div>
    </footer>
  );
};

export default Footer;

