const About3 = () => {
  return (
    <>
      <section className="about-section-four pt-0">
        <div className="icon-bulb-3 bounce-y"></div>
        <div className="icon-dots"></div>
        <div className="auto-container">
          <div className="outer-box">
            <div className="bg bg-pattern-1"></div>
            <div className="row">
              <div
                className="content-column col-lg-6 col-md-12 col-sm-12 order-lg-2 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="inner-column" style={{ paddingLeft: "35px" }}>
                  <div className="sec-title">
                    <div className="sub-title-outer">
                      <span className="sub-title">Hydroelectric Energy</span>
                      <span className="divider"></span>
                    </div>
                    <h2
                      className="letters-slide-up text-split"
                      style={{
                        color: "#00308f",
                      }}
                    >
                      Powering the Future with the Flow of Water
                    </h2>
                  </div>
                  <div className="icon-box">
                    <div className="content-box">
                      <i className="icon flaticon-bulb"></i>
                      <div className="text">
                        Hydroelectric energy is one of the most reliable and
                        efficient renewable energy sources, harnessing the power
                        of flowing water to generate clean electricity. At
                        Sustech Neo Energy, we offer innovative hydroelectric
                        solutions designed to meet diverse energy needs while
                        minimizing environmental impact.
                      </div>
                    </div>
                  </div>
                  <ul className="list-style-two">
                    <li>
                      <i className="fa fa-arrow-alt-circle-right"></i>{" "}
                      Consistent and reliable energy production
                    </li>
                    <li>
                      <i className="fa fa-arrow-alt-circle-right"></i> A solar
                      Environmentally friendly
                    </li>
                    <li>
                      <i className="fa fa-arrow-alt-circle-right"></i> Help
                      Scalable systems
                    </li>
                  </ul>
                </div>
              </div>

              <div className="image-column col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="image-box">
                    <figure className="image overlay-anim">
                      <img src="/images/home/hydro2.png" alt="Image" />
                    </figure>
                    {/* <div className="exp-box">
                      <div className="inner">
                        <h1 className="title" data-text="25">
                          25
                        </h1>
                        <span className="text">Years of Experience</span>
                      </div>
                    </div> */}
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
export default About3;
