import Button from "../components/Button";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Gallery() {
  return (
    <>
      <div className="flex justify-center mt-[10rem]">
        <div className="flex flex-col justify-start items-start">
          <div className="lg:w-[40%] w-[80%] absolute flex m-20  md:mt-[13rem] mt-[16rem] items-start flex-col  text-start md:text-7xl text-4xl font-bold">
            <p>
              Descover Our <span className="text-yellow-500">beautiful</span>{" "}
              Gallery
            </p>
            <Link to={"/gallery"}>
              <Button
                text={"View More"}
                style={
                  "px-8 py-2 border-[0.1px] border-white text-lg text-white hover:bg-white hover:text-black font-bold"
                }
              />
            </Link>
          </div>
          <Card
            size={"w-full md:w-[90rem] h-[35rem]"}
            imgstyle={"w-full h-[30rem] object-cover"}
            image={"images/hero3.webp"}
          />
        </div>
      </div>
    </>
  );
}
