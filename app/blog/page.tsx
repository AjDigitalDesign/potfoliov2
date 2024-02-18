import React from "react";

import image from "../../public/blog1.jpeg";

import Link from "next/link";
import { client } from "@/lib/sanity";
import PostCard from "@/components/PostCard";
import Cta from "@/components/Home/CtaSection/Cta";

async function getMetaData() {
  const query = `*[_type == 'blog' ][0] {
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

  const data = await client.fetch(query, { next: { revalidate: 60 } });
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

async function getPosts() {
  const query = `*[_type == 'post' ] | order(_createdAt desc){
    _createdAt,
      _id,
      'featuredImage': mainImage.asset->url,
      body,
      'excerpt': body[0].children[0].text,
      slug,
      title,
      _updatedAt,
      _createdAt,
      categories[]->{
        title,
        _id,
    
      },
  }`;

  const posts = await client.fetch(query);
  return posts;
}

async function Blog() {
  const posts = await getPosts();
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 md:px-8 pt-[30px] md:pt-[50px] lg:pt-[50px] relative overflow-hidden">
        <div className="mx-auto max-w-screen-sm flex flex-col justify-center items-center text-center lg:pb-10">
          <span className="font-bold text-sm uppercase md:text-lg">Blog</span>
          <h1 className="text-xl font-semibold md:text-3xl lg:text-4xl">
            Latest Articles
          </h1>
        </div>

        <div className="py-12 lg:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-3 md:gap-5 lg:gap-8 place-items-center content-center justify-center items-center">
          <PostCard posts={posts} />
        </div>
      </section>
      <Cta />
    </>
  );
}

export default Blog;
