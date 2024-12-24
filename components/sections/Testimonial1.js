import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
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
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
  },
};
const Testimonial1 = () => {
  return (
    <>
      <section className="testimonial-section">
        <div className="icon-turbines-5"></div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <div className="sub-title-outer">
              <span className="sub-title">testimonial</span>
              <span className="divider"></span>
            </div>
            <h2
              className="letters-slide-up text-split"
              style={{ color: "#028a0f" }}
            >
              Success stories from clients
            </h2>
          </div>
          <div className="carousel-outer">
            <Swiper
              {...swiperOptions}
              className="testimonial-carousel owl-carousel owl-theme default-dots"
            >
              {/* testimonial Block */}
              <SwiperSlide className="testimonial-block">
                <div className="inner-box">
                  <div className="icon-box">
                    <span className="icon icon-quote"></span>
                  </div>
                  <figure className="thumb">
                    <img src="/images/resource/testi1-1.jpg" alt="Image" />
                  </figure>
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut.
                  </div>
                  <h6 className="name">Lorem ipsum </h6>
                  {/* <span className="designation">CEO, Sustech</span> */}
                  <div className="icon-bulb"></div>
                </div>
              </SwiperSlide>
              {/* testimonial Block */}
              <SwiperSlide className="testimonial-block">
                <div className="inner-box">
                  <div className="icon-box">
                    <span className="icon icon-quote"></span>
                  </div>
                  <figure className="thumb">
                    <img src="/images/resource/testi1-2.jpg" alt="Image" />
                  </figure>
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut.
                  </div>
                  <h6 className="name">Lorem ipsum </h6>
                  {/*   <span className="designation">CEO, Sustech</span> */}
                  <div className="icon-bulb"></div>
                </div>
              </SwiperSlide>
              {/* testimonial Block */}
              <SwiperSlide className="testimonial-block">
                <div className="inner-box">
                  <div className="icon-box">
                    <span className="icon icon-quote"></span>
                  </div>
                  <figure className="thumb">
                    <img src="/images/resource/testi1-3.jpg" alt="Image" />
                  </figure>
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut.
                  </div>
                  <h6 className="name">Lorem ipsum </h6>
                  {/*  <span className="designation">CEO, Sustech</span> */}
                  <div className="icon-bulb"></div>
                </div>
              </SwiperSlide>
              {/* testimonial Block */}
              <SwiperSlide className="testimonial-block">
                <div className="inner-box">
                  <div className="icon-box">
                    <span className="icon icon-quote"></span>
                  </div>
                  <figure className="thumb">
                    <img src="/images/resource/testi1-1.jpg" alt="Image" />
                  </figure>
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut.
                  </div>
                  <h6 className="name">Lorem ipsum </h6>
                  {/*  <span className="designation">CEO, Sustech</span> */}
                  <div className="icon-bulb"></div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonial1;
