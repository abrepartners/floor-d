import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article";
  /** For article pages */
  publishedTime?: string;
  /** JSON-LD structured data object */
  schema?: object;
}

const BASE_URL = "https://floordflooringandfinishes.com";

export function SEO({
  title,
  description,
  canonical,
  type = "website",
  publishedTime,
  schema,
}: SEOProps) {
  const fullTitle = title.includes("Floor'd")
    ? title
    : `${title} | Floor'd Flooring + Finishes`;
  const url = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Floor'd Flooring + Finishes" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* Article specific */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}

      {/* JSON-LD */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}
