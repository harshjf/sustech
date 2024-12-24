import Link from "next/link";

export default function Menu() {
  return (
    <>
      <ul className="navigation">
        <li>
          <Link href="/">Home</Link>
        </li>
        {/* <li className="current dropdown"><Link href="/">Home</Link>
                    <ul>
                        <li><Link href="/">Home page 01</Link></li>
                        <li><Link href="/index-2">Home page 02</Link></li>
                        <li><Link href="/index-3">Home page 03</Link></li>
                    </ul>
                </li> */}
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/our-team">Our Team</Link>
        </li>

        {/*  <li className="dropdown">
          <Link href="/about-us">Pages</Link>
          <ul>
            <li>
              <Link href="/about-us">About</Link>
            </li>
            <li className="dropdown">
              <Link href="/our-team">Team</Link>
              <ul>
                <li>
                  <Link href="/our-team">Team Grid</Link>
                </li>
                <li>
                  <Link href="/our-team-details">Team Details</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/page-testimonial">Testimonials</Link>
            </li>
            <li>
              <Link href="/page-pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/page-faq">Faq</Link>
            </li>
            <li>
              <Link href="/page-error">404</Link>
            </li>
          </ul>
        </li> */}
        {/* <li className="dropdown">
          <Link href="/page-services">Services</Link>
          <ul>
            <li>
              <Link href="/page-services">Services Grid</Link>
            </li>
            <li>
              <Link href="/page-service-details">Service Details</Link>
            </li>
          </ul>
        </li> */}
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        {/* <li className="dropdown">
          <Link href="/our-portfolio">Portfolio</Link>
          <ul>
            <li>
              <Link href="/our-portfolio">Projects Grid</Link>
            </li>
            <li>
              <Link href="/page-project-details">Project Details</Link>
            </li>
          </ul>
        </li> */}
        {/* <li className="dropdown">
          <Link href="/news-grid">News</Link>
          <ul>
            <li>
              <Link href="/news-grid">News Grid</Link>
            </li>
            <li>
              <Link href="/news-details">News Details</Link>
            </li>
          </ul>
        </li> */}
        <li>
          <Link href="/about-us">About</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact</Link>
        </li>
      </ul>
    </>
  );
}
