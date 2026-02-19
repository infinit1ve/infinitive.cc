import Links from "../components/links";
import TopBar from "../components/topBar";

export default function Home() {
  const site = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Hardware",
      url: "/hardware",
    },
    {
      name: "About Me",
      url: "/about",
    },
    {
      name: "CV",
      url: "/cv",
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
      <Links name="SITE" links={site} />
    </>
  );
}
