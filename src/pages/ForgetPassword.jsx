import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';
import MyContainer from '../components/MyContainer';
import { Helmet } from 'react-helmet-async';

const ForgetPassword = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { sendPassResetEmailFunc } = useContext(AuthContext)
    
    const passedEmail = location.state?.email || "";
    const [email, setEmail] = useState(passedEmail);
    const handleReset = (e) => {
        e.preventDefault();
        if (!email) {
            toast.error("Enter your Email");
            return;
        }

        sendPassResetEmailFunc(email)
            .then(() => {
                toast.success("password reset email sent ");
                setTimeout(() => {
                    window.location.href = "https://mail.google.com/";
                }, 1000)
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }
    return (
      <div>
        <Helmet>
          <title>Forget Password - GemeHub</title>
        </Helmet>
        <MyContainer>
          <div className="w-full max-w-md  mx-auto mt-6  sm:p-8 shadow-lg bg-white/5 border border-purple-500 p-4 rounded-lg ">
            <div>
              <h2 className="text-center font-bold text-5xl mb-10">
                Reset Password
              </h2>
              <form onSubmit={handleReset}>
                <label className="block text-lg font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email"
                  className="input input-bordered border border-purple-400 w-full bg-white/20 text-purple-600   focus:outline-none focus:ring-2 focus:ring-purple-400 mb-3 hover:scale-105 transition duration-300 delay-150"
                />

                <button
                  type="submit"
                  className="bg-gradient-to-br from-blue-500 via-purple-600 to-purple-700 text-white px-4 py-2 rounded-md font-bold  w-full mb-3 hover:scale-105 transition duration-300 delay-150"
                >
                  Reset Password
                </button>
              </form>
              <button
                onClick={() => navigate("/signin")}
                className="bg-gradient-to-br  from-blue-500 via-purple-600 to-purple-700 text-white px-4 py-2 rounded-md font-bold  w-full mb-2 hover:scale-105 transition duration-300 delay-150"
              >
                Back To Login
              </button>
            </div>
          </div>
        </MyContainer>
      </div>
    );
};

export default ForgetPassword;