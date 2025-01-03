import Layout from "@/components/layout/Layout";
import About from "@/components/sections/About";

import About2 from "@/components/sections/About2";
import About3 from "@/components/sections/About3";

import Marquee from "@/components/sections/Marquee";

import Slider from "@/components/sections/Slider";
import Testimonial1 from "@/components/sections/Testimonial1";
import Services3 from "@/components/sections/Services3.js";
import About33 from "@/components/sections/About33";
import Form3 from "@/components/sections/Form3";
import Applications from "@/components/sections/Applications";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Slider />
        {/*  <Features1 /> */}
        <About />
        <About2 />
        <About3 />
        <Marquee />
        <Applications/>
        <Services3 />
        {/* <About33 /> */}
        <Testimonial1 />
        <Form3 />
      </Layout>
    </>
  );
}
