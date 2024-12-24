import Link from "next/link";

const TeamGrid = () => {
  return (
    <>
      <section class="team-section bg-light pb-80">
        <div class="auto-container">
          <div class="row">
            {/* Team block */}
            <div class="team-block col-xl-3 col-sm-6">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image">
                    <Link href="our-team-details">
                      <img src="/images/resource/team1-1.jpg" alt="Image" />
                    </Link>
                  </figure>
                  <div class="info-box">
                    <span class="share-icon fa fa-share-alt"></span>
                    <div class="social-links">
                      <Link href="#">
                        <i class="fab fa-linkedin"></i>
                      </Link>
                    </div>
                    <h6 class="name">
                      <Link href="our-team-details">Lorem ipsum</Link>
                    </h6>
                    <span class="designation">CEO, Sustech</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Team block */}
            <div class="team-block col-xl-3 col-sm-6">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image">
                    <Link href="our-team-details">
                      <img src="/images/resource/team1-2.jpg" alt="Image" />
                    </Link>
                  </figure>
                  <div class="info-box">
                    <span class="share-icon fa fa-share-alt"></span>
                    <div class="social-links">
                      <Link href="#">
                        <i class="fab fa-linkedin"></i>
                      </Link>
                    </div>
                    <h6 class="name">
                      <Link href="our-team-details">Lorem ipsum</Link>
                    </h6>
                    <span class="designation">CEO, Sustech</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Team block */}
            <div class="team-block col-xl-3 col-sm-6">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image">
                    <Link href="our-team-details">
                      <img src="/images/resource/team1-3.jpg" alt="Image" />
                    </Link>
                  </figure>
                  <div class="info-box">
                    <span class="share-icon fa fa-share-alt"></span>
                    <div class="social-links">
                      <Link href="#">
                        <i class="fab fa-linkedin"></i>
                      </Link>
                    </div>
                    <h6 class="name">
                      <Link href="our-team-details">Lorem ipsum</Link>
                    </h6>
                    <span class="designation">CEO, Sustech</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Team block */}
            <div class="team-block col-xl-3 col-sm-6">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image">
                    <Link href="our-team-details">
                      <img src="/images/resource/team1-4.jpg" alt="Image" />
                    </Link>
                  </figure>
                  <div class="info-box">
                    <span class="share-icon fa fa-share-alt"></span>
                    <div class="social-links">
                      <Link href="#">
                        <i class="fab fa-linkedin"></i>
                      </Link>
                    </div>
                    <h6 class="name">
                      <Link href="our-team-details">Lorem ipsum</Link>
                    </h6>
                    <span class="designation">CEO, Sustech</span>
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
export default TeamGrid;
