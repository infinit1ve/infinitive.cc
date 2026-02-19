import Hyperlink from "./hyperlink";

type item = {
  name: string;
  place?: string;
  timeframe: string;
  url?: string;
  skill1?: string;
  skill2?: string;
};

type props = {
  name: string;
  items: item[];
};

function ExperienceList({ name, items }: props) {
  return (
    <div className="p-10 flex flex-col gap-5">
      <h2 className="text-base text-text-gray">{name}</h2>
      <div className="flex flex-wrap gap-5">
        {items.map((element) => {
          return (
            <div className="flex flex-col w-full gap-2 border-b pb-5 border-text-gray/30">
              <div>
                <h3 className="text-lg text-text">
                  {element.name}
                  {element.url && element.place ? " @ " : null}
                  {element.url && element.place ? (
                    <Hyperlink
                      name={element.place}
                      url={element.url}
                      external={true}
                    />
                  ) : (
                    element.place
                  )}
                </h3>
                <p className="text-text text-sm mt-1">{element.timeframe}</p>
              </div>
              <div className="text-text-gray">
                {element.skill1 ? <p> - {element.skill1}</p> : null}
                {element.skill2 ? <p> - {element.skill2}</p> : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExperienceList;
