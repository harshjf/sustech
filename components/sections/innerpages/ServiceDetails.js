import Link from "next/link";
import { useState } from "react";
import services from "../../../data/services.json";

const ServiceDetails = ({ service }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile_no: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, formType: "serviceQuotation" }),
      });

      const data = await response.json();
      if (data.success) {
        setFormData({
          name: "",
          mobile_no: "",
          service: "",
          message: "",
        });
        setShowModal(false);
      } else {
        alert("Failed to submit the request. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="service-details">
      <div className="overview-section">
        <h3 className="overview-title">{service.detailsTitle}</h3>

        <div className="overview-container">
          <div className="overview-left">
            <div className="overview">
              <h4 className="overview-subtitle">{service.overviewTagline}</h4>
              <p className="overview-text">{service.overview}</p>
            </div>
          </div>

          <div className="overview-right mt-16">
            <div className="quotation-box">
              <h3 className="quotation-title">Get A Quotation</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="mobile_no"
                    value={formData.mobile_no}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="form-input"
                    required
                  />
                </div>
                {/* <div className="form-group">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div> */}
                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Description"
                    className="form-textarea"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div className="form-buttons">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="btn btn-cancel"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <section className="process1-section">
        <div className="process1-container">
          <h2 className="process1-title">Our Process</h2>
          <div className="process1-grid">
            {service.processes.map((process, index) => (
              <div key={index} className="process1-card">
                <h3 className="process1-card-title">{process.title}</h3>
                <p className="process1-card-description">
                  {process.description}
                </p>
                <div className="process1-card-index">{index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="benefits-container">
          <h2 className="benefits-title">Benefits</h2>
          <div className="benefits-grid">
            <div className="benefits-column">
              {service.leftBenefits.map((item, index) => (
                <div key={index} className="benefit-item">
                  <span className="benefit-bullet"></span>
                  <p className="benefit-text">{item}</p>
                </div>
              ))}
            </div>
            <div className="benefits-column">
              {service.rightBenefits.map((item, index) => (
                <div key={index} className="benefit-item">
                  <span className="benefit-bullet"></span>
                  <p className="benefit-text">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ServiceDetails;
