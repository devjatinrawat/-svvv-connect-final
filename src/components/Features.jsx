import React from 'react';
import feature_img from "../assets/feature-img.svg";
import feature_other_img from "../assets/feature_img_two.svg";

const Features = () => {
  return (
    <div className="container mb-24 mt-24 mx-auto">
      <section style={{ opacity: 1, transform: 'none' }}>
        <h1 className="text-center text-xl max-w-xl mx-auto">Why You Should Use Svvv connect </h1>
        <div className="flex flex-col justify-center items-center pt-16 sm:pt-10">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex md:flex-row bg-tertiary mx-auto rounded-2xl shadow-xl flex-col pb-5" style={{ transform: 'none' }}>
              <div className="flex flex-col justify-center px-8 pt-5 pb-4">
                <h3 className="text-xl pb-2 leading-tight font-bold font-roboto">Access to Past Questions and Answers</h3>
                <p className="text-xl font-roboto">Ace your exams with free access to a comprehensive database of past questions and answers, specifically tailored to FUTMINNA courses and exams.</p>
              </div>
              <div className="md:w-full flex justify-center md:justify-end m-auto p-3">
                <img src={feature_img} alt=""/>
              </div>
            </div>
            <div className="flex flex-row bg-tertiary rounded-2xl max-w-[25rem] mx-auto shadow-xl">
              <div className="flex flex-col justify-center px-8 pt-10 pb-10" style={{ transform: 'none' }}>
                <h3 className="text-xl leading-tight pb-2 font-bold font-roboto">Interactive Discussions</h3>
                <p className="text-xl font-roboto mx-auto">Engage in thought-provoking discussions, share your opinions on various topics, and ask questions – all within a vibrant and welcoming community of like-minded students.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 pt-8">
            <div className="flex flex-row bg-tertiary rounded-2xl mx-auto max-w-[25rem] shadow-xl" style={{ transform: 'none' }}>
              <div className="flex flex-col justify-center px-10 pt-10 pb-5">
                <h3 className="leading-tight text-xl pb-2 font-bold font-roboto">Resources</h3>
                <p className="text-xl font-roboto">Easily have a common place to all the Resources</p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col bg-zinc-900 mx-auto rounded-2xl shadow-xl" style={{ transform: 'none' }}>
              <div className="flex flex-col justify-center px-10 pt-20 pb-10">
                <h3 className="text-xl leading-tight pb-2 text-white font-bold font-roboto">Stay Informed</h3>
                <p className="text-xl text-white font-roboto">Keep up to date with all the latest campus events, blog news, and important updates. Never miss a beat when it comes to what's happening at SVVV.</p>
              </div>
              <img src={feature_other_img} alt="" className="w-fit self-center" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
