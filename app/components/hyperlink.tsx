import Image from "next/image";
import arrow from "../assets/icons/arrow-topright.svg";

type props = {
  name: string;
  url: string;
  external?: boolean;
};

export default function Hyperlink({ name, url, external = false }: props) {
  return (
    <a
      href={url}
      className="cursor-pointer inline-flex flex-row gap-1 items-center mr-0.5 underline underline-offset-2 decoration-dotted hover:decoration-solid"
    >
      {name}
      {external ? (
        <Image className="size-2" src={arrow} alt="infinitive.cc logo" />
      ) : null}
    </a>
  );
}
