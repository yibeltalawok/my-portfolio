import React,{useState,useEffect} from 'react';
// import { useWindowSize } from 'react-use';
// import {divLink} from 'react-router-dom' ;
import logo from '../img/logo.png';
import bus from '../img/bus.jpg'
import { RiMenuLine } from "react-icons/ri";
const About = () => {
      const [show, setShow] = useState(false);
      const [isActive,setIsActive]=useState('home')
    
      useEffect(() => {
        const interval = setInterval(() => {
          setShow((prevShow) => !prevShow);
        }, 3000); 
        return () => clearInterval(interval);
      }, []);
    

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
    <div className="bg-gray-800 pt-0 ">
    <>
     <div className='w-full h-10 text-center bg-cyan-800 mt-1 text-white p-2 overflow-hidden'>
      <p className='animate-marquee-loop'>
      Help your customers organize their trips and daily commutes more easily. 
      Process bookings and payments systematically and manage your business more efficiently.
      </p>
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
     <img src={logo} alt="Logo" width="80" className=" rounded-full  bg-slate-100" />
     </button>
    <h1 className="md:text-2xl text-lg font-bold text-gray-300">PEEP</h1>
    </divLink>
    </li>
    </ul>
    <ul className='inline'>
    <ul className='ml-96 flex'>
    </ul>
    <ul className=' gap-x-10 md:flex text-xl hidden lowercase '>
    <li><a href="http://196.190.97.253:3000/" onClick={()=>{setIsActive("home")}} className={` text-gray-300 p-1 lowercase rounded-md ${isActive == 'home' ? 'bg-[#85a77d] text-gray-950'  : ''}`}>www.peep.com</a></li>
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
            ><a href="http://196.190.97.253:3000/" onClick={()=>{setIsActive("home")}} className={`over:text-gray-400 ${isActive == 'home' ? ' bg-[#0099ff]' : ''}`}>www.peep.com</a> </button></li>    </ul>
    </div>
    </>
    <section id='home' className='text-center md:pl-10 h-screen' >
    <div className="relative flex w-11/12 text-center mt-14 shadow-sm text-slate-300 p-3 ">    
      <div className=' flex p-3 w-2/3'>
      <div className=''>
      <h1 className="text-2xl font-bold uppercase underline m-3 text-orange-400 text-center">Bus Reservation System
      </h1>
      <p className=' text-left w-11/12'>
      The Bus Reservation System is designed to automate online ticket purchasing through an easy-to-use 
      online bus booking system. Embed our online bus ticketing system into your website and enable your
       customers to book tickets for various routes and destinations. With the bus ticket reservation system,
        you can manage reservations, client data, and passenger lists. You can also schedule routes, 
      set seat availability, upload an interactive seat map, and let customers select their seats.
       </p>
        </div>
     </div>
    <div
     className='w-1/3 m-7'>
     <img className="rounded-md w-full ml-3  transition-all duration-300 ease-in-out hidden sm:block shadow-2xl" 
       src={bus} alt='No'  />
     </div>
     </div>
     </section>
    </div>
  );
};
export default About;

