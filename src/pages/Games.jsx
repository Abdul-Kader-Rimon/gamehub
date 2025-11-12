import React from "react";
import { MdCategory } from "react-icons/md";
import { RiStarSFill } from "react-icons/ri";
import { useLoaderData, useNavigate } from "react-router";
import MyContainer from "../components/MyContainer";
import { Helmet } from "react-helmet-async";

const Games = () => {
  const games = useLoaderData();
  const navigate = useNavigate();
  return (
    <div className="my-10">
      <Helmet>
        <title>All Games - GemeHub</title>
      </Helmet>
      <MyContainer>
        <h2 className="text-center font-bold mb-6 text-3xl">ALL Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {games.map((game) => (
            <div
              onClick={() => navigate(`/games/${game.id}`)}
              key={game.id}
              className=" card bg-base-100   shadow-sm hover:scale-105 transition ease-in-out rounded-xl"
            >
              <img src={game.coverPhoto} alt={game.title} />

              <div className="card-body flex flex-col flex-1">
                <h2 className=" font-bold text-2xl">{game.title}</h2>
                <div className="flex justify-between items-center font-bold text-xl">
                  <h3 className="flex items-center gap-2 text-green-400">
                    {" "}
                    <MdCategory />
                    {game.category}
                  </h3>
                  <h3 className="flex items-center gap-2 text-orange-400">
                    {" "}
                    <RiStarSFill /> {game.ratings}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MyContainer>
    </div>
  );
};

export default Games;
