import Link from "next/link"
import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
  ssr: false,
})
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const WhyChooseUs2 = () => {
  const [isOpen, setOpen] = useState(false)
    return (
        <>
        <div className="why-choose-us">
          <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/2.jpg)' }}></div>
          <div className="bg bg-shapes"></div>
          <div className="auto-container">
            <div className="row">
      
              <div className="content-column col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
                <div className="inner-column">
                  <div className="sec-title light">
                    <div className="sub-title-outer">
                      <span className="sub-title">Innovation</span>
                      <span className="divider"></span>
                    </div>
                    <h2 className="letters-slide-up text-split">A global leader <br/> in solar installation</h2>
                    <div className="text">With over four decades of experience providing solutions to large-scale enterprises throughout the globe,.</div>
                  </div>
      
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
      
                    <div className="skill-item">
                      <div className="skill-header">
                        <div className="skill-title">Maintainence</div>
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
      
                  <Link href="tel:01061245741" className="info-btn-three light">
                    <i className="icon flaticon-customer-service"></i>
                    <small>Call us for any inquiry</small>
                    <strong>(010) 612 45 741</strong>
                  </Link>
                </div>
              </div>
      
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <figure className="image overlay-anim bg-parallax" style={{ backgroundImage: 'url(images/resource/choose2-1.jpg)' }}><img src="images/resource/choose2-1.jpg" alt="image"/></figure>
                  <div className="video-box">
                    <div className="btn-box">
                      <a onClick={() => setOpen(true)} className="play-now"><i className="icon fa fa-play" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
};
export default WhyChooseUs2
