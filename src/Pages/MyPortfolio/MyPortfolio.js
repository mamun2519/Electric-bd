import React from 'react';
import Footer from '../Sheard/Footer';
import AboutMe from './AboutMe';
import Protbannner from './Protbannner';
import Shkill from './Shkill';


const MyPortfolio = () => {
      return (
            <div className='max-w-7xl m-auto px-3'>
                  <Protbannner></Protbannner>
                  <AboutMe></AboutMe>
                  <Shkill></Shkill> 
                  <Footer></Footer>
               
            </div>
      );
};

export default MyPortfolio;