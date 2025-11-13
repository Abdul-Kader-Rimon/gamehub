import React from "react";
 
import { MdCategory } from "react-icons/md";
import { RiStarSFill } from "react-icons/ri";
import { useNavigate } from "react-router";

const PopularGames = ({ games }) => {
  const navigate = useNavigate();

  const popularGames = [...games]
    .sort((a, b) => b.bratings - a.ratings)
    .slice(0, 3);
  return (
    <div>
      <h2 className="text-center font-bold  mb-6 text-4xl">Popular Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {popularGames.map((game) => (
          <div onClick={()=> navigate(`/games/${game.id}`)} key={game.id} className=" card bg-base-100   shadow-sm hover:scale-105 transition duration-300 delay-150 ease-in-out rounded-xl">
            <img src={game.coverPhoto} alt={game.title} className="rounded-lg" />

            <div className="card-body flex flex-col flex-1">
              <h2 className=" font-bold text-2xl">{game.title}</h2>
              <div className="flex flex-1 justify-between items-center font-bold text-xl">
                <h3 className="flex items-center gap-2 text-green-400 border border-green-300 p-2 rounded-xl">
                  {" "}
                  <MdCategory />
                  {game.category}
                </h3>
                <h3 className="flex items-center gap-2 text-orange-400 border border-orange-300 p-2 rounded-xl">
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
