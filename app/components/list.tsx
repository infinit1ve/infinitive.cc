type item = {
  name: string;
  property1?: string;
  property2?: string;
};

type props = {
  name: string;
  items: item[];
};

function List( { name, items } : props ) {
    return(
        <div className="px-10 py-5 flex flex-col gap-5">
            <h1 className="text-base text-text-gray">{name}</h1>
            <div className="flex flex-wrap gap-5">
                { items.map(element => {
                    return(
                        <div>
                            <h2 className="text-base text-text">{element.name}</h2>
                            <div className="text-text-gray">
                                {element.property1 ? <p> - {element.property1}</p> : null}
                                {element.property2 ? <p> - {element.property2}</p> : null}
                            </div>
                        </div>
                    );
                }) }
            </div>
        </div>
    );
}

export default List;