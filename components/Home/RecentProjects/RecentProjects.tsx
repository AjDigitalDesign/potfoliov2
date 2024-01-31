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
    <section className="relative overflow-hidden pl-4 md:pl-8 lg:pl-24 py-20 md:py-8 lg:py-10">
      <div>
        <div className="px-4 sm:px-6 lg:px-8">
          <Header />
        </div>

        <div className="px-4 sm:px-6 lg:px-0 lg:pl-8 lg:-mr-20">
          <ProjectCard featuredProjects={recentProjects} />
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
