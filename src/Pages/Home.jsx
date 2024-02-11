import ImageSlider from "../components/ImageSlider";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="w-full h-screen bg-cover bg-center bg-fixed">
        <ImageSlider />
      </div>
    </>
  );
}
