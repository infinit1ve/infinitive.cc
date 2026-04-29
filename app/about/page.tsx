import ExperienceList from "../components/experienceList";
import Hyperlink from "../components/hyperlink";
import TopBar from "../components/topBar";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function Home() {
  // const site = [
  //   {
  //     name: "Home",
  //     url: "/",
  //   },
  //   {
  //     name: "Hardware",
  //     url: "/hardware",
  //   },
  //   {
  //     name: "Projects",
  //     url: "/projects",
  //   },
  //   {
  //     name: "CV",
  //     url: "/cv",
  //   },
  // ];
  const experience = [
    {
      name: "School internship as an administrative assistant",
      place: "Don Bosco Berufsschule",
      url: "https://dbs-wuerzburg.de",
      timeframe: "09/2025 - 01/2026",
      skill1:
        "Maintained and structured student records by digitising data, creating new file systems, and cleaning up legacy archives in line with the GDPR requirements",
      skill2:
        "Managed administrative workflows in the school management system, including onboarding new students, updating master data, and validating class and contact lists",
    },
    {
      name: "Charity work",
      place: "Angestöpselt e. V.",
      url: "https://angestoepselt.de",
      timeframe: "04/2025 - 02/2026",
      skill1:
        "Refurbish donated laptops by upgrading storage and memory, performing hardware cleaning, and deploying preconfigured Linux images for redistribution to people in need",
      skill2:
        "Contribute to a volunteer-driven device-reuse initiative that extends hardware lifecycles and provides privacy-respecting systems based on Linux",
    },
  ];
  const education = [
    {
      name: "Staatliche FOS/BOS Würzburg",
      timeframe: "09/2024 - now",
    },
    {
      name: "Franz-Oberthür-Schule, Würzburg",
      timeframe: "11/2023 - 08/2024",
    },
    {
      name: "Municipal General Secondary Education Institution - Lyceum No. 5 of the Khmelnytskyi City Council",
      timeframe: "09/2013 - 08/2024",
    },
  ];
  return (
    <>
      <TopBar text_right="ABOUT_ME" />
      <div className="p-10">
        <h1 className="text-2xl mb-1">Hey, I&#39;m Maksym!</h1>
        <p>
          Currently a student @{" "}
          <Hyperlink
            name="FOS Würzburg"
            url="https://fosbos-wuerzburg.de"
            external={true}
          />{" "}
          studying economics
        </p>
      </div>
      <ExperienceList name="EXPERIENCE" items={experience} />
      <ExperienceList name="EDUCATION" items={education} />
    </>
  );
}
