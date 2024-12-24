import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import ProjectDetails from "@/components/sections/innerpages/ProjectDetails";
import portfolioData from "../../../data/portfolio.json";

export async function getStaticPaths() {
  const paths = portfolioData.map((portfolio) => ({
    params: { name: portfolio.name },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const portfolioDetails = portfolioData.find(
    (item) => item.name === params.name
  );

  if (!portfolioDetails) {
    return { notFound: true };
  }

  return {
    props: { portfolioDetails },
  };
}

export default function ServiceDetailsPage({ portfolioDetails }) {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      <PageTitle
        pageName={portfolioDetails.title}
        portfolioName={portfolioDetails.name}
      />
      {portfolioDetails ? (
        <ProjectDetails portfolio={portfolioDetails} />
      ) : (
        <p>Details not found</p>
      )}
    </Layout>
  );
}
