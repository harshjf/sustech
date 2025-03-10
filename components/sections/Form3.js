import Link from "next/link";
import React, { useState } from "react";
const Form3 = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.full_name,
          email: formData.email,
          phone_no: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSuccessMessage("Your request has been sent successfully!");
        setFormData({
          full_name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setErrorMessage("Failed to send your request. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="contact-section">
        {/* <div className="icon-bulb-3 bounce-y"></div> */}
        <div className="auto-container">
          <div className="outer-box">
            <div className="row">
              <div className="content-column col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
                <div className="inner-column">
                  <div className="icon-dots"></div>
                  <div className="sec-title">
                    <div className="sub-title-outer">
                      <span className="sub-title">
                        we care about the planet
                      </span>
                      <span className="divider"></span>
                    </div>
                    <h2 className="letters-slide-up text-split">
                      Industry leading innovative hydrogen solutions
                    </h2>
                    <div className="text">
                      A leading advocate for low-carbon hydrogen solutions and a
                      pioneer in sustainable energy innovation, driving clean
                      energy adoption for communities across the Globe.
                    </div>
                  </div>
                  {/* <div className="row">
                    <div className="contact-block col-lg-4 col-md-4 col-sm-4">
                      <div className="inner-box">
                        <i className="icon flaticon-solar-house-1"></i>
                        <div className="content">
                          <h4 className="title">
                            The one-stop <br /> smart solar
                          </h4>
                        </div>
                      </div>
                    </div>

                    <div className="contact-block col-lg-4 col-md-4 col-sm-4">
                      <div className="inner-box">
                        <i className="icon flaticon-solar-energy-1"></i>
                        <div className="content">
                          <h4 className="title">
                            No Hidden <br /> Charge
                          </h4>
                        </div>
                      </div>
                    </div>

                    <div className="contact-block col-lg-4 col-md-4 col-sm-4">
                      <div className="inner-box">
                        <i className="icon flaticon-solar-panels"></i>
                        <div className="content">
                          <h4 className="title">
                            24/7 <br /> Support
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  <div className="contact-info-block-two">
                    <figure className="image wow zoomIn">
                      <img src="/images/resource/contact1-1.jpg" alt="Image" />
                    </figure>
                    <div className="contact">
                      <h2 className="text">Call us for any inquiry</h2>
                      <Link href="tel:01061245741" className="number">
                        (+91) 98259 35445
                      </Link>
                      <i className=" icon fal fa-phone"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div
                    className="contact-form style-two wow fadeIn"
                    data-wow-delay="300ms"
                  >
                    <form onSubmit={handleSubmit} id="contact-form">
                      <h3 className="title text-center">Get in touch</h3>
                      <div className="row">
                        {/* Name Input */}
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <input
                            type="text"
                            name="full_name"
                            placeholder="Your Name"
                            value={formData.full_name}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        {/* Email Input */}
                        <div className="col-lg-12 col-md-6 col-sm-12 form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        {/* Phone Input */}
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        {/* Subject Input */}
                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        {/* Message Input */}
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                          ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <button
                            className="theme-btn btn-style-one dark-bg hover-one"
                            type="submit"
                            disabled={loading}
                          >
                            <span className="btn-title">
                              {loading ? "Sending..." : "Submit Request"}
                              <i className="icon icon-sm-arrow"></i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                    {/* Success/Error Messages */}
                    {successMessage && (
                      <p className="success-message">{successMessage}</p>
                    )}
                    {errorMessage && (
                      <p className="error-message">{errorMessage}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Form3;
