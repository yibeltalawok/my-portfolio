import React,{useState,useEffect} from 'react';
// import { useWindowSize } from 'react-use';
import {data} from "./data"
// import {divLink} from 'react-router-dom' ;
import Img1 from '../img/y29.JPG';
import Footer from './footer';
// import Img4 from '../img/mydocu.png'
// import Img6 from '../img/reward.png'
import mobileApp from '../img/mobile-app.png'
import frontend from '../img/frontend.png'
import backend from '../img/backend.png'
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
import busReservation from '../img/busReservation.png';
import dashboard from '../img/dshboard.png';
// import invoce from '../img/invoce.png'
import tiketing from '../img/ticket.png'
import me from '../img/me.jpg'
import { RiMenuLine } from "react-icons/ri";
let image=""
const About = () => {
      const [isZoomed, setIsZoomed] = useState(false);
      const [show, setShow] = useState(false);
      const handleImageClick = (imageName) => {
        setIsZoomed(true);
        image=imageName
      };
      const [isActive,setIsActive]=useState('home')
      const erpImage=[{imgName:empDB,imgText:"Employee dashboard of ERP system"},{imgName:orderImg,imgText:"order images"
      },{imgName:attendance,imgText:"Attendance settlment image"},{imgName:bundleImg,imgText:"ERP system bundles"}]

      const busRsvnImage=[{imgName:busReservation,imgText:"busreservation system landing page"},{imgName:fileup4,imgText:"post data screenshot"
      },{imgName:tiketing,imgText:"bus assignation image"},{imgName:dashboard,imgText:"busreservation system dashboard"}]

      const promotionImage=[{imgName:promoImg1,imgText:"promotional web screenshot images"},{imgName:promoImg,imgText:"promotional website first page"
      },{imgName:promoImg2,imgText:"promotio website footer and header"}]
    
      const fileMgmntImage=[{imgName:fileup2,imgText:"file upload page"},{imgName:fileup1,imgText:"uploaded file lists"},{imgName:fileup3,imgText:"audio lists"
      },{imgName:fileup4,imgText:"post data screenshot"}]

      
      const [erpPage, setErpPage] = useState(1)
      const [busPage, setBusPage] = useState(1)
      const [promonPage, setPromonPage] = useState(1)
      const [filmngmntPage, setFilmngmntPage] = useState(1)

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
  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && (selectedPage * 2)-2 < erpImage?.length  && selectedPage !== erpPage) {
      setErpPage(selectedPage)
    }
  }
  const selectBusImgPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && (selectedPage * 2)-2 < busRsvnImage?.length  && selectedPage !== busPage) {
      setBusPage(selectedPage)
    }
  }
  const selectPromnImgPage = (selectedPage) => {
    if (selectedPage >= 1 && (selectedPage * 2)-2 < promotionImage?.length  && selectedPage !== promonPage) {
      setPromonPage(selectedPage)
    }
  }
    const selectFileMngmntImgPage = (selectedPage) => {
    if (selectedPage >= 1 && (selectedPage * 2)-2 < fileMgmntImage?.length  && selectedPage !== filmngmntPage) {
      setFilmngmntPage(selectedPage)
    }
  }
  return (
    <div className="bg-gray-800 pt-0 ">
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
     <divLink className='md:ml-8 ml-0 w-96 md:p-5 p-0 flex'  
     to ="/"> 
     <button className="p-1 rounded-full bg-slate-700 cursor-pointer">
     <img src={me} alt="Logo" width="80" className="rounded-full -mt-7" />
     </button>
    <h1 className="md:text-2xl text-lg font-bold text-gray-300">My Portfolio</h1>
    </divLink>
    </li>
    </ul>
    <ul className='inline'>
    <ul className='ml-96 flex'>
    </ul>
    <ul className=' ml-96 gap-x-10 md:flex text-xl hidden '>
    <li><a href="#home" onClick={()=>{setIsActive("home")}} className={` text-gray-300 p-1 rounded-md ${isActive == 'home' ? 'bg-[#33ff00] text-gray-950' : ''}`}>Home</a></li>
    <li><a href="#about" onClick={()=>{setIsActive("about")}} className={`text-gray-300 p-1 rounded-md ${isActive == 'about' ? 'bg-[#33ff00] text-gray-950' : ''}`}>About</a></li>
    <li><a href="#skill" onClick={()=>{setIsActive("skill")}} className={`text-gray-300 p-1 rounded-md ${isActive == 'skill' ? 'bg-[#33ff00] text-gray-950' : ''}`}>Skill</a></li>
    <li><a href="#projects" onClick={()=>{setIsActive("projects")}} className={`text-gray-300 p-1 rounded-md ${isActive == 'projects' ? 'bg-[#33ff00] text-gray-950' : ''}`}>Projects</a></li>
    <li><a href="#contact" onClick={()=>{setIsActive("contact")}} className={`text-gray-300 p-1 rounded-md ${isActive == 'contact' ? 'bg-[#33ff00] text-gray-950' : ''}`}>Contact</a></li>
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
            ><a href="#home" onClick={()=>{setIsActive("home")}} className={`over:text-gray-400 ${isActive == 'home' ? ' bg-[#0099ff]' : ''}`}>Home</a> </button></li>
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
    <div className="relative flex border-b-2 border-slate-600 w-11/12 text-center mt-14 shadow-sm text-slate-300 p-3 ">    
      <div className=' flex p-3 w-2/3'>
      <div className=' text-center'>
      <h1 className="text-xl font-bold   text-slate-100 m-3 uppercase text-center">Hello! Well Come to my portfolio</h1>
      <h1 className="text-2xl font-bold uppercase underline m-3 text-orange-400 text-center">I'm Yibeltal Awoke</h1>
      <div className=' mt-2 md:flex '>
      <div className='md:flex sm:hidden'>
       <div className=' transform transition-all duration-500 '>
        <h1 className="text-xl font-bold text-gray-300 w-full text-left md:ml-20 capitalize float-left">I'm</h1>
       </div>
       <div className={`absolute md:left-12 -left-9 transform transition-all duration-700 ${
          show
            ? 'opacity-100 translate-x-24'
            : 'opacity-0 translate-x-20'
          }`}
        >
       <p className="text-xl font-bold text-gray-300 mb-3 w-full capitalize text-center">a back end developer</p>
       </div>
       <div
        className={`absolute md:left-12 -left-9 transform transition-all duration-700 ${
          !show
            ? 'opacity-100 translate-x-24'
            : 'opacity-0 translate-x-20'
        }`}
       >
       <p className="text-xl font-bold text-gray-300 w-full mb-3 capitalize text-center"> a front end developer</p>
      </div>
     </div>
      <p className="text-xl mb-2 font-bold text-gray-300 w-full capitalize">(a full stack developer)</p>
      </div>
      <p className=' text-left w-11/12'>
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
            <h2 className="text-3xl font-bold text-gray-300 mt-5   text-center md:ml-16 ml-1 p- w-11/12 rounded-md">About Me</h2>
         <div className='md:flex w-full text-center md:pl-5 pl-0 md:p-7 p-1'>
             {(data?.length)>0
             ?(
           data?.map((profile,index) =>{
           return(
            <div className=' grid xl:grid-cols-3 rounded-md md:grid-cols-3 grid-cols-1 md:pl-5'>
             <div className='mb-2 shadow-slate-900 m-5 rounded-xl shadow-[0_0_15px_0_rgba(0,0,0,0.1)]' style={{height:"380px"}}>
             <div className='p-5 hover:mt-2 mt-5 duration-500 rounded-xl text-left'>
              <p className="text-xl m-3 mb-5 -mt-2 font-bold  w-full capitalize text-red-700 ">my Name & Address</p>
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
                <p className="flex text-gray-200 mb-2 ml-2">
                {profile.secondarySchool}<p className=' text-red-600'>(4.00)</p>
                </p>
                <p className="text-gray-200 mb-2 ml-2">
                {profile.preparatorySchool}<p className=' text-red-600'>(441)</p>
                </p>
                <p className="text-gray-200 mb-2 ml-2">
                {profile.schoolYear}</p>
                <p className="text-gray-200 mb-2 ml-2">
                {profile.university}
                </p>
                <p className="text-gray-200 mb-2 ml-2">
                {profile.universityYear}
                </p>
                <p className="flex text-gray-200 mb-2 ml-2">
                {profile.department}<p className=' text-red-600 ml-1'>(3.59)</p>
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
             <div className='p-5 text-gray-300 hover:mt-2 mt-5 duration-500 rounded-xl text-left'>
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
          <div className=" border-b-2 border-slate-400 md:pl-10 pt-3 bg pl-1 ">
           <h2 className="text-3xl font-bold md:mt-14 mt-44 text-center md:ml-16 ml-1 p-5 text-gray-300 w-11/12 rounded-md">Skills and Experience</h2>
           <div className='md:flex md:w-11/12 w-full text-center -mt-8 md:ml-10 md:p-8 p-1 pt-5 '>
            <div className="container mx-auto md:w-3/4 w-full md:p-3 p-0 m-2">
             <div className='w-full text-left md:p-3 p-1 pt-6'>
              <div className="bg-gray-700 text-slate-300 md:p-7 rounded-lg shadow-lg overflow-hidden">
               <table className="w-full table-auto md:p-3 p-1">
                <thead>
                 <th colSpan={2} className='bg-slate-700 w-full  font-bold text-gray-300  text-x rounded-sm h-10 text-center'>
                 <h2 className="text-3xl font-bold text-gray-300 mb-4">Skill</h2></th>
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
            <h2 className="md:text-3xl text-lg font-bold text-gray-300 mb-2 ">Work Experience</h2>
               </th>
               </tr>
               <tr className=" bg-gray-700 text-gray-300 text-center">
                 <th  className='bg-slate-700 text-gray-300  text-x rounded-sm h-10 text-center'>
                  <h2 className="font-bold text-gray-300 mb-4">Company</h2></th>
                 <th  className='bg-slate-700 font-bold text-gray-300  text-x rounded-sm h-10 text-center'>
                  <h2 className="font-bold text-gray-300 mb-4">Position/Title</h2></th>
                 <th  className='bg-slate-700 font-bold text-gray-300  text-x rounded-sm h-10 text-center'>
                 <h2 className="font-bold text-gray-300 mb-4">Year Ended</h2></th>
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
                <div className=' md:pl-20 md:mr-20 p-3 text-center justify-center'>
                <h2 className="md:text-3xl text-lg font-bold text-gray-300 mb-2 ">What I can do</h2>
                <div className='md:flex text-center justify-center mt-10 mb-10'>
                <div className='mb-2 shadow-slate-900 md:w-4/12 w-full m-5 rounded-xl shadow-[0_0_15px_0_rgba(0,0,0,0.1)]' style={{height:"380px"}}>
                  <div className='p-5 hover:mt-2 mt-5 duration-500 rounded-xl text-center'>
                    <button className="p-1 rounded-full  cursor-pointer">
                    <img src={frontend} alt="mobileapp" width="80" className="rounded-full -mt-7" />
                    </button>
                   <p className="text-xl m-3 mb-5 md:mt-0 mt-7 font-bold w-full text-red-700 "> Front end web</p>
                   <p className="text-gray-200 mb-3 ml-2">
                   I use react and vue JavaScript libraries/frameworks used for building front end application development
                   with tailwind css and material to builde productive and responsive user interfaces and web applications.
                   </p>
                  </div>
                 </div>  
                 <div className='mb-2 shadow-slate-900 m-5 md:w-4/12 w-full rounded-xl shadow-[0_0_15px_0_rgba(0,0,0,0.1)]' style={{height:"380px"}}>
                  <div className='p-5 hover:mt-2 mt-5 duration-500 rounded-xl text-center'>
                   <button className="p-1 rounded-full  cursor-pointer">
                    <img src={mobileApp} alt="mobileapp" width="80" className="rounded-full -mt-7" />
                    </button>
                   <p className="text-xl m-3 mb-5 md:mt-0 mt-7 font-bold w-full text-red-700 ">mobile app</p>
                   <p className="text-gray-200 mb-3 ml-2">
                   I develop mobile app using flutter
                   </p>
                  </div>
                 </div> 
                 <div className='mb-2 shadow-slate-900 m-5 md:w-4/12 w-full rounded-xl shadow-[0_0_15px_0_rgba(0,0,0,0.1)]' style={{height:"380px"}}>
                  <div className='p-5 hover:mt-2 mt-5 duration-500 rounded-xl text-center'>
                   <button className="p-1 rounded-full  cursor-pointer">
                    <img src={backend} alt="mobileapp" width="80" className="rounded-full -mt-7" />
                    </button>
                   <p className="text-xl m-3 mb-5 md:mt-0 mt-7 font-bold w-full text-red-700 ">Back end web(Server side)</p>
                   <p className="text-gray-200 mb-3 ml-2">
                   I use node.js(express and loopback) used for backend development
                   with mongoDB and mysql database that enables to me managing data well.
                   </p>
                  </div>
                 </div> 
                </div>
                </div>
               </div>
              </section>
             <section id='projects' className="">
            <div className=" mx-auto md:pl-10 pl-1 md:pt-1 pt-5 mt-7">
                <h2 className="text-3xl font-bold mb-2 text-center capitalize md:ml-16 ml-1 md:p-5 p-1 text-gray-300 w-11/12 rounded-md">My Works</h2>
                <div className='md:pl-32 pl-1 items-center p-3'>
                <div className='md:flex md:w-10/12 sm:w-full md:pl-3 pl-1 md:p-5'>
                <p className="text-gray-300 mb-1 ml-2 md:p-4 ">
                  <b className='ont-bold text-gray-300 md:mr-1'>ERP:</b>We develop my ERP system using different technology.
                    We use javaScript frameworks for back end and
                    front end development.I do this ERP system two times. First we develop by using Vue.js,css for front end
                    and Node.js(Loopback-3) for back end. Second I develop by using React.js with tailwind css for front end
                    and Node.js(Express.js) for back end.We use mongoDB database both times. I get good experience on listed 
                    technologies above when we develop this ERP system.
                  </p>
                  </div>
              <div className='grid xl:grid-cols-2 rounded-md md:grid-cols-2 grid-cols-1 text-left md:pl-7 md:pr-14 pr-1'>
                {(erpImage?.length > 0)
                ?(
                  erpImage?.slice(erpPage *2 - 2, erpPage * 2).map((erpImg,index) => { 
                  return(
                  <>
                  <div key={index}>
                  <div className=' m-5 duration-500 rounded-xl p-1 md:h-[360px]'>
                      <img
                      className="rounded-md hover:scale-110 transition-transform duration-500 shadow-slate-500 shadow-[0_0_30px_0_rgba(0,0,0,0.1)]
                      ease-in-out border-slate-300 border-2 cursor-zoom-in" src={erpImg.imgName} alt='No'       
                    onClick={()=>{handleImageClick(erpImg.imgName)}}
                    />  
                    <div className="pl-4 md:-mb-5 mb-0 mt-4 flex-1">
                      <div className="h-auto">
                      <span className=" font-bold text-gray-300">{erpImg.imgText}</span>
                    </div>
                    </div>
                  </div>
                    {isZoomed && image===erpImg.imgName && (
                      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
                      <img
                      className="rounded-md h-full ml-6 w-full shadow-xl mr-3 border-slate-300 border-2 cursor-zoom-in"
                      src={erpImg.imgName}
                      alt={"No"}
                      onClick={handleZoomOut}
                    />
                    </div>
                    )}
                    </div>
                  </>
                  )})):("")} 
              </div>
            <div
                className='relative z-0  inline-flex float-right mr-10 rounded-md shadow-sm'
                aria-label='Pagination'
              >
              <button
                onClick={() => selectPageHandler(erpPage - 1)}
                  className='relative inline-flex items-center px-2 py-2 rounded-l-md border
                  bg-[#fe9900] border-gray-300  text-sm font-medium text-gray-500 hover:bg-gray-50'>
               <span className="font-bold text-gray-300">back</span>
              </button>
              <button
                  onClick={() => selectPageHandler(erpPage + 1)}
                  className='relative inline-flex items-center px-2 py-2 rounded-r-md border
                  border-gray-300 bg-[#fe9900] text-sm font-medium text-gray-500 hover:bg-gray-50'>
                  <span className=" font-bold text-gray-300">next</span>
              </button>
              </div>
           </div>
           <div className='md:pl-32 pl-1 items-center p-3 mt-7'>
             <div className='md:flex md:w-10/12 sm:w-full mb-2 md:pl-3 pl-1 md:p-5'>
               <p className="text-gray-300 mb-1 ml-2 md:p-4 ">
                <b className='ont-bold text-gray-300 md:mr-1'>Bus Reservation System: </b>We use programming languages and frameworks for back end and
                front end development of Bus Reservation System.We develop this Bus Reservation System by using 
                React.js,tailwind css for front end and Node.js,Express for back end.We use mysql(sequelize) for my Bus 
                Reservation System.
              </p>
              </div>
              <div className='grid xl:grid-cols-2 rounded-md md:grid-cols-1 grid-cols-1 text-left md:pl-7 md:pr-14'>
                {(busRsvnImage?.length > 0)
                ?(
                  busRsvnImage?.slice(busPage *2 - 2, busPage * 2).map((busImg,index) => { 
                  return(
                  <>
                  <div key={index}>
                  <div className=' md:m-5 duration-500 rounded-xl p-1 md:h-[360px]'>
                      <img
                      className="rounded-md hover:scale-110 transition-transform duration-500 shadow-slate-500 shadow-[0_0_30px_0_rgba(0,0,0,0.1)]
                      ease-in-out border-slate-300 border-2 cursor-zoom-in" src={busImg.imgName} alt='No'       
                    onClick={()=>{handleImageClick(busImg.imgName)}}
                    />  
                    <div className="pl-4 md:-mb-5 mb-0 mt-4 flex-1">
                      <div className="h-auto">
                      <span className=" font-bold text-gray-300">{busImg.imgText}</span>
                    </div>
                    </div>
                  </div>
                    {isZoomed && image===busImg.imgName && (
                      <div 
                      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
                      <img
                      className="rounded-md h-full ml-6 w-full shadow-xl mr-3 border-slate-300 border-2 cursor-zoom-in"
                      src={busImg.imgName}
                      alt={"No"}
                      onClick={handleZoomOut}
                    />
                    </div>
                    )}
                    </div>
                  </>
                  )})):("")} 
              </div>
            <div
                className='relative z-0  inline-flex float-right mr-10 rounded-md shadow-sm -space-x-px'
                aria-label='Pagination'
              >
              <button onClick={() => selectBusImgPageHandler(busPage - 1)}
                  className='relative inline-flex items-center px-2 py-2 rounded-l-md border
                  bg-[#fe9900] border-gray-300  text-sm font-medium text-gray-500 hover:bg-gray-50'
                >
                <span className="font-bold text-gray-300">back</span>
              </button>
              <button
                  onClick={() => selectBusImgPageHandler(busPage + 1)}
                  className='relative inline-flex items-center px-2 py-2 rounded-r-md border
                  border-gray-300 bg-[#fe9900] text-sm font-medium text-gray-500 hover:bg-gray-50'>
                  <span className=" font-bold text-gray-300">next</span>
              </button>
              </div>
             </div>
             <div className='md:pl-32 pl-1 items-center p-3 mt-7'>
             <div className='md:flex md:w-10/12 sm:w-full mb-2 md:pl-3 pl-1 md:p-5'>
               <p className="text-gray-300 mb-1 ml-2 md:p-4 ">
               <b className='ont-bold text-gray-300 md:mr-1'>promotion website:</b>
               I use programming languages and frameworks for
                front end development of promotion website.I develop this promotion website  by using 
                React.js,tailwind css. 
              </p>
              </div>
              <div className='grid xl:grid-cols-2 rounded-md md:grid-cols-1 grid-cols-1 text-left md:pl-7 md:pr-14'>
                {(promotionImage?.length > 0)
                ?(
                  promotionImage?.slice(promonPage *2 - 2, promonPage * 2).map((promotionImg,index) => { 
                  return(
                  <>
                  <div key={index}>
                  <div className=' m-5 duration-500 rounded-xl p-1 md:h-[360px]'>
                      <img
                      className="rounded-md hover:scale-110 transition-transform duration-500 shadow-slate-500 shadow-[0_0_30px_0_rgba(0,0,0,0.1)]
                      ease-in-out border-slate-300 border-2 cursor-zoom-in" src={promotionImg.imgName} alt='No'       
                    onClick={()=>{handleImageClick(promotionImg.imgName)}}
                    />  
                    <div className="pl-4 md:-mb-5 mb-0 mt-4 flex-1">
                      <div className="h-auto">
                      <span className=" font-bold text-gray-300">{promotionImg.imgText}</span>
                    </div>
                    </div>
                  </div>
                    {isZoomed && image===promotionImg.imgName && (
                      <div 
                      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
                      <img
                      className="rounded-md h-full ml-6 w-full shadow-xl mr-3 border-slate-300 border-2 cursor-zoom-in"
                      src={promotionImg.imgName}
                      alt={"No"}
                      onClick={handleZoomOut}
                    />
                    </div>
                    )}
                    </div>
                  </>
                  )})):("")} 
              </div>
            <div
                className='relative z-0  inline-flex float-right mr-10 rounded-md shadow-sm -space-x-px'
                aria-label='Pagination'
              >
              <button
                onClick={() => selectPromnImgPage(promonPage - 1)}
                  className='relative inline-flex items-center px-2 py-2 rounded-l-md border
                  bg-[#fe9900] border-gray-300  text-sm font-medium text-gray-500 hover:bg-gray-50'
                >
                  <span className="font-bold text-gray-300">back</span>
              </button>
              <button
                  onClick={() => selectPromnImgPage(promonPage + 1)}
                  className='relative inline-flex items-center px-2 py-2 rounded-r-md border
                  border-gray-300 bg-[#fe9900] text-sm font-medium text-gray-500 hover:bg-gray-50'>
                  <span className=" font-bold text-gray-300">next</span>
              </button>
              </div>
            </div>
             <div className='md:pl-32 pl-1 items-center p-3 mt-7'>
             <div className='md:flex md:w-10/12 sm:w-full mb-2 md:pl-3 pl-1 md:p-5'>
               <p className="text-gray-300 mb-1 ml-2 md:p-4 ">
               <b className='ont-bold text-gray-300 md:mr-1'> File Managemen System :</b>
              I use programming languages and frameworks for back end and
                front end development of File Managemen System.I develop this File Managemen System by using 
                React.js,tailwind css for front end and Node.js,Express for back end. I use mysql(sequelize) for this system development.
              </p>
              </div>
              <div className='grid xl:grid-cols-2 rounded-md md:grid-cols-1 grid-cols-1 text-left md:pl-7 md:pr-14'>
                {(fileMgmntImage?.length > 0)
                ?(
                  fileMgmntImage?.slice(filmngmntPage *2 - 2, filmngmntPage * 2).map((filemngmntImg,index) => { 
                  return(
                  <>
                  <div key={index}>
                  <div className=' m-5 duration-500 rounded-xl p-1 md:h-[360px]'>
                      <img
                      className="rounded-md hover:scale-110 transition-transform duration-500 shadow-slate-500 shadow-[0_0_30px_0_rgba(0,0,0,0.1)]
                      ease-in-out border-slate-300 border-2 cursor-zoom-in" src={filemngmntImg.imgName} alt='No'       
                    onClick={()=>{handleImageClick(filemngmntImg.imgName)}}
                    />  
                    <div className="pl-4 md:-mb-5 mb-0 mt-4 flex-1">
                      <div className="h-auto">
                      <span className=" font-bold text-gray-300">{filemngmntImg.imgText}</span>
                    </div>
                    </div>
                  </div>
                    {isZoomed && image===filemngmntImg.imgName && (
                      <div 
                      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
                      <img
                      className="rounded-md h-full ml-6 w-full shadow-xl mr-3 border-slate-300 border-2 cursor-zoom-in"
                      src={filemngmntImg.imgName}
                      alt={"No"}
                      onClick={handleZoomOut}
                    />
                    </div>
                    )}
                    </div>
                  </>
                  )})):("")} 
              </div>
            <div className='relative z-0  inline-flex float-right mr-10 rounded-md shadow-sm -space-x-px' aria-label='Pagination'>
              <button
                onClick={() => selectFileMngmntImgPage(filmngmntPage - 1)}
                  className='relative inline-flex items-center px-2 py-2 rounded-l-md border
                  bg-[#fe9900] border-gray-300  text-sm font-medium text-gray-500 hover:bg-gray-50'
                >
                  <span className="font-bold text-gray-300">back</span>
              </button>
              <button
                  onClick={() => selectFileMngmntImgPage(filmngmntPage + 1)}
                  className='relative inline-flex items-center px-2 py-2 rounded-r-md border
                  border-gray-300 bg-[#fe9900] text-sm font-medium text-gray-500 hover:bg-gray-50'>
                  <span className=" font-bold text-gray-300">next</span>
                </button>
               </div>
             </div>
          </div>
        </section>
        <section id='contact' className="mt-10">
      <footer className="py-4 w-full text-center justify-center mt-14 border-t-2 border-gray-300">
      {/* <h2 className="md:text-3xl text-lg font-bold text-gray-300 mb-2 ">Contact</h2> */}
        <div className="container mx-auto text-center text-gray-400">
          <Footer />
        </div>
      </footer>
      </section>
    </div>
  );
};
export default About;

