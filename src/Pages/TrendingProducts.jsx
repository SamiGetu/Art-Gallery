//import { useState } from "react";
import Trendingproducts from "../data/Trendingproducts.json";
import Button from "../components/Button";
import ShopCard from "./../components/ShopCard";
const TrendingProducts = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="container mx-auto my-10">
          <div className="flex justify-center">
            <h2 className="text-7xl font-bold mb-6 font-serif text-black">
              Trending Products
            </h2>
          </div>
          <Button
            text={"View More"}
            style={
              "text-black text-md font-bold px-7 py-2 border-[0.1px] border-gray-300 mb-10 "
            }
          />
          <div className="flex justify-center items-center gap-5">
            {Trendingproducts.map((product) => (
              <>
                <ShopCard
                  image={product.img}
                  effect="absolute w-full h-full bg-white/80 flex items-center justify-center -bottom-[40rem] group-hover:bottom-[-10rem]  opacity-0  group-hover:opacity-100 transition-all duration-700 m-10"
                  name={product.type}
                  size="bg-gray-200  md:w-[25rem] w-[20rem] md:h-[30rem] h-[25rem] relative overflow-hidden flex justify-center items-center"
                  imgSize="md:w-[18rem] w-[14rem] md:h-[22rem] h-[18rem]  object-cover"
                  button={
                    <Button
                      text="Contact"
                      style="text-white px-10 py-3 bg-black font-bold mb-[15rem]"
                    />
                  }
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingProducts;
