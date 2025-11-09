import React from 'react';
import MyContainer from './MyContainer';
import MyLink from './MyLink';
import logo from "../assets/react.svg"
import { Link, Links } from 'react-router';
const Navbar = () => {
    
    return (
      <div className="bg-slate-100f py-2 border-b border-b-slate-300 ">
        <MyContainer className="flex items-center justify-between">
          <figure>
            <img src={logo} className="w-[55px]" />
          </figure>
          <div className='flex  items-center justify-center gap-5'>
            
          <ul className="flex items-center gap-2">
            <li>
              <MyLink to={"/"}>Home</MyLink>
            </li>
              <li>
                <MyLink to={"/games"}>Games</MyLink>
              </li>
            <li>
              <MyLink to={"/about-us"}>About US</MyLink>
            </li>
            
        
          </ul>

           {/* <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
              <Link to={"/signin"}>Sign in</Link>
            </button> */}
            <Link to={"/signup"}>
           <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
             Sign in  
            </button>
            </Link>
           <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
             Sign Out  
            </button>
          </div>
           
        </MyContainer>
      </div>
    );
};

export default Navbar;