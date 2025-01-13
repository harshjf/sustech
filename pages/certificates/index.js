import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import Link from "next/link";
import Image from "next/image";

const images = [
  {
    src: "/images/certificate/iso.jpeg",
    title: "Certificate 1",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
  },
  {
    src: "/images/certificate/iso.jpeg",
    title: "Certificate 2",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
  },
  {
    src: "/images/certificate/iso.jpeg",
    title: "Certificate 3",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
  },
  {
    src: "/images/certificate/iso.jpeg",
    title: "Certificate 4",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
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
