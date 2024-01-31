export interface Post {
  categories: {
    title: string;
    _id: string;
  };
  title: string;
  body: any;
  excerpt: string;
  slug: {
    current: string;
  };
  _id: string;
  featuredImage: string;
  _createdAt: string;
}
