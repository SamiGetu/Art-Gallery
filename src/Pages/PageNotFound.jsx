import NavBar from "../components/NavBar";

export default function PageNotFound() {
  return (
    <>
      <NavBar />
      <div className="h-[100vh] bg-black flex flex-col justify-center items-center">
        <h1 className="text-[10rem] text-white text-center font-extrabold">
          404
        </h1>
        <h2 className="text-2xl">Page Not Found</h2>
      </div>
    </>
  );
}
