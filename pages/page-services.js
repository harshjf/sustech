import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import ServiceGrid from "@/components/sections/innerpages/ServiceGrid"

export default function Home() {
  return (
    <>

    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle pageName="Service Grid" />
    <ServiceGrid />

    </Layout>
    </>
    )
}