import React from "react";
import { badges, services } from "./Data";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const ServicesSection = () => {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="badge-icons row text-center">
            {badges.map((item, index) => (
              <div key={index} className="badge-icon col-md-3 col-6 mb-4" data-aos="fade-up">
                <i className={`fa-solid ${item.icon} mb-4`} style={{ fontSize: "60px", color: "#DFC3BF" }}></i>
                <h6 className="fs-5 fw-bold">{item.title}</h6>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row text-center">
            {services.map((service, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card border-0">
                  <img src={service.img} className="img-fluid" alt={service.title} style={{ borderRadius: "6px" }} />
                  <div className="card-body">
                    <h5 className="services fw-bold">{service.title}</h5>
                    <p className="text-muted">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
