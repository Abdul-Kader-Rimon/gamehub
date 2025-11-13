import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import ourMission from "../assets/Our mission.jpg"

const OurMission = () => {
  return (
    <div>
      <Helmet>
        <title>Our Mission - GameHub</title>
      </Helmet>
      <div>
        <h2 className="text-center font-bold text-5xl mb-10">Our Mission</h2>
        <div className="hero bg-base-200 ">
          <div className="hero-content flex-col lg:flex-row lg:space-x-10">
            <img
              src={ourMission}
              className="max-w-full md:max-w-lg rounded-lg shadow-2xl"
            />
            <div className=" text-center lg:text-start">
              <h1 className="text-4xl font-semibold">GameHub Mission</h1>
              <p className="py-6">
                At GameHub, our mission is to bridge the gap between gamers and
                creators — to build a global platform where imagination meets
                innovation. We aim to empower independent developers, inspire
                new ideas, and connect passionate players with the games that
                define their stories. We believe gaming is more than just fun —
                it’s a powerful medium of expression, creativity, and community.
                Through GameHub, we strive to support the next generation of
                game developers by giving them visibility, tools, and
                opportunities to shine. Every click, every connection, and every
                game shared on GameHub moves us closer to a world where creators
                thrive and players belong. Together, we’re not just playing
                games — we’re shaping the future of gaming.
              </p>
              <Link to={"/"}>
                <button className="btn  bg-gradient-to-br from-blue-500 via-purple-600 to-purple-700 text-white px-4 py-2 rounded-md font-bold hover:scale-105 transition duration-300 delay-150 ">
                  Go Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
