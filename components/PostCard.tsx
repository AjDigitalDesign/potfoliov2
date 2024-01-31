import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/interface";
import { FC } from "react";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity";
import dayjs from "dayjs";

interface BlogProps {
  posts: Post[];
}

const PostCard: FC<BlogProps> = ({ posts }) => {
  return (
    <>
      {posts.map(
        (post: {
          _id: string;
          title: string;
          body: any;
          excerpt: string;
          categories: any;
          _createdAt: string;
          featuredImage: string;
          slug: {
            current: string;
          };
        }) => (
          <article key={post._id} className="mb-20 sm:mb-16">
            <div>
              <Link href={`/blog/${post.slug.current}`} className="block">
                <Image
                  src={urlFor(post.featuredImage).url()}
                  width={400}
                  height={400}
                  alt="post"
                  className="bg-cover object-cover w-full"
                />
              </Link>
            </div>
            <div className="pt-3">
              <div className="mb-3">
                <ul className="flex flex-row space-x-3 font-bold text-sm text-primary_red">
                  {post.categories.map(
                    (cat: { _id: string; title: string }) => (
                      <li key={cat._id}>{cat.title}</li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 lg:text-2xl">
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="hover:transition-all ease-in-out hover:text-primary_red"
                  >
                    {post.title}
                  </Link>
                </h3>

                <p className="line-clamp-3">{post.excerpt}</p>
                <div className="mt-4">
                  <span className="text-slate-400 text-sm font-semibold inline-block">
                    Posted on: {dayjs(post._createdAt).format("MMM D, YY")}
                  </span>
                </div>
              </div>
            </div>
          </article>
        )
      )}
    </>
  );
};

export default PostCard;
