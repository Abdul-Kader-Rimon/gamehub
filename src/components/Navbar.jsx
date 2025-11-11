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

            {/* <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
              <Link to={"/signin"}>Sign in</Link>
            </button> */}

            {loading? (<HashLoader color="#f22693" />) : user ? (
              <div className="text-center  space-y-3">
                
                <button
                  className=" rounded-full  "
                  popoverTarget="popover-1"
                  style={
                    { anchorName: "--anchor-1" }  
                  }
                >
                  <img
                    src={user?.photoURL || "https://via.placeholder.com/88"}
                    className="h-[40px] w-[40px] rounded-full mx-auto"
                    alt=""
                  />
                  {/* {user.displayName} */}
                </button>

                <div
                  className="space-y-1 dropdown menu w-52  rounded-box bg-base-100 shadow-sm -ml-20"
                  popover="auto"
                  id="popover-1"
                  style={
                    {
                      positionAnchor: "--anchor-1",
                    }  
                  }
                >
                  <h2 className="text-xl font-semibold">{user?.displayName}</h2>
                  <p className="text-black">{user?.email}</p>
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