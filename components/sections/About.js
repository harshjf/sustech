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
                      <span className="sub-title">Solar Energy</span>
                      <span className="divider"></span>
                    </div>
                    <h2
                      className="letters-slide-up text-split"
                      style={{
                        color: "#FE691E",
                      }}
                    >
                      Harness the Power of the Sun for a Brighter Tomorrow
                    </h2>
                    <div className="text">
                      Solar energy represents the future of sustainable power,
                      offering clean and renewable solutions to meet the world's
                      growing energy needs. At Sustech Neo Energy, we specialize
                      in providing cutting-edge solar technologies designed to
                      maximize efficiency and minimize environmental impact.
                    </div>
                  </div>
                  <div className="bottom-box">
                    <ul className="list-style-three">
                      <li>
                        <i className="icon flaticon-solar-panels"></i>{" "}
                        Significantly reduces <br /> electricity bills
                      </li>
                      <li>
                        <i className="icon flaticon-solar-panel-6"></i> A solar
                        installation <br /> makes attractive
                      </li>
                      <li>
                        <i className="icon flaticon-solar-energy-1"></i> Help
                        lower electricity <br /> residential costs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="image-column col-xl-7 col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="bg-home"></div>
                  <div className="image-box">
                    <div className="image">
                      <img src="/images/resource/about1-1.png" alt="Image" />
                    </div>
                    <div className="image-2 zoom-one" data-wow-delay="300ms">
                      <img src="/images/resource/about1-2.jpg" alt="Image" />
                    </div>
                    <div className="exp-box">
                      <i className="icon flaticon-bulb"></i>
                      <br />
                      <span className="text">Affordable System</span>
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
