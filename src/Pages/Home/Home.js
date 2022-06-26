import React from 'react';
import Footer from '../Sheard/Footer';
import Bannner from './Bannner';
import BuisnessSumary from './BuisnessSumary';
import ContactUs from './ContactUs';
import Description from './Description';
import InpuFlied from './InpuFlied';
import Partner from './Partner';
import Requermnet from './Requermnet';
import Review from './Review';
import Tools from './Tools';

const Home = () => {
      return (
            <div className=''>
                  <Bannner></Bannner>
                  <Tools></Tools>
                  <BuisnessSumary></BuisnessSumary>
                  <Review></Review>
                  <Description></Description>
                  <Partner></Partner>
                  <ContactUs></ContactUs>
                  <Footer></Footer>
            </div>
      );
};

export default Home;