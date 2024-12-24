import Link from "next/link";
const About2 = () => {
  return (
    <>
      <section className="about-section-three pt-0">
        <div className="icon-turbines"></div>
        <div className="icon-solar"></div>
        <div className="auto-container">
          <div className="row">
            {/* Image Column - Now on the right side */}
            <div className="image-column col-xl-7 col-lg-6 col-md-12 col-sm-12 order-lg-2">
              <div className="inner-column">
                <div className="image-box">
                  <figure className="image overlay-anim">
                    <img src="/images/home/wind.png" alt="Image" />
                  </figure>

                  <div className="exp-box bounce-x">
                    <div className="inner">
                      <div className="content">
                        {/* <div className="count">Innovative Solutions</div> */}
                        <h6 className="title">Pioneering Sustainable Energy</h6>
                      </div>
                      <i className="icon fa fa-lightbulb"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-column col-xl-5 col-lg-6 col-md-12 col-sm-12 order-lg-1 wow fadeInRight">
              <div className="inner-column">
                <div className="sec-title">
                  <div className="sub-title-outer">
                    <span className="sub-title">Wind Energy</span>
                    <span className="divider"></span>
                  </div>
                  <h2
                    className="title letters-slide-up text-split"
                    style={{
                      color: "#028a0f",
                    }}
                  >
                    Harnessing Nature’s Force for a Sustainable Future.
                  </h2>
                  <div className="text">
                    Wind energy is a powerful and sustainable solution to the
                    global energy challenge, offering clean and renewable
                    electricity without depleting natural resources. At Sustech
                    Neo Energy, we bring advanced wind power technologies to
                    life, helping communities and businesses harness the
                    untapped potential of wind. Our innovative wind energy
                    systems are designed to deliver reliable, cost-effective
                    power while reducing greenhouse gas emissions.
                  </div>
                </div>
                <div className="bottom-box">
                  <div className="list-box">
                    <ul className="list-style-two">
                      <li>
                        <i className="fa fa-arrow-alt-circle-right"></i>{" "}
                        Significantly reduces electricity costs with renewable
                        wind power.
                      </li>
                      <li>
                        <i className="fa fa-arrow-alt-circle-right"></i> A solar
                        A wind installation generates clean, sustainable energy
                        effortlessly.
                      </li>
                      <li>
                        <i className="fa fa-arrow-alt-circle-right"></i> Help
                        Helps lower residential and commercial carbon footprints
                        effectively.
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
