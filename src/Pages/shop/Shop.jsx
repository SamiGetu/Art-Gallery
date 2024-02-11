/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";
import ShopCard from "../../components/ShopCard";
import Button from "../../components/Button";
import shop from "../../data/shop.json";
import Footer from "../../components/Footer";
import { useState } from "react";

export default function Shop() {
  const [data, setdata] = useState(shop);

  const filterResult = (catitem) => {
    const result = shop.filter((curdata) => curdata.Catgory === catitem);
    setdata(result);
  };

  return (
    <>
      <NavBar />
      <Hero
        BG={
          "h-[30vh] w-full bg-[url('images/hero3.webp')] bg-no-repeat bg-cover bg-center"
        }
        Header={"shop"}
      />

      <div className="flex flex-wrap justify-center gap-20 mt-20">
        <Button
          text={"All"}
          style={
            "text-neutral-700 text-md border-[0.1px] border-neutral-800/20 px-7 py-2 rounded-full font-medium hover:bg-black hover:text-white"
          }
          onClick={() => setdata(shop)}
        />
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
          text={"Jewllery"}
          style={
            "text-neutral-700 text-md border-[0.1px] border-neutral-800/20 px-7 py-2 rounded-full font-medium hover:bg-black hover:text-white"
          }
          onClick={() => filterResult("jewllery")}
        />
      </div>

      <div>
        <div className="flex justify-center flex-wrap gap-4 pl-[10rem] pr-[10rem]">
          {data.map((product, index) => (
            <ShopCard
              key={index}
              image={product.img}
              effect="absolute w-full h-full bg-white/80 flex items-center justify-center -bottom-[40rem] group-hover:bottom-[-10rem]  opacity-0  group-hover:opacity-100 transition-all duration-700 m-10"
              price={product.price}
              desc={product.title}
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
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
