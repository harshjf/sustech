import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import ProjectGrid from "@/components/sections/innerpages/ProjectGrid";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <PageTitle pageName="Our Portfolio" />
        <ProjectGrid />
      </Layout>
    </>
  );
}