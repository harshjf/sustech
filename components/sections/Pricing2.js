import Link from "next/link"
const Pricing2 = () => {
    return (
        <>
        <section className="pricing-section pt-0">
          <div className="icon-turbines-8"></div>
          <div className="auto-container">
            <div className="sec-title text-center">
              <div className="sub-title-outer">
                <span className="sub-title">Pricing Plans</span>
                <span className="divider"></span>
              </div>
              <h2 className="letters-slide-up text-split">Choose Your Best Offer</h2>
            </div>
            <div className="row">
      
              <div className="pricing-block col-lg-4 col-md-6 col-sm-12 wow flipInY" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="inner-box">
                  <h4 className="title">Standerd</h4>
                  <div className="icon">
                    <img src="/images/resource/price1-1.png" alt="Icon"/>
                  </div>
                  <div className="price"><span>$</span>120<small>/ per mo</small></div>
                  <ul className="list-style">
                    <li><i className="fa fa-check"></i> Free Installation</li>
                    <li><i className="fa fa-check"></i> Repaire Replacement</li>
                    <li><i className="fa fa-check"></i> 24/7 Full Support</li>
                    <li><i className="fa fa-check"></i> maintainence</li>
                  </ul>
                  <Link href="page-pricing" className="theme-btn btn-style-one"><span className="btn-title">Choose a plan <i className="icon-sm-arrow"></i></span></Link>
                </div>
              </div>
      
              <div className="pricing-block tagged col-lg-4 col-md-6 col-sm-12 wow flipInY" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="inner-box">
                  <h4 className="title">Popular <span className="badge">Best</span></h4>
                  <div className="icon">
                    <img src="/images/resource/price1-2.png" alt="Icon"/>
                  </div>
                  <div className="price"><span>$</span>120<small>/ per mo</small></div>
                  <ul className="list-style">
                    <li><i className="fa fa-check"></i> Free Installation</li>
                    <li><i className="fa fa-check"></i> Repaire Replacement</li>
                    <li><i className="fa fa-check"></i> 24/7 Full Support</li>
                    <li><i className="fa fa-check"></i> maintainence</li>
                  </ul>
                  <Link href="page-pricing" className="theme-btn btn-style-one"><span className="btn-title">Choose a plan <i className="icon-sm-arrow"></i></span></Link>
                </div>
              </div>
      
              <div className="pricing-block col-lg-4 col-md-6 col-sm-12 wow flipInY" data-wow-delay="600ms" data-wow-duration="1500ms">
                <div className="inner-box">
                  <h4 className="title">Premium</h4>
                  <div className="icon">
                    <img src="/images/resource/price1-3.png" alt="Icon"/>
                  </div>
                  <div className="price"><span>$</span>120<small>/ per mo</small></div>
                  <ul className="list-style">
                    <li><i className="fa fa-check"></i> Free Installation</li>
                    <li><i className="fa fa-check"></i> Repaire Replacement</li>
                    <li><i className="fa fa-check"></i> 24/7 Full Support</li>
                    <li><i className="fa fa-check"></i> maintainence</li>
                  </ul>
                  <Link href="page-pricing" className="theme-btn btn-style-one"><span className="btn-title">Choose a plan <i className="icon-sm-arrow"></i></span></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default Pricing2
