import React from "react";
import MyContainer from "../components/MyContainer";
import { Link, Outlet } from "react-router";
import { Helmet } from "react-helmet-async";
import aboutUs from "../assets/About us.jpg"

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>About Us - GameHub</title>
      </Helmet>
      <MyContainer>
        <div className="bg-base-200 py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12 md:gap-16 lg:gap-24">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl md:text-5xl font-semibold text-base-content">
                  About Us
                </h2>
                <p className="text-lg md:text-xl text-base-content/80">
                  <span className="font-bold">GameHub</span> is a vibrant digital platform dedicated to connecting
                  passionate gamers with creative game developers worldwide. Our
                  goal is to make discovering, sharing, and supporting games
                  easier than ever. We believe gaming is more than
                  entertainment—it’s an art form that inspires creativity,
                  collaboration, and innovation. At GameHub, we empower
                  independent developers to showcase their creations and reach
                  global audiences while giving players access to unique and
                  exciting experiences. Through our growing community, we aim to
                  build a space where ideas thrive, talents shine, and everyone
                  can celebrate the joy of gaming together. GameHub — where
                  gaming unites creativity.
                </p>
                <div className="flex justify-center gap-6 mt-4">
                  <Link
                    to={"our-team"}
                    className="btn btn-primary btn-md bg-gradient-to-br from-blue-500 via-purple-600 to-purple-700    hover:scale-105 transition duration-300 delay-150"
                  >
                    Our Team
                  </Link>
                  <Link
                    to={"our-mission"}
                    className="btn  btn-primary btn-md bg-gradient-to-br from-blue-500 via-purple-600 to-purple-700    hover:scale-105 transition duration-300 delay-150"
                  >
                    Our Mission
                  </Link>
                </div>
              </div>

              <div className="relative w-full max-w-5xl mx-auto ">
                <img
                  src={aboutUs}
                  className="w-full h-64 md:h-96 lg:h-[28rem] object-cover rounded-xl"
                />

                <div className=" bg-base-100 border border-base-content/20 rounded-lg p-6 grid grid-cols-2 md:grid-cols-4 gap-6 mt-2 md:mt-0 md:absolute md:-bottom-4 md:left-1/2 md:-translate-x-1/2 md:-mb-12 shadow-md transition-all">
                  <div className="text-center">
                    <span className="text-primary text-2xl font-semibold">
                      20+
                    </span>
                    <p className="text-base-content/80 text-sm mt-1">
                      Years of Experience
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="text-primary text-2xl font-semibold">
                      70+
                    </span>
                    <p className="text-base-content/80 text-sm mt-1">
                      Successful Projects
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="text-primary text-2xl font-semibold">
                      500+
                    </span>
                    <p className="text-base-content/80 text-sm mt-1">
                      Customer Reviews
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="text-primary text-2xl font-semibold">
                      25
                    </span>
                    <p className="text-base-content/80 text-sm mt-1">
                      Achieve Awards
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-24">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default AboutUs;
