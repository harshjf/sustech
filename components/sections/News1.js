import Link from 'next/link';

const News1 = () => {  
  const data = [
  {
      img: "news1-1.jpg",
      title:"Women + Nonbinary Crew Compete at 2023 Solar .",
      authorTitle: "Admin"
  },
  {
      img: "news1-2.jpg",
      title:"Women + Nonbinary Crew Compete at 2023 Solar .",
      authorTitle: "Admin"
  },
  {
      img: "news1-3.jpg",
      title:"Women + Nonbinary Crew Compete at 2023 Solar .",
      authorTitle: "Admin"
  }
];
    return (
        <>
        <section className="news-section pt-0">
          <div className="icon-home bounce-x"></div>
          <div className="auto-container">
            <div className="sec-title text-center">
              <div className="sub-title-outer">
                <span className="sub-title">Latest Blog</span>
                <span className="divider"></span>
              </div>
              <h2 className="letters-slide-up text-split">From the news room</h2>
            </div>
            <div className="row">
            {data.map((item, i) => (
              <div key={i} className="news-block col-lg-4 col-md-6 wow fadeInUp">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="news-details">
                        <img src={`/images/resource/${item.img}`} alt="Image"/>
                        <img src={`/images/resource/${item.img}`} alt="Image"/>
                      </Link>
                    </figure>
                    <span className="date"> <strong>25 <br/><span>Jun</span></strong></span>
                  </div>
                  <div className="content-box">
                    <ul className="post-meta">
                      <li><i className="fal fa-user"></i>{item.authorTitle}Admin</li>
                      <li><i className="fa fa-comment"></i>0 Comments</li>
                    </ul>
                    <h4 className="title"><Link href="news-details">{item.title}</Link></h4>
                  </div>
                  <Link href="news-details" className="theme-btn btn-style-one bg-orange"><span className="btn-title">Read Full<i className="icon icon-sm-arrow"></i></span></Link>
                </div>
              </div>))}
          </div>
          </div>
        </section>
        
        </>
    );
};

export default News1;