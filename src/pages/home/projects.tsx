import ProjectListing from "../../components/project_listing";

function Projects() {
    return(
        <section className="h-full w-full bg-bg flex items-center justify-center flex-col px-10 gap-8 pb-10">
            <div className="text-center flex justify-center flex-col items-center">
                <h2 className="font-title text-4xl">My Projects</h2>
                <p className="mt-6 text-xl leading-relaxed">It&#8217;s not much but it&#8217;s honest work</p>
            </div>
            <div className="w-full flex flex-col gap-4">
                <ProjectListing title="Portfolio" desc="This website. My first public project" url="https://infinitive.cc" prettyUrl="infinitive.cc"/>
            </div>
        </section>
    );
}

export default Projects;