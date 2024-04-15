import React from "react";
import logo from "../../assets/full1.png"
import BackgroundLightLines from "../../components/BackgroundLightLines";


const WhoWeAre = () => {
  return (
    <>
    <BackgroundLightLines />
    <div>
      <section className="pt-10 h-screen overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div className="p-14">
              <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                Hey 👋 I am
                <br className="block sm:hidden" />
                 Jatin Rawat
              </h2>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
              Driven by a love for innovation and empowered by code, I craft digital realms where ideas come alive
              <br />
              Hey there! I'm passionate about creating web apps that not only bring joy but also address real-world challenges. From designing elegant interfaces to delving into the functional aspects of coding , I find great fulfillment in transforming ideas into reality in the digital realm. Together, let's collaborate on a project that truly resonates with people and makes a positive impact. 
              let`s make a difference
              </p>


              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                  <span className="relative"> Have a question? </span>
                </span>
                <br className="block sm:hidden" />
                Ask me on{" "}
                <a
                  href="#"
                  title=""
                  className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
                >
                  Twitter
                </a>
              </p>
            </div>

            <div className="relative">

              <img
                className="relative p-14 w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src={logo}
                alt="intro img"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default WhoWeAre;
