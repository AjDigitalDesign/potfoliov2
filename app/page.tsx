import About from "@/components/Home/AboutSection/About";
import Banner from "@/components/Home/Banner";
import RecentProjects from "@/components/Home/RecentProjects/RecentProjects";

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

  const data = await client.fetch(query, { next: { revalidate: 3600 } });
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
   recentProject[]->{
    _id,
    title,
    githubLink,
    _updatedAt,
     projectlanguages,
    projectType,
    title,
    description,
    href,
    'image': featuredImage.asset->url,
     'caption': featuredImage.caption,
    projectCategories[]->{
     _id,
      title
    }
  }
 }`;

  const data = await client.fetch(query, { next: { revalidate: 10 } });
  return data;
}

async function getProjectsData() {
  const query = `*[_type == 'projects'] {
    _id,
    title,
    githubLink,
    _updatedAt,
     projectlanguages,
    projectType,
    title,
    description,
    href,
    'image': featuredImage.asset->url,
     'caption': featuredImage.caption,
    projectCategories[]->{
     _id,
      title
    }

}`;

  const data = await client.fetch(query, { next: { revalidate: 10 } });
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
    twitter: {
      card: data.ogImage,
      site: data.site_name,
      title: data.site_name,
      description: data.description,
      image: data.ogImage,
    },
  };
}

async function Home() {
  const data = await getData();
  const projects = await getProjectsData();
  console.log(projects);

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
      <RecentProjects recentProjects={data.recentProject} />
      <Cta />
    </div>
  );
}
export default Home;
