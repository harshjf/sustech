import Link from "next/link";
const About = () => {
  return (
    <>
      <section className="about-section-three">
        <div className="icon-turbines"></div>
        <div className="icon-solar"></div>
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-xl-5 col-lg-6 col-md-12 col-sm-12 order-lg-2 wow fadeInRight">
              <div className="inner-column">
                <div className="sec-title">
                  <div className="sub-title-outer">
                    <span className="sub-title">Who we are</span>
                    <span className="divider"></span>
                  </div>
                  <h2 className="title letters-slide-up text-split">
                    Pioneers in Renewable Energy Solutions
                  </h2>
                  <div className="text">
                    Sustech Solutions is a pioneering sustainable technology
                    firm with the vision and ambition to lead and contribute
                    towards a sustainable world for future generations. Our team
                    comprises of professionals with decades of
                    multi-disciplinary experience across continents with
                    competency in energy, mobility, corporate & project finance,
                    technology innovation, business incubation, project
                    management, data science, ecology/wildlife and contract
                    management.
                  </div>
                </div>
                <div className="bottom-box">
                  <div className="list-box">
                    <ul className="list-style-two">
                      <li>
                        <i className="fa fa-arrow-alt-circle-right"></i>{" "}
                        Harnesses the power of nature to generate clean,
                        reliable energy.
                      </li>
                      <li>
                        <i className="fa fa-arrow-alt-circle-right"></i> A solar
                        Supports global efforts to reduce carbon emissions and
                        pollution.
                      </li>
                      <li>
                        <i className="fa fa-arrow-alt-circle-right"></i> Help
                        Promotes energy independence with sustainable and
                        innovative solutions.
                      </li>
                    </ul>
                  </div>

                  <div className="icon-box">
                    <div className="inner">
                      <i className="icon flaticon-bulb"></i>
                      <h6 className="title">
                        Leading Provider of Sustainable Energy Solutions
                      </h6>
                    </div>
                  </div>
                </div>
                <Link href="contact-us" className="theme-btn btn-style-one">
                  <span className="btn-title">
                    Contact Us <i className="icon icon-sm-arrow"></i>
                  </span>
                </Link>
              </div>
            </div>

            <div className="image-column col-xl-7 col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image-box">
                  <figure className="image overlay-anim">
                    <img src="/images/resource/about3-1.jpg" alt="Image" />
                  </figure>
                  <figure
                    className="image-2 overlay-anim"
                    data-wow-delay="300ms"
                  >
                    <img src="/images/resource/about3-2.jpg" alt="Image" />
                  </figure>
                  <div className="exp-box bounce-x">
                    <div className="inner">
                      <div className="content">
                        <div className="count">3800</div>
                        <h6 className="title">Satisfied Clients</h6>
                      </div>
                      <i className="icon fa fa-user"></i>
                    </div>
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
export default About;
