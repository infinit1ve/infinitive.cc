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
    <div>
      <h2 className="text-base text-text-gray">PROJECTS</h2>
      <div>
        {project.map((element) => {
          return <div></div>;
        })}
      </div>
    </div>
  );
}
