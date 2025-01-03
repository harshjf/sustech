import dynamic from "next/dynamic";
const CounterUp = dynamic(() => import("@/components/elements/CounterUp"), {
  ssr: false,
});
import React, { useState } from "react";
const About33 = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };
  return (
    <>
      <section className="about-section-five mb-50">
        <div
          className="bg"
          style={{ backgroundImage: "url(images/background/10.jpg)" }}
        ></div>
        <div className="auto-container">
          <div className="outer-box">
            <div className="row">
              <div
                className="content-column col-lg-6 col-md-12 col-sm-12 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="inner-column">
                  <div className="sec-title light">
                    <div className="sub-title-outer">
                      <span className="sub-title">Innovation</span>
                      <span className="divider"></span>
                    </div>
                    <h2 className="letters-slide-up text-split">
                      Savings for you, clean <br /> power for your life
                    </h2>
                    <div className="text">
                      A leading voice in renewable energy sector{" "}
                    </div>
                  </div>
                  <ul className="list-style-four two-column">
                    <li>
                      <i className="fa fa-check-circle"></i>Full automation
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>Super Factory
                    </li>
                  </ul>
                </div>
              </div>

              <div className="tabs-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  {/* <div className="text">
                    A leading voice in low-income solar policy and the nation’s
                    largest nonprofit solar installer, serving families
                    throughout California
                  </div> */}

                  <div className="about-tabs tabs-box">
                    <div className="btn-box">
                      <ul className="tab-btns tab-buttons">
                        <li
                          className={
                            activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"
                          }
                          onClick={() => handleOnClick(1)}
                          data-tab="#tab1"
                        >
                          Mission
                        </li>
                        <li
                          className={
                            activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"
                          }
                          onClick={() => handleOnClick(2)}
                          data-tab="#tab2"
                        >
                          Vision
                        </li>
                        <li
                          className={
                            activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"
                          }
                          onClick={() => handleOnClick(3)}
                          data-tab="#tab3"
                        >
                          Values
                        </li>
                      </ul>
                    </div>

                    <div className="tabs-content">
                      <div
                        className={activeIndex === 1 ? "tab active-tab" : "tab"}
                      >
                        <div className="inner-box">
                          {/*  <figure className="image">
                            <img
                              src="/images/resource/about5-1.jpg"
                              alt="Image"
                            />
                          </figure> */}
                          <div className="content-box">
                            <div className="text two">
                              Our mission is to provide sustainable and
                              innovative renewable energy solutions that empower
                              communities, reduce carbon footprints, and
                              contribute to a cleaner, greener planet. We are
                              committed to delivering high-quality, reliable,
                              and cost-effective solar, wind, and hydro systems
                              that help create a sustainable future for all.
                            </div>
                            {/*  <div className="text">
                              A leading voice in low-income solar policy and the
                              nation’s largest nonprofit solar installer,
                              serving families throughout California
                            </div> */}
                          </div>
                        </div>
                      </div>

                      <div
                        className={activeIndex === 2 ? "tab active-tab" : "tab"}
                      >
                        <div className="inner-box">
                          {/* <figure className="image">
                            <img
                              src="/images/resource/about5-1.jpg"
                              alt="Image"
                            />
                          </figure> */}
                          <div className="content-box">
                            <div className="text two">
                              Our vision is to lead the transition to renewable
                              energy by making clean energy accessible to every
                              corner of the world. We strive to be a global
                              leader in the renewable energy sector, driving
                              positive environmental and social change through
                              continuous innovation and the widespread adoption
                              of solar, wind, and hydro technologies.
                            </div>
                            {/*  <div className="text">
                              A leading voice in low-income solar policy and the
                              nation’s largest nonprofit solar installer,
                              serving families throughout California
                            </div> */}
                          </div>
                        </div>
                      </div>

                      <div
                        className={activeIndex === 3 ? "tab active-tab" : "tab"}
                      >
                        <div className="inner-box">
                          {/* <figure className="image">
                            <img
                              src="/images/resource/about5-1.jpg"
                              alt="Image"
                            />
                          </figure> */}
                          <div className="content-box">
                            <div className="text two">
                              We are committed to sustainability, providing
                              renewable energy solutions that reduce
                              environmental impact and promote a cleaner planet.
                              Through innovation, we leverage advanced
                              technologies to improve the efficiency of our
                              systems. Operating with integrity, we prioritize
                              transparency and ethical practices in all our
                              dealings. We believe in collaboration, working
                              with customers and partners to achieve shared
                              goals.
                            </div>
                            {/* <div className="text">
                              A leading voice in low-income solar policy and the
                              nation’s largest nonprofit solar installer,
                              serving families throughout California
                            </div> */}
                          </div>
                        </div>
                      </div>
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
export default About33;
