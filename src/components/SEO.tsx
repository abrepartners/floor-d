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
  /** Override the default OG image */
  image?: string;
}

const BASE_URL = "https://floordflooringandfinishes.com";

export function SEO({
  title,
  description,
  canonical,
  type = "website",
  publishedTime,
  schema,
  image,
}: SEOProps) {
  const fullTitle = title.includes("Floor'd")
    ? title
    : `${title} | Floor'd Flooring + Finishes`;
  const url = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
  const ogImage = image ? `${BASE_URL}${image}` : `${BASE_URL}/og-image.jpg`;

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
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={fullTitle} />

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
