import React from "react";
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import ProjectGrid from "@/components/sections/innerpages/ProjectGrid";
import portfolio from "../../data/portfolio.json";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <PageTitle pageName="Our Portfolio" />
        {/* <ProjectGrid /> */}
        <div className="pro-container">
          {portfolio.map((product, index) => {
            const isImageLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`pro-product ${
                  isImageLeft ? "pro-image-left" : "pro-image-right"
                }`}
              >
                <div className="pro-image-container">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="pro-image"
                  />
                </div>

                <div className="pro-text-container">
                  <h2 className="pro-title">{product.title}</h2>
                  <p className="pro-description">
                    {" "}
                    {product.description.split(".  ").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                  <ul className="pro-bullet-list">
                    {product.bullets.map((bullet, idx) => (
                      <li key={idx} className="pro-bullet-item">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Link href="contact-us" className="theme-btn btn-style-one">
                    <span className="btn-title">
                      Contact Us <i className="icon icon-sm-arrow"></i>
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
}
