import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
};
const Services3 = () => {
  return (
    <>
      <section className="services-section-three">
        <div className="icon-solar-5"></div>
        <div className="icon-turbines-11"></div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <div className="sub-title-outer">
              <span className="sub-title">Services</span>
              <span className="divider"></span>
            </div>
            <h2 className="letters-slide-up text-split">
              Your Trusted Partner in Renewable Energy
            </h2>
          </div>
          <div className="row">
            <div
              className="content-column col-xl-6 col-lg-6 order-lg-2 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="inner-column">
                <div
                  className="bg bg-image bg-parallax"
                  style={{ backgroundImage: "url(images/home/slider2/3.png)" }}
                ></div>
                <Swiper
                  {...swiperOptions}
                  className="services-carousel-two owl-carousel owl-theme default-dots"
                >
                  <SwiperSlide className="service-block-four">
                    <div className="inner-box" style={{ marginTop: "12%" }}>
                      <i className="icon flaticon-bulb"></i>
                      <h4 className="title">
                        Turning sunlight into sustainable energy for a brighter
                        future.
                      </h4>
                      <div className="text">
                        Solar energy harnesses the sun’s power to create a
                        cleaner, more sustainable planet. By transitioning to
                        solar, we reduce dependency on finite fossil fuels,
                        dramatically cut greenhouse gas emissions, and help
                        protect the environment for generations to come. Beyond
                        its ecological benefits, solar power provides
                        significant financial advantages through reduced energy
                        bills and government incentives. Embracing solar energy
                        is not just a smart choice; it’s a commitment to
                        innovation, responsibility, and a sustainable future for
                        all.
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <div className="services-column col-xl-6 col-lg-6">
              <div className="inner-column">
                <div className="row">
                  <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="content">
                        <i className="icon flaticon-solar-energy-1"></i>
                        <h6 className="title">
                          <Link href="page-service-details">
                            Energy Efficiency Consulting
                          </Link>
                          <ul>
                            <li>Optimize solar, wind, and hydro systems.</li>

                            <li>
                              Advise on integrating renewable energy sources.
                            </li>
                          </ul>
                        </h6>
                      </div>
                      <Link
                        href="page-service-details"
                        className="theme-btn read-more"
                      >
                        <i className="fa fa-plus"></i>
                      </Link>
                      <div className="icon-bulb-5"></div>
                    </div>
                  </div>

                  <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="content">
                        <i className="icon flaticon-solar-house-1"></i>
                        <h6 className="title">
                          <Link href="page-service-details">
                            Monitoring & Management
                          </Link>
                          <ul>
                            <li>Monitor performance of renewable systems.</li>

                            <li>Troubleshoot and upgrade systems remotely.</li>
                          </ul>
                        </h6>
                      </div>
                      <Link
                        href="page-service-details"
                        className="theme-btn read-more"
                      >
                        <i className="fa fa-plus"></i>
                      </Link>
                      <div className="icon-bulb-5"></div>
                    </div>
                  </div>

                  <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="content">
                        <i className="icon flaticon-solar-panels"></i>
                        <h6 className="title">
                          <Link href="page-service-details">
                            Installation & Setup
                          </Link>
                          <ul>
                            <li>Solar panel installation</li>
                            <li>Wind turbine setup</li>
                            <li>Hydroelectric generator deployment</li>
                          </ul>
                        </h6>
                      </div>
                      <Link
                        href="page-service-details"
                        className="theme-btn read-more"
                      >
                        <i className="fa fa-plus"></i>
                      </Link>
                      <div className="icon-bulb-5"></div>
                    </div>
                  </div>

                  <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="content">
                        <i className="icon flaticon-solar-panel-6"></i>
                        <h6 className="title">
                          <Link href="page-service-details">
                            Maintenance & Repair
                          </Link>
                          <ul>
                            <li>Regular servicing of solar systems</li>
                            <li>Repairing wind turbines</li>
                            <li>Hydroelectric equipment upkeep</li>
                          </ul>
                        </h6>
                      </div>
                      <Link
                        href="page-service-details"
                        className="theme-btn read-more"
                      >
                        <i className="fa fa-plus"></i>
                      </Link>
                      <div className="icon-bulb-5"></div>
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
export default Services3;
