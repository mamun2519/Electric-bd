import React from 'react';
import Bannner from './Bannner';
import BuisnessSumary from './BuisnessSumary';
import Tools from './Tools';

const Home = () => {
      return (
            <div className='max-w-7xl m-auto px-1'>
                  <Bannner></Bannner>
                  <Tools></Tools>
                  <BuisnessSumary></BuisnessSumary>
            </div>
      );
};

export default Home;