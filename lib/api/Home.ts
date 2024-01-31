export function home() {
  const homeQuery = `*[_type == 'frontpage'][0] {
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
        ...,
        projectCategories[]->{
         _id,
          title
        }
      }
     }`;

  return homeQuery;
}
