import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

// Home Page Data
export const banner = [
  { img: "https://images.unsplash.com/photo-1722248210669-46bb3e01dabc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0", alt: "Banner 1" },
  { img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=3384&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Banner 2" },
  { img: "https://images.unsplash.com/photo-1721742734891-fb1f0a03c810?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Banner 3" },
  { img: "https://images.unsplash.com/photo-1741288340766-12515252119c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Banner 4" }

];

export const badges = [
  { icon: "fa-couch", title: "Interior" },
  { icon: "fa-building-columns", title: "Elevation" },
  { icon: "fa-chair", title: "Furniture" },
  { icon: "fa-palette", title: "Decor" },
];

export const services = [
  {
    img: "https://images.unsplash.com/photo-1595526051245-4506e0005bd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "Interior Design",
    desc: "We create spaces that are a reflection of our clients’ personalities and lifestyles."
  },
  {
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "Furniture",
    desc: "We design and create custom furniture pieces tailored to clients' needs."
  },
  {
    img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    title: "Decor",
    desc: "We curate unique decor items that add character and charm to spaces."
  },
];

export const stats = [
  { number: 3, text: "years experience" },
  { number: 100, text: "projects across India" },
  { number: 25, text: "team members" },
];

//About Us Page Data

export const aboutImage = "https://images.unsplash.com/photo-1512972972907-6d71529c5e92?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0";

export const aboutText = [
  "Manchitra Design Studio is a multidisciplinary Architecture, Interior Design, Turnkey and Landscaping firm. We ensure to exceed the expectations of all those in need of an innovation, reliability and experience of a lifetime.",
  "Our design approach is to re-connect architecture with nature, make optimum use of space, natural materials, lighting & landscape to reinvent and transform living environments and urban spaces. The firm strives to create design that inspires, approaching each project, regardless of size & scale, with an understanding that architecture has a unique power to influence lifestyle and society.",
  "Honesty to design, client satisfaction, and sustainability are the driving forces, along with the ability to constantly explore & evolve. Dedicated to unique design approaches adapted to each project, and achieving a balance between functionality & aesthetics, context, climate, material, cost & time-frame."
];

export const founders = [
  {
    name: "AR. SHUBHANKAR RANA",
    img: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    details: [
      "Bachelor Of Architecture - G.G.S.I.P. University",
      "Affiliations: Council Of Architecture",
      "Expertize in Architectural project handling. Has been a part of planning and development of diverse Institutional, Housing and Interior Design Projects."
    ]
  },
  {
    name: "AR. SAKSHI KAPOOR",
    img: "https://plus.unsplash.com/premium_photo-1661726660137-61b182d93809?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    details: [
      "Bachelor Of Architecture - G.G.S.I.P. University",
      "Affiliations: Council Of Architecture",
      "Experience of working under the guidance of famous designers. Having specialization in Residential Architecture and Interior Design Projects."
    ]
  }
];

// Services Page Data

export const servicespage = [
  {
    id: 1,
    icon: "fa-solid fa-compass-drafting",
    title: "Architecture Planning & Design",
    description: "Our Architectural services include Concept Development, Planning, Design, Preparation of Construction Documents and Drawings, Cost Estimates, Coordination with Consultants and Construction Administration."
  },
  {
    id: 2,
    icon: "fa-solid fa-object-group",
    title: "Interior Design",
    description: "Our complete design solution includes space planning, designing, build and install along with finishes, furniture & fixtures, fine art advisory keeping in mind the detailed pre-decided schedules along with complete design management services, continuous client interaction & aesthetic updates, procurement & project turnover."
  },
  {
    id: 3,
    icon: "fa-solid fa-eye",
    title: "3D Visualization",
    description: "We also provide solutions for high-end Visualizations, Renderings, Presentations and Walkthroughs and animation to best visualise your projects."
  },
  {
    id: 4,
    icon: "fa-solid fa-key",
    title: "Turnkey Projects",
    description: "We offer a one-step solution for Design Engineering, Project Management, Procurement and Construction solution to our clients for various projects and optimally meet their requirements."
  },
  {
    id: 5,
    icon: "fa-solid fa-compass",
    title: "Vastu Consultancy",
    description: "We focus on providing complete Vastu Study and Detailed Report with Remedies comprising both plot and layout study. In addition to this, we also provide Interior Vastu Design Guidelines for a healthy living."
  },
  {
    id: 6,
    icon: "fa-solid fa-building-user",
    title: "Structural Design",
    description: "We incorporate numerous areas into our project coordination, all with the goal of reducing any stress and pressure on our clients and creating a structure that works best for them."
  },
  {
    id: 7,
    icon: "fa-solid fa-person-digging",
    title: "Renovation",
    description: "Renovating and remodeling existing buildings is a vital segment of our Architecture and Engineering Services. Remodels can happen for many reasons, whether you’re looking to make your existing space more efficient, find a purpose for currently unused space, modernize an outdated space, facelift, or meet updated code requirements."
  }
];

// Contact Page Data

export const contactInfo = [
  {
    id: 1,
    icon: "fa-solid fa-location-dot",
    color: "#DFC3BF",
    size: "45px",
    link: "https://www.google.com/maps/search/271,+Milansar+Apartment,+A1+Block,+Paschim+Vihar,+New+Delhi+-+110063/@28.676962,77.095567,16z?hl=en-GB",
    text: "271, Milansar Appartments, Pashchim Vihar, A1 Block, New Delhi - 110063, India"
  },
  {
    id: 2,
    icon: "fa-brands fa-whatsapp",
    color: "#DFC3BF",
    size: "40px",
    link: "https://wa.me/918800844329?text=Hello%2C%20I%20am%20interested%20in%20Manchitra%20Design%20Studio.",
    text: "+91 8700232746 | 8800844329"
  },
  {
    id: 3,
    icon: "fa-solid fa-envelope",
    color: "#DFC3BF",
    size: "35px",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=manchitradesignstudio@gmail.com&su=Project%20Inquiry",
    text: "manchitradesignstudio@gmail.com"
  },
  {
    id: 4,
    icon: "fa-brands fa-instagram",
    color: "#DFC3BF",
    size: "35px",
    link: "https://www.instagram.com/manchitra.studio/?hl=en",
    text: "@manchitra.studio"
  },
  {
    id: 5,
    icon: "fa-brands fa-facebook-f",
    color: "#DFC3BF",
    size: "35px",
    link: "https://www.facebook.com/Manchitra.studio",
    text: "Manchitra Design Studio"
  }
];
