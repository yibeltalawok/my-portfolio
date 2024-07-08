import React from "react";
import { FaTelegram } from "react-icons/fa";
const Footers = () => {
  return (
    <>
    <footer className="text-center lg:text-left text-gray-300">
      <div className=" py-10 text-center md:text-left grid  w-11/12 xl:w-10/12 mx-auto mb-4">
        <div className="grid grid-1 md:grid-cols-1 lg:grid-cols-3 gap-0 md:justify-between">
          <div className="mb-2 text-center justify-center">
          <div className='md:flex ml-2 mb-2'>
            <h3 className=" text-orange-500 hover:text-primary uppercase text-xl mb-5 flex items-center justify-center md:justify-start decoration-4 decoration-pink-800 underline underline-offset-8">
                Find me
             </h3>
            </div>
            <div className='md:flex mb-2'>
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="phone"
                className="w-4 mr-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                ></path>
                </svg>
              <p className="text-gray-200 text-lg mb-1 ml-3 motion-safe:hover:translate-x-2 duration-300 font-display">
               0964727916/0938233940
             </p>
             </div>
              <div className='flex mb-2'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="white"
              >
                <path
                  fill="white"
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                />
              </svg>
             <divLink className="text-gray-200 text-lg mb-2 ml-3 motion-safe:hover:translate-x-2 duration-300 font-display">
               yibeltalawoke058@gmail.com
             </divLink>
             </div>
             <div className='md:flex mb-2'>
             <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="white"
            >
              {/* Paste the SVG code for the GitHub icon here */}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.334-3.369-1.334-.455-1.156-1.11-1.462-1.11-1.462-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.25-4.555-1.107-4.555-4.927 0-1.088.387-1.979 1.024-2.675-.103-.252-.444-1.266.098-2.638 0 0 .837-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.911-1.29 2.747-1.022 2.747-1.022.542 1.372.201 2.386.1 2.638.64.696 1.024 1.587 1.024 2.675 0 3.83-2.339 4.674-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.523 2 12 2z"
              />
            </svg>
             <divLink className='mb-2 ml-3 text-sky-600 text-lg motion-safe:hover:translate-x-2 duration-300 font-display'  
             to ="https://github.com/yibeltalawok"> 
             https://github.com
             </divLink>
             </div>
             <div className='md:flex mb-2'>
             <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="white"
      >
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3c0-3.66-4.83-4.05-4.83 0V18.5H6.5v-9h4.66v2.1c1.33-2.13 6.84-2.31 6.84 3.9v6.4h-4.55z" />
      </svg>
             <divLink className='mb-1 ml-3 text-sky-600 text-lg motion-safe:hover:translate-x-2 duration-300 font-display'  
             to ="https://www.linkedin.com/in/yibeltal-awoke-433037275/"> 
             https://www.linkedin.com
             </divLink>
             </div>
              </div>
            <div className="">
             <h3 className="text-orange-500 hover:text-primary text-xl mb-5 flex items-center justify-center md:justify-start decoration-4 decoration-pink-800 underline underline-offset-8">     
               QUICK LINK
             </h3>
            <p className="mb-4 motion-safe:hover:translate-x-2 text-lg  duration-300 font-display text-white">
              <a href="#">Home</a>
            </p>
            <p className="mb-4 motion-safe:hover:translate-x-2 text-lg  duration-300 font-display text-white">
              <a href="#">About</a>
            </p>
            <p className="mb-4 motion-safe:hover:translate-x-2 text-lg duration-300 font-display text-white">
              <a href="#">Skill</a>
            </p>
            <p className="mb-4 motion-safe:hover:translate-x-2 text-lg duration-300 font-display text-white">
              <a href="#">Projects</a>
            </p>
          </div>
          <div className="">
            <h3 className="text-orange-500 hover:text-primary uppercase text-xl mb-5 flex items-center justify-center md:justify-start up decoration-4 decoration-pink-800 underline underline-offset-8">
              Contact
            </h3>
            <p className="font-display text-white text-lg flex items-center justify-center md:justify-start mb-4 motion-safe:hover:translate-x-2 duration-300">
              Documentation
            </p>
            <p className="font-display text-white text-lg flex items-center justify-center md:justify-start mb-4 motion-safe:hover:translate-x-2 duration-300">
            Authentication
            </p>
            <p className="font-display text-white text-lg flex items-center justify-center md:justify-start mb-4 motion-safe:hover:translate-x-2 duration-300">
            API Reference
            </p>
            <p className="font-display text-white text-lg flex items-center justify-center md:justify-start mb-4 motion-safe:hover:translate-x-2 duration-300">
            Support
            </p>
            <p className="font-display text-white text-lg flex items-center justify-center md:justify-start mb-4 motion-safe:hover:translate-x-2 duration-300">
            Open Source
            </p>
          </div>
        </div>
      </div>
      <div class="text-center p-6 ">
        <span className="text-white">&copy; 2024 My Portfolio. All rights reserved.</span>
      </div>
    </footer>
   </>
  )
};

export default Footers;