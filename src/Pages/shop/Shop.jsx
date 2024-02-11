import { useState } from "react";
import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";
import ShopCard from "../../components/ShopCard";
import Button from "../../components/Button";
import shop from "../../data/shop.json";
import Footer from "../../components/Footer";
import Card from "../../components/Card";

export default function Shop() {
  const itemsPerPage = 9; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const [data, setdata] = useState(shop);

  const filterResult = (catitem) => {
    const result = shop.filter((curdata) => curdata.Catgory === catitem);
    setdata(result);
    setCurrentPage(1); // Reset to the first page when filtering
  };

  // Calculate the index of the first and last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
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
      <div className="flex  justify-center items-center">
        <div className="flex flex-col items-start p-4 md:p-8">
          <h1 className="text-black mb-4 text-2xl md:text-3xl lg:text-4xl">
            All Our Products
          </h1>
          <div className="flex flex-wrap gap-2 md:gap-5 justify-center md:justify-end mb-4">
            <Button
              text={"All"}
              style={
                "text-black md:px-8 px-3 md:py-2 py-1  border-[0.1px] border-gray-400 rounded-full  font-bold"
              }
              onClick={() => setdata(shop)}
            />
            <Button
              text={"Artifacts"}
              style={
                "text-black md:px-8 px-3 md:py-2 py-1  border-[0.1px] border-gray-400 rounded-full  font-bold"
              }
              onClick={() => filterResult("artifact")}
            />
            <Button
              text={"Paint"}
              style={
                "text-black md:px-8 px-3 md:py-2 py-1  border-[0.1px] border-gray-400 rounded-full  font-bold"
              }
              onClick={() => filterResult("paint")}
            />
            <Button
              text={"Jewelry"}
              style={
                "text-black md:px-8 px-3 md:py-2 py-1  border-[0.1px] border-gray-400 rounded-full  font-bold"
              }
              onClick={() => filterResult("jewllery")}
            />
          </div>
          <div className="lg:w-[20%] w-[50%] absolute flex m-20  md:mt-[13rem] mt-[16rem] items-center flex-col  text-center md:text-7xl text-4xl font-bold">
            <p>
              Get UpTo <span className="text-yellow-500">25% off</span> Your
              Order
            </p>
            <p className="text-xl text-white">By Only Ordering Online</p>
          </div>
          <Card
            size={"w-full md:w-[90rem] h-[25rem]"}
            imgstyle={"w-full h-[25rem] object-cover"}
            image={"images/hero.webp"}
          />
        </div>
      </div>

      <div>
        <div className="flex justify-center flex-wrap gap-4 pl-[10rem] pr-[10rem]">
          {currentItems.map((product, index) => (
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
        <div className="flex justify-center mt-4 p-20">
          {Array.from(
            { length: Math.ceil(data.length / itemsPerPage) },
            (_, index) => (
              <Button
                key={index}
                text={index + 1}
                style={`mx-2 ${
                  currentPage === index + 1
                    ? "bg-black text-white"
                    : "bg-gray-300"
                } px-2 py-1 `}
                onClick={() => paginate(index + 1)}
              />
            )
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
