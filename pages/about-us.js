import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import About from "@/components/sections/innerpages/About";
import Projects2 from "@/components/sections/Projects2";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <PageTitle pageName="About Us" />
        <About />
        {/*  <Services2 /> */}
        {/* <WhyChooseUs2 /> */}
        <Projects2 />
      </Layout>
    </>
  );
}
