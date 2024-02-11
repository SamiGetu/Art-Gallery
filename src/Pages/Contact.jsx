// import { IoLocationSharp } from "react-icons/io5";
// import { MdEmail } from "react-icons/md";
// import { IoMdCall } from "react-icons/io";

import Button from "../components/Button";
import contact from "../data/contact.json";

function Contact() {
  return (
    <>
      <div className=" h-screen  bg-white" id="contact">
        <h1 className="lg:text-5xl text-2xl  text-neutral-800  p-[5rem] font-bold">
          {contact[0].section}
          <span className="text-7xl p-2 text-yellow-300">.</span>
        </h1>
        <div className="flex justify-center mt-10">
          <div className="w-[70vw] h-[80vh] ">
            <div className="text-center space-y-5 mb-[5rem]">
              <h1 className="text-black text-5xl font-bold">
                {contact[0].section}
              </h1>
              <h2 className="text-black text-2xl font-medium">
                {contact[1].subTitle}
              </h2>
            </div>
            <div className="flex flex-col justify-center items-center space-y-5 ">
              <div className="flex flex-wrap justify-center items-center text-black  gap-5">
                <input
                  className="px-[5rem] py-3 border-2 shadow-lg rounded-lg"
                  placeholder="Name"
                  type="text"
                />
                <input
                  className="px-[5rem] py-3 border-2 shadow-lg rounded-lg"
                  placeholder="Email Address"
                  type="email"
                />
                <input
                  className="px-[5rem] py-3 border-2 shadow-lg rounded-lg"
                  placeholder="Phone number"
                  type="number"
                />
                <input
                  className=" lg:w-[67rem] w-full h-[30vh] text-center border-2 shadow-lg rounded-lg"
                  placeholder="Message"
                  type="text"
                />
              </div>
              <div>
                <Button
                  text={"Contact"}
                  style={
                    "lg:px-[30rem] px-[8rem] py-2 bg-black border-[0.1px] text-white hover:bg-white hover:text-black duration-500 "
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
