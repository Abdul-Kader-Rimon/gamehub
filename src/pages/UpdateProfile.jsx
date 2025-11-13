import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { useNavigate } from 'react-router';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { toast } from 'react-toastify';
import MyContainer from '../components/MyContainer';
import { Helmet } from 'react-helmet-async';

const UpdateProfile = () => {
    const { user, setUser } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
    const navigate = useNavigate();
    const handelUpdate = (e) => {
        e.preventDefault();

        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        })
         .then(() => {
             toast.success("Profile Update Successfully !");
             setUser({

                 ...user,
                 displayName: name,
                 photoURL: photoURL,
             });
             navigate("/my-profile");
         })
            .catch((error) => {
            toast.error(error.message)
        })
  }
 
    return (
      <div>
        <MyContainer>
          <div className="w-full max-w-md  mx-auto mt-6  sm:p-8 shadow-lg bg-white/5 border border-purple-500 p-4 rounded-lg">
            <Helmet>
              <title>Update Profile - GemeHub</title>
            </Helmet>
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl   text-center mb-6">
              Update Your Profile
            </h2>
            <form onSubmit={handelUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Your Name"
                  className="input input-bordered w-full bg-white/20 text-purple-500 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Photo</label>
                <input
                  type="text"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  placeholder="Your photo URL here"
                  className="input input-bordered w-full bg-white/20 text-purple-500 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="bg-gradient-to-br from-blue-500 via-purple-600 to-purple-700 text-white px-4 py-2 rounded-md font-bold "
                >
                  update Information
                </button>
              </div>
            </form>
          </div>
        </MyContainer>
      </div>
    );
};

export default UpdateProfile;