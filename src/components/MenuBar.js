import React from 'react';
import '../index.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom' ;
import About from './post/About'
import dashboard from './img/dshboard.png'; 

function MenuBar() { 
 return(
   <>
    <BrowserRouter>
            <Routes>        
              <Route path="/" element={<About src={dashboard} alt="Bus Reservation" />}/>
            </Routes>
     </BrowserRouter> 
 </>
   )}
export default MenuBar;