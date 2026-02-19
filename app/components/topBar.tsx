import glyph from "../assets/icons/glyph-main.svg";
import Image from "next/image";

const time = new Date().toLocaleTimeString("en-GB", {
  timeZone: "Europe/Berlin",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

type props = {
    text_left?: string
    text_right?: string
}

function TopBar( {text_left = "infinitive.cc", text_right = `${time} LOCAL_TIME`} : props ) {
    return(
        <div className="flex justify-between items-center p-10 text-text-gray leading-none">
            <a href="/" className="flex gap-4 items-center">
                <Image className="size-3.5" src={glyph} alt="infinitive.cc logo"/>
                <p>{text_left}</p>
            </a>
            <p>// {text_right}</p>
        </div>
    );
}

export default TopBar;