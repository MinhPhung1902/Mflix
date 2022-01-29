import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isSideMenuOpen, setisSideMenuOpen] = useState(false)

  const showSideMenu = () => {
      (isSideMenuOpen) ? setisSideMenuOpen(false) : setisSideMenuOpen(true)
  }
  return <div className='relative z-40' >
<nav className="w-screen flex items-center justify-between flex-wrap bg-[#2f3541] text-white shadow-sm p-3">
  <div className="flex items-center flex-shrink-0 text-black mr-6">
    <h1>
      <Link className='text-[31px] mr-2 font-sans text-[#4ea09f]' to='/'>MFlix</Link>
    </h1>
  </div>
  <div>
  <button onClick={()=>{showSideMenu()}}>
                {(isSideMenuOpen) ? 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4ea09f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
                :
               
 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4ea09f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
</svg>}
             </button>
            {(isSideMenuOpen) ? SideMenu() : ''}
    </div>
</nav>
  </div>;
};
function SideMenu(){
  return(
      <div className="fixed h-screen w-1/2 sm:w-1/4 lg:w-1/5  bg-[#2f3541] top-0 left-0 font-sans ">
          <ul className="mt-5 text-[#4ea09f] flex flex-col items-center justify-center space-y-3 py-3">                      
              <li className="text-[22px] font-medium hover:text-white"><a href="#">
               <Link to='/trending'>Trending</Link>
                </a></li>
              <li className="text-[22px] font-medium hover:text-white"><a href="#">
              <Link to='/movies'>Movies</Link>
                </a></li>
              <li className="text-[22px] font-medium hover:text-white"><a href="#">
              <Link to='/series'>Series</Link>
                </a></li>
              <li className="text-[22px] font-medium hover:text-white"><a href="#">
              <Link to='/search'>Top IMDB</Link>
                </a></li>
              <div className='flex-row space-x-2'>
            
            </div>
          </ul>
      </div>
  )
}
export default Navbar;
