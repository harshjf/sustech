import Link from "next/link";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import portfolio from "../../../data/portfolio.json";

import dynamic from "next/dynamic";
const CounterUp = dynamic(() => import("@/components/elements/CounterUp"), {
  ssr: false,
});

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

const ProjectGrid = () => {
  return (
    <>
      <section className="project-section-three">
        <div className="bg bg-pattern-2"></div>
        <div className="large-container">
          <Swiper {...swiperOptions} className="projects-carousel">
            {portfolio.map((item) => (
              <SwiperSlide key={item.id} className="project-block-two">
                <div className="inner-box">
                  <figure className="image">
                    <Link href={`/portfolio/${item.name}`}>
                      <img src={item.image} alt="Project Image" />
                    </Link>
                  </figure>
                  <div className="content-box">
                    <div className="inner">
                      <span className="cat">{item.category}</span>
                      <h4 className="title">
                        <Link href={`/portfolio/${item.name}`}>
                          {item.title}
                        </Link>
                      </h4>
                      <Link
                        href={`/portfolio/${item.name}`}
                        className="theme-btn read-more"
                      >
                        <i className="fa fa-plus"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default ProjectGrid;
