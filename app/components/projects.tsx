import Image from "next/image";
import Link from "next/link";

type projectProps = {
  name: string;
  image: string;
  desc: string;
  date: string;
  url: string;
};

type props = {
  project: projectProps[];
};

export default function Projects({ project }: props) {
  return (
    <div className="p-10 flex flex-col gap-5">
      <h2 className="text-base text-text-gray">PROJECTS</h2>
      <div>
        {project.map((element) => {
          return (
            <Link
              className="w-full flex flex-col gap-2 sm:gap-4 mb-6 sm:flex-row sm:mb-3"
              key={element.name}
              href={element.url}
            >
              <Image
                className="rounded-xl sm:w-[30%]"
                src={element.image}
                alt={`${element.name} logo`}
              />
              <div className="w-full flex flex-col gap-1 sm:gap-0.5">
                <div className="flex justify-between items-center">
                  <h3
                    className={`text-lg ${element.url ? "hover:underline underline-offset-2" : null}`}
                  >
                    {element.name}
                  </h3>
                  <p className="text-xs">{element.date}</p>
                </div>
                <p className="text-text-gray text-sm md:w-[60%]">
                  {element.desc}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
