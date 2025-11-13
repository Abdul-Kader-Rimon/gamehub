import { Link, useLocation, useNavigate } from "react-router";

import { FaEye } from "react-icons/fa";

import { IoEyeOff } from "react-icons/io5";

import MyContainer from "../components/MyContainer";
 
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { Helmet } from "react-helmet-async";

const Signup = () => {
  const [show, setShow] = useState(false);
  const {
    createUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    sendEmailVerificationFunc,
    setLoading,
    signoutUserFunc,
    setUser,
    signInWithEmailFunc,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"




  const handleGoogleSignin = () => {
    signInWithEmailFunc()
      .then((res) => {
        
        setUser(res.user);
        setLoading(false);
        navigate(from, { replace: true });
        toast.success("SignIn Successful");
      })
      .catch((error) => {
        
        toast.error(error.message);
      });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;

   

    const regExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

     

    if (!regExp.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter"
      );
      return;
    }

    createUserWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        updateProfileFunc(displayName, photoURL)
          .then(() => {
            sendEmailVerificationFunc().then((res) => {
               
              setLoading(false);
              
              signoutUserFunc().then((res) => {
                 
               toast.success(
                 "Signup Successfully . Check your email to Verification your account"
               );
                setUser(null);
                navigate("/signin")
              });
            });
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        

        if (error.code === "auth/email-already-in-use") {
          toast.error("User already exists in the database.");
        } else if (error.code === "auth/weak-password") {
          toast.error("you need to provide a password with at least 6 digits");
        } else if (error.code === "auth/invalid-email") {
          toast.error("Invalid email format. Please check your email.");
        } else if (error.code === "auth/user-not-found") {
          toast.error("User not found. Please sign up first.");
        } else if (error.code === "auth/wrong-password") {
          toast.error("Wrong password. Please try again.");
        } else if (error.code === "auth/user-disabled") {
          toast.error("This user account has been disabled.");
        } else if (error.code === "auth/too-many-requests") {
          toast.error("Too many attempts. Please try again later.");
        } else if (error.code === "auth/operation-not-allowed") {
          toast.error("Operation not allowed. Please contact support.");
        } else if (error.code === "auth/network-request-failed") {
          toast.error("Network error. Please check your connection.");
        } else {
          toast.error(error.message || "An unexpected error occurred.");
        }
      });
  };

  return (
    <div className="min-h-[96vh] flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 relative overflow-hidden">
      <Helmet>
        <title>Sign Up - GemeHub</title>
      </Helmet>
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-pink-400/30 rounded-full blur-2xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-2xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <MyContainer>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-10 p-6 lg:p-10 text-white">
          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
            <h2 className="text-4xl font-bold mb-6 text-center text-white">
              Registration
            </h2>

            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Photo</label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Your photo URL here"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-[8px] top-[36px] cursor-pointer z-50"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              <button type="submit" className="my-btn">
                Registration
              </button>
              <button
                type="button"
                onClick={handleGoogleSignin}
                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>

              <div className="text-center mt-3">
                <p className="text-sm text-white/80">
                  Already have an account?{" "}
                  <Link
                    to="/signin"
                    className="text-pink-300 hover:text-white font-medium underline"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Signup;
