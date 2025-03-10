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
                              To nurture and develop hydrogen energy ecosystem
                              by on-demand onsite hydrogen production
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
                              To utilize the combined knowledge and skillset to
                              accelerate the journey to net-zero by cooperating
                              and collaborating with all stakeholders in the
                              endeavour to create a sustainable future.
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
                              Sustech Solution has created and innovative
                              product for conversion of methanol to hydrogen at
                              low temperatures thereby making on demand hydrogen
                              available at end use sites. Methanol gets
                              delivered in a container trailer to an end usage
                              site like hydrogen refueling stations used to
                              refill hydrogen vehicles. M2H2 a revolutionary
                              patented product by Sustech Solutions team
                              converts the methanol to hydrogen at temperature
                              not exceeding 130 degree celcius. If bio methanol
                              is used, M2H2 produces green hydrogen at an
                              affordable price right at the end usage site. The
                              applications span from off-grid power, EV
                              charging, green steel, hydrogen refueling stations
                              and much more with zero carbon footprint. M2H2
                              solves the difficult challenge of storage and
                              transport of green hydrogen by producing green
                              hydrogen from methanol directly at the site of end
                              use at affordable prices. This is the beginning of
                              a green and sustainable future for mankind and our
                              planet.
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
