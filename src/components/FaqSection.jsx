

import React from 'react'
import questions from "../assets/questions.svg";

const FaqSection = () => {
  return (
    <div>
      <section className="container mb-24 mt-12 mx-auto">
  <div>
    <section className="w-full mx-auto">
      <h1 className=" text-2xl text-center max-w-xl mx-auto">Frequently Asked Questions</h1>
      <div className="flex md:flex-row-reverse flex-col gap-10 pt-10 md:px-8 mx-auto">
        <div className="lg:w-3/5 flex flex-col pt-8">
          <div className="flex flex-col cursor-pointer">
            <div className="flex flex-row justify-between items-center border-b-2 pb-2 lg:pb-0">
              <h2 className="text-lg font-normal font-montserrat">
                <span className="text-3xl font-bold font-montserrat">1. </span>
                What does Svvv stand for?
              </h2>
              <button>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 320 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col cursor-pointer"><div className="flex flex-row justify-between items-center border-b-2 pb-2 lg:pb-0"><h2 className="text-lg font-normal font-montserrat"><span className="text-3xl font-bold font-montserrat">2. </span>Is this website affiliated with Svvv at the national level?</h2><button><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path></svg></button></div></div>
          <div className="flex flex-col cursor-pointer"><div className="flex flex-row justify-between items-center border-b-2 pb-2 lg:pb-0"><h2 className="text-lg font-normal font-montserrat"><span className="text-3xl font-bold font-montserrat">3. </span>How can I become a member of Svvv?</h2><button><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path></svg></button></div></div>
          <div className="flex flex-col cursor-pointer"><div className="flex flex-row justify-between items-center border-b-2 pb-2 lg:pb-0"><h2 className="text-lg font-normal font-montserrat"><span className="text-3xl font-bold font-montserrat">4. </span>What benefits do Svvvmembers receive?</h2><button><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path></svg></button></div></div>
          <div className="flex flex-col cursor-pointer"><div className="flex flex-row justify-between items-center border-b-2 pb-2 lg:pb-0"><h2 className="text-lg font-normal font-montserrat"><span className="text-3xl font-bold font-montserrat">5. </span>Can I contribute to the content on this website?</h2><button><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path></svg></button></div></div>
        </div>
        <div className="max-w-10 mx-auto">
          <img src={questions} alt="FAQ" className="w-full pt-8" />
        </div>
      </div>
    </section>
  </div>
</section>

    </div>
  )
}

export default FaqSection;






