import React from 'react';
import MyContainer from '../components/MyContainer';
import { Link, Outlet } from 'react-router';

const AboutUs = () => {
    return (
      <div>
        <MyContainer>
          <div className="bg-base-200 py-12 sm:py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-12 md:gap-16 lg:gap-24">
                <div className="space-y-4 text-center">
                  <h2 className="text-3xl md:text-4xl font-semibold text-base-content">
                    About Us
                  </h2>
                  <p className="text-lg md:text-xl text-base-content/80">
                    Our achievement story stands as a powerful testament to
                    teamwork and perseverance. United, we have faced challenges,
                    celebrated victories, and woven a narrative of growth and
                    success.
                  </p>
                  <div className="flex justify-center gap-4 mt-4">
                    <Link
                      to={"our-team"}
                      className="btn btn-primary btn-md bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                    >
                      Our Team
                    </Link>
                    <Link
                      to={"our-mission"}
                      className="btn btn-primary btn-md bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                    >
                      Our Mission
                    </Link>
                  </div>
                </div>

                <div className="relative w-full max-w-5xl mx-auto ">
                  <img
                    src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?cs=srgb&dl=pexels-divinetechygirl-1181406.jpg&fm=jpg"
                    alt="About us"
                    className="w-full h-64 md:h-96 lg:h-[28rem] object-cover rounded-xl"
                  />

                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-base-100 border border-base-content/20 rounded-lg p-6 grid grid-cols-2 md:grid-cols-4 gap-6 -mb-12">
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