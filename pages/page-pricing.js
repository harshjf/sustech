import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import PricingTable from "@/components/sections/innerpages/PricingTable"

export default function Home() {
  return (
    <>

    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle pageName="Pricing Table" />
    <PricingTable />

    </Layout>
    </>
    )
}