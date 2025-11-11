import React from 'react';
import { useLoaderData } from 'react-router';
import PopularGames from './PopularGames';
import MyContainer from '../components/MyContainer';

const Homepage = () => {
    const data = useLoaderData();

    console.log(data)
    return (
        <div>
            <MyContainer>
                  {/* {data.map((game) => (
          <div key={game.id}>
            <h3>{game.title}</h3>
            <img src={game.coverPhoto} alt={game.title} />
          </div>
        ))} */}
            

            <PopularGames games={data} />
            </MyContainer>
      
      </div>
    );
};

export default Homepage;