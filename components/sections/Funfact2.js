import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const Funfact3 = () => {
    return (
        <>
        <section className="fun-fact-section-two">
          <div className="auto-container">
            <div className="fact-counter">
              <div className="row">
        
                <div className="counter-block-four col-lg-3 col-md-6 col-sm-6 wow fadeInUp">
                  <div className="inner-box">
                    <i className="icon flaticon-solar-energy-1"></i>
                    <div className="content-box">
                      <div className="count-box"><CounterUp count={2010} time={3} /></div>
                      <div className="counter-title">Systems Installed</div>
                    </div>
                  </div>
                </div>
          
                <div className="counter-block-four col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                  <div className="inner-box">
                    <i className="icon flaticon-solar-panels"></i>
                    <div className="content-box">
                      <div className="count-box">$<CounterUp count={677} time={3} />B</div>
                      <div className="counter-title">Lifetime Savings</div>
                    </div>
                  </div>
                </div>
          
                <div className="counter-block-four col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                  <div className="inner-box">
                    <i className="icon flaticon-solar-energy"></i>
                    <div className="content-box">
                      <div className="count-box"><CounterUp count={4105} time={3} /></div>
                      <div className="counter-title">Trained Experts</div>
                    </div>
                  </div>
                </div>
      
                <div className="counter-block-four col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="900ms">
                  <div className="inner-box">
                    <i className="icon flaticon-solar-panel-6"></i>
                    <div className="content-box">
                      <div className="count-box"><CounterUp count={115} time={3} /></div>
                      <div className="counter-title">Best Awards</div>
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
export default Funfact3
