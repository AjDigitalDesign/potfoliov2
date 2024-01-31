import React from "react";

import image from "../../public/blog1.jpeg";

import Link from "next/link";
import { client } from "@/lib/sanity";
import PostCard from "@/components/PostCard";

const Testposts = [
  {
    id: "01",
    title: "1 Things That You Need To Knows About E-Commerce",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi fugiat provident velit voluptate quo molestias, officiis perspiciatis minus doloremque soluta pariatur sunt architecto dicta harum consectetur nesciunt vero natus obcaecati!",
    date: "01-23-24",
    category: "Nextjs",
    image: image,
    url: "1-things-that-you-need-to-know about",
  },
  {
    id: "02",
    title: "5 Things That You Need To Knows About E-Commerce",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi fugiat provident velit voluptate quo molestias, officiis perspiciatis minus doloremque soluta pariatur sunt architecto dicta harum consectetur nesciunt vero natus obcaecati!",
    date: "01-23-24",
    category: "Nextjs",
    image: image,
    url: "5-things-that-you-need-to-know about",
  },
  {
    id: "03",
    title: "6 Things That You Need To Knows About E-Commerce",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi fugiat provident velit voluptate quo molestias, officiis perspiciatis minus doloremque soluta pariatur sunt architecto dicta harum consectetur nesciunt vero natus obcaecati!",
    date: "01-23-24",
    category: "Nextjs",
    image: image,
    url: "6-things-that-you-need-to-know about",
  },
  {
    id: "04",
    title: "7 Things That You Need To Knows About E-Commerce",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi fugiat provident velit voluptate quo molestias, officiis perspiciatis minus doloremque soluta pariatur sunt architecto dicta harum consectetur nesciunt vero natus obcaecati!",
    date: "01-23-24",
    category: "Nextjs",
    image: image,
    url: "7-things-that-you-need-to-know about",
  },
];

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
    <section className="mx-auto max-w-7xl px-4 md:px-8 pt-[110px] lg:pt-[150px] relative overflow-hidden">
      <div className="mx-auto max-w-screen-sm flex flex-col justify-center items-center text-center lg:py-5">
        <span className="font-bold text-sm uppercase md:text-lg">
          OUR JOURNAL
        </span>
        <h1 className="text-xl font-semibold md:text-3xl lg:text-4xl">
          Writing is socially acceptable from of schizophrenia
        </h1>
      </div>

      <div className="py-12 lg:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-3 md:gap-5 lg:gap-8 place-items-center content-center justify-center items-center">
        <PostCard posts={posts} />
      </div>
    </section>
  );
}

export default Blog;
