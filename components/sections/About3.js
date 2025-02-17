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
                      <span className="sub-title">Hydrogen Innovation</span>
                      <span className="divider"></span>
                    </div>
                    <h2
                      className="letters-slide-up text-split"
                      style={{
                        color: "#00308f",
                      }}
                    >
                      Affordable Hydrogen On-Demand with Methanol Conversion
                    </h2>
                  </div>
                  <div className="icon-box">
                    <div className="content-box">
                      <i className="icon flaticon-bulb"></i>
                      <div className="text">
                        Sustech team has developed an innovative solution for
                        converting methanol to hydrogen at low temperatures,
                        enabling on-demand hydrogen production directly at
                        end-use sites. M2H2, a revolutionary patented
                        technology. This game-changing
                        approach provides green hydrogen for various
                        applications, including off-grid power, EV charging,
                        green steel, and hydrogen refuelling stations, with zero
                        carbon footprint. This marks the beginning of a green
                        and sustainable future for mankind and our planet.
                      </div>
                    </div>
                  </div>
                  <ul className="list-style-two">
                    <li>
                      <i className="fa fa-arrow-alt-circle-right"></i> Converts
                      methanol to hydrogen at just 130°C for on-site use{" "}
                    </li>
                    <li>
                      <i className="fa fa-arrow-alt-circle-right"></i>
                      Enables clean hydrogen supply for refuelling stations, EVs
                      & industry{" "}
                    </li>
                    <li>
                      <i className="fa fa-arrow-alt-circle-right"></i>
                      Eliminates storage & transport challenges with
                      cost-effective green hydrogen{" "}
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
