import React,{useState} from 'react';
import {data} from "./data"
import {NavLink,useNavigate} from 'react-router-dom' ;

// import me from '../../../public/img/me.jpg';
// import {dataAllow} from "./dataAllow"
import Img1 from '../img/y29.JPG';
import Img3 from '../img/y7.JPG';
import Img4 from '../img/mydocu.png'
import Img6 from '../img/reward.png'
// file upload images
import fileup1 from '../img/file.png';
import fileup2 from '../img/filupload1.png';
import fileup3 from '../img/audio.png'
import fileup4 from '../img/post.png'
// file promotion-web-site images
import promoImg from '../img/promotion.png'
import promoImg1 from '../img/promotion1.png';
import promoImg2 from '../img/promtion2.png'
// file ERP images
import empDB from '../img/empDB.png'
import bundleImg from '../img/bundleImg.png';
import orderImg from '../img/orderImg.png'
import attendance from '../img/attendance.png'
import issue from '../img/issue.png'
//ff
import busReservation from '../img/busReservation.png';
import dashboard from '../img/dshboard.png';
import invoce from '../img/invoce.png'
import tiketing from '../img/ticket.png'

import me from '../img/me.jpg'
import SimpleImageSlider from "react-simple-image-slider";
import { RiMenuLine } from "react-icons/ri";
const About = () => {
  const images = [
    { url:Img4 },
    { url:Img6 } ,
    { url:Img1 },
    { url:Img3 },
      ];

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
const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="bg-gray-100 pt-0 text-gray-900">
    <>
     <div className='w-full h-10 text-center bg-cyan-800 mt-1 text-white p-2 overflow-hidden'>
      <p className='animate-marquee-loop'>A portfolio is a collection of work samples, projects, and accomplishments that showcase their skills, experience, and capabilities as a software engineer or developer.</p>
     </div>
    <div className=' md:sticky fixed top-0 overflow-y-visible list-none z-50 font-serif uppercase font-medium xl:text-xl 
    md:text-xl xs:text-xs text-justify-center  justify-between items-center pl-6 p-5 w-full h-28 shadow-xl  block sm:flex bg-gray-200 mt-0'>
    <ul>
    <li className='inline ml-5'>
    <div className='text-3xl absolute right-8 top-3 cursor-pointer md:hidden visible'>
      <RiMenuLine size={24} onClick={setmenu}/>
    </div>
     <NavLink className='md:ml-8 ml-0 w-96 md:p-5 p-0 flex'  
     to ="/"> 
     <button className="p-1 rounded-full bg-slate-200 cursor-pointer">
     <img src={me} alt="Logo" width="80" className="rounded-full -mt-10" />
     </button>
    <h1 className="md:text-2xl text-lg font-bold">My Portfolio</h1>
    </NavLink>
    </li>
    </ul>
    <ul className='inline'>
    <ul className='ml-96   flex'>
    </ul>
    <ul className=' ml-96 gap-x-10 md:flex md:visible hidden '>
    <li><a href="#about" className="hover:text-gray-400">About</a></li>
    <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
    <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
    </ul>
    </ul>
    <ul className={`${menu ? "left-0 opacity-100" :"left-[-750px] md:opacity-0"}
                    sm:flex lg:hidden flex-1  list-none flex flex-col
                    p-6 bg-black-gradient fixed w-full right-0  ml-0 my-2 top-16 mt-12
                    sidebar bg-gray-100 transition-all duration-500 ease-in z-50 shadow-2xl
                    `}>
    <li className='mx-6 py-3 font-serif uppercase font-medium text-xl '>
          <button
          className='transition duration-700 transform hover:-translate-y-1 hover:text-[#0099ff] hover:scale-110 flex' 
            ><a href="#about" className="hover:text-gray-400">About</a> </button></li>
    <li className='mx-6 py-2 font-serif uppercase font-medium text-xl '>
          <button 
          className='transition duration-700 transform hover:-translate-y-1 hover:text-[#0099ff] hover:scale-110  flex'>
          <a href="#projects" className="hover:text-gray-400">Projects</a></button></li>
          <li className='mx-6 py-2 font-serif uppercase font-medium text-xl '>
        <button 
          className='transition duration-700 transform hover:-translate-y-1 hover:text-[#0099ff] hover:scale-110  flex' 
            >   
            <a href="#contact" className="hover:text-gray-400">Contact</a> </button></li>
    </ul>
    </div>
    </>
       <section id='about' className="">
         <div className="  md:pl-10 pt-5 pl-1 ">
            <h2 className="text-3xl font-bold md:mt-5 mt-20 text-center md:ml-16 ml-1 p-5 bg-slate-950 text-gray-300 w-11/12 rounded-md">About Me</h2>
         <div className='md:flex md:w-11/12 w-full text-center md:pl-44 pl-0 md:p-16 p-1'>
           <div className="  md:w-1/2 w-full md:mr-1 flex border-2 shadow rounded-xl">
            <div className=' w-full text-left p-5 md:pl-5 rounded-xl shadow-2xl pl-1
             bg-emerald-400 '>
             <div className=' grid xl:grid-cols-1 pt-5 rounded-md md:grid-cols-1 grid-cols-1 text-left p-7 md:pl-5 border-2 border-gray-50'>
             {(data?.length)>0
             ?(
           data?.map((profile,index) =>{
           return(
            <div key={index} className='md:flex mb-2 '>
             <h1 className=' font-bold text-gray-950'>{profile.name}:{" "}</h1>
             <p className="text-gray-500 mb-3 ml-2">
               {profile.value}
             </p>
             </div>
           )})):("")}
             </div>
             <div className='mt-5 grid xl:grid-cols-1 md:grid-cols-1 grid-cols-1 text-left p-5 md:pl-5 border-2 border-gray-50'>
             <div className='md:flex mb-2 '>
             <h1 className=' font-bold text-gray-950'>University:{" "}</h1>
             <p className="text-gray-500 mb-1 ml-1">
             Bahirdar University(BDU)
             </p>
             </div>
              </div>
             <div className='mt-5 grid xl:grid-cols-1 md:grid-cols-1 grid-cols-1 text-left p-5 md:pl-5 border-2 border-gray-50'>
             <div className='md:flex mb-2 '>
             <h1 className=' font-bold text-gray-950'>Department:{" "}</h1>
             <p className="text-gray-500 mb-1 ml-1">
             SoftWare Engineering(BSC)
             </p>
             </div>
              </div>
              <div className='mt-5 grid xl:grid-cols-1 md:grid-cols-1 grid-cols-1 text-left p-5 md:pl-5 border-2 border-gray-50'>
            <div className='md:flex mb-2 '>
             <h1 className=' font-bold text-gray-950'>COC:{" "}</h1>
             <p className="text-gray-500 mb-1 ml-1">
             level-4 in database
             </p>
             </div>
              </div>
           </div>
          </div>
          <div className=" mx-auto md:w-1/2 w-full md:ml-1 flex border-2 shadow rounded-lg">
          <div className='grid xl:grid-cols-1 md:grid-cols-1 grid-cols-1 w-full text-left'>
          <div className="w-full bg-emerald-400 rounded-xl p-5 ">
        <div className=' grid xl:grid-cols-1 pt-5 rounded-md md:grid-cols-1 grid-cols-1 mb-2 text-left p-7 md:pl-5 border-2 border-gray-50'>
      <h3 className=' font-semibold' >
      PERSONALITIES:
      </h3>
     <p className='ml-3'>I am excellent to listen and try to understand other people’s point of view</p>
     <p className='ml-3'>I am healthy and capable of doing any type of work, disciplined and patientbehavior.</p>
     <p className='ml-3'>Excellent relation with everyone and also free from any addiction.</p>
     <p className='ml-3'> I am positive thinker</p>
     <h3 className=' font-semibold' >
      HOBBIES:
      </h3>
     <p className='ml-3'>I Reading any written books, Magazines, Newspaper, Watching TV and Helping people</p>
     <p className='ml-3'>I Carryout the responsibility on which I assigned in a well manner</p>
     <p className='ml-3'>I Searching for the problem and its solution in activities and sharing experience.</p>
     <p className='ml-3'>I Coordination and collaboration in national growth.</p>
     <p className='ml-3'>I Develop my programming skill and create different software that solve social problem</p>
    </div>
      <SimpleImageSlider
      className="mt-5 -ml-5"
        width={505}
        height={380}
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={5}
        autoPlay 
        currentIndex={currentIndex}
        onImageChange={(index) => setCurrentIndex(index)}
      />
      {/* <img src={Img4} alt='' className='rounded' /> */}
      </div>
        </div>
       </div>
      </div>
     </div>
    </section>
    <section id='skill'  className="">
      <div className='md:flex md:w-11/12 w-full text-center md:pl-44 -mt-8 pl-1 pt-5 md:p-10 p-1'>
        <div className="container mx-auto md:w-3/4 w-full md:p-3 p-0 m-2">
         <div className='w-full text-left md:p-3 p-1 pt-6'>
          <div className="bg-gray-200 text-black  rounded-lg shadow-lg overflow-hidden">
           <table className="w-full table-auto md:p-3 p-1">
            <thead>
            <th colSpan={2} className='bg-slate-400 w-full text-gray-900  font-bold  text-x rounded-sm h-10 text-center'>
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
          {/* {data.map((row, index) => (
            <tr
              key={index}
              className={`border-b border-gray-800 ${
                index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'
              }`}
            >
              {columns.map((column, columnIndex) => (
                <td
                  key={columnIndex}
                  className="px-4 py-3 text-left"
                >
                  {column.render ? column.render(row) : row[column.key]}
                </td>
              ))}
             </tr>
             ))} */}
           </tbody>
          </table>
         </div>
             {/* <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Learn More
             </a> */}
           </div>
          </div>
         <div className='md:w-1/2 w-full mt-8'>   
         <div className="bg-gray-200 text-black rounded-lg shadow-lg overflow-hidden">
         <table className="w-full table-auto p-3">
         <thead>
         <tr className=" bg-gray-600 text-gray-400 text-center justify-center">
          <th colSpan={3}  className='bg-slate-400 text-gray-900  text-x rounded-sm h-10 text-center items-center justify-center'>
        <h2 className="md:text-3xl text-lg font-bold mb-2 ">Work Experience</h2>
        </th>
          </tr>
         <tr className=" bg-gray-400 text-gray-600 text-center">
         {/* {columns.map((column, index) => (
         <th
            key={index}
            className="px-4 py-3 text-left font-medium"
          >
            {column.title}
        </th>
        ))} */}
            <th  className='bg-slate-400 text-gray-900  text-x rounded-sm h-10 text-center'>
              <h2 className="font-bold mb-4">Company</h2></th>
            <th  className='bg-slate-400  text-gray-900 font-bold  text-x rounded-sm h-10 text-center'>
              <h2 className="font-bold mb-4">Position/Title</h2></th>
            <th  className='bg-slate-400  text-gray-900 font-bold  text-x rounded-sm h-10 text-center'>
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
        {/* {data.map((row, index) => (
        <tr
        key={index}
        className={`border-b border-gray-800 ${
            index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'
        }`}
        >
        {columns.map((column, columnIndex) => (
            <td
            key={columnIndex}
            className="px-4 py-3 text-left"
            >
            {column.render ? column.render(row) : row[column.key]}
            </td>
        ))}
        </tr>
        ))} */}
             </tbody>
            </table>
           </div>
          </div>
         </div>
        </section>
        <section id='projects' className="">
         <div className=" mx-auto md:pl-10 pl-1 md:pt-1 pt-5">
            <h2 className="text-3xl font-bold mb-2 text-center md:ml-16 ml-1 md:p-5 p-1 bg-slate-950 text-gray-300 w-11/12 rounded-md">My Works</h2>
            <div className='md:pl-32 pl-1 items-center p-3'>

            <div className='md:flex md:w-10/12 sm:w-full md:pl-3 pl-1 md:p-5'>
            <p className="text-gray-600 mb-1 ml-2 md:p-4 ">
              <b className='ont-bold text-gray-950 md:mr-1'>ERP:</b>I develop my ERP system using different technology.
                 I use programming languages and frameworks for back end and
                front end development.I develop this ERP system two times. First I develop by using Vue.js,css for front end
                 and Node.js,Loopback-3 for back end. Second I develop by using React.js,tailwind css for front end
                 and Node.js,Express for back end. I use mongoDB database both times. I get good experience from mentioned 
                 technology above when I develop this ERP system.
              </p>
              </div>
              <br />
              <div className='md:w-11/12 sm:w-full md:flex'>
              <div>
              <img className="rounded-md w-full mr-3 border-slate-300 border-2" src={empDB} alt='No' />
              <div className="mt-1 pl-4 flex-1">
                <div className="h-auto">
                <span className=" font-bold"> Employee dashboard of ERP system</span>
               </div>
              </div>
              </div>
              <div>
              <img className="rounded-md w-full ml-3 border-slate-300 border-2" src={issue} alt='No' />
              <div className="mt-1 pl-4 flex-1">
                <div className="h-auto">
                <span className=" font-bold"> Issue</span>
               </div>
              </div>
              </div>
              </div>
              <br />
              <div className='md:w-11/12 sm:w-full md:flex'>
              <div>
              <img className="rounded-md w-full mr-3 border-slate-300 border-2" src={orderImg} alt='No' />
              <div className="mt-1 pl-4 flex-1">
                <div className="h-auto">
                <span className=" font-bold"> Order images </span>
               </div>
              </div>
              </div>
              <div>
              <img className="rounded-md w-full ml-3 border-slate-300 border-2" src={attendance} alt='No' />
              <div className="mt-1 pl-5 flex-1">
                <div className="h-auto">
                <span className=" font-bold"> attendance settlment</span>
               </div>
              </div>
              </div>
              </div>
              <br />
              <div className='md:w-1/2 sm:w-full md:flex'>
              <div className='w-11/12'>
              <img className="rounded-md w-full mr-5 border-slate-300 border-2" src={bundleImg} alt='No' />
              <div className="mt-1 flex-1">
                <div className="h-auto">
                <span className=" font-bold"> ERP system bundles</span>
               </div>
              </div>
              </div>
              </div>
             </div>
             <div className='md:pl-32 pl-1 items-center p-3'>
             <div className='md:flex md:w-10/12 sm:w-full mb-2 md:pl-3 pl-1 md:p-5'>
               <p className="text-gray-600 mb-1 ml-2 md:p-4 ">
                <b className='ont-bold text-gray-950 md:mr-1'>Bus Reservation System: </b>I use programming languages and frameworks for back end and
                front end development of Bus Reservation System.I develop this Bus Reservation System by using 
                React.js,tailwind css for front end and Node.js,Express for back end. I use mysql(sequelize) for my Bus 
                Reservation System.
              </p>
              </div>
              <br />
              <div className='md:w-11/12 sm:w-full md:flex'>
              <div>
              <img className="rounded-md w-full mr-3 border-slate-300 border-2" src={busReservation} alt='No' />
              <div className="mt-1 pl-4 flex-1">
                <div className="h-auto">
                <span className=" font-bold"> busreservation system</span>
               </div>
              </div>
              </div>
              <div>
              <img className="rounded-md w-full ml-3 border-slate-300 border-2" src={invoce} alt='No' />
              <div className="mt-1 pl-4 flex-1">
                <div className="h-auto">
                <span className=" font-bold"> Seat selection and get ticket</span>
               </div>
              </div>
              </div>
              </div>
              <br />
              <div className='md:w-11/12 sm:w-full md:flex'>
              <div>
              <img className="rounded-md w-full mr-3 border-slate-300 border-2" src={tiketing} alt='No' />
              <div className="mt-1 pl-4 flex-1">
                <div className="h-auto">
                <span className=" font-bold"> bus assignation image </span>
               </div>
              </div>
              </div>
              <div>
              <img className="rounded-md w-full ml-3 border-slate-300 border-2" src={dashboard} alt='No' />
              <div className="mt-1 pl-5 flex-1">
                <div className="h-auto">
                <span className=" font-bold"> busreservation system dashboard</span>
               </div>
              </div>
              </div>
              </div>
             </div>
             <br />
             <div className='md:pl-32 pl-1 items-center p-3'>
             <div className='md:flex md:w-10/12 sm:w-full mb-2 md:pl-3 pl-1 md:p-5'>
               <p className="text-gray-600 mb-1 ml-2 md:p-4 ">
               <b className='ont-bold text-gray-950 md:mr-1'>promotion website:</b>
               I use programming languages and frameworks for
                front end development of promotion website.I develop this Bus Reservation System  by using 
                React.js,tailwind css. 
              </p>
              </div>
              <br />
              <div className='md:w-11/12 sm:w-full md:flex'>
              <div>
              <img className="rounded-md w-full mr-3 border-slate-300 border-2" src={promoImg1} alt='No' />
              <div className="mt-1 pl-4 flex-1">
                <div className="h-auto">
                <span className=" font-bold"> promotional web screenshot images</span>
               </div>
              </div>
              </div>
              <div>
              <img className="rounded-md w-full ml-3 border-slate-300 border-2" src={promoImg2} alt='No' />
              <div className="mt-1 pl-4 flex-1">
                <div className="h-auto">
                <span className=" font-bold"> Order images </span>
               </div>
              </div>
              </div>
              </div>
              <br />
              <div className='md:w-1/2 sm:w-full md:flex'>
              <div className=' m-11/12'>
              <img className="rounded-md w-full ml-3 border-slate-300 border-2" src={promoImg} alt='No' />
              <div className="mt-1 pl-4 flex-1">
                <div className="h-auto">
                <span className=" font-bold"> promotional website first page</span>
               </div>
              </div>
              </div>
              <div className=''>
              <div className="mt-1 flex-1">
                <div className="h-auto">
               </div>
              </div>
              </div>
              </div>
             </div>

             <div className='md:pl-32 pl-1 items-center p-3'>
             <div className='md:flex md:w-10/12 sm:w-full mb-2 md:pl-3 pl-1 md:p-5'>
               <p className="text-gray-600 mb-1 ml-2 md:p-4 ">
               <b className='ont-bold text-gray-950 md:mr-1'> File Managemen System :</b>
              I use programming languages and frameworks for back end and
                front end development of File Managemen System.I develop this File Managemen System by using 
                React.js,tailwind css for front end and Node.js,Express for back end. I use mysql(sequelize) for my Bus.
              </p>
              </div>
              <br />
              <div className='md:w-11/12 sm:w-full md:flex'>
              <div>
              <img className="rounded-md w-full mr-3 border-slate-300 border-2" src={fileup2} alt='No' />
              <div className="mt-1 pl-4 flex-1">
                <div className="h-auto">
                <span className=" font-bold"> file upload page </span>
               </div>
              </div>
              </div>
              <div>
              <img className="rounded-md w-full ml-3 border-slate-300 border-2" src={fileup1} alt='No' />
              <div className="mt-1 pl-5 flex-1">
                <div className="h-auto">
                <span className=" font-bold"> uploaded file lists</span>
               </div>
              </div>
              </div>
              </div>
              <br />             
              <br />
              <div className='md:w-11/12 sm:w-full md:flex'>
              <div>
              <img className="rounded-md w-full mr-3 border-slate-300 border-2" src={fileup3} alt='No' />
              <div className="mt-1 pl-4 flex-1">
                <div className="h-auto">
                <span className=" font-bold"> audio lists </span>
               </div>
              </div>
              </div>
              <div>
              <img className="rounded-md w-full ml-3 border-slate-300 border-2" src={fileup4} alt='No' />
              <div className="mt-1 pl-5 flex-1">
                <div className="h-auto">
                <span className=" font-bold"> post data screenshot</span>
               </div>
              </div>
              </div>
              </div>
              <br />   
             </div>
          </div>
        </section>
        <section id='contact' className="">
         <div className=" mx-auto md:pl-10 pl-1 pt-3">
            <h2 className="text-3xl font-bold mb-4 text-center justify-center md:ml-16 ml-1 md:p-5 p-1 bg-slate-950
                         text-gray-300 w-11/12 rounded-md">Contact</h2>
            <form className="max-w-md mx-auto mt-16">
              <div className="mb-4">
              <div className='md:flex  mb-2'>
             <h1 className=' font-bold text-gray-950'>Phone:{" "}</h1>
             <p className="text-gray-500 mb-1 ml-3">
               0964727916/0938233940
             </p>
             </div>
              </div>
              <div className="mb-4">
              <div className='md:flex mb-2'>
             <h1 className=' font-bold text-gray-950'>Email:{" "}</h1>
             <a className="text-gray-500 mb-2 ml-3">
               yibeltalawoke058@gmail.com
             </a>
             </div>
             <div className='md:flex mb-2'>
             <h1 className=' font-bold text-gray-950'>githab:{" "}</h1>
             <NavLink className='mb-2 ml-3 text-sky-600'  
             to ="https://github.com/yibeltalawok"> 
             https://github.com
             </NavLink>
             </div>
             <div className='md:flex mb-2'>
             <h1 className=' font-bold text-gray-950'>linkedin:{" "}</h1>
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

