import { FC } from "react";
import Header from "./Header";
import ProjectCard from "./ProjectCard";

interface RecentProjectsProps {
  recentProjects: {
    _id: string;
    _updatedAt: string;
    githubLink: string;
    projectlanguages: string;
    _type: string;
    projectType: string;
    title: string;
    descrition: string;
    href: string;
    caption: string;
    image: string;
    projectCategories: {
      _id: string;
      title: string;
    }[];
  }[];
}

const RecentProjects: FC<RecentProjectsProps> = ({ recentProjects }) => {
  return (
    <section className="relative overflow-hidden  py-20 md:py-8 lg:py-10">
      <div>
        <div className="px-4 sm:px-6 md:px-8 lg:px-12">
          <Header />
        </div>

        <div className="px-4 sm:px-6 md:px-8 lg:px-12">
          <ProjectCard featuredProjects={recentProjects} />
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
