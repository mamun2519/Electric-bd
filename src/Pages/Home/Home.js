import React from 'react';
import Footer from '../Sheard/Footer';
import Bannner from './Bannner';
import BuisnessSumary from './BuisnessSumary';
import Review from './Review';
import Tools from './Tools';

const Home = () => {
      return (
            <div className='max-w-7xl m-auto px-3'>
                  <Bannner></Bannner>
                  <Tools></Tools>
                  <BuisnessSumary></BuisnessSumary>
                  <Review></Review>
                  <Footer></Footer>
            </div>
      );
};

export default Home;