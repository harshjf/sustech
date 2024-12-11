import Layout from "@/components/layout/Layout"
import About from "@/components/sections/About"
import About12 from "@/components/sections/About12"
import CallToAction from "@/components/sections/CallToAction"
import Clients from "@/components/sections/Clients"
import FaqForm from "@/components/sections/FaqForm"
import Features1 from "@/components/sections/Features1"
import Features12 from "@/components/sections/Features12"
import Funfact1 from "@/components/sections/Funfact1"
import Marquee from "@/components/sections/Marquee"
import News1 from "@/components/sections/News1"
import Projects1 from "@/components/sections/Projects1"
import Services1 from "@/components/sections/Services1"
import Slider from "@/components/sections/Slider"
import Testimonial1 from "@/components/sections/Testimonial1"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Slider />
                <Features1 />
                <About />
                <Marquee />
                <Funfact1 />
                <Services1 />
                <About12 />
                <Projects1 />
                <Features12 />
                <Testimonial1 />
                <CallToAction />
                <FaqForm />
                <News1 />
                <Clients />
            </Layout>
        </>
    )
}