import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Banner from "@/components/sections/Banner"
import Clients from "@/components/sections/Clients"
import Faq from "@/components/sections/Faq"
import Features2 from "@/components/sections/Features2"
import Features22 from "@/components/sections/Features22"
import Form2 from "@/components/sections/Form2"
import News1 from "@/components/sections/News1"
import Pricing2 from "@/components/sections/Pricing2"
import Projects2 from "@/components/sections/Projects2"
import Services2 from "@/components/sections/Services2"
import Team from "@/components/sections/Team"
import Testimonial2 from "@/components/sections/Testimonial2"
import WhyChooseUs2 from "@/components/sections/WhyChooseUs2"
export default function Home2() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <Banner />
                <Features2 />
                <About2 />
                <Services2 />
                <WhyChooseUs2 />
                <Features22 />
                <Projects2 />
                <Testimonial2 />
                <Pricing2 />
                <Form2 />
                <Team />
                <Faq />
                <News1 />
                <Clients />
            </Layout>
        </>
    )
}