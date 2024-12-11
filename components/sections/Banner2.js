import Link from "next/link"
const Banner2 = () => {
    return (
        <>
        <section className="banner-section-three">
          <div className="bg bg-background" style={{ backgroundImage: 'url(images/banner/4.jpg)' }}></div>
          <div className="auto-container">
            <div className="row">
      
              <div className="content-column col-xl-7 col-lg-12 order-xl-2">
                <div className="inner-column">
                  <div className="border-box wow zoomIn"></div>
                  <h1 className="title wow fadeInUp" data-wow-delay="600ms">We install solar <br/>panel for home <br/>& office</h1>
                  <div className="text wow fadeInUp" data-wow-delay="900ms">A leading voice in low-income solar policy and <br/> the nation’s largest nonprofit solar installer</div>
                  <div className="btn-box wow fadeInUp" data-wow-delay="1200ms">
                    <Link href="page-services" className="theme-btn btn-style-one"><span className="btn-title">Our Services<i className="icon icon-sm-arrow"></i></span></Link>
                  </div>
                </div>
              </div>
              
              <div className="image-column col-xl-5 col-lg-12">
                <div className="inner-column">
                  <div className="image-box">
                    <figure className="image bounce-y"><img src="/images/banner/5.png" alt="Image"/></figure>
                    <div className="icon-energy bounce-x"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default Banner2
