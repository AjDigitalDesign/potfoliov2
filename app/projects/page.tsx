import { client } from "@/lib/sanity";
import React from "react";

async function getMetaData() {
  const query = `*[_type == 'projectPage' ][0] {
  'ogTitle': Socialmedia.ogTitle,
  'locale': Socialmedia.locale,
  'ogDescription': Socialmedia.ogDescription,
  'image': Socialmedia.ogImage.asset->url,
  'url': Socialmedia.url,
  'site_name': Socialmedia.site_name,
  'keyphrase': seo.keyphrase,
  'description': seo.description,
  'title': seo.title,
}`;

  const data = await client.fetch(query, { next: { revalidate: 5 } });
  return data;
}

export async function generateMetadata() {
  const metaData = await getMetaData();
  console.log(metaData.title);

  return {
    title: metaData.site_name,
    description: metaData.ogDescription,
    keywords: [metaData.keyphrases],
    siteName: metaData.title,
    url: metaData.url,
    images: [
      {
        url: metaData.image, // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: metaData.locale,
    twitter: {
      card: metaData.image,
      site: metaData.site_name,
      title: metaData.site_name,
      description: metaData.ogDescription,
      image: metaData.image,
    },
  };
}

const Projects = () => {
  return (
    <section className="pt-[20px] md:pt-[40px] lg:pt-[50px] relative overflow-hidden">
      <div className="mx-auto max-w-screen-sm flex flex-col justify-center items-center text-center lg:py-5">
        <span className="font-bold text-sm uppercase md:text-lg">
          Featured Projects
        </span>
        <h1 className="font-semibold text-3xl leading-10 lg:text-4xl">
          Design and Innovation
        </h1>
      </div>
    </section>
  );
};
export default Projects;
