import infinitiveLogo from "../assets/projectLogos/infinitive.cc.svg";
import dockerLogo from "../assets/projectLogos/dockerLogo.svg";
import homelabLogo from "../assets/projectLogos/homelabLogo.svg";
import Projects from "../components/projects";
import TopBar from "../components/topBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  alternates: {
    canonical: "/projects/",
  },
};

export default function Home() {
  const projects = [
    {
      name: "vprouter",
      image: dockerLogo,
      desc: "A docker container to make your tailscale exit via a custom WireGuard tunnel",
      date: "2026",
      url: "https://github.com/infinit1ve/vprouter",
    },
    {
      name: "Portfolio Website",
      image: infinitiveLogo,
      desc: "My small window into the internet",
      date: "2026",
      url: "/",
    },
    {
      name: "Homelab",
      image: homelabLogo,
      desc: "Services I host to reclaim control over my data",
      date: "2025",
      url: "https://github.com/infinit1ve/homelab",
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
