import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta
          name="title"
          content="Sustech Solutions | Pioneering Sustainable Technology"
        />
        <meta
          name="description"
          content="Sustech Solutions leads the way in Hydrogen Energy, M2H2, and A2H2 technologies, driving global innovation for a sustainable future."
        />
        <meta
          name="keywords"
          content="Sustech Solutions, Sustainable Technology, Hydrogen Energy, M2H2, A2H2, Renewable Energy, Clean Tech, Energy Transition, Green Hydrogen, Methanol, Ethanol, Ammonia, Sustainability, Off Grid Power, Hydrogen Refuelling Station, Green Steel, Low Carbon, Hydrogen Vehicles, Fuel Cells"
        />
        <meta name="author" content="Sustech Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sustechgroup.com/" />
        <meta
          property="og:title"
          content="Sustech Solutions | Pioneering Sustainable Technology"
        />
        <meta
          property="og:description"
          content="Sustech Solutions leads the way in Hydrogen Energy, M2H2, and A2H2 technologies, driving global innovation for a sustainable future."
        />
        <meta
          property="og:image"
          content="https://www.sustechgroup.com/social-preview.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.sustechgroup.com/" />
        <meta
          property="twitter:title"
          content="Sustech Solutions | Pioneering Sustainable Technology"
        />
        <meta
          property="twitter:description"
          content="Sustech Solutions leads the way in Hydrogen Energy, M2H2, and A2H2 technologies, driving global innovation for a sustainable future."
        />
        <meta
          property="twitter:image"
          content="https://www.sustechgroup.com/social-preview.png"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sustech Solutions",
              alternateName: "Sustech Group",
              url: "https://www.sustechgroup.com",
              logo: "https://www.sustechgroup.com/favicon.png",
              description:
                "Sustech Solutions is a sustainable technology firm specializing in Hydrogen Energy, M2H2, and A2H2 technologies. With global expertise, we lead the way in innovation for a greener future.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "India",
              },
              keywords: [
                "Methanol",
                "Ethanol",
                "Ammonia",
                "Sustainability",
                "Off Grid Power",
                "Hydrogen Refuelling Station",
                "Green Steel",
                "Low Carbon",
                "Hydrogen Vehicles",
                "Fuel Cells",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Support",
                email: "management@sustechsolutions.ae",
                url: "https://www.sustechgroup.com/contact-us",
              },
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
