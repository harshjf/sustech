import Link from "next/link";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules"; 
import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
  ssr: false,
})

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  pagination: true,
  slidesPerView: 3,
  spaceBetween: 30,
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
const Projects3 = () => {
  return (
  <>
  <section className="project-section-three">
    <div className="bg bg-pattern-2"></div>
    <div className="large-container">
      <div className="sec-title text-center">
        <div className="sub-title-outer">
          <span className="sub-title">Successful Installations</span>
          <span className="divider"></span>
        </div>
        <h2 className="letters-slide-up text-split">A track record that speaks <br/> for itself</h2>
      </div>
      
      <Swiper {...swiperOptions} className="projects-carousel owl-carousel owl-theme default-dots">
        {/* project Block */}
        <SwiperSlide className="project-block-two">
          <div className="inner-box">
            <figure className="image"><Link href="page-project-details"><img src="/images/resource/project2-1.jpg" alt="Image"/></Link></figure>
            <div className="content-box">
              <div className="inner">
                <span className="cat">echanix inc ltd</span>
                <h4 className="title"><Link href="page-project-details">Power project</Link></h4>
                <Link href="page-project-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* project Block */}
        <SwiperSlide className="project-block-two">
          <div className="inner-box">
            <figure className="image"><Link href="page-project-details"><img src="/images/resource/project2-2.jpg" alt="Image"/></Link></figure>
            <div className="content-box">
              <div className="inner">
                <span className="cat">echanix inc ltd</span>
                <h4 className="title"><Link href="page-project-details">Power project</Link></h4>
                <Link href="page-project-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* project Block */}
        <SwiperSlide className="project-block-two">
          <div className="inner-box">
            <figure className="image"><Link href="page-project-details"><img src="/images/resource/project2-3.jpg" alt="Image"/></Link></figure>
            <div className="content-box">
              <div className="inner">
                <span className="cat">echanix inc ltd</span>
                <h4 className="title"><Link href="page-project-details">Power project</Link></h4>
                <Link href="page-project-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* project Block */}
        <SwiperSlide className="project-block-two">
          <div className="inner-box">
            <figure className="image"><Link href="page-project-details"><img src="/images/resource/project2-1.jpg" alt="Image"/></Link></figure>
            <div className="content-box">
              <div className="inner">
                <span className="cat">echanix inc ltd</span>
                <h4 className="title"><Link href="page-project-details">Power project</Link></h4>
                <Link href="page-project-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link>
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
export default Projects3
