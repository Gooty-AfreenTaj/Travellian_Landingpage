import './App.css';
import React from 'react';
import Landing from './mycomponents/Landing';
import Destinations from './mycomponents/Destinations';
import SpecialOffer from './mycomponents/SpecialOffer';
import Blog from './mycomponents/Blog'
import TripPlanners from './mycomponents/TripPlanners';
import MyGallery from './mycomponents/MyGallery';
import Experiences from './mycomponents/Experiences';
import Footer from './mycomponents/Footer';

function App() {
  return (
   <>
    <Landing />
    <Destinations/>
    <SpecialOffer/>
    <Blog/>
    <TripPlanners/>
    <MyGallery/>
    <Experiences/>
    <Footer/>
   </>
  );
}
 
export default App;
