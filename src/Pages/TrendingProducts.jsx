//import { useState } from "react";
import Trendingproducts from "../data/Trendingproducts.json";
import Button from "../components/Button";
const TrendingProducts = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="container mx-auto my-10">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold mb-6 font-serif text-black">
              Trending Products
            </h2>
            <Button
              text={"View More"}
              style={
                "text-black text-md font-bold px-7 py-2 border-[0.1px] border-gray-300 "
              }
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Trendingproducts.map((product) => (
              <>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-[30rem] object-cover mb-4 rounded-lg"
                  />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingProducts;
