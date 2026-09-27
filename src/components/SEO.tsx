import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type PageSEO = {
  title: string;
  description: string;
  path: string;
  keywords: string;
};

const siteUrl = "https://www.uruhusolutions.com.ng";
const siteName = "Uruhu Solutions";
const defaultImage = `${siteUrl}/og-image.jpg`;

const pages: Record<string, PageSEO> = {
  "/": {
    title: "Uruhu Solutions | Business & Financial Advisory in Nigeria",
    description: "Uruhu Solutions is a boutique business and financial advisory firm helping businesses and individuals structure finances, prepare for appropriate funding, manage risk and make informed decisions.",
    path: "/",
    keywords: "business advisory Nigeria, financial advisory Nigeria, funding preparation, capital advisory, risk advisory, financial planning",
  },
  "/about": {
    title: "About Uruhu Solutions | Practical Advisory. Sustainable Value.",
    description: "Learn about Uruhu Solutions, a boutique business and financial advisory firm combining business insight, financial analysis, funding preparation and risk management.",
    path: "/about",
    keywords: "about Uruhu Solutions, business advisory firm Nigeria, financial and risk expertise, business strategy Nigeria",
  },
  "/services": {
    title: "Advisory Services | Business, Funding & Risk Advisory | Uruhu Solutions",
    description: "Explore Uruhu Solutions advisory services: business advisory and solutions, funding and capital advisory, risk advisory, and financial and investment advisory.",
    path: "/services",
    keywords: "business advisory services, funding and capital advisory, risk advisory Nigeria, financial advisory services, investment education",
  },
  "/why-us": {
    title: "Why Choose Uruhu | Practical Business & Financial Advisory",
    description: "Discover Uruhu’s practical, independent and client-focused approach to business, financial and risk advisory in Nigeria.",
    path: "/why-us",
    keywords: "business advisory Nigeria, financial risk expertise, practical advisory, independent financial advice",
  },
  "/contact": {
    title: "Contact Uruhu Solutions | Discuss Your Advisory Needs",
    description: "Contact Uruhu Solutions to discuss business advisory, funding preparation, risk advisory or financial decision support for your organisation or circumstances.",
    path: "/contact",
    keywords: "contact Uruhu Solutions, business advisory consultation Nigeria, financial advisory contact",
  },
};

const upsertMeta = (attribute: "name" | "property", key: string, content: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const upsertLink = (rel: string, href: string) => {
  let link = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
};

const SEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = pages[pathname] ?? pages["/"];
    const canonical = `${siteUrl}${page.path === "/" ? "/" : page.path}`;
    const image = defaultImage;

    document.title = page.title;
    upsertMeta("name", "description", page.description);
    upsertMeta("name", "keywords", page.keywords);
    upsertMeta("name", "author", siteName);
    upsertMeta("name", "robots", "index, follow, max-image-preview:large");
    upsertMeta("property", "og:title", page.title);
    upsertMeta("property", "og:description", page.description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:image:alt", `${siteName} — ${page.title}`);
    upsertMeta("property", "og:site_name", siteName);
    upsertMeta("property", "og:locale", "en_NG");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", page.title);
    upsertMeta("name", "twitter:description", page.description);
    upsertMeta("name", "twitter:image", image);
    upsertLink("canonical", canonical);

    const oldSchema = document.head.querySelector("#uruhu-seo-schema");
    oldSchema?.remove();
    const schema = document.createElement("script");
    schema.id = "uruhu-seo-schema";
    schema.type = "application/ld+json";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/android-chrome-512x512.png`,
      image,
      description: "Boutique business and financial advisory firm in Nigeria.",
      areaServed: [{ "@type": "Country", name: "Nigeria" }],
      serviceType: ["Business Advisory", "Funding and Capital Advisory", "Risk Advisory", "Financial Advisory"],
      sameAs: [],
    }, null, 2);
    document.head.appendChild(schema);
  }, [pathname]);

  return null;
};

export default SEO;
