import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import Contact from "@/components/sections/innerpages/Contact";

export default function Home() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        headTitle="Sustech Neo Energy | Contact Us"
      >
        <PageTitle pageName="Contact Us" />
        <Contact />
      </Layout>
    </>
  );
}
