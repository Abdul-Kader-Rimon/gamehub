import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import MyContainer from "../components/MyContainer";
import { useNavigate } from "react-router";

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
    <div className="w-1/3 mx-auto mt-4 border border-purple-500 p-4 rounded-lg">
      <MyContainer>
        <div className="mx-auto text-center mt-10 space-y-4">
          <img
            className="w-32 h-32 rounded-full mx-auto shadow-lg"
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt=""
          />
          <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
          <p className="text-black">{user?.email}</p>

          <div className="mt-6">
            <button
              onClick={() => navigate("/update-profile")}
              className="bg-purple-600 text-white px-5 py-2 rounded-md hover:bg-purple-700 transition"
            >
              update
            </button>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default MyProfile;
