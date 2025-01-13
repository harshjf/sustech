import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import Link from "next/link";
import Image from "next/image";

const images = [
  {
    src: "/images/certificate/iso_9001.png",
    title: "ISO 9001:2015 Certificate",
    description:
      "We are ISO 9001:2015 certified, showcasing our commitment to maintaining the highest standards of quality in our processes and delivering exceptional products and services. This certification reflects our dedication to customer satisfaction and continual improvement.",
  },
  {
    src: "/images/certificate/iso_14001.png",
    title: "ISO 14001:2015 Certificate",
    description:
      "We are ISO 14001:2015 certified, emphasizing our commitment to sustainable practices and environmental responsibility. This certification underscores our efforts to minimize environmental impact and promote eco-friendly operations.",
  },
  {
    src: "/images/certificate/startup_india.png",
    title: "Startup India Certificate",
    description:
      "We are recognized under the Startup India Initiative, a flagship program by the Government of India. This certification highlights our commitment to innovation, entrepreneurship, and creating impactful solutions.",
  },
];

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <PageTitle pageName="Certificates" />
        <section className="certificate-section">
          <div className="certificate-row">
            {images.map((image, index) => (
              <figure className="certificate-figure" key={index}>
                <img src={image.src} alt={image.title} />
                <div>
                  <h3>
                    {image.title}
                    <span>{image.description}</span>
                  </h3>
                  <a href="#"></a>
                </div>
              </figure>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
