import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { Link as ReactLink } from "react-router-dom";


export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const handleClick = () => setOpen(!open);

  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-gray-900 text-white">
      <ul className="text-center text-xl p-20">
        <Link to="home" spy={true} smooth={true} duration={500} onClick={() => setOpen(false)}>
          <li className="my-2 py-2 border-b border-slate-800 hover:bg-slate-400 hover:rounded-full">Home</li>
        </Link>
        <Link to="projects" spy={true} smooth={true} duration={500} onClick={() => setOpen(false)}>
          <li className="my-2 py-2 border-b border-slate-800 hover:bg-slate-400 hover:rounded-full">Project</li>
        </Link>
        <Link to="service" spy={true} smooth={true} duration={500} onClick={() => setOpen(false)}>
          <li className="my-2 py-2 border-b border-slate-800 hover:bg-slate-400 hover:rounded-full">Services</li>
        </Link>

        <Link to="about" spy={true} smooth={true} duration={500} onClick={() => setOpen(false)}>
          <li className="my-2 py-2 border-b border-slate-800 hover:bg-slate-400 hover:rounded-full">About</li>
        </Link>
        <Link to="education" spy={true} smooth={true} duration={500} onClick={() => setOpen(false)}>
          <li className="my-2 py-2 border-b border-slate-800 hover:bg-slate-400 hover:rounded-full">Education</li>
        </Link>
        <Link to="experience" spy={true} smooth={true} duration={500} onClick={() => setOpen(false)}>
          <li className="my-2 py-2 border-b border-slate-800 hover:bg-slate-400 hover:rounded-full">Experience</li>
        </Link>
        {/* <ReactLink to="Login" spy={true} smooth={true} duration={500}> */}
        {/*   <li className="my-2 py-2 border-b border-slate-800 hover:bg-slate-400 hover:rounded-full">Login</li> */}
        {/* </ReactLink> */}
      </ul>
    </div>
  );
  return (
    <div>
      <nav>
        <div
          className={`h-[10vh] flex ${color ? 'bg-gray-900 hover:border-b-2 hover:border-blue-900' : 'bg-transparent'} justify-between bg-site z-50 text-white lg:py-5 px-20 py-4 flex-1 fixed top-0 w-full`}
        >
          <div className="flex items-center flex-1">
            <span className="text-3xl font-bold uppercase">
              SM
            </span>
          </div>
          <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
            <div className="flex-10">
              <ul className="flex gap-6 text-[16px]">
                <Link to="/" spy={true} smooth={true} duration={500} onClick={() => setOpen(false)}>
                  <li className='transition hover:border-b-2 hover:border-green-500 cursor-pointer'>Home</li>
                </Link>
                <Link to="about" spy={true} smooth={true} duration={500} onClick={() => setOpen(false)}>
                  <li className='transition hover:border-b-2  hover:border-green-500 cursor-pointer'>About</li>
                </Link>

                <Link to="projects" spy={true} smooth={true} duration={500} onClick={() => setOpen(false)}>
                  <li className='transition hover:border-b-2 hover:border-green-500 cursor-pointer'>Projects</li>
                </Link>
                <Link to="service" spy={true} smooth={true} duration={500} onClick={() => setOpen(false)}>
                  <li className='transition hover:border-b-2 hover:border-green-500 cursor-pointer'>Services</li>
                </Link>
                
                <Link to="education" spy={true} smooth={true} duration={500} onClick={() => setOpen(false)}>
                  <li className='transition hover:border-b-2 hover:border-green-500 cursor-pointer'>Education</li>
                </Link>
                <Link to="experience" spy={true} smooth={true} duration={500} onClick={() => setOpen(false)}>
                  <li className='transition hover:border-b-2 hover:border-green-500 cursor-pointer'>Experience</li>
                </Link>

                {/* <ReactLink to="/login" spy={true} smooth={true} duration={500}> */}
                {/*   <li className='transition hover:border-b-2 hover:border-green-500 cursor-pointer'>Login</li> */}
                {/* </ReactLink> */}
              </ul>
            </div>
          </div>
          <div>
            {open && content}
          </div>
          <button className="block sm:hidden transition items-end text-white justify-between" onClick={handleClick}>

            {open ? <FaTimes /> : <CiMenuFries />}
          </button>
        </div>
      </nav>
    </div>
  );
};

