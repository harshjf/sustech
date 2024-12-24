import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import ServiceDetails from "@/components/sections/innerpages/ServiceDetails";
import servicesData from "../../../data/services.json";

export async function getStaticPaths() {
  const paths = Object.keys(servicesData).flatMap((category) =>
    servicesData[category].map((service) => ({
      params: { service: service.name },
    }))
  );

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  let serviceDetails = null;

  Object.keys(servicesData).forEach((category) => {
    const found = servicesData[category].find(
      (item) => item.name === params.service
    );
    if (found) {
      serviceDetails = found;
    }
  });

  if (!serviceDetails) {
    return { notFound: true };
  }

  return {
    props: { serviceDetails },
  };
}
export default function ServiceDetailsPage({ serviceDetails }) {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      <PageTitle
        pageName={serviceDetails.title}
        serviceName={serviceDetails.name}
      />
      {serviceDetails ? (
        <ServiceDetails service={serviceDetails} />
      ) : (
        <p>Service not found</p>
      )}
    </Layout>
  );
}
