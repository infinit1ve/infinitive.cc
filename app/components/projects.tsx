type projectProps = {
  name: string;
  image: string;
  desc: string;
  date: string;
  url?: string;
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
            <a href={element.url || undefined}>
              <h3>{element.name}</h3>
            </a>
          );
        })}
      </div>
    </div>
  );
}
