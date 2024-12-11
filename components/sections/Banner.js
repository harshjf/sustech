import Link from "next/link"
const Banner = () => {
    return (
        <>
        <section className="banner-section-two">
          <div className="bg bg-image" style={{ backgroundImage: 'url(images/banner/2.jpg)' }}></div>
          <div className="bg bg-pattern-5 bounce-x" ></div>
          <div className="auto-container">
            <div className="row">
              
              <div className="content-column col-xl-6 col-lg-12">
                <div className="inner-column">
                  <span className="sub-title wow fadeInUp" data-wow-delay="300ms">A leading solar sercvice provider</span>
                  <h1 className="title wow fadeInUp" data-wow-delay="600ms">Start saving money of electricy</h1>
                  <Link href="page-services" className="theme-btn btn-style-one bg-orange wow fadeInUp" data-wow-delay="900ms"><span className="btn-title">Our Services <i className="icon icon-sm-arrow"></i></span></Link>
                </div>
              </div>
      
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <figure className="image"><img src="/images//banner/3.png" alt="Image"/></figure>
                  <figure className="image-2 bounce-y"><img src="/images/banner/man-1.jpg" alt="Image"/></figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default Banner
