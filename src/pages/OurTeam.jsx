import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import ourTeam from "../assets/Our team.jpg"

const OurTeam = () => {
  return (
    <div>
      <Helmet>
        <title>Our Team - GameHub</title>
      </Helmet>
      <div>
        <h2 className="text-center font-bold text-5xl mb-10">Our Team</h2>
        <div className="hero bg-base-200  ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={ourTeam}
              className="max-w-full md:max-w-lg rounded-lg shadow-2xl"
            />
            <div className=" text-center lg:text-start">
              <h1 className="text-4xl font-semibold">GameHub Team</h1>
              <p className="py-6">
                At GameHub, our team is a passionate group of gamers, designers,
                and developers united by a single mission — to empower
                creativity and celebrate the art of gaming. We believe that
                every great game starts with a great story — and behind every
                story stands a team driven by imagination and innovation. From
                concept artists to full-stack developers, from sound designers
                to community managers — each of us plays a vital role in
                bringing unforgettable gaming experiences to life. We don’t just
                create games; we build worlds where players can connect,
                compete, and belong. Our collaborative spirit, curiosity, and
                love for games push us to keep evolving — because for us, gaming
                isn’t just entertainment, it’s a way of life.
              </p>
              <Link to={"/"}>
                <button className="btn  bg-gradient-to-br from-blue-500 via-purple-600 to-purple-700 text-white px-4 py-2 rounded-md font-bold ">
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

export default OurTeam;
