import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { banner, contactInfo } from "../Components/Data";

export const ContactUs = () => {
  return (
    <div>{/* Hero Section */}
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
            <h2 className="section-title">CONTACT US</h2>
          </div>
        </div>
      </section>

      <section>
      <div className="container py-5">
        <div className="row justify-content-center">

          {/* Contact Info Section */}
          <div className="col-md-5 px-2">
            <div className="contact-info mx-3 mx-md-5 py-3 py-md-5">
              <h3
                className="heading mb-5"
              >
                Contact Information
              </h3>

              {contactInfo.map((info) => (
                <a
                  key={info.id}
                  href={info.link}
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <div className="d-flex align-items-center mb-4">
                    <div style={{ width: "60px", textAlign: "center" }}>
                      <i
                        className={info.icon}
                        style={{
                          fontSize: info.size,
                          color: info.color,
                          animation: "pulse 1.5s infinite"
                        }}
                      ></i>
                    </div>
                    <p className="mb-0 ms-3">{info.text}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-5">
            <div
              className="contact-card"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="alert-box m-auto">
                <h3 className="heading mb-4">Inquire with us</h3>
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div
        className="map-container col-10 col-md-8 mx-auto"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <iframe
          src="https://www.google.com/maps?q=271,+Milansar+Appartments,+A1+Block,+Paschim+Vihar,+New+Delhi+-+110063&output=embed"
          allowFullScreen=""
          loading="lazy"
          style={{
            width: "100%",
            height: "400px",
            border: "0",
            borderRadius: "10px",
          }}
          title="Manchitra Design Studio Location"
        ></iframe>
      </div>
    </section>
    </div>
  )
}


export default ContactUs;
