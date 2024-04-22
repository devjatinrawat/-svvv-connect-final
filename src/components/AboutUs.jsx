import React from 'react';
import aboutUs from "../assets/aboutsvg.svg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div>
        <section className="mt-24 container mb-12 mx-auto">
          <div>
            <section id="about-us" className="flex lg:flex-row flex-col justify-center gap-8 max-container" style={{ opacity: '1', transform: 'none' }}>
              <div className="relative flex items-center w-full gap-8">
                <img src={aboutUs} alt="About Us" width="70" height="70" />
                <h1 className="font-bold text-xl">About Us</h1>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-xl font-roboto">SVVV connect is your one-stop destination for academic resources, knowledge sharing, and staying updated with all the exciting events and news happening on our campus. We've created this platform to empower our students, providing an easy and accessible way to enhance your educational journey.</p>
                  <Link to="/aboutus">
                  Click Here
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="#17A1FA" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(23, 161, 250)' }}>
                      <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
                    </svg>
                  </Link>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
