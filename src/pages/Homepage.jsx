import React from 'react';
import { useLoaderData } from 'react-router';
import PopularGames from './PopularGames';
import MyContainer from '../components/MyContainer';
import Banner from './Banner';
import Newsletter from './Newsletter';
import { Helmet } from 'react-helmet-async';
 

const Homepage = () => {
    const games = useLoaderData();

    
    return (
      <div>
        <Helmet>
          <title>Home - GemeHub</title>
        </Helmet>
        <MyContainer className="space-y-4">
          <Banner games={games} />

          <PopularGames games={games} />
          <Newsletter/>
        </MyContainer>
      </div>
    );
};

export default Homepage;