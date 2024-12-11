import Link from "next/link"
import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
  ssr: false,
})
const About12 = () => {
    return (
        <>
        <section className="about-section-two">
          <div className="icon-turbines-4"></div>
          <div className="auto-container">
            <div className="outer-box">
              <div className="row">

                <div className="content-column col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
                  <div className="inner-column">
                    <div className="sec-title">
                      <div className="sub-title-outer">
                        <span className="sub-title">Save Money</span>
                        <span className="divider"></span>
                      </div>
                      <h2 className="letters-slide-up text-split">Savings for you, clean <br/> power for your life</h2>
                      <div className="text">A leading voice in low-income solar policy and the <br/> nation’s largest nonprofit solar installer, serving families <br/>throughout California</div>
                    </div>
                    <ul className="list-style-four two-column">
                      <li><i className="fa fa-check-circle"></i>Full automation</li>
                      <li><i className="fa fa-check-circle"></i>Super Factory</li>
                    </ul>

                    <div className="skills">

                      <div className="skill-item">
                        <div className="skill-header">
                          <div className="skill-title">Installation</div>
                        </div>
                        <div className="skill-bar">
                          <div className="bar-inner">
                            <div className="bar progress-line" style={{width:"80%"}}>
                              <div className="skill-percentage">
                                <div className="count-box"><CounterUp count={80} time={3} />%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="skill-item">
                        <div className="skill-header">
                          <div className="skill-title">Service</div>
                        </div>
                        <div className="skill-bar">
                          <div className="bar-inner">
                            <div className="bar progress-line" style={{width:"90%"}}>
                              <div className="skill-percentage">
                                <div className="count-box"><CounterUp count={90} time={3} />%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Link href="tel:+9298006869" className="info-btn-three">
                      <i className="icon flaticon-customer-service"></i>
                      <small>Call us for any inquiry</small>
                      <strong>(010) 612 45 741</strong>
                    </Link>
                  </div>
                </div>

                <div className="image-column col-xl-6 col-lg-6">
                  <div className="inner-column wow fadeInLeft">
                    <figure className="image overlay-anim"><img src="images/resource/about2-1.jpg" alt="Image"/></figure>
                    <figure className="image-2 overlay-anim"><img src="images/resource/about2-2.jpg" alt="Image"/></figure>
                    <div className="exp-box bounce-y">
                      <div className="inner">
                        <i className="icon flaticon-travel"></i>
                        <h2 className="title">90%</h2>
                        <span className="designation">Success Rate</span>
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
export default About12
