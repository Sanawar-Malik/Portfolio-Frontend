import { useState } from "react";
import { GOOGLE_DRIVE } from '../config';

export const About = () => { 

  return (
    <div id="about" className="min-h-screen flex items-center justify-center">
      <div id="container" className="py-10 w-full max-w-6xl">
        <h1 className="text-5xl text-center uppercase underline underline-offset-8 decoration-blue-500 font-bold bg-gradient-to-br from-cyan-300 via-blue-500 to-blue-600 bg-clip-text text-transparent mb-8">About Me</h1>

        <div className="flex flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative">
          <div className="mr-10">
            <img className="rounded-lg min-w-[100px] w-full h-auto md:w-auto md:h-auto" src='./malik.jpg' alt="image of myself" />
          </div>
          <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
            <h1 className="text-white font-bold text-3xl mt-6 mb-8">
              Hey it's me, Muhammad Sanawar
            </h1>

            <p className="text-gray-400 w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
              I'm Sanawar, I'm a full-stack web developer with a focus on creating dynamic and user-friendly applications. On the front end, I use React with Redux for managing state, along with HTML, CSS, and Tailwind CSS for styling. I also work with TypeScript for better code organization.

              For the backend, I use Flask and Django to build robust APIs, and PostgreSQL for handling data storage. I manage my projects with Git for version control and use Docker for containerization, which simplifies deployment.

              I'm dedicated to writing clean and efficient code, and I enjoy staying updated with the latest technologies to improve my skills and deliver high-quality solutions.
            </p>
            <div id="social" className="justify-start items-center">
              <a rel="noopener" target="_blank" href={GOOGLE_DRIVE} className="bg-white rounded-lg p-5 w-56 items-center text-green-500 font-bold glow">
                My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

