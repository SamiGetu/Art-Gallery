import about from "../data/about.json";

const About = () => {
  return (
    <div>
      <div id="about" className="min-h-screen">
        <h1 className="lg:text-5xl text-2xl text-black  p-[5rem] font-bold">
          {about[0].section}
          <span className="text-7xl p-2 text-yellow-300">.</span>
        </h1>

        <div className="flex items-center justify-center">
          <div className="max-w-6xl mx-auto p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-40">
              <div className="order-2 ">
                <img
                  className="w-full h-full object-cover rounded-lg shadow-md transform hover:scale-105 transition-transform duration-500 grayscale-[100%] hover:grayscale-0"
                  src={about[3].img}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="order-1 flex flex-col justify-center">
                <h1 className="text-4xl font-bold text-black">
                  {about[1].title}
                  <hr className="my-4" />
                  <p className="md:text-lg text-sm text-black font-medium">
                    {about[2].desc}
                  </p>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
