import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import MyContainer from "../components/MyContainer";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
  if (!user) {
    return (
      <MyContainer>
        <h2 className="text-2xl font-semibold text-red-500">
          You are not Logged in !
        </h2>
      </MyContainer>
    );
  }
  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="w-full sm:w-auto max-w-sm    border border-purple-400 rounded-lg shadow-lg my-4">
        <h2 className="text-center font-bold text-3xl mt-4">My Profile</h2>
        <Helmet>
          <title>My Profile - GemeHub</title>
        </Helmet>
        <MyContainer>
          <div className="flex flex-col items-center pb-8 px-6 pt-6">
            <img
              className="w-32 h-32 rounded-full mb-3 border-4 border-purple-400 shadow-lg"
              src={user?.photoURL || "https://via.placeholder.com/150"}
              alt=""
            />
            <h2 className="text-2xl font-semibold mb-1 text-black/80 text-center">
              {user?.displayName}
            </h2>
            <p className="text-xl text-black/80 text-center">{user?.email}</p>

            <div className="mt-4">
              <button
                onClick={() => navigate("/update-profile")}
                className="bg-gradient-to-br from-blue-500 via-purple-500 to-purple-700 text-white px-4 py-2 rounded-md font-bold w-full"
              >
                update
              </button>
            </div>
          </div>
        </MyContainer>
      </div>
    </div>
  );
};

export default MyProfile;
