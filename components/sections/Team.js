import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    dynamicBullets: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    575: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 4,
      // spaceBetween: 30,
    },
  },
};
const Team = () => {
  return (
    <>
      <section className="team-section">
        <div
          className="bg bg-image"
          style={{ backgroundImage: "url(images/background/3.jpg)" }}
        ></div>
        <div className="auto-container">
          <div className="sec-title light text-center">
            <div className="sub-title-outer">
              <span className="sub-title">Expert team</span>
              <span className="divider"></span>
            </div>
            <h2 className="letters-slide-up text-split">
              Industry leaders team
            </h2>
          </div>
          <Swiper
            {...swiperOptions}
            className="team-carousel owl-carousel owl-theme default-dots"
          >
            {/* team Block */}
            <SwiperSlide className="team-block">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="our-team-details">
                      <img src="/images/resource/team1-1.jpg" alt="Image" />
                    </Link>
                  </figure>
                  <div className="info-box">
                    <span className="share-icon fa fa-share-alt"></span>
                    <div className="social-links">
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </div>
                    <h5 className="name">
                      <Link href="our-team-details">Alen Donald</Link>
                    </h5>
                    <span className="designation">CEO, Sustech</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* team Block */}
            <SwiperSlide className="team-block">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="our-team-details">
                      <img src="/images/resource/team1-2.jpg" alt="Image" />
                    </Link>
                  </figure>
                  <div className="info-box">
                    <span className="share-icon fa fa-share-alt"></span>
                    <div className="social-links">
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </div>
                    <h5 className="name">
                      <Link href="our-team-details">Alen Donald</Link>
                    </h5>
                    <span className="designation">CEO, Sustech</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* team Block */}
            <SwiperSlide className="team-block">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="our-team-details">
                      <img src="/images/resource/team1-3.jpg" alt="Image" />
                    </Link>
                  </figure>
                  <div className="info-box">
                    <span className="share-icon fa fa-share-alt"></span>
                    <div className="social-links">
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </div>
                    <h5 className="name">
                      <Link href="our-team-details">Alen Donald</Link>
                    </h5>
                    <span className="designation">CEO, Sustech</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* team Block */}
            <SwiperSlide className="team-block">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="our-team-details">
                      <img src="/images/resource/team1-4.jpg" alt="Image" />
                    </Link>
                  </figure>
                  <div className="info-box">
                    <span className="share-icon fa fa-share-alt"></span>
                    <div className="social-links">
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </div>
                    <h5 className="name">
                      <Link href="our-team-details">Alen Donald</Link>
                    </h5>
                    <span className="designation">CEO, Sustech</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* team Block */}
            <SwiperSlide className="team-block">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="our-team-details">
                      <img src="images/resource/team1-1.jpg" alt="Image" />
                    </Link>
                  </figure>
                  <div className="info-box">
                    <span className="share-icon fa fa-share-alt"></span>
                    <div className="social-links">
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </div>
                    <h5 className="name">
                      <Link href="our-team-details">Alen Donald</Link>
                    </h5>
                    <span className="designation">CEO, Sustech</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};
export default Team;
