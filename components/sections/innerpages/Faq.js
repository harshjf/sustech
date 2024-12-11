import Link from "next/link";
import { useState } from "react";

const Faq = () => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  })

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      })
    } else {
      setIsActive({
        status: true,
        key,
      })
    }
  }

  return (
    <>

    <section class="faq-section pt-30 pb-90">
      <div class="auto-container">
        <div class="outer-box">
          <div class="row g-0"> 
            {/*  Faq Column  */}
            <div class="faq-column col-lg-6 wow fadeInLeft">
              <div class="inner-column before_none">
                <ul class="accordion-box">
                  {/* Block */}
                  <li class="accordion block active-tab">
                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>
                      What is solar system  ? <i class="icon fal fa-plus"></i> </div>
                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                      <div class="content">
                        <div class="text">With over four decades of experience providing <br/>solutions to large-scale enterprises throughout the globe.</div>
                      </div>
                    </div>
                  </li>
                  {/* Block */}
                  <li class="accordion block">
                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>
                      Can i get refund  ? <i class="icon fal fa-plus"></i> </div>
                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                      <div class="content">
                        <div class="text">With over four decades of experience providing <br/>solutions to large-scale enterprises throughout the globe.</div>
                      </div>
                    </div>
                  </li>
                  {/* Block */}
                  <li class="accordion block">
                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>
                      Whic solar is best ? <i class="icon fal fa-plus"></i> </div>
                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                      <div class="content">
                        <div class="text">With over four decades of experience providing <br/>solutions to large-scale enterprises throughout the globe.</div>
                      </div>
                    </div>
                  </li>
                  {/* Block */}
                  <li class="accordion block">
                    <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>
                      Duration of installation time  ? <i class="icon fal fa-plus"></i> </div>
                    <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                      <div class="content">
                        <div class="text">With over four decades of experience providing <br/>solutions to large-scale enterprises throughout the globe.</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/*  Faq Column  */}
            <div class="faq-column col-lg-6 wow fadeInLeft">
              <div class="inner-column before_none">
                <ul class="accordion-box">
                  {/* Block */}
                  <li class="accordion block">
                    <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(5)}>
                      What is solar system  ? <i class="icon fal fa-plus"></i> </div>
                    <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                      <div class="content">
                        <div class="text">With over four decades of experience providing <br/>solutions to large-scale enterprises throughout the globe.</div>
                      </div>
                    </div>
                  </li>
                  {/* Block */}
                  <li class="accordion block active-tab">
                    <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(6)}>
                      Can i get refund  ? <i class="icon fal fa-plus"></i> </div>
                    <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                      <div class="content">
                        <div class="text">With over four decades of experience providing <br/>solutions to large-scale enterprises throughout the globe.</div>
                      </div>
                    </div>
                  </li>
                  {/* Block */}
                  <li class="accordion block">
                    <div className={isActive.key == 7 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(7)}>
                      Whic solar is best ? <i class="icon fal fa-plus"></i> </div>
                    <div className={isActive.key == 7 ? "acc-content current" : "acc-content"}>
                      <div class="content">
                        <div class="text">With over four decades of experience providing <br/>solutions to large-scale enterprises throughout the globe.</div>
                      </div>
                    </div>
                  </li>
                  {/* Block */}
                  <li class="accordion block">
                    <div className={isActive.key == 8 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(8)}>
                      Duration of installation time  ? <i class="icon fal fa-plus"></i> </div>
                    <div className={isActive.key == 8 ? "acc-content current" : "acc-content"}>
                      <div class="content">
                        <div class="text">With over four decades of experience providing <br/>solutions to large-scale enterprises throughout the globe.</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
       
    </>
  );
};
export default Faq
