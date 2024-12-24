import Link from "next/link";
import services from "../../../data/services.json";

const ServiceGrid = () => {
  return (
    <section className="our-services pt-120 pb-90">
      <div className="auto-container">
        {Object.keys(services).map((category) => (
          <div key={category}>
            <h3
              className="mb-8"
              style={{ color: services[category][0]?.color }}
            >
              {category}
            </h3>
            <div className="row">
              {services[category].map((item) => (
                <div
                  key={item.name}
                  className="service-block mb-30 col-lg-4 col-md-6 wow fadeInUp"
                >
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link href={`/services/${item.name}`}>
                          <img
                            src={item.image}
                            alt={item.title}
                            style={{ height: "240px" }}
                          />
                        </Link>
                      </figure>
                    </div>
                    <div
                      className="content-box"
                      style={{
                        height: "400px",
                        overflow: "hidden",
                      }}
                    >
                      <i className="icon flaticon-solar-panels"></i>
                      <div className="content">
                        <h4 className="title">
                          <Link href={`/services/${item.name}`}>
                            {item.title}
                          </Link>
                        </h4>
                        <div className="text">{item.description}</div>
                      </div>
                      {/*  <div className="count">01</div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceGrid;
