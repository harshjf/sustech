import Link from "next/link"

export default function Footer1() {
  return (
  <>
  <footer className="main-footer footer-style-one">
    <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/6.jpg)' }}></div>
    <div className="icon-turbines-7"></div>

    <div className="footer-top">
      <div className="auto-container">
        <div className="outer-box">

          <div className="top-left">
            <div className="logo"><img src="/images/logo-2.png" alt="Logo" title="Soliur"/></div>
          </div>

          <div className="top-right">
            <ul className="social-icon-two">
              <li className="title">Follow Us On</li>
              <li><Link href="#"><i className="icon fab fa-facebook-f"></i></Link></li>
              <li><Link href="#"><i className="icon fab fa-twitter"></i></Link></li>
              <li><Link href="#"><i className="icon fab fa-linkedin-in"></i></Link></li>
              <li><Link href="#"><i className="icon fab fa-pinterest"></i></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* Widgets Section */}
    <div className="widgets-section">
      <div className="auto-container">
        <div className="row">

          <div className="footer-column col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div className="footer-widget contact-widget">
              <h5 className="widget-title">Contact</h5>
              <div className="widget-content">
                <ul className="contact-list-two light">
                  <li><i className="fal fa-map-marker-alt"></i> 13005 Greenville Xblock <br/> Street WA 98370 United State</li>
                  <li><i className="fal fa-phone"></i> <Link href="tel:+11234562228">(+1 123 456 2228)</Link></li>
                  <li><i className="fal fa-envelope"></i> <Link href="mailto:info@example.com">info@example.com</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-column col-xl-2 col-lg-6 col-md-6 col-sm-12">
            <div className="footer-widget links-widget">
              <h5 className="widget-title">Quick Links</h5>
              <div className="widget-content">
                <ul className="user-links">
                  <li><i className="icon fa fa-angle-right"></i> <Link href="#">Home</Link></li>
                  <li><i className="icon fa fa-angle-right"></i> <Link href="#">About Us</Link></li>
                  <li><i className="icon fa fa-angle-right"></i> <Link href="#">Our Services</Link></li>
                  <li><i className="icon fa fa-angle-right"></i> <Link href="#">News</Link></li>
                  <li><i className="icon fa fa-angle-right"></i> <Link href="#">Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-column col-xl-2 col-lg-6 col-md-6 col-sm-12">
            <div className="footer-widget links-widget">
              <h5 className="widget-title">Company</h5>
              <div className="widget-content">
                <ul className="user-links">
                  <li><i className="icon fa fa-angle-right"></i> <Link href="#">Team</Link></li>
                  <li><i className="icon fa fa-angle-right"></i> <Link href="#">About Us</Link></li>
                  <li><i className="icon fa fa-angle-right"></i> <Link href="#">Career</Link></li>
                  <li><i className="icon fa fa-angle-right"></i> <Link href="#">Privacy</Link></li>
                  <li><i className="icon fa fa-angle-right"></i> <Link href="#">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-column col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div className="footer-widget newsletter-widget">
              <h5 className="widget-title">Newsletter</h5>
              <div className="text">Sign up for alerts, our latest blogs, <br/> thoughts, and insights.</div>

              <div className="newsletter-form">
                <form method="post" action="#">
                  <div className="form-group">
                    <div className="input-outer">
                      <span className="icon fal fa-envelope"></span>
                      <input type="email" name="Email" placeholder="Your Email" required/>
                    </div>
                    <button type="submit" className="theme-btn btn-style-one bg-orange"><span className="btn-title">Subscribe now</span></button>
                  </div>
                </form>
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
          <div className="copyright-text">© Copyrights reserved by kodesolution. </div>
        </div>
      </div>
    </div>
  </footer>

  </>
  )
}
