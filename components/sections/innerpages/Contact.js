"use client";

import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const Contact = () => {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setOpen(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <section className="contact-details">
        <div className="container ">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="sec-title">
                <span className="sub-title">Send us email</span>
                <h2>Feel free to write</h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="email"
                        className="form-control"
                        type="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="subject"
                        className="form-control"
                        type="text"
                        placeholder="Enter Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="phone"
                        className="form-control"
                        type="text"
                        placeholder="Enter Phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="7"
                    placeholder="Enter Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="mb-5">
                  <button
                    type="submit"
                    className="theme-btn btn-style-one me-2 mb-3 mb-sm-0"
                  >
                    <span className="btn-title">Send message</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-details__right">
                <div className="sec-title">
                  <span className="sub-title">Need any help?</span>
                  <h2>Get in touch with us</h2>
                  <div className="text">
                    We're here to assist you with all your low carbon energy
                    needs. Whether you have inquiries about our services or want
                    to explore how we can support your projects, feel free to
                    reach out. Our team is ready to help you achieve sustainable
                    energy goals. Contact us today!
                  </div>
                </div>
                <ul className="list-unstyled contact-details__info">
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-phone-plus"></span>
                    </div>
                    <div className="text">
                      <h6>Have any question?</h6>
                      <a href="tel:+919825935445">+91 98259 35445</a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-envelope1"></span>
                    </div>
                    <div className="text">
                      <h6>Write email</h6>
                      <a href="mailto:management@sustechsolutions.ae">
                        management@sustechsolutions.ae
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Thank You!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Your message has been received. We'll get back to you shortly.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} className="btn-primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </section>
    </>
  );
};

export default Contact;
