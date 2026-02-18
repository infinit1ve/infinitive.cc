import Hyperlink from "./components/hyperlink";
import Links from "./components/links";
import TopBar from "./components/topBar";

export default function Home() {
  
  const links = [
    {
      name: "Email",
      url: "mailto:contact@infinitive.cc",
      external: true
    },
    {
      name: "GitHub",
      url: "https://github.com/infinit1ve",
      external: true
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/maksym-tarashchan/",
      external: true
    }
  ];

  const site = [
    {
      name: "Hardware",
      url: "/hardware"
    },
    {
      name: "Projects",
      url: "/projects"
    },
    {
      name: "About Me",
      url: "/about"
    },
    {
      name: "CV",
      url: "/cv"
    }
  ];

  return (
    <>
      <TopBar/>
      <div className="p-10 flex gap-8 flex-col">
        <h1 className="sr-only">About Me</h1>
        <p className="text-2xl">Hello wanderer!</p>
        <p>I&#39;m a person who likes computers, figuring out how things work, and trying out new tech. Most of what I know comes from curiosity and hands-on experimenting — from small projects to running a few of my own services. I enjoy the process of learning, improving my setup, and slowly building things that are truly my own.</p>
      </div>
      <Links name="LINKS" links={links}/>
      <Links name="SITE" links={site}/>
    </>
  );
}
