import React from 'react';
import { useLoaderData } from 'react-router';
import PopularGames from './PopularGames';
import MyContainer from '../components/MyContainer';
import Banner from './Banner';

const Homepage = () => {
    const games = useLoaderData();

    console.log(games);
    return (
      <div>
        <MyContainer>
          <Banner games={games} />

          <PopularGames games={games} />
        </MyContainer>
      </div>
    );
};

export default Homepage;