import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        autoplay: {
            delay: 8500,
            disableOnInteraction: false,
        },
        loop: true
    };
const Slider = () => {
    return (
        <>
  <section className="main-slider">

    <Swiper {...swiperOptions}>
      <SwiperSlide className="slide-item">
                <div className="bg bg-image" style={{ backgroundImage: 'url(images/main-slider/1.jpg)' }}></div>
                <div className="auto-container content-box">
                    <span className="sub-title"><i className="icon flaticon-bulb"></i> <span>Best Energy Solutions</span></span>
                    <h1>Best solar <br/>energy System</h1>
                    <div className="text">A leading voice in low-income solar policy and the nation’s largest <br/> nonprofit solar installer, serving families throughout world</div>
                    <Link href="page-services" className="theme-btn btn-style-one"><span className="btn-title">Our Services<i className="icon icon-sm-arrow"></i></span></Link>
                </div>
      </SwiperSlide>


      <SwiperSlide className="slide-item">
                <div className="bg bg-image" style={{ backgroundImage: 'url(images/main-slider/1.jpg)' }}></div>
                <div className="auto-container content-box">
                    <span className="sub-title"><i className="icon flaticon-bulb"></i> <span>Best Energy Solutions</span></span>
                    <h1>Best solar <br/>energy System</h1>
                    <div className="text">A leading voice in low-income solar policy and the nation’s largest <br/> nonprofit solar installer, serving families throughout world</div>
                    <Link href="page-services" className="theme-btn btn-style-one"><span className="btn-title">Our Services<i className="icon icon-sm-arrow"></i></span></Link>
                </div>
      </SwiperSlide>
    </Swiper>
  </section>
        </>
    );
};
export default Slider