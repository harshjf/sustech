import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import ServiceDetails from "@/components/sections/innerpages/ServiceDetails"

export default function Home() {
  return (
    <>

    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle pageName="Service Details" />
    <ServiceDetails />

    </Layout>
    </>
    )
}