import React from "react";
import "./services.css";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Designing and developing responsive, visually appealing and user-friendly interfaces for websites and web applications.",
    },
    {
      title: "Custom Components",
      description: "Creating reusable and customizable web components.",
    },
    {
      title: "Code Review and Consulting",
      description:
        "Reviewing existing codebases, providing recommendations for improvement, and offering consulting services.",
    },
    {
      title: "E-commerce Development",
      description:
        "Developing e-commerce websites or integrating e-commerce functionality into existing websites.",
    },
    {
      title: "Search Engine Optimization",
      description:
        "Optimizing websites for search engines by implementing best practices for meta tags, structured data, and site performance.",
    },
    {
      title: "Cross-Browser Compatibility",
      description:
        "Making sure that websites work well across different web browsers such as Chrome, Firefox, Safari, and Edge.",
    },
    {
      title: "Performance Optimization",
      description:
        "Optimizing websites for faster loading times and improved performance.",
    },
    {
      title: "Website Maintenance",
      description:
        "Providing ongoing support and maintenance for websites, including updates and bug fixes.",
    },
    {
      title: "Accessibility",
      description:
        "Ensuring that websites and applications are accessible to users with disabilities, following WCAG guidelines.",
    },
  ];
  return (
    <section className="services" id="services">
      <div className="intro">
        <h2 className="services-title">Services</h2>
        <p>
          I offer a range of services to help you create stunning and functional
          websites and web applications. From designing beautiful user
          interfaces to developing responsive and optimized code.
        </p>
      </div>
        <div id="service" className="services-container">
          {services.map((service, index) => (
            <div key={index} className="service">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Services;
