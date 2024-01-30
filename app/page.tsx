import About from "@/components/Home/AboutSection/About";
import Banner from "@/components/Home/Banner";
import RecentProjects from "@/components/Home/RecentProjects/RecentProjects";
import projectImg from "../../../public/popup-project-1.jpg";
import { Description } from "@radix-ui/react-dialog";
import TestimonialItem from "@/components/Home/Testimonial/TestimonialItem";
import Testimonial from "@/components/Home/Testimonial/Testimonials";
import LatestPost from "@/components/Home/LatestPost/LatestPost";

import blog1 from "../public/blog1.jpeg";
import blog12 from "../public/blog2.jpeg";
import { client } from "@/lib/sanity";
import Cta from "@/components/Home/CtaSection/Cta";

async function getMetaData() {
  const query = `*[_type == 'frontpage'][0] {
    'title': seo.title,
     'keyphrases': seo.keyphrase,
      'description': seo.description,
      'ogDescription': Socialmedia.ogDescription,
      'ogImage': Socialmedia.ogImage.asset->url,
      'url': Socialmedia.url,
      'site_name': Socialmedia.site_name,
        'locale': Socialmedia.locale,  
   }`;

  const data = await client.fetch(query, { next: { revalidate: 60 } });
  return data;
}

async function getData() {
  const query = `*[_type == 'frontpage'][0] {
    'bannerTitle': heroBannerTitle,
    'bannerSubtitle': heroBannerIntroTitle,
   'bannerDescription': heroBannerDescription,
   'Cta': heroBannerCta,
   'BannerBgImg': heroBanner.asset->url,
   'aboutIntroBio': bio,
   'aboutTitle': title,
   'aboutSubTitle': subtitle,
   'designTitle': designTitle,
   'techTitle': techstackTitle,
   'devprocessTitle': devprocessTitle,
   'sectionImg': mainImage.asset->url,
   designtools,
   techstack,
   devprocessstack,
 }`;

  const data = await client.fetch(query, { revalidate: 20 });
  return data;
}

export async function generateMetadata() {
  const data = await getMetaData();

  return {
    title: data.title,
    description: data.description,
    keywords: [data.keyphrases],
    siteName: data.site_name,
    url: data.url,
    images: [
      {
        url: data.ogImage, // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: data.locale,
  };
}

const testimonials = [
  {
    testimonial:
      "One maxime placeat quas iste obcaecati voluptas dolore temporibus quaerat laborum iure, illo natus eaque corrupti!",
    author: "John Brown",
    id: "01",
  },
  {
    testimonial:
      "AJ quas iste obcaecati voluptas dolore temporibus quaerat laborum iure, illo natus eaque corrupti!",
    author: "John Brown II",
    id: "02",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nisi incidunt alias ut maxime. Mollitia, maxime placeat quas iste obcaecati voluptas dolore temporibus quaerat laborum iure, illo natus eaque corrupti!",
    author: "John Brown III",
    id: "03",
  },
];

const blogposts = [
  {
    id: "01",
    name: "The standard personal My portfolio",
    date: "Jan 10, 2024",
    url: "the-standard-personal-My-portfolio",
    image: blog1,
  },
  {
    id: "02",
    name: "The standard personal My portfolio-two",
    date: "Jan 19, 2024",
    url: "the-standard-personal-My-portfolio-two",
    image: blog12,
  },

  {
    id: "03",
    name: "The standard personal My portfolio-three",
    date: "Jan 20, 2024",
    url: "the-standard-personal-My-portfolio-three",
    image: blog12,
  },
];

async function Home() {
  const data = await getData();

  console.log(data);

  return (
    <div>
      <Banner
        title={data.bannerTitle}
        subTitle={data.bannerSubtitle}
        description={data.bannerDescription}
        ctaBtn={data.Cta}
        bannerBgImg={data.BannerBgImg}
      />
      <About
        sectionImg={data.sectionImg}
        intro={data.aboutIntroBio}
        title={data.aboutTitle}
        subtitle={data.aboutSubTitle}
        designTitle={data.designTitle}
        techTitle={data.techTitle}
        devprocessTitle={data.devprocessTitle}
        designtools={data.designtools}
        techstack={data.techstack}
        devprocessstack={data.devprocessstack}
      />
      <RecentProjects />
      <Cta />
      {/* <Testimonial testimonials={testimonials} />
      <LatestPost posts={blogposts} /> */}
    </div>
  );
}

export default Home;
