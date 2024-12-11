import Link from 'next/link';

const News2 = () => {  
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
        <section className="news-section-two">
          <div className="icon-solar"></div>
          <div className="icon-solar-5"></div>
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
              <div key={i} className="news-block-two col-lg-4 col-md-6 wow fadeInUp">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><Link href="news-details"><img src={`/images/resource/${item.img}`} alt="Image"/></Link></figure>
                  <span className="date"> <strong>25 Jun , 2023</strong></span>
                </div>
                <div className="content-box">
                  <ul className="post-meta">
                    <li><i className="fal fa-user"></i>{item.authorTitle}</li>
                    <li><i className="fa fa-comment"></i>0 Comments</li>
                  </ul>
                  <h5 className="title"><Link href="news-details">{item.title}</Link></h5>
                  <Link href="news-details" className="read-more">Read Full <i className="icon icon-sm-arrow-2"></i></Link>
                </div>
              </div>
              </div>))}
          </div>
          </div>
        </section>
        
        </>
    );
};

export default News2;