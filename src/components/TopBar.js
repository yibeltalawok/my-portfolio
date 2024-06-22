//                                                                                   1st part
import {NavLink} from 'react-router-dom' ;
import '../App.css';
  function TopBar() {
  return (
    <>
  <ul className='w-full h-10 text-center bg-cyan-800 mt-2 text-white p-2'>
   This is my try from nave bar
  </ul>
<div className=' sticky top-0 overflow-y-visible list-none z-100 font-serif uppercase font-medium xl:text-xl 
md:text-xl xs:text-xs text-justify-center  justify-between items-center pl-6 p-5 w-full h-28 shadow-xl  block sm:flex bg-gray-200 mt-0'>
<ul>
<li className='inline ml-5'>
<NavLink className='ml-8 w-96 p-5 '  
to ="/"> 
<h1 className="text-2xl font-bold">My Portfolio</h1>
</NavLink>
</li>
</ul>
<ul className='inline'>
<ul className='ml-96   flex'>
</ul>
<ul className=' ml-96 gap-x-10 flex'>
 <li><a href="about" className="hover:text-gray-400">About</a></li>
 <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
 <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
 </ul>
 </ul>
 </div>
 </>
 )}
export default TopBar;

