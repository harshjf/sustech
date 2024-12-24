import React from "react";

const ProjectDetails = ({ portfolio }) => {
  return (
    <>
      <section className="project-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="project-details__top">
                <div className="project-details__img">
                  {" "}
                  <img src="/images/resource/project-details.jpg" alt="" />{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="project-details__content-right">
                <div className="project-details__details-box pb-25">
                  <div className="row">
                    <div className="col-6 col-md-3">
                      <p className="project-details__client">
                        {/*                         {portfolio.title} */}Date
                      </p>
                      <h4 className="project-details__name">
                        10 January, 2023
                      </h4>
                    </div>
                    <div className="col-6 col-md-3">
                      <p className="project-details__client">Client</p>
                      <h4 className="project-details__name">
                        Kodesolution Ltd
                      </h4>
                    </div>
                    <div className="col-6 col-md-3">
                      <p className="project-details__client">Website</p>
                      <h4 className="project-details__name">www.domain.com</h4>
                    </div>
                    <div className="col-6 col-md-3">
                      <p className="project-details__client">Location</p>
                      <h4 className="project-details__name">New York, USA</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project-details__content">
            <div className="row">
              <div className="col-xl-12">
                <div className="project-details__content-left">
                  <h3 className="mb-4 mt-5">Here to Know About This Project</h3>
                  <p className="">
                    Lorem ipsum, dolor sit amet consectetur, adipisicing elit.
                    Asperiores, repellat aliquid. Est corrupti officiis
                    dignissimos deserunt sunt minima iusto quia saepe tempora
                    consectetur dolor deleniti voluptatum et, eos vitae pariatur
                    molestiae odit quos enim voluptas nobis ullam voluptatem cum
                    iste. Dolore modi, animi optio, dignissimos delectus
                    pariatur similique harum eos.{" "}
                  </p>
                  <p className="mb-5">
                    Beyond more stoic this along goodness hey this this wow
                    manatee mongoose one as since a far flustered impressive
                    manifest Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Nostrum illo ea ad, nam quisquam optio vel tempora,
                    minus placeat, ut nisi quam quos laboriosam eos quibusdam
                    cum atque suscipit quod dignissimos magni doloribus facere
                    eius soluta possimus. Officiis, autem similique sequi labore
                    aliquid corporis illo omnis voluptate optio possimus
                    doloremque, error reiciendis delectus ex tempore, architecto
                    eaque, inventore nihil pariatur quibusdam facere
                    reprehenderit? Doloribus deleniti sapiente, dicta, dolorem
                    unde deserunt quisquam. Dolore consequuntur reiciendis
                    corporis perspiciatis quam fuga magnam molestiae minima
                    culpa ab beatae vel itaque cumque et adipisci autem nisi qui
                    esse in, deserunt numquam hic? Et, eligendi, assumen daEst
                    corrupti officiis dignissimos.
                  </p>
                  <ul className="list-style-two mb-0">
                    <li>
                      <i className="fa fa-check-circle"></i> Lorem ipsum dolor
                      amet consectetur adipisicing elit
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i> Vitae pariatur
                      molestiae odit quos enim
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i> Beyond more stoic
                      this along goodness hey this
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i> Officiis autem
                      similique sequi labore
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="project-section-three">
    <div className="bg bg-pattern-2"></div>
    <div className="large-container">      
      <Swiper {...swiperOptions} className="projects-carousel">
       
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
  </section> */}
    </>
  );
};
export default ProjectDetails;
