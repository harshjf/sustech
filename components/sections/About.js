const About = () => {
  return (
    <>
      <section className="about-section pt-8">
        {/*  <div className="float-text">Sustech</div> */}
        <div className="auto-container">
          <div className="outer-box">
            <div className="row">
              <div
                className="content-column col-xl-5 col-lg-6 col-md-12 col-sm-12 order-lg-2 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="inner-column">
                  <div className="sec-title">
                    <div className="sub-title-outer">
                      <span className="sub-title">Hydrogen Energy</span>
                      <span className="divider"></span>
                    </div>
                    <h2
                      className="letters-slide-up text-split"
                      style={{
                        color: "#FE691E",
                      }}
                    >
                      Unlocking the Potential of Hydrogen for a Sustainable
                      Future
                    </h2>
                    <div className="text">
                      Hydrogen is increasingly viewed as a vital component of
                      the transition to green energy due to its potential to
                      significantly reduce greenhouse gas emissions and reliance
                      on fossil fuels. Moreover, hydrogen's potential extends to
                      heating applications, where it can be blended with natural
                      gas to reduce emissions in existing infrastructure.
                    </div>
                  </div>
                  <div className="bottom-box">
                    <ul className="list-style-three">
                      <li>
                        <i className="icon flaticon-solar-panels"></i> Powers
                        fuel-cell vehicles <br /> with faster refueling & longer
                        range.
                      </li>
                      <li>
                        <i className="icon flaticon-solar-panel-6"></i>Enables
                        decarbonization <br /> in steel, cement & chemical
                        industries.
                      </li>
                      <li>
                        <i className="icon flaticon-solar-energy-1"></i> Stores
                        excess renewable <br /> energy for grid reliability.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="image-column col-xl-7 col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="image-box">
                    <figure className="image overlay-anim">
                      <img
                        src="/images/background/hydrogen.jpg"
                        alt="Image"
                        className="image"
                      />
                    </figure>
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
