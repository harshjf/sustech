import Link from "next/link"
const ServiceGrid = () => {
  return (
    <>


  <section className="our-services pt-120 pb-90">
    <div className="auto-container">
      <div className="row"> 
        {/* Service Block */}
        <div className="service-block mb-30 col-lg-4 col-md-6 wow fadeInUp">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-service-details"><img src="/images/resource/service1-1.jpg" alt="Image"/></Link></figure>
            </div>
            <div className="content-box">
              <div className="icon-border-2"></div>
              <div className="icon-border-3"></div>
              <i className="icon flaticon-solar-panels"></i>
              <div className="content">
                <h4 className="title"><Link href="page-service-details">Uitility Solutions</Link></h4>
                <div className="text">With over four decades of experience providing solutions to large-scale enterprises</div>
              </div>
              <div className="count">01</div>
            </div>
          </div>
        </div>
        {/* Service Block */}
        <div className="service-block mb-30 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-service-details"><img src="/images/resource/service1-2.jpg" alt="Image"/></Link></figure>
            </div>
            <div className="content-box">
              <div className="icon-border-2"></div>
              <div className="icon-border-3"></div>
              <i className="icon flaticon-solar-panel-6"></i>
              <div className="content">
                <h4 className="title"><Link href="page-service-details">C&I Solutions</Link></h4>
                <div className="text">With over four decades of experience providing solutions to large-scale enterprises</div>
              </div>
              <div className="count">01</div>
            </div>
          </div>
        </div>
        {/* Service Block */}
        <div className="service-block mb-30 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-service-details"><img src="/images/resource/service1-3.jpg" alt="Image"/></Link></figure>
            </div>
            <div className="content-box">
              <div className="icon-border-2"></div>
              <div className="icon-border-3"></div>
              <i className="icon flaticon-solar-energy-1"></i>
              <div className="content">
                <h4 className="title"><Link href="page-service-details">Residential Solutions</Link></h4>
                <div className="text">With over four decades of experience providing solutions to large-scale enterprises</div>
              </div>
              <div className="count">01</div>
            </div>
          </div>
        </div>
        {/* Service Block */}
        <div className="service-block mb-30 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-service-details"><img src="/images/resource/service1-3.jpg" alt="Image"/></Link></figure>
            </div>
            <div className="content-box">
              <div className="icon-border-2"></div>
              <div className="icon-border-3"></div>
              <i className="icon flaticon-solar-energy-1"></i>
              <div className="content">
                <h4 className="title"><Link href="page-service-details">Residential Solutions</Link></h4>
                <div className="text">With over four decades of experience providing solutions to large-scale enterprises</div>
              </div>
              <div className="count">01</div>
            </div>
          </div>
        </div>
        {/* Service Block */}
        <div className="service-block mb-30 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-service-details"><img src="/images/resource/service1-1.jpg" alt="Image"/></Link></figure>
            </div>
            <div className="content-box">
              <div className="icon-border-2"></div>
              <div className="icon-border-3"></div>
              <i className="icon flaticon-solar-panels"></i>
              <div className="content">
                <h4 className="title"><Link href="page-service-details">Uitility Solutions</Link></h4>
                <div className="text">With over four decades of experience providing solutions to large-scale enterprises</div>
              </div>
              <div className="count">01</div>
            </div>
          </div>
        </div>
        {/* Service Block */}
        <div className="service-block mb-30 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="500ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-service-details"><img src="/images/resource/service1-2.jpg" alt="Image"/></Link></figure>
            </div>
            <div className="content-box">
              <div className="icon-border-2"></div>
              <div className="icon-border-3"></div>
              <i className="icon flaticon-solar-panel-6"></i>
              <div className="content">
                <h4 className="title"><Link href="page-service-details">C&I Solutions</Link></h4>
                <div className="text">With over four decades of experience providing solutions to large-scale enterprises</div>
              </div>
              <div className="count">01</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
       
    </>
  );
};
export default ServiceGrid
