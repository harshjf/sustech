import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer className="main-footer footer-style-one">
        <div
          className="bg bg-image"
          style={{ backgroundImage: "url(images/background/6.jpg)" }}
        ></div>
        <div className="icon-turbines-7"></div>

        <div className="widgets-section">
          <div className="auto-container">
            <div className="row">
              <div className="footer-column col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div className="footer-widget newsletter-widget">
                  <div className="logo">
                    <img
                      src="/images/footerlogo1.png"
                      alt="Logo"
                      title="Sustech"
                    />
                  </div>
                  <div className="logo">
                    <img
                      src="/images/footerlogo2.png"
                      alt="Logo"
                      title="Sustech"
                    />
                  </div>
                </div>
              </div>
              <div className="footer-column col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div className="footer-widget contact-widget">
                  <h5 className="widget-title">Contact</h5>
                  <div className="widget-content">
                    <ul className="contact-list-two light">
                      <li>
                        <i className="fal fa-map-marker-alt"></i>KPLEX Coworking
                        Solutions, Dr. Vikram Sarabhai Marg, Vadodara, Gujarat,
                        India
                      </li>
                      <li>
                        <i className="fal fa-map-marker-alt"></i>
                        20733, Building A1, Dubai Digital Park,
                        <br /> Dubai Silicon Oasis, United Arab Emirates
                      </li>
                      <li>
                        <i className="fal fa-phone"></i>{" "}
                        <Link href="tel:+11234562228">(+91) 98259 35445</Link>
                      </li>
                      <li>
                        <i className="fal fa-envelope"></i>{" "}
                        <Link href="mailto:management@sustechsolutions.ae">
                          management@sustechsolutions.ae
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* For Laptop Screens - Original Quick Links */}
              <div className="footer-column col-xl-2 col-lg-6 col-md-6 col-sm-12 original-quick-links">
                <div className="footer-widget links-widget">
                  <h5 className="widget-title">Quick Links</h5>
                  <div className="widget-content">
                    <ul className="user-links">
                      <li>
                        <i className="icon fa fa-angle-right"></i>{" "}
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <i className="icon fa fa-angle-right"></i>{" "}
                        <Link href="/portfolio">Portfolio</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="footer-column col-xl-2 col-lg-6 col-md-6 col-sm-12 original-quick-links">
                <div className="footer-widget links-widget">
                  <h5 className="widget-title"></h5>
                  <div className="widget-content">
                    <ul className="user-links">
                      <li>
                        <i className="icon fa fa-angle-right"></i>{" "}
                        <Link href="/about-us">About Us</Link>
                      </li>
                      <li>
                        <i className="icon fa fa-angle-right"></i>{" "}
                        <Link href="/certifications">Certifications</Link>
                      </li>
                      <li>
                        <i className="icon fa fa-angle-right"></i>{" "}
                        <Link href="/contact-us">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* For Mobile Screens - Combined Quick Links */}
              <div className="footer-column col-12 mobile-footer-links">
                <div className="footer-widget links-widget">
                  <h5 className="widget-title">Quick Links</h5>
                  <div className="widget-content">
                    <ul className="user-links">
                      <li>
                        <i className="icon fa fa-angle-right"></i>{" "}
                        <Link href="#">Home</Link>
                      </li>
                      <li>
                        <i className="icon fa fa-angle-right"></i>{" "}
                        <Link href="/services">Our Services</Link>
                      </li>
                      <li>
                        <i className="icon fa fa-angle-right"></i>{" "}
                        <Link href="/about-us">About Us</Link>
                      </li>
                      <li>
                        <i className="icon fa fa-angle-right"></i>{" "}
                        <Link href="/our-team">Team</Link>
                      </li>
                      <li>
                        <i className="icon fa fa-angle-right"></i>{" "}
                        <Link href="/contact-us">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  Footer Bottom */}
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="inner-container">
              <div className="copyright-text">
                © Copyrights reserved by Sustech Neo Energy Private Ltd.{" "}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* CSS Styles */}
      <style jsx>{`
        @media (max-width: 767px) {
          /* Hide the original Quick Links for mobile */
          .original-quick-links {
            display: none;
          }

          /* Show only the combined Quick Links for mobile */
          .mobile-footer-links {
            display: block;
          }

          .user-links {
            display: flex;
            flex-direction: column;
            padding: 0;
            margin: 0;
          }

          .user-links li {
            margin: 0;
            padding: 0;
          }
        }

        @media (min-width: 768px) {
          /* For larger screens, show the original Quick Links */
          .mobile-footer-links {
            display: none;
          }

          .original-quick-links {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
