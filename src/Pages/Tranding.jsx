import ShopCard from "../components/ShopCard";
import tranding from "../data/tranding.json";
import Button from "../components/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Tranding() {
  // eslint-disable-next-line no-unused-vars
  const [data, setdata] = useState(tranding);

  const filterResult = (catitem) => {
    const result = tranding.filter((curdata) => curdata.catagori === catitem);
    setdata(result);
  };

  return (
    <>
      <div className="pt-[10rem] bg-white">
        <h1 className="text-center text-black md:text-5xl text-2xl p-5 font-medium font-serif">
          {tranding[9].Title}
        </h1>
        <div className="flex justify-center items-center space-x-5 pt-10">
          {" "}
          <Button
            text={"Artifacts"}
            style={
              "text-neutral-700 text-md border-[0.1px] border-neutral-800/20 px-7 py-2 rounded-full font-medium hover:bg-black hover:text-white"
            }
            onClick={() => filterResult("artifact")}
          />
          <Button
            text={"Paint"}
            style={
              "text-neutral-700 text-md border-[0.1px] border-neutral-800/20 px-7 py-2 rounded-full font-medium hover:bg-black hover:text-white"
            }
            onClick={() => filterResult("paint")}
          />
          <Button
            text={"jewllery"}
            style={
              "text-neutral-700 text-md border-[0.1px] border-neutral-800/20 px-7 py-2 rounded-full font-medium hover:bg-black hover:text-white"
            }
            onClick={() => filterResult("jewllery")}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-5 ">
          {data.slice(0, 3).map((product) => (
            <>
              <ShopCard
                image={product.img}
                effect="absolute w-full h-full bg-white/80 flex items-center justify-center -bottom-[40rem] group-hover:bottom-[-10rem]  opacity-0  group-hover:opacity-100 transition-all duration-700 m-10"
                size="bg-gray-200  md:w-[25rem] w-[18rem] md:h-[30rem] h-[25rem] relative overflow-hidden flex justify-center items-center"
                imgSize="md:w-[18rem] w-[15rem] md:h-[25rem] h-[20rem]  object-cover grayscale-0"
                button={
                  <Link to={"/shop"}>
                    <Button
                      text="View"
                      style="text-white px-10 py-3 bg-black font-bold mb-[15rem]"
                    />
                  </Link>
                }
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
