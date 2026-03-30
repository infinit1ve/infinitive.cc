import Hyperlink from "./components/hyperlink";

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
