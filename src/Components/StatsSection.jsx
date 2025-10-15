import React, { useEffect } from "react";
import { stats } from "./Data";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const StatsSection = () => {
  useEffect(() => {
    const animateCounter = (counter) => {
      const target = +counter.getAttribute("data-target");
      let current = 0;
      const duration = 500;
      const startTime = performance.now();

      function updateCounter(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        current = Math.floor(progress * target);
        counter.textContent = current;
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      }
      requestAnimationFrame(updateCounter);
    };

    const counters = document.querySelectorAll(".counter");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains("animated")) {
          animateCounter(entry.target);
          entry.target.classList.add("animated");
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
  }, []);

  return (
    <section className="py-3">
      <div className="container">
        <div className="row text-center">
          {stats.map((stat, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="testimonial p-4 shadow-sm h-100" style={{ backgroundColor: "whitesmoke", borderRadius: "12px" }}>
                <h2 className="display-5 d-inline fw-bold counter" data-target={stat.number}>0</h2>
                <h2 className="fw-bold d-inline">+</h2>
                <hr className="w-25 mx-auto" />
                <p className="text-muted">{stat.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
