import { client, urlFor } from "@/lib/sanity";
import { useParams, usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import dayjs from "dayjs";
import { PortableText } from "@portabletext/react";

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0] {
    _createdAt,
      _id,
      'featuredImage': mainImage.asset->url,
      body,
      'excerpt': body[0].children[0].text,
      slug,
      title,
      _updatedAt,
      categories[]->{
        title,
        _id,
    
      },
  }`;

  const post = await client.fetch(query, { next: { revalidate: 10 } });

  return post;
}

async function Post({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  console.log(post);

  const PortableTextComponet = {
    types: {
      image: ({ value }: { value: any }) => (
        <Image
          src={urlFor(value).url()}
          alt="image"
          className="rounded-lg"
          width={800}
          height={800}
        />
      ),
    },
  };

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 pt-[110px] lg:pt-[150px] relative overflow-hidden">
      <div className="mx-auto max-w-screen-sm flex flex-col justify-center items-center text-center lg:py-5">
        <span className="font-bold text-sm uppercase md:text-lg">
          Tech & News Updates
        </span>
        <h1 className="text-xl font-semibold md:text-3xl lg:text-4xl">
          {post.title}
        </h1>
      </div>
      <div className="py-8">
        <div>
          <Image
            src={urlFor(post.featuredImage).url()}
            width={600}
            height={300}
            alt="post"
            className="bg-cover object-cover w-full h-80"
          />
        </div>
        <div className="py-5">
          <div>
            <ul className="flex flex-row space-x-3 font-bold text-sm md:text-lg text-primary_red">
              {post.categories.map((cat: { _id: string; title: string }) => (
                <li key={cat._id}>{cat.title}</li>
              ))}
            </ul>
          </div>
          <div className="mt-1">
            <span className="text-slate-400 text-sm md:text-lg  font-semibold inline-block">
              Posted on: {dayjs(post._createdAt).format("MMM D, YY")}
            </span>
          </div>
          <div className="first-letter:capitalize first-letter:font-extrabold first-letter:text-5xl mt-3 block-content">
            <PortableText value={post.body} components={PortableTextComponet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
