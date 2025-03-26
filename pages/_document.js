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
          content="Sustech Solutions is a forward-thinking sustainable technology firm with global experience across energy, mobility, finance, ecology, and innovation. Specializing in Hydrogen Energy, M2H2, and A2H2 technologies."
        />
        <meta
          name="keywords"
          content="Sustech Solutions, Sustainable Technology, Hydrogen Energy, M2H2, A2H2, Renewable Energy, Clean Tech, Energy Transition, Green Hydrogen"
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
          content="Driving a sustainable future through Hydrogen Energy, M2H2, and A2H2. Explore our global expertise in sustainable innovation."
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
          content="Explore our advanced solutions in Hydrogen Energy, M2H2, and A2H2. Sustech Solutions is committed to a cleaner, greener world."
        />
        <meta
          property="twitter:image"
          content="https://www.sustechgroup.com/social-preview.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
