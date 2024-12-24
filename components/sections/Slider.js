import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  loop: true,
};
const Slider = () => {
  return (
    <>
      <section className="main-slider">
        <Swiper {...swiperOptions}>
          <SwiperSlide className="slide-item" style={{ height: "100vh" }}>
            <div
              className="bg bg-image"
              style={{ backgroundImage: "url(images/home/slider/2.png)" }}
            >
              <div className="overlay"></div>
            </div>
            <div className="auto-container content-box">
              <span className="sub-title">
                <i className="icon flaticon-bulb"></i>{" "}
                <span>Best Energy Solutions</span>
              </span>

              <div className="text">
                Powering the Future with Sustainable Innovation
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slide-item" style={{ height: "100vh" }}>
            <div
              className="bg bg-image"
              style={{ backgroundImage: "url(images/home/slider/1.png)" }}
            >
              {" "}
              <div className="overlay"></div>
            </div>
            <div className="auto-container content-box">
              <span className="sub-title">
                <i className="icon flaticon-bulb"></i>{" "}
                <span>Best Energy Solutions</span>
              </span>

              <div className="text">Renewing Energy, Transforming Tomorrow</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};
export default Slider;
