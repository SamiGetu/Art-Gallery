import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialYoutube,
} from "react-icons/ti";
import { Link } from "react-router-dom";
import footer from "../data/footer.json";
export default function Footer() {
  return (
    <>
      <footer className="bg-white pt-20">
        <div className=" p-4 py-6 lg:py-8">
          <div className=" space-y-[3rem]">
            <div className="flex text-2xl text-neutral-900 hover:text-black gap-5 mt-4 justify-center items-center sm:mt-0 space-x-3">
              <div className="border border-neutral-800 hover:border-yellow-300  rounded-full">
                <TiSocialFacebook size={"40px"} />
              </div>
              <div className="border border-neutral-800 hover:border-yellow-300  rounded-full">
                <TiSocialTwitter size={"40px"} />
              </div>
              <div className="border border-neutral-800 hover:border-yellow-300  rounded-full">
                <TiSocialLinkedin size={"40px"} />
              </div>
              <div className="border border-neutral-800 hover:border-yellow-300  rounded-full">
                <TiSocialYoutube size={"40px"} />
              </div>
            </div>
            <div>
              <ul className="flex items-center justify-center space-x-5">
                {footer.map((link) => (
                  <>
                    <li className="cursor-pointer  relative navLink hover:text-black">
                      <Link
                        className="relative tracking-[2px] text-neutral-900 font-semibold text-md  hover:text-black navLink"
                        to={link.Path}
                      >
                        {link.Name}
                      </Link>
                    </li>
                  </>
                ))}
              </ul>
            </div>
            <hr className=" border-neutral-400 w-[80%] absolute left-[10%]" />
          </div>
        </div>
        <h1 className="text-black text-md font-medium flex justify-center p-[3.5rem]">
          Copyright © 2023 Website By Ennovix
        </h1>
      </footer>
    </>
  );
}
