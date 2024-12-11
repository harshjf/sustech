import Link from "next/link";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules"; 
import dynamic from 'next/dynamic';
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
  ssr: false,
})

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  pagination: true,
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints:{
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
  }
};
const Projects2 = () => {
  return (
  <>
  <section className="project-section-two pt-0">
    <div className="auto-container">
      <div className="outer-box">
        <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/7.jpg)' }}></div>

        <div className="fact-counter">
          <div className="icon-turbines-12"></div>
          <div className="row">

            <div className="counter-block-two col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
              <div className="inner">
                <div className="content">
                  <i className="icon flaticon-solar-panels"></i>
                  <div className="count-box"><CounterUp count={20110} time={3} /></div>
                  <h6 className="counter-title">Systems installed</h6>
                </div>
              </div>
            </div>

            <div className="counter-block-two col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
              <div className="inner">
                <div className="content">
                  <i className="icon flaticon-solar-panel-6"></i>
                  <div className="count-box">$<CounterUp count={677} time={3} />k</div>
                  <h6 className="counter-title">Lifetime Savings</h6>
                </div>
              </div>
            </div>

            <div className="counter-block-two col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
              <div className="inner">
                <div className="content">
                  <i className="icon flaticon-solar-energy-1"></i>
                  <div className="count-box"><CounterUp count={47215} time={3} /></div>
                  <h6 className="counter-title">Participants Trained</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="sec-title text-center">
        <div className="sub-title-outer">
          <span className="sub-title">SUCCESSFUL Installations</span>
          <span className="divider"></span>
        </div>
        <h2 className="letters-slide-up text-split">A track record that speaks <br/>for itself</h2>
      </div>
    </div>
    <div className="carousel-outer">
      <Swiper {...swiperOptions} className="projects-carousel-two owl-carousel owl-theme default-dots">
        {/* project Block */}
        <SwiperSlide className="project-block">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-project-details"><img src="images/resource/project1-1.jpg" alt="Image"/></Link></figure>
            </div>
            <div className="content-box">
              <h1 className="float-text">Solar</h1>
              <span className="cat">echanix inc ltd</span><br/>
              <h4 className="title"><Link href="page-project-details">Power project</Link></h4>
              <Link href="page-project-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link><br/>
            </div>
            <div className="overlay-1"></div>
          </div>
        </SwiperSlide>
        {/* project Block */}
        <SwiperSlide className="project-block">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-project-details"><img src="images/resource/project1-2.jpg" alt="Image"/></Link></figure>
            </div>
            <div className="content-box">
              <h1 className="float-text">Solar</h1>
              <span className="cat">echanix inc ltd</span><br/>
              <h4 className="title"><Link href="page-project-details">Power project</Link></h4>
              <Link href="page-project-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link><br/>
            </div>
            <div className="overlay-1"></div>
          </div>
        </SwiperSlide>
        {/* project Block */}
        <SwiperSlide className="project-block">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-project-details"><img src="images/resource/project1-3.jpg" alt="Image"/></Link></figure>
            </div>
            <div className="content-box">
              <h1 className="float-text">Solar</h1>
              <span className="cat">echanix inc ltd</span><br/>
              <h4 className="title"><Link href="page-project-details">Power project</Link></h4>
              <Link href="page-project-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link><br/>
            </div>
            <div className="overlay-1"></div>
          </div>
        </SwiperSlide>
        {/* project Block */}
        <SwiperSlide className="project-block">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-project-details"><img src="images/resource/project1-1.jpg" alt="Image"/></Link></figure>
            </div>
            <div className="content-box">
              <h1 className="float-text">Solar</h1>
              <span className="cat">echanix inc ltd</span><br/>
              <h4 className="title"><Link href="page-project-details">Power project</Link></h4>
              <Link href="page-project-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link><br/>
            </div>
            <div className="overlay-1"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
  </>
  );
};
export default Projects2
