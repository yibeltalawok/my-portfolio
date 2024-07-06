import React,{useState,useEffect} from 'react';
import { useWindowSize } from 'react-use';
import {data} from "./data"
import {NavLink} from 'react-router-dom' ;
import Img1 from '../img/y29.JPG';
import Img3 from '../img/y7.JPG';
import Img4 from '../img/mydocu.png'
import Img6 from '../img/reward.png'
import fileup1 from '../img/file.png';
import fileup2 from '../img/filupload1.png';
import fileup3 from '../img/audio.png'
import fileup4 from '../img/post.png'
import promoImg from '../img/promotion.png'
import promoImg1 from '../img/promotion1.png';
import promoImg2 from '../img/promtion2.png'
import empDB from '../img/empDB.png'
import bundleImg from '../img/bundleImg.png';
import orderImg from '../img/orderImg.png'
import attendance from '../img/attendance.png'
import issue from '../img/issue.png'
import busReservation from '../img/busReservation.png';
import dashboard from '../img/dshboard.png';
import invoce from '../img/invoce.png'
import tiketing from '../img/ticket.png'
import me from '../img/me.jpg'
import SimpleImageSlider from "react-simple-image-slider";
import { RiMenuLine } from "react-icons/ri";
let image=""
const About = () => {
      const [isZoomed, setIsZoomed] = useState(false);
      const [show, setShow] = useState(false);
      const handleImageClick = (imageName) => {
        setIsZoomed(true);
        image=imageName
      };
      useEffect(() => {
        const interval = setInterval(() => {
          setShow((prevShow) => !prevShow);
        }, 3000); 
        return () => clearInterval(interval);
      }, []);
    
      const handleZoomOut = () => {
        setIsZoomed(false);
         image=""
            };
  //menu bar
 const [menu, setMenu] = useState(false);
 const setmenu = () =>{
   if(menu == false){
    // console.log("setMenu : ", menu)
    setMenu(true);
   }else{
     setMenu(false);
    }
  }
  return (
    <div className="bg-gray-800 pt-0 text-gray-100">
    <>
     <div className='w-full h-10 text-center bg-cyan-800 mt-1 text-white p-2 overflow-hidden'>
      <p className='animate-marquee-loop'>A portfolio is a collection of work samples, projects, and accomplishments that showcase their skills, experience, and capabilities as a software engineer or developer.</p>
     </div>
    <div className=' md:sticky fixed top-0 overflow-y-visible list-none z-50 font-serif uppercase font-medium xl:text-xl 
    md:text-xl xs:text-xs text-justify-center  justify-between items-center pl-6 p-5 w-full h-28 shadow-2xl  block sm:flex bg-gray-700 mt-0'>
    <ul>
    <li className='inline ml-5'>
    <div className='text-2xl absolute right-8 top-3 cursor-pointer md:hidden visible'>
      <RiMenuLine size={24} onClick={setmenu}/>
    </div>
     <NavLink className='md:ml-8 ml-0 w-96 md:p-5 p-0 flex'  
     to ="/"> 
     <button className="p-1 rounded-full bg-slate-700 cursor-pointer">
     <img src={me} alt="Logo" width="80" className="rounded-full -mt-7" />
     </button>
    <h1 className="md:text-2xl text-lg font-bold">My Portfolio</h1>
    </NavLink>
    </li>
    </ul>
    <ul className='inline'>
    <ul className='ml-96 flex'>
    </ul>
    <ul className=' ml-96 gap-x-10 md:flex text-xl md:visible hidden '>
    <li><a href="#home" className="hover:text-gray-400">Home</a></li>
    <li><a href="#about" className="hover:text-gray-400">About</a></li>
    <li><a href="#skill" className="hover:text-gray-400">Skill</a></li>
    <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
    <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
    </ul>
    </ul>
    <ul className={`${menu ?"left-0 opacity-100":"left-[-750px] md:opacity-0"}
                    sm:flex lg:hidden flex-1  list-none flex flex-col
                    p-6 bg-black-gradient fixed w-full right-0  ml-0 my-2 top-16 mt-12
                    sidebar bg-gray-800 transition-all duration-500 ease-in z-50 shadow-2xl
                    `}>
      <li className='mx-6 py-3 font-serif uppercase font-medium text-xl '>
          <button
          className='transition duration-700 transform hover:-translate-y-1 hover:text-[rgb(0,153,255)] hover:scale-110 flex' 
            ><a href="#home" className="hover:text-gray-400">Home</a> </button></li>
    <li className='mx-6 py-3 font-serif uppercase font-medium text-xl '>
          <button
          className='transition duration-700 transform hover:-translate-y-1 hover:text-[hsl(204,100%,50%)] hover:scale-110 flex' 
            ><a href="#about" className="hover:text-gray-400">About</a> </button></li>
    <li className='mx-6 py-3 font-serif uppercase font-medium text-xl '>
          <button
          className='transition duration-700 transform hover:-translate-y-1 hover:text-[rgb(0,153,255)] hover:scale-110 flex' 
            ><a href="#skill" className="hover:text-gray-400">Skill</a> </button></li>
    <li className='mx-6 py-2 font-serif uppercase font-medium text-xl '>
          <button 
          className='transition duration-700 transform hover:-translate-y-1 hover:text-[#0099ff] hover:scale-110  flex'>
          <a href="#projects" className="hover:text-gray-400">Projects</a></button></li>
          <li className='mx-6 py-2 font-serif uppercase font-medium text-xl '>
        <button className='transition duration-700 transform hover:-translate-y-1 hover:text-[#0099ff] hover:scale-110  flex'>   
      <a href="#contact" className="hover:text-gray-400">Contact</a> </button></li>
    </ul>
    </div>
    </>
    <section id='home' className=' text-center md:pl-10' >
    <div className="relative flex border-b-2 border-slate-600 w-11/12 text-center shadow-sm text-slate-300 p-3 ">    
      <div className=' flex p-3 w-2/3'>
      <div className=' text-center'>
      <h1 className="text-xl font-bold  text-slate-100 m-3 uppercase text-center">Hello! Well Come to my portfolio</h1>
      <h1 className="text-2xl font-bold uppercase underline m-3 text-orange-400 text-center">I'm Yibeltal Awoke</h1>
      <div className=' mt-2 md:flex '>
      <div className='md:flex sm:hidden'>
       <div className=' transform transition-all duration-500 '>
        <h1 className="text-xl font-bold w-full text-left md:ml-20 capitalize float-left">I'm</h1>
       </div>
       <div className={`absolute md:left-12 -left-9 transform transition-all duration-700 ${
          show
            ? 'opacity-100 translate-x-24'
            : 'opacity-0 translate-x-20'
          }`}
        >
       <p className="text-xl font-bold mb-3 w-full capitalize text-center">a back end developer</p>
       </div>
       <div
        className={`absolute md:left-12 -left-9 transform transition-all duration-700 ${
          !show
            ? 'opacity-100 translate-x-24'
            : 'opacity-0 translate-x-20'
        }`}
       >
       <p className="text-xl font-bold w-full mb-3 capitalize text-center"> a front end developer</p>
      </div>
     </div>
      <p className="text-xl mb-2 font-bold w-full capitalize">(a full stack developer)</p>
      </div>
      <p>
        I have good experience in creating responsive,productive,relable and highly functional web apps using javaScript frameworks such as React JS and Next JS, along with Tailwind CSS and Material UI. 
        I have also enough experience in working with Node.js(express js and loopback) to develop robust server-side application with databases MySQL, and MongoDB, which create effective and scalable data storage systems.
        I am positive thinker and hardworker.Always I reading blogs and exploring new frameworks that enhance my skills and update myself with the latest technologies.
      </p>
    </div>
       </div>
        <div
          className='w-1/3 m-7'>
         <img className="rounded-md w-full ml-3  transition-all duration-300 ease-in-out shadow-2xl" 
           src={Img1} alt='No'  />
     </div>
   </div>
    </section>
       <section id='about' >
         <div className="  md:pl-10 pt-3 bg pl-1 ">
            <h2 className="text-3xl font-bold mt-5   text-center md:ml-16 ml-1 p-5 text-gray-300 w-11/12 rounded-md">About Me</h2>
         <div className='md:flex w-full text-center md:pl-5 pl-0 md:p-7 p-1'>
             {(data?.length)>0
             ?(
           data?.map((profile,index) =>{
           return(
            <div className=' grid xl:grid-cols-3 rounded-md md:grid-cols-3 grid-cols-1 md:pl-5'>
             <div className='mb-2 shadow-slate-900 m-5 rounded-xl shadow-[0_0_15px_0_rgba(0,0,0,0.1)]' style={{height:"380px"}}>
             <div className='p-5 hover:mt-2 mt-5 duration-500 rounded-xl text-left'>
              <p className="text-xl m-3 mb-5 -mt-2 font-bold w-full capitalize text-red-700 ">my Name & Address</p>
              <p className="text-gray-200 mb-2 ml-2">
                {profile.name}
                </p>
                <p className="text-gray-200 mb-2 ml-2">
                {profile.birthDate}
                </p>
                <p className="text-gray-200 mb-2 ml-2">
                {profile.birthPlace}
                </p>
                <p className="text-gray-200 mb-2 ml-2">
                {profile.region}</p>
                <p className="text-gray-200 mb-2 ml-2">
                {profile.nationality}
                </p>
              </div>
             </div>
             <div className='mb-2 shadow-slate-900 m-5 rounded-xl shadow-[0_0_15px_0_rgba(0,0,0,0.1)]' style={{height:"380px"}}>
             <div className='p-5 hover:mt-2 mt-5 duration-500 rounded-xl text-left'>
              <p className="text-xl m-3 mb-5 -mt-2 font-bold w-full capitalize text-red-700 ">place&year of education</p>
                <p className="text-gray-200 mb-2 ml-2">
                {profile.secondarySchool}
                </p>
                <p className="text-gray-200 mb-2 ml-2">
                {profile.preparatorySchool}
                </p>
                <p className="text-gray-200 mb-2 ml-2">
                {profile.schoolYear}</p>
                <p className="text-gray-200 mb-2 ml-2">
                {profile.university}
                </p>
                <p className="text-gray-200 mb-2 ml-2">
                {profile.universityYear}
                </p>
                <p className="text-gray-200 mb-2 ml-2">
                {profile.department}
                </p>
                <p className="text-gray-200 mb-2 ml-2">
                {profile.coc}
                </p>
              </div>
             </div>
             <div className='mb-2 shadow-slate-900 m-5 rounded-xl shadow-[0_0_15px_0_rgba(0,0,0,0.1)]' style={{height:"380px"}}>
             <div className='p-5 hover:mt-2 mt-5 duration-500 rounded-xl text-left'>
              <p className="text-xl m-3 mb-5 md:mt-0 mt-7 font-bold w-full capitalize text-red-700 ">Contacts</p>
              <p className="text-gray-200 mb-3 ml-2">
               {profile.Email}
              </p>
              <p className="text-gray-200 mb-3 ml-2">
               {profile.phone}
              </p>
              </div>
             </div>
              {/* <div className="mb-2 shadow-2xl bg-slate-950 m-5 rounded-xl p-8 hover:scale-125 transition-transform duration-500 ease-in-out">
              <p className="text-gray-200 mb-3 ml-2">
               {profile.Email}
              </p>
              <p className="text-gray-200 mb-3 ml-2">
               {profile.birthDate}
              </p>
              </div> */}
             </div>
            )})):("")}
          </div>
           <div className='grid xl:grid-cols-2 rounded-md md:grid-cols-2 grid-cols-1 text-left md:pl-10 md:pr-20'>
             <div className='mb-2 shadow-slate-900 m-5 rounded-xl shadow-[0_0_15px_0_rgba(0,0,0,0.1)]' style={{height:"360px"}}>
             <div className='p-5 hover:mt-2 mt-5 duration-500 rounded-xl text-left'>
              <p className="text-xl m-3 mb-5 -mt-2 font-bold w-full capitalize text-red-700 ">PERSONALITIES</p>
               <p className="text-gray-200 mb-2 ml-2">
                 <p className='ml-3'>I am excellent to listen and try to understand other people’s point of view</p>
                 <p className='ml-3'>I am healthy and capable of doing any type of work, disciplined and patientbehavior.</p>
                 <p className='ml-3'>Excellent relation with everyone and also free from any addiction.</p>
                 <p className='ml-3'> I am positive thinker</p>
                </p>
              </div>
             </div>
             <div className='mb-2 shadow-slate-900 m-5 rounded-xl shadow-[0_0_15px_0_rgba(0,0,0,0.1)]' style={{height:"360px"}}>
             <div className='p-5 hover:mt-2 mt-5 duration-500 rounded-xl text-left'>
              <p className="text-xl m-3 mb-5 -mt-2 font-bold w-full capitalize text-red-700 ">HOBBIES</p>
              <p className='ml-3'>I Reading any written books, Magazines, Newspaper, Watching TV and Helping people</p>
              <p className='ml-3'>I Carryout the responsibility on which I assigned in a well manner</p>
              <p className='ml-3'>I Searching for the problem and its solution in activities and sharing experience.</p>
              <p className='ml-3'>I Coordination and collaboration in national growth.</p>
              <p className='ml-3'>I Develop my programming skill and create different software that solve social problem</p>
              </div>
             </div>
            </div>

           </div>
          </section>
          <section id='skill'  className="">
          <div className="  md:pl-10 pt-3 bg pl-1 ">
           <h2 className="text-3xl font-bold md:mt-14 mt-44 text-center md:ml-16 ml-1 p-5 text-gray-300 w-11/12 rounded-md">Skills and Experience</h2>
           <div className='md:flex md:w-11/12 w-full text-center border-b-2 border-slate-400 -mt-8 md:ml-10 md:p-8 p-1 pt-5 '>
            <div className="container mx-auto md:w-3/4 w-full md:p-3 p-0 m-2">
             <div className='w-full text-left md:p-3 p-1 pt-6'>
              <div className="bg-gray-700 text-slate-300 md:p-7 rounded-lg shadow-lg overflow-hidden">
               <table className="w-full table-auto md:p-3 p-1">
                <thead>
                 <th colSpan={2} className='bg-slate-700 w-full text-gray-300  font-bold  text-x rounded-sm h-10 text-center'>
                 <h2 className="text-3xl font-bold mb-4">Skill</h2></th>
                </thead>
                <tbody>
                <tr><th>Language</th>
                <td>English, Amharic</td></tr>
                <tr>
                <th>Programming language</th>
                <td>PHP, HTML, css, tailwind css</td>
               </tr>
             <tr>
             <th>Framework</th>
               <td>Codeigniter,  React.js, Vue.js, Node(Express), Node(loopback 3), flutter</td>
             </tr>
            <tr>
            <th>database technology</th>
              <td>MySQ, MongoDB</td>
               </tr>
               </tbody>
              </table>
             </div>
            </div>
            </div>
            <div className='md:w-1/2 w-full mt-8'>   
            <div className="bg-gray-700 text-slate-200 p-5 rounded-lg shadow-lg overflow-hidden">
            <table className="w-full table-auto p-3">
            <thead>
            <tr className=" bg-gray-800 text-gray-200 text-center justify-center">
              <th colSpan={3}  className='bg-slate-700 text-gray-300  text-x rounded-sm h-10 text-center items-center justify-center'>
            <h2 className="md:text-3xl text-lg font-bold mb-2 ">Work Experience</h2>
            </th>
              </tr>
            <tr className=" bg-gray-700 text-gray-300 text-center">

                <th  className='bg-slate-700 text-gray-300  text-x rounded-sm h-10 text-center'>
                  <h2 className="font-bold mb-4">Company</h2></th>
                <th  className='bg-slate-700  text-gray-300 font-bold  text-x rounded-sm h-10 text-center'>
                  <h2 className="font-bold mb-4">Position/Title</h2></th>
                <th  className='bg-slate-700  text-gray-300 font-bold  text-x rounded-sm h-10 text-center'>
                  <h2 className="font-bold mb-4">Year Ended</h2></th>
            </tr>
            </thead>
            <tbody>
              <tr>
              <td>Poshak</td>
              <td>Developer</td>
              <td>2021</td>
              </tr>
              <tr>
              <td>EplusApp</td>
              <td>Developer</td>
              <td>2024</td>
              </tr>
                </tbody>
                </table>
              </div>
              </div>
            </div>
            </div>
            </section>
            <section id='projects' className="">
            <div className=" mx-auto md:pl-10 pl-1 md:pt-1 pt-5">
                <h2 className="text-3xl font-bold mb-2 text-center capitalize md:ml-16 ml-1 md:p-5 p-1 text-gray-300 w-11/12 rounded-md">My Works</h2>
                <div className='md:pl-32 pl-1 items-center p-3'>
                <div className='md:flex md:w-10/12 sm:w-full md:pl-3 pl-1 md:p-5'>
                <p className="text-gray-300 mb-1 ml-2 md:p-4 ">
                  <b className='ont-bold text-gray-300 md:mr-1'>ERP:</b>We develop my ERP system using different technology.
                    We use programming languages and frameworks for back end and
                    front end development.I do this ERP system two times. First we develop by using Vue.js,css for front end
                    and Node.js,Loopback-3 for back end. Second I develop by using React.js,tailwind css for front end
                    and Node.js,Express for back end.We use mongoDB database both times. I get good experience from mentioned 
                    technology above when we develop this ERP system.
                  </p>
                  </div>
              <div className='grid xl:grid-cols-2 rounded-md md:grid-cols-1 grid-cols-1 text-left md:pl-7 md:pr-14'>
                 <div className=' shadow-slate-700 shadow-[0_-10px_15px_-5px_rgba(0,0,0,0.1)] m-5 duration-500 rounded-xl md:p-10 p-3'>
                <img
                className="rounded-md hover:scale-110 transition-transform duration-500 ease-in-out border-slate-300 border-2 shadow-2xl cursor-zoom-in" src={empDB} alt='No'       
               onClick={()=>{handleImageClick("empDB")}}
               />  
               <div className="pl-4 md:-mb-5 mb-0 mt-2 flex-1">
                <div className="h-auto">
                <span className=" font-bold"> Employee dashboard of ERP system</span>
               </div>
              </div>
             </div>
             
              {isZoomed && image==="empDB" && (
                <div 
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
                <img
                className="rounded-md h-full ml-6 w-full shadow-xl mr-3 border-slate-300 border-2 cursor-zoom-in"
                src={empDB}
                alt={"No"}
                onClick={handleZoomOut}
              />
                </div>
              )}
              <div className=' shadow-slate-700 shadow-[0_-10px_15px_-5px_rgba(0,0,0,0.1)] m-5 duration-500 rounded-xl md:p-10 p-3'>
            <img
               className="rounded-md hover:scale-110 transition-transform duration-500 ease-in-out border-slate-300 border-2 shadow-2xl cursor-zoom-in" src={orderImg} alt='No'       
               onClick={()=>{handleImageClick("orderImg")}}
               />  
               <div className="pl-4 md:-mb-5 mb-0 mt-2 flex-1">
                <div className="h-auto">
                <span className=" font-bold">Order images</span>
               </div>
              </div>
             </div>
              {isZoomed && image==="orderImg" && (
                <div 
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
                <img
                className="rounded-md h-full ml-6 w-full shadow-xl mr-3 border-slate-300 border-2 cursor-zoom-in"
                src={orderImg}
                alt={"No"}
                onClick={handleZoomOut}
              />
             </div>
              )}
              <div className=' shadow-slate-700 shadow-[0_-10px_15px_-5px_rgba(0,0,0,0.1)] m-5 duration-500 rounded-xl md:p-10 p-3'>
            <img
               className="rounded-md hover:scale-110 transition-transform duration-500 ease-in-out border-slate-300 border-2 shadow-2xl cursor-zoom-in" src={attendance} alt='No'       
               onClick={()=>{handleImageClick("attendance")}}
               />  
               <div className="pl-4 md:-mb-5 mb-0 mt-2 flex-1">
                <div className="h-auto">
                <span className=" font-bold">Attendance settlment image</span>
               </div>
              </div>
             </div>
              {isZoomed && image==="attendance" && (
                <div 
                className="fixed top-0 left-0 w-full h-full bg-opacity-75 flex justify-center items-center z-50">
                <img
                className="rounded-md h-full ml-6 w-full shadow-xl mr-3 border-slate-300 border-2 cursor-zoom-in"
                src={attendance}
                alt={"No"}
                onClick={handleZoomOut}
              />
             </div>
              )}
              <div className=' shadow-slate-700 shadow-[0_-10px_15px_-5px_rgba(0,0,0,0.1)] m-5 duration-500 rounded-xl md:p-10 p-3'>
            <img
               className="rounded-md hover:scale-110 transition-transform duration-500 ease-in-out border-slate-300 border-2 shadow-2xl cursor-zoom-in" src={bundleImg} alt='No'       
               onClick={()=>{handleImageClick("bundleImg")}}
               />  
               <div className="pl-4 md:-mb-5 mb-0 mt-2 flex-1">
                <div className="h-auto">
                <span className=" font-bold">ERP system bundles</span>
               </div>
              </div>
             </div>
              {isZoomed && image==="bundleImg" && (
                <div 
                className="fixed top-0 left-0 w-full h-full bg-opacity-75 flex justify-center items-center z-50">
                <img
                className="rounded-md h-full ml-6 w-full shadow-xl mr-3 border-slate-300 border-2 cursor-zoom-in"
                src={bundleImg}
                alt={"No"}
                onClick={handleZoomOut}
               />
              </div>
              )}
             </div>
           </div>
           <div className='md:pl-32 pl-1 items-center p-3'>
             <div className='md:flex md:w-10/12 sm:w-full mb-2 md:pl-3 pl-1 md:p-5'>
               <p className="text-gray-300 mb-1 ml-2 md:p-4 ">
                <b className='ont-bold text-gray-300 md:mr-1'>Bus Reservation System: </b>We use programming languages and frameworks for back end and
                front end development of Bus Reservation System.We develop this Bus Reservation System by using 
                React.js,tailwind css for front end and Node.js,Express for back end.We use mysql(sequelize) for my Bus 
                Reservation System.
              </p>
              </div>
             <div className='grid xl:grid-cols-2 rounded-md md:grid-cols-1 grid-cols-1 text-left md:pl-10 md:pr-20'>
             <div className=' shadow-slate-700 shadow-[0_-10px_15px_-5px_rgba(0,0,0,0.1)] m-5 duration-500 rounded-xl md:p-10 p-3'>
               <img
               className="rounded-md hover:scale-110 transition-transform duration-500 ease-in-out border-slate-300 border-2 shadow-2xl cursor-zoom-in" src={busReservation} alt='No'       
               onClick={()=>{handleImageClick("busReservation")}}
               />  
               <div className="pl-4 md:-mb-5 mb-0 mt-2 flex-1">
                <div className="h-auto">
                <span className=" font-bold"> busreservation system</span>
               </div>
              </div>
             </div>
             
              {isZoomed && image==="busReservation" && (
                <div 
                className="fixed top-0 left-0 w-full h-full bg-opacity-75 flex justify-center items-center z-50">
                <img
                className="rounded-md h-full ml-6 w-full shadow-xl mr-3 border-slate-300 border-2 cursor-zoom-in"
                src={busReservation}
                alt={"No"}
                onClick={handleZoomOut}
              />
                </div>
              )}
              <div className=' shadow-slate-700 shadow-[0_-10px_15px_-5px_rgba(0,0,0,0.1)] m-5 duration-500 rounded-xl md:p-10 p-3'>
            <img
               className="rounded-md hover:scale-110 transition-transform duration-500 ease-in-out border-slate-300 border-2 shadow-2xl cursor-zoom-in" src={invoce} alt='No'       
               onClick={()=>{handleImageClick("invoce")}}
               />  
               <div className="pl-4 md:-mb-5 mb-0 mt-2 flex-1">
                <div className="h-auto">
                <span className=" font-bold">Seat selection and get ticket</span>
               </div>
              </div>
             </div>
             
              {isZoomed && image==="invoce" && (
                <div 
                className="fixed top-0 left-0 w-full h-full bg-opacity-75 flex justify-center items-center z-50">
                <img
                className="rounded-md h-full ml-6 w-full shadow-xl mr-3 border-slate-300 border-2 cursor-zoom-in"
                src={invoce}
                alt={"No"}
                onClick={handleZoomOut}
              />
             </div>
              )}
              <div className=' shadow-slate-700 shadow-[0_-10px_15px_-5px_rgba(0,0,0,0.1)] m-5 duration-500 rounded-xl md:p-10 p-3'>
            <img
               className="rounded-md hover:scale-110 transition-transform duration-500 ease-in-out border-slate-300 border-2 shadow-2xl cursor-zoom-in" src={tiketing} alt='No'       
               onClick={()=>{handleImageClick("tiketing")}}
               />  
               <div className="pl-4 md:-mb-5 mb-0 mt-2 flex-1">
                <div className="h-auto">
                <span className=" font-bold">bus assignation image</span>
               </div>
              </div>
             </div>
             
              {isZoomed && image==="tiketing" && (
                <div 
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
                <img
                className="rounded-md h-full ml-6 w-full shadow-xl mr-3 border-slate-300 border-2 cursor-zoom-in"
                src={tiketing}
                alt={"No"}
                onClick={handleZoomOut}
              />
             </div>
              )}
              <div className=' shadow-slate-700 shadow-[0_-10px_15px_-5px_rgba(0,0,0,0.1)] m-5 duration-500 rounded-xl md:p-10 p-3'>
            <img
               className="rounded-md hover:scale-110 transition-transform duration-500 ease-in-out border-slate-300 border-2 shadow-2xl cursor-zoom-in" src={dashboard} alt='No'       
               onClick={()=>{handleImageClick("dashboard")}}
               />  
               <div className="pl-4 md:-mb-5 mb-0 mt-2 flex-1">
                <div className="h-auto">
                <span className=" font-bold">busreservation system dashboard</span>
               </div>
              </div>
             </div>
             
              {isZoomed && image==="dashboard" && (
                <div 
                className="fixed top-0 left-0 w-full h-full bg-opacity-75 flex justify-center items-center z-50">
                <img
                className="rounded-md h-full ml-6 w-full shadow-xl mr-3 border-slate-300 border-2 cursor-zoom-in"
                src={dashboard}
                alt={"No"}
                onClick={handleZoomOut}
              />
             </div>
              )}
            </div>
             </div>
             <div className='md:pl-32 pl-1 items-center p-3'>
             <div className='md:flex md:w-10/12 sm:w-full mb-2 md:pl-3 pl-1 md:p-5'>
               <p className="text-gray-300 mb-1 ml-2 md:p-4 ">
               <b className='ont-bold text-gray-300 md:mr-1'>promotion website:</b>
               I use programming languages and frameworks for
                front end development of promotion website.I develop this promotion website  by using 
                React.js,tailwind css. 
              </p>
              </div>
              <div className='grid xl:grid-cols-2 rounded-md md:grid-cols-1 grid-cols-1 text-left md:pl-10 md:pr-20'>
              <div className=' shadow-slate-700 shadow-[0_-10px_15px_-5px_rgba(0,0,0,0.1)] m-5 duration-500 rounded-xl md:p-10 p-3'>
               <img
               className="rounded-md hover:scale-110 transition-transform duration-500 ease-in-out border-slate-300 border-2 shadow-2xl cursor-zoom-in" src={promoImg1} alt='No'       
               onClick={()=>{handleImageClick("promoImg1")}}
               />  
               <div className="pl-4 md:-mb-5 mb-0 mt-2 flex-1">
                <div className="h-auto">
                <span className=" font-bold"> promotional web screenshot images</span>
               </div>
              </div>
             </div>
             
              {isZoomed && image==="promoImg1" && (
                <div 
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
                <img
                className="rounded-md h-full ml-6 w-full shadow-xl mr-3 border-slate-300 border-2 cursor-zoom-in"
                src={promoImg1}
                alt={"No"}
                onClick={handleZoomOut}
              />
                </div>
              )}
              <div className=' shadow-slate-700 shadow-[0_-10px_15px_-5px_rgba(0,0,0,0.1)] m-5 duration-500 rounded-xl md:p-10 p-3'>
            <img
               className="rounded-md hover:scale-110 transition-transform duration-500 ease-in-out border-slate-300 border-2 shadow-2xl cursor-zoom-in" src={promoImg} alt='No'       
               onClick={()=>{handleImageClick("promoImg")}}
               />  
               <div className="pl-4 md:-mb-5 mb-0 mt-2 flex-1">
                <div className="h-auto">
                <span className=" font-bold">promotional website first page</span>
               </div>
              </div>
             </div>
             
              {isZoomed && image==="promoImg" && (
                <div 
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
                <img
                className="rounded-md h-full ml-6 w-full shadow-xl mr-3 border-slate-300 border-2 cursor-zoom-in"
                src={promoImg}
                alt={"No"}
                onClick={handleZoomOut}
              />
             </div>
              )}
              <div className=' shadow-slate-700 shadow-[0_-10px_15px_-5px_rgba(0,0,0,0.1)] m-5 duration-500 rounded-xl md:p-10 p-3'>
            <img
               className="rounded-md hover:scale-110 transition-transform duration-500 ease-in-out border-slate-300 border-2 shadow-2xl cursor-zoom-in" src={promoImg2} alt='No'       
               onClick={()=>{handleImageClick("promoImg2")}}
               />  
               <div className="pl-4 md:-mb-5 mb-0 mt-2 flex-1">
                <div className="h-auto">
                <span className=" font-bold">promotio website footer and header</span>
               </div>
              </div>
             </div>
             
              {isZoomed && image==="promoImg2" && (
                <div 
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
                <img
                className="rounded-md h-full ml-6 w-full shadow-xl mr-3 border-slate-300 border-2 cursor-zoom-in"
                src={promoImg2}
                alt={"No"}
                onClick={handleZoomOut}
               />
              </div>
              )}
             </div>
            </div>

             <div className='md:pl-32 pl-1 items-center p-3'>
             <div className='md:flex md:w-10/12 sm:w-full mb-2 md:pl-3 pl-1 md:p-5'>
               <p className="text-gray-300 mb-1 ml-2 md:p-4 ">
               <b className='ont-bold text-gray-300 md:mr-1'> File Managemen System :</b>
              I use programming languages and frameworks for back end and
                front end development of File Managemen System.I develop this File Managemen System by using 
                React.js,tailwind css for front end and Node.js,Express for back end. I use mysql(sequelize) for this system development.
              </p>
              </div>
              <div className='grid xl:grid-cols-2 rounded-md md:grid-cols-1 grid-cols-1 text-left md:pl-10 md:pr-20'>
              <div className=' shadow-slate-700 shadow-[0_-10px_15px_-5px_rgba(0,0,0,0.1)] m-5 duration-500 rounded-xl md:p-10 p-3'>
               <img
               className="rounded-md hover:scale-110 transition-transform duration-500 ease-in-out border-slate-300 border-2 shadow-2xl cursor-zoom-in" src={fileup2} alt='No'       
               onClick={()=>{handleImageClick("fileup2")}}
               />  
               <div className="pl-4 md:-mb-5 mb-0 mt-2 flex-1">
                <div className="h-auto">
                <span className=" font-bold"> file upload page</span>
               </div>
              </div>
             </div>
             
              {isZoomed && image==="fileup2" && (
                <div 
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
                <img
                className="rounded-md h-full ml-6 w-full shadow-xl mr-3 border-slate-300 border-2 cursor-zoom-in"
                src={fileup2}
                alt={"No"}
                onClick={handleZoomOut}
              />
                </div>
              )}
              <div className=' shadow-slate-700 shadow-[0_-10px_15px_-5px_rgba(0,0,0,0.1)] m-5 duration-500 rounded-xl md:p-10 p-3'>
            <img
               className="rounded-md hover:scale-110 transition-transform duration-500 ease-in-out border-slate-300 border-2 shadow-2xl cursor-zoom-in" src={fileup1} alt='No'       
               onClick={()=>{handleImageClick("fileup1")}}
               />  
               <div className="pl-4 md:-mb-5 mb-0 mt-2 flex-1">
                <div className="h-auto">
                <span className=" font-bold">uploaded file lists</span>
               </div>
              </div>
             </div>
             
              {isZoomed && image==="fileup1" && (
                <div 
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
                <img
                className="rounded-md h-full ml-6 w-full shadow-xl mr-3 border-slate-300 border-2 cursor-zoom-in"
                src={fileup1}
                alt={"No"}
                onClick={handleZoomOut}
              />
             </div>
              )}   
              <div className=' shadow-slate-700 shadow-[0_-10px_15px_-5px_rgba(0,0,0,0.1)] m-5 duration-500 rounded-xl md:p-10 p-3'>
            <img
               className="rounded-md hover:scale-110 transition-transform duration-500 ease-in-out border-slate-300 border-2 shadow-2xl cursor-zoom-in" src={fileup3} alt='No'       
               onClick={()=>{handleImageClick("fileup3")}}
               />  
               <div className="pl-4 md:-mb-5 mb-0 mt-2 flex-1">
                <div className="h-auto">
                <span className=" font-bold">audio lists</span>
               </div>
              </div>
             </div>
             
              {isZoomed && image==="fileup3" && (
                <div 
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
                <img
                className="rounded-md h-full ml-6 w-full shadow-xl mr-3 border-slate-300 border-2 cursor-zoom-in"
                src={fileup3}
                alt={"No"}
                onClick={handleZoomOut}
               />
              </div>
              )}
              <div className=' shadow-slate-700 shadow-[0_-10px_15px_-5px_rgba(0,0,0,0.1)] m-5 duration-500 rounded-xl md:p-10 p-3'>
            <img
               className="rounded-md hover:scale-110 transition-transform duration-500 ease-in-out border-slate-300 border-2 shadow-2xl cursor-zoom-in" src={fileup4} alt='No'       
               onClick={()=>{handleImageClick("fileup4")}}
               />  
               <div className="pl-4 md:-mb-5 mb-0 mt-2 flex-1">
                <div className="h-auto">
                <span className=" font-bold">post data screenshot</span>
               </div>
              </div>
             </div>
             
              {isZoomed && image==="fileup4" && (
                <div 
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
                <img
                className="rounded-md h-full ml-6 w-full shadow-xl mr-3 border-slate-300 border-2 cursor-zoom-in"
                src={fileup4}
                alt={"No"}
                onClick={handleZoomOut}
               />
              </div>
              )}
             </div>
             </div>
          </div>
        </section>
        <section id='contact' className="">
         <div className=" mx-auto md:pl-10 pl-1 pt-3 border-t-2 border-slate-300">
            <h2 className="text-3xl font-bold mb-4 text-center justify-center md:ml-16 ml-1 md:p-5 p-1
                         text-gray-300 w-11/12 rounded-md">Contact</h2>
            <form className="max-w-md mx-auto mt-10">
              <div className="mb-2">
              <div className='md:flex  mb-2'>
             <h1 className=' font-bold text-gray-300'>Phone:{" "}</h1>
             <p className="text-gray-200 mb-1 ml-3">
               0964727916/0938233940
             </p>
             </div>
              </div>
              <div className="mb-4">
              <div className='md:flex mb-2'>
             <h1 className=' font-bold text-gray-300'>Email:{" "}</h1>
             <a className="text-gray-200 mb-2 ml-3">
               yibeltalawoke058@gmail.com
             </a>
             </div>
             <div className='md:flex mb-2'>
             <h1 className=' font-bold text-gray-300'>githab:{" "}</h1>
             <NavLink className='mb-2 ml-3 text-sky-600'  
             to ="https://github.com/yibeltalawok"> 
             https://github.com
             </NavLink>
             </div>
             <div className='md:flex mb-2'>
             <h1 className=' font-bold text-gray-300'>linkedin:{" "}</h1>
             <NavLink className='mb-1 ml-3 text-sky-600'  
             to ="https://www.linkedin.com/in/yibeltal-awoke-433037275/"> 
             https://www.linkedin.com
             </NavLink>
             </div>
              </div>
            </form>
          </div>
        </section>
      <footer className="bg-gray-800 py-4 w-full">
        <div className="container mx-auto text-center text-gray-400">
          &copy; 2024 My Portfolio. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
export default About;

