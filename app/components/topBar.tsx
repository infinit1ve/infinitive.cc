"use client";

import Image from "next/image";
import glyph from "../assets/icons/glyph-main.svg";
import { useState, useEffect } from "react";
import Link from "next/link";

type props = {
  text_left?: string;
  text_right?: string;
};

function TopBar({ text_left = "infinitive.cc", text_right }: props) {
  const [localTime, setLocalTime] = useState(
    new Date().toLocaleTimeString("en-GB", {
      timeZone: "Europe/Berlin",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }),
  );
  if (!text_right) {
    useEffect(() => {
      const interval = setInterval(() => {
        setLocalTime(
          new Date().toLocaleTimeString("en-GB", {
            timeZone: "Europe/Berlin",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }),
        );
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  }
  return (
    <div className="flex justify-between items-center p-10 text-text-gray leading-none">
      <Link href="/" className="flex gap-4 items-center">
        <Image className="size-3.5" src={glyph} alt="infinitive.cc logo" />
        <p>{text_left}</p>
      </Link>
      <p>// {text_right ? text_right : `${localTime} LOCAL_TIME`}</p>
    </div>
  );
}

export default TopBar;
