import React from "react";
import { IoMdDownload } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import { MdCategory } from "react-icons/md";
import { RiStarSFill } from "react-icons/ri";
import { useNavigate } from "react-router";

const PopularGames = ({ games }) => {
//   const navigate = useNavigate();

  const popularGames = [...games]
    .sort((a, b) => b.bratings - a.ratings)
    .slice(0, 3);
  return (
    <div>
      <h2 className="text-center font-bold mb-6 text-3xl">Popular Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {popularGames.map((game) => (
          <div className=" card bg-base-100   shadow-sm hover:scale-105 transition ease-in-out rounded-xl">
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
    </div>
  );
};

export default PopularGames;
