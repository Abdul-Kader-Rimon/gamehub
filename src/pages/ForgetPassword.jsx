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
          <div>
            <div>
              <h2>Reset Password</h2>
              <form onSubmit={handleReset}>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email"
                  className="input input-bordered w-full bg-white/20   placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg transition-all"
                >
                  Reset Password
                </button>
              </form>
              <p
                onClick={() => navigate("/signin")}
                className="text-center text-sm mt-4 text-gray-300 hover:underline cursor-pointer"
              >
                Back To Login
              </p>
            </div>
          </div>
        </MyContainer>
      </div>
    );
};

export default ForgetPassword;