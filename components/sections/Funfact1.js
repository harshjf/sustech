import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const Funfact1 = () => {
    return (
        <>
        <section className="fun-fact-section pb-0">
          <div className="icon-turbines-3"></div>
          <div className="auto-container">
            <div className="fact-counter">
              <div className="icon-turbines-2"></div>
              <div className="row">
                <div className="content-column col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInLeft">
                  <div className="inner-column">
                    <h3 className="title">Renewable energy that benefits everyone</h3>
                    <a href="page-services.html" className="read-more"> Our services <i className="fa fa-arrow-right"></i></a>
                  </div>
                </div>
                <div className="image-column col-xl-3 col-lg-4 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <figure className="image wow zoomIn"><img src="/images/resource/funfact1-1.png" alt="Image"/></figure>
                  </div>
                </div>
                <div className="funfact-column col-xl-5 col-lg-4 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="counter-block wow fadeInUp">
                      <div className="inner-box">
                        <div className="icon-box"><i className="icon flaticon-solar-panels"></i></div>
                        <div className="content-box">
                          <div className="count-box"><CounterUp count={2010} time={3} /></div>
                          <div className="counter-title">Systems Installed</div>
                        </div>
                      </div>
                    </div>
                    <div className="counter-block wow fadeInUp" data-wow-delay="300ms">
                      <div className="inner-box">
                        <div className="icon-box"><i className="icon flaticon-solar-panel-6"></i></div>
                        <div className="content-box">
                          <div className="count-box">$<CounterUp count={677} time={3} />k</div>
                          <h6 className="counter-title">Lifetime Savings</h6>
                        </div>
                      </div>
                    </div>
                    <div className="counter-block wow fadeInUp" data-wow-delay="600ms">
                      <div className="inner-box">
                        <div className="icon-box"><i className="icon flaticon-solar-energy-1"></i></div>
                        <div className="content-box">
                          <div className="count-box"><CounterUp count={47215} time={3} /></div>
                          <div className="counter-title">Participants Trained</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default Funfact1
