import React, { use, useContext, useState } from 'react';
import MyContainer from './MyContainer';
import MyLink from './MyLink';
import logo from "../assets/logoG.png"
import { Link} from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';
import { HashLoader } from 'react-spinners';
import { HiMenu, HiX } from 'react-icons/hi';
const Navbar = () => {
  
  const { user, signoutUserFunc, setUser,loading , setLoading } =
    useContext(AuthContext);
  
  const [menuOpen , setMenuOpen] = useState(false)
   


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
      <div className="bg-slate-100    py-2 border-b border-b-slate-300 ">
        <MyContainer className="flex items-center justify-between">
          <figure>
            <MyLink to={"/"}>
              <div className="flex items-center gap-2">
                <img src={logo} className="w-[60px]  " />
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-purple-700">
                  GameHub
                </h2>
              </div>
            </MyLink>
          </figure>
          <div className="hidden md:flex  items-center justify-center gap-5">
            <ul className="flex items-center gap-4">
              <li>
                <MyLink to={"/"}>Home</MyLink>
              </li>
              <li>
                <MyLink to={"/games"}>All Games </MyLink>
              </li>

              <li>
                <MyLink to={"/about-us"}>About US</MyLink>
              </li>
            </ul>

            {loading ? (
              <HashLoader color="#f22693" />
            ) : user ? (
              <div className="text-center flex items-center gap-4   space-y-3">
                <div className="mt-3">
                  <MyLink to={"/my-profile"}>
                    <button
                      className=" rounded-full  "
                      popoverTarget="popover-1"
                      style={{ anchorName: "--anchor-1" }}
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
              <div className="flex gap-3">
                <Link to={"/signin"}>
                  <button className="bg-gradient-to-br from-blue-500 via-purple-600 to-purple-700 text-white px-4 py-2 rounded-md font-bold cursor-pointer">
                    Log in
                  </button>
                </Link>
                <Link to={"/signup"}>
                  <button className="bg-gradient-to-br from-blue-500 via-purple-600 to-purple-700 text-white px-4 py-2 rounded-md font-bold cursor-pointer">
                    Registration
                  </button>
                </Link>
              </div>
            )}
          </div>

          <div className="md:hidden flex items-center gap-3">
            {user && (
              <MyLink to={"/my-profile"} onClick={() => setMenuOpen(false)}>
                <img
                  src={user?.photoURL || "https://via.placeholder.com/88"}
                  className="h-[50px] w-[50px] rounded-full mx-auto"
                  alt=""
                />
              </MyLink>
            )}
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </MyContainer>

        {menuOpen && (
          <div className="md:hidden bg-slate-100 border-t border-t-slate-300 py-4 px-6">
            <ul className="flex flex-col gap-3">
              <li>
                <MyLink to={"/"} onClick={() => setMenuOpen(false)}>
                  Home
                </MyLink>
              </li>
              <li>
                <MyLink to={"/games"} onClick={() => setMenuOpen(false)}>
                  All Games
                </MyLink>
              </li>
              <li>
                <MyLink to={"/about-us"} onClick={() => setMenuOpen(false)}>
                  About US
                </MyLink>
              </li>
            </ul>
            <div className="mt-4 flex flex-col gap-3">
              {loading ? (
                <HashLoader color="#f22693" />
              ) : user ? (
                <>
                  <button onClick={handleSignout} className="my-btn w-full">
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link to={"/signin"} onClick={() => setMenuOpen(false)}>
                    <button className="bg-gradient-to-br from-blue-500 via-purple-600 to-purple-700 text-white px-4 py-2 rounded-md font-bold w-full">
                      Log in
                    </button>
                  </Link>
                  <Link to={"/signup"} onClick={() => setMenuOpen(false)}>
                    <button className="bg-gradient-to-br from-blue-500 via-purple-600 to-purple-700 text-white px-4 py-2 rounded-md font-bold w-full">
                      Registration
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    );
};

export default Navbar;



 