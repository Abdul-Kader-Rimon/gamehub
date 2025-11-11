import React, { useState } from 'react';
import { toast } from 'react-toastify';
import MyContainer from '../components/MyContainer';
import { FaGamepad } from 'react-icons/fa';

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email)
            return toast.error("Enter Your Email");
        toast.success(`Subscribed With ${email}`);
        setEmail("");

    }
    return (
      <div>
        <section className="p-10 bg-gradient-to-r text-white from-purple-900 via-purple-700 to-pink-600 rounded-xl my-20  relative overflow-hidden">
          <MyContainer>
            <div className="text-center  space-y-4 relative z-10">
              <FaGamepad className="mx-auto text-6xl mb-4 animate-bounce" />
              <h2 className="text-4xl font-bold">
                Join the Game Hub Newsletter
              </h2>
              <p className="text-lg">
                Get the latest indie game releases and exclusive updates
                straight to your inbox.
              </p>
              <form
                onSubmit={handleSubscribe}
                className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email "
                  className=" px-4 py-3 rounded-md text-white w-full border border-gray-100 md:w-1/2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  required
                />
                <button
                  type="submit"
                  className="text-white bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-md font-semibold hover:scale-105 transition-transform"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </MyContainer>
        </section>
      </div>
    );
};

export default Newsletter;