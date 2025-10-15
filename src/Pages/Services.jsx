import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { banner, servicespage } from "../Components/Data";

const Services = () => {


  return (
    <div>
      {/* Hero Section */}
      <section className="img_display">
        <div id="mybannerCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {banner.map((banner, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img
                  src={banner.img}
                  className="d-block w-100 img-fluid"
                  alt={banner.alt}
                  style={{ objectPosition: banner.position }}
                />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#mybannerCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#mybannerCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Next</span>
          </button>

          <div className="page-container">
            <h2 className="section-title">OUR SERVICES</h2>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid mt-5">
          <div className="row justify-content-center">
            {servicespage.map((service) => (
              <div key={service.id} className="col-12 col-md-6 icon-card text-center">
                <i
                  className={`${service.icon} service-icon`}
                  style={{ cursor: "pointer", marginBottom: "50px" }}
                  data-aos="zoom-in"
                ></i>

                <div
                  className="icon-details"
                  style={{ marginBottom: "80px" }}
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                >
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="py-2 text-center">
        <div className="quote-wrapper container">
          <p className="quote-text fw-semibold">
            “As an architect, you design for the present, with an awareness of the past, for a future which is essentially unknown”
          </p>
        </div>
      </section>

    </div>
  );
};

export default Services;
