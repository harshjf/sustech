import Link from "next/link";
const About2 = () => {
  return (
    <>
      <section className="about-section-three pt-0">
        <div className="icon-turbines"></div>
        <div className="icon-solar"></div>
        <div className="auto-container">
          <div className="row">
            <div className="image-column col-xl-7 col-lg-6 col-md-12 col-sm-12 order-lg-2 order-2 ">
              <div className="inner-column">
                <div className="image-box">
                  <figure className="image overlay-anim">
                    <img src="/images/background/Picture3.png" alt="Image" />
                    {/* <img src="/images/home/wind.png" alt="Image" /> */}
                  </figure>

                  {/* <div className="exp-box bounce-x">
                    <div className="inner">
                      <div className="content">
                        <div className="count">Innovative Solutions</div>
                        <h6 className="title">Pioneering Sustainable Energy</h6>
                      </div>
                      <i className="icon fa fa-lightbulb"></i>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="content-column col-xl-5 col-lg-6 col-md-12 col-sm-12 order-lg-1 order-1 wow fadeInRight">
              <div className="inner-column">
                <div className="sec-title">
                  <div className="sub-title-outer">
                    <span className="sub-title">Hydrogen Challenges</span>
                    <span className="divider"></span>
                  </div>
                  <h2
                    className="title letters-slide-up text-split"
                    style={{
                      color: "#028a0f",
                    }}
                  >
                    Overcoming Storage & Transport Barriers for a Hydrogen
                    Future
                  </h2>
                  <div className="text">
                    Hydrogen storage and transport pose significant challenges
                    that impact its economic viability as a clean energy source.
                    High-pressure storage requires compressing hydrogen up to
                    700 bar, which is energy-intensive and leads to efficiency
                    losses. Cryogenic storage, while reducing volume, demands
                    extreme cooling to -253°C, increasing energy costs. Both
                    methods require specialized infrastructure, raising overall
                    expenses. Liquid hydrogen is efficient for long-distance
                    transport but energy-intensive to liquefy and regasify,
                    reducing efficiency. Both high-pressure and cryogenic
                    storage require costly infrastructure and safety measures,
                    creating the 'hydrogen economy paradox' that limits
                    hydrogen’s appeal compared to fossil fuels. Overcoming these
                    hurdles through innovative storage solutions is crucial to
                    making hydrogen a sustainable energy alternative.
                  </div>
                </div>
                <div className="bottom-box">
                  <div className="list-box">
                    <ul className="list-style-two">
                      <li>
                        <i className="fa fa-arrow-alt-circle-right"></i>{" "}
                        High-pressure storage demands energy & costly materials
                      </li>
                      <li>
                        <i className="fa fa-arrow-alt-circle-right"></i>{" "}
                        Cryogenic storage requires extreme cooling &
                        infrastructure
                      </li>
                      <li>
                        <i className="fa fa-arrow-alt-circle-right"></i>
                        Alternative storage methods like solid-state & chemical
                        storage offer solutions
                      </li>
                    </ul>
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
export default About2;
