"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="px-10 py-12 flex flex-wrap gap-5 justify-between w-full max-w-3xl text-text-gray mt-auto">
      <div className="flex flex-wrap gap-3">
        <a className="hover:underline" href="/">
          Home
        </a>
        <a className="hover:underline" href="/about">
          About Me
        </a>
        <a className="hover:underline" href="/cv">
          CV
        </a>
        <a className="hover:underline" href="/projects">
          Projects
        </a>
        <a className="hover:underline" href="/hardware">
          Hardware
        </a>
      </div>
      <p className="self-end">&#169; {year}</p>
    </div>
  );
}
