import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import About from "@/components/sections/innerpages/About";
import About33 from "@/components/sections/About33";

export default function Home() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        headTitle="Sustech Neo Energy | About Us"
      >
        <PageTitle pageName="About Us" />
        <About />
        <About33 />
      </Layout>
    </>
  );
}
