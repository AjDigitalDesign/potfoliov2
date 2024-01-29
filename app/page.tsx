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

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <RecentProjects />
      <Testimonial testimonials={testimonials} />
      <LatestPost posts={blogposts} />
    </div>
  );
}
