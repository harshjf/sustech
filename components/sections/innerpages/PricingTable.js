import Link from "next/link";

const PricingTable = () => {

  return (
    <>

  <section class="pricing-section">
    <div class="icon-turbines-8"></div>
    <div class="auto-container">
      <div class="row"> 
        {/* Pricing Block */}
        <div class="pricing-block col-lg-4 col-md-6 wow flipInY" data-wow-delay="0ms" data-wow-duration="1500ms">
          <div class="inner-box">
            <h4 class="title">Standerd</h4>
            <div class="icon"> <img src="/images/resource/price1-1.png" alt="Icon"/> </div>
            <div class="price"><span>$</span>120<small>/ per mo</small></div>
            <ul class="list-style">
              <li><i class="fa fa-check"></i> Free Installation</li>
              <li><i class="fa fa-check"></i> Repaire Replacement</li>
              <li><i class="fa fa-check"></i> 24/7 Full Support</li>
              <li><i class="fa fa-check"></i> maintainence</li>
            </ul>
            <Link href="page-pricing" class="theme-btn btn-style-one"><span class="btn-title">Choose a plan <i class="icon-sm-arrow"></i></span></Link>
          </div>
        </div>
        {/* Pricing Block */}
        <div class="pricing-block tagged col-lg-4 col-md-6 wow flipInY" data-wow-delay="300ms" data-wow-duration="1500ms">
          <div class="inner-box">
            <h4 class="title">Popular <span class="badge">Best</span></h4>
            <div class="icon"> <img src="/images/resource/price1-2.png" alt="Icon"/> </div>
            <div class="price"><span>$</span>120<small>/ per mo</small></div>
            <ul class="list-style">
              <li><i class="fa fa-check"></i> Free Installation</li>
              <li><i class="fa fa-check"></i> Repaire Replacement</li>
              <li><i class="fa fa-check"></i> 24/7 Full Support</li>
              <li><i class="fa fa-check"></i> maintainence</li>
            </ul>
            <Link href="page-pricing" class="theme-btn btn-style-one"><span class="btn-title">Choose a plan <i class="icon-sm-arrow"></i></span></Link>
          </div>
        </div>
        {/* Pricing Block */}
        <div class="pricing-block col-lg-4 col-md-6 wow flipInY" data-wow-delay="600ms" data-wow-duration="1500ms">
          <div class="inner-box">
            <h4 class="title">Premium</h4>
            <div class="icon"> <img src="/images/resource/price1-3.png" alt="Icon"/> </div>
            <div class="price"><span>$</span>120<small>/ per mo</small></div>
            <ul class="list-style">
              <li><i class="fa fa-check"></i> Free Installation</li>
              <li><i class="fa fa-check"></i> Repaire Replacement</li>
              <li><i class="fa fa-check"></i> 24/7 Full Support</li>
              <li><i class="fa fa-check"></i> maintainence</li>
            </ul>
            <Link href="page-pricing" class="theme-btn btn-style-one"><span class="btn-title">Choose a plan <i class="icon-sm-arrow"></i></span></Link>
          </div>
        </div>
      </div>
    </div>
  </section>
       
    </>
  );
};
export default PricingTable
