import Hyperlink from "./components/hyperlink";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
  alternates: {
    canonical: "/404",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="flex flex-col gap-5 justify-center self-center mt-auto text-center p-10">
      <h1 className="text-3xl">404</h1>
      <p>
        Page not found. You can{" "}
        <Hyperlink name="return to the homepage" url="/" />
      </p>
    </div>
  );
}
