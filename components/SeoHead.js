import Head from "next/head";

const defaultTitle = "Data and Service Design - Politecnico Milano";
const defaultDescription = "A course on data practices and service design at Politecnico Milano School of Design, Master in Product Service System Design";
const defaultUrl = "https://dataservicedesign.github.io";
const defaultImage = "/syllabus/og-image.png";

export default function SeoHead({ title = defaultTitle, description = defaultDescription, url = defaultUrl, image = defaultImage }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} key="title" />
      <meta name="description" content={description} key="description" />

      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:url" content={url} key="og:url" />
      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:description" content={description} key="og:description" />
      <meta property="og:image" content={image} key="og:image" />

      <meta property="twitter:card" content="summary_large_image" key="twitter:card" />
      <meta property="twitter:url" content={url} key="twitter:url" />
      <meta property="twitter:title" content={title} key="twitter:title" />
      <meta property="twitter:description" content={description} key="twitter:description" />
      <meta property="twitter:image" content={image} key="twitter:image" />
    </Head>
  );
}
