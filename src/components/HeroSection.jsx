import React from "react";
import heroImg from "../assets/hero_img.svg";
import { AiOutlineSearch } from "react-icons/ai";

const HeroSection = () => {
  return (
    <>
      <section className="w-full mt-48 container-fluid">
        <div className="md:max-w-[1100px] m-auto grid gap-4 md:grid-cols-2 max-w-[800px]">
          <div className="flex flex-col justify-start gap-4">
            <h1 className="py-2 text-4xl text-[#007aff] font-bold">
              SVVV Connect Welcomes you{" "}
            </h1>
            <h2 className="md:leading-[42px] py-2 md:text-xl text-lg font-semibold">
              Are you a proud member of the Shri Vaishnav Vidyapeeth
              Vishwavidyalaya{" "}
              <span className="text-[#007aff] capitalize"> (SVVV) </span>{" "}
              Located at Indore{" "}
              <span className="text-[#007aff] capitalize">
                {" "}
                (IT Hub){" "}
              </span>
              <br />
              Welcome to your digital home 🚀
            </h2>
            <p className="py-2 text-lg text-gray-900">
              Various versions have evolved over the years
            </p>
            <form className="input-box-shadow flex justify-content-between items-center bg-transparent gap-2">
              <input
                type="text"
                className="my-2 w-full px-5 py-3 border border-solid border-neutral-300 bg-transparent bg-clip-padding text-base font-normal text-neutral-700 outline-none placeholder:text-neutral-500"
                placeholder="search for courses here"
              />
              <button>
                <AiOutlineSearch
                  size={30}
                  className="icon"
                  style={{ color: "#000" }}
                />
              </button>
            </form>
          </div>
          <div className="container flex justify-center items-center">
            <img
              src={heroImg}
              alt="hero"
              className="animate-pulse"
              style={{ width: "80%" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
