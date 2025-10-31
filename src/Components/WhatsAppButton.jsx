import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918800844329?text=Hello%2C%20I%20am%20interested%20in%20Manchitra%20Design%20Studio."
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      style={{animation: "pulse 1.5s infinite"}}
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;
