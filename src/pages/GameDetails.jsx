import React from "react";
import { useLoaderData, useParams } from "react-router";
import { IoMdDownload } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import { Helmet } from "react-helmet-async";

const GameDetails = () => {
 
  const gamedata = useLoaderData()
  const {id} = useParams()
  const games = gamedata.find((game) => game.id === id);


  if (!games) {
    return (
      <p className="text-center text-xl text-red-500 mt-10">Game not found!</p>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <Helmet>
        <title>{games.title} - GemeHub</title>
      </Helmet>
      <div className="bg-base-100 shadow-md rounded-xl overflow-hidden">
        <img
          src={games.coverPhoto}
          alt={games.title}
          className="w-full h-96 "
        />
        <div className="p-6 space-y-3">
          <h2 className="text-3xl font-bold">{games.title}</h2>
          <p className="text-gray-600"> {games.description}</p>

          <div className="flex gap-4 text-lg mt-4">
            <span className="flex items-center gap-2 text-amber-600 font-semibold bg-amber-100 p-2 rounded">
              <IoStar /> {games.rating}
            </span>
            <span className="flex items-center gap-2 text-green-600 font-semibold bg-green-100 p-2 rounded">
              <IoMdDownload /> {games.downloads} M Downloads
            </span>
            <span className="text-blue-600 bg-blue-100 p-2 rounded font-semibold">
              {games.category}
            </span>
          </div>

          <a
            href={games.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            Install Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
