import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
// import Slider from "../components/Slider";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="w-full h-screen  bg-cover bg-center bg-fixed">
        <Slider />
      </div>
    </>
  );
}
