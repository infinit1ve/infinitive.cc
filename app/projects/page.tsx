import infinitiveLogo from "../assets/projectLogos/infinitive.cc.svg";
import Projects from "../components/projects";
import TopBar from "../components/topBar";

export default function Home() {
  const projects = [
    {
      name: "Portfolio Website",
      image: infinitiveLogo,
      desc: "My small window into the internet",
      date: "2026",
      url: "/",
    },
  ];

  return (
    <>
      <TopBar text_right="PROJECTS" />
      <div className="p-10 flex gap-1 flex-col">
        <h1 className="sr-only">Projects</h1>
        <p className="text-2xl">Some of my work</p>
        <p>It&#39;s not much, but it&#39;s honest work</p>
      </div>
      <Projects project={projects} />
    </>
  );
}
