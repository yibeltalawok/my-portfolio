import React from 'react';
import '../index.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom' ;
import About from './post/About'
function MenuBar() { 
 return(
   <>
    <BrowserRouter>
            <Routes>        
              <Route path="/" element={<About />}/>
            </Routes>
     </BrowserRouter> 
 </>
   )}
export default MenuBar;