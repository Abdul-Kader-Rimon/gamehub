import React, { use, useContext } from 'react';
import MyContainer from './MyContainer';
import MyLink from './MyLink';
import logo from "../assets/react.svg"
import { Link} from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';
import { HashLoader } from 'react-spinners';
const Navbar = () => {
  
  const { user, signoutUserFunc, setUser,loading , setLoading } =
    useContext(AuthContext);
  console.log(user)


    const handleSignout = () => { 
      signoutUserFunc()
        .then((res) => {
          console.log(res);
          toast.success("SignOut Successful");
          setUser(null);
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.message);
        });
    };
    
    return (
      <div className="bg-slate-100f py-2 border-b border-b-slate-300 ">
        <MyContainer className="flex items-center justify-between">
          <figure>
            <img src={logo} className="w-[55px]" />
          </figure>
          <div className="flex  items-center justify-center gap-5">
            <ul className="flex items-center gap-2">
              <li>
                <MyLink to={"/"}>Home</MyLink>
              </li>
              {user && (
                <li>
                <MyLink to={"/games"}>Games</MyLink>
              </li>
              )
                
              }
              
              <li>
                <MyLink to={"/about-us"}>About US</MyLink>
              </li>
            </ul>

             

            {loading? (<HashLoader color="#f22693" />) : user ? (
              <div className="text-center flex items-center gap-4   space-y-3">
                <div className='mt-3'>
                   <MyLink to={"/my-profile"}>
                <button
                  className=" rounded-full  "
                  popoverTarget="popover-1"
                  style={
                    { anchorName: "--anchor-1" }  
                  }
                >
                  <img
                    src={user?.photoURL || "https://via.placeholder.com/88"}
                    className="h-[50px] w-[50px] rounded-full mx-auto"
                    alt=""
                  />
                </button>
                </MyLink>
                </div>
               
                <div>
                   <button onClick={handleSignout} className="my-btn">
                    Sign Out
                </button>
                </div>
               

                 
              </div>
            ) : (
              <Link to={"/signin"}>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
                  Sign in
                </button>
              </Link>
            )}
          </div>
        </MyContainer>
      </div>
    );
};

export default Navbar;