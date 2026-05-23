"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="px-10 py-12 flex flex-wrap gap-5 justify-between w-full max-w-3xl text-text-gray mt-auto">
      <div className="flex flex-wrap gap-3">
        <Link className="hover:underline" href="/">
          Home
        </Link>
        <Link className="hover:underline" href="/blog">
          Blog
        </Link>
        <Link className="hover:underline" href="/about">
          About Me
        </Link>
        <Link className="hover:underline" href="/lebenslauf.pdf">
          CV
        </Link>
        <Link className="hover:underline" href="/projects">
          Projects
        </Link>
        <Link className="hover:underline" href="/hardware">
          Hardware
        </Link>
      </div>
      <p className="self-end">&#169; {year}</p>
    </div>
  );
}
