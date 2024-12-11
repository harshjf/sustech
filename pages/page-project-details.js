import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import ProjectDetails from "@/components/sections/innerpages/ProjectDetails"

export default function Home() {
  return (
    <>

    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle pageName="Project Details" />
    <ProjectDetails />

    </Layout>
    </>
    )
}