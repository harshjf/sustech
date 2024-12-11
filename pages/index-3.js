import Layout from "@/components/layout/Layout"
import About3 from "@/components/sections/About3"
import About33 from "@/components/sections/About33"
import Banner2 from "@/components/sections/Banner2"
import Clients from "@/components/sections/Clients"
import Form3 from "@/components/sections/Form3"
import Funfact3 from "@/components/sections/Funfact3"
import News2 from "@/components/sections/News2"
import Pricing3 from "@/components/sections/Pricing3"
import Process2 from "@/components/sections/Process2"
import Projects3 from "@/components/sections/Projects3"
import Services3 from "@/components/sections/Services3"
import Testimonial3 from "@/components/sections/Testimonial3"
export default function Home3() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <Banner2 />
                <Funfact3 />
                <About3 />
                <Services3 />
                <About33 />
                <Pricing3 />
                <Process2 />
                <Projects3 />
                <Form3 />
                <Testimonial3 />
                <News2 />
                <Clients />
            </Layout>
        </>
    )
}