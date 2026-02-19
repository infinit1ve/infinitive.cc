import Hyperlink from "./hyperlink";

type linkItem = {
  name: string;
  url: string;
  external?: boolean;
};

type props = {
  name: string;
  links: linkItem[];
};

function Links({ name, links }: props) {
  return (
    <div className="px-10 py-5 flex flex-col gap-5">
      <h2 className="text-base text-text-gray">{name}</h2>
      <div className="flex flex-wrap gap-5">
        {links.map((element) => {
          return (
            <Hyperlink
              key={element.url}
              url={element.url}
              name={element.name}
              external={element.external}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Links;
