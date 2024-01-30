import Header from "./Header";
import ProjectCard from "./ProjectCard";

const RecentProjects = () => {
  return (
    <section className="relative overflow-hidden pl-4 md:pl-8 lg:pl-24 py-20 md:py-8 lg:py-10">
      <div>
        <div className="px-4 sm:px-6 lg:px-8">
          <Header />
        </div>

        <div className="px-4 sm:px-6 lg:px-0 lg:pl-8 lg:-mr-20">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
