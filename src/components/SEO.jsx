import { useEffect } from "react";

const SEO = ({ title, description, keywords }) => {
  useEffect(() => {
    // Update Title
    document.title = `${title} | Clynero IT Solutions`;

    // Helper to set or create meta tag
    const setMetaTag = (attr, value, content) => {
      let element = document.querySelector(`meta[${attr}="${value}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, value);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Standard Meta Tags
    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", keywords);

    // Open Graph
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", "website");

    // Twitter
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);

    // JSON-LD Structured Data
    const scriptId = "clynero-jsonld";
    let existingScript = document.getElementById(scriptId);

    const jsonLdData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Clynero IT Solutions",
      url: "https://clynero.com",
      logo: "https://clynero.com/logo.png",
      description: description,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Thiruvananthapuram",
        addressRegion: "Kerala",
        addressCountry: "India"
      },
      sameAs: [
        "https://twitter.com/clynero",
        "https://linkedin.com/company/clynero"
      ]
    };

    if (!existingScript) {
      existingScript = document.createElement("script");
      existingScript.type = "application/ld+json";
      existingScript.id = scriptId;
      document.head.appendChild(existingScript);
    }

    existingScript.textContent = JSON.stringify(jsonLdData);

    // Cleanup (optional but clean)
    return () => {
      // You can remove JSON-LD if needed
      // document.getElementById(scriptId)?.remove();
    };

  }, [title, description, keywords]);

  return null;
};

export default SEO;