import React from 'react';

import {
  FaMobileAlt,
  FaDesktop,
  FaDove,
  FaEuroSign,
  FaHeadset,
  FaHospitalUser,
} from "react-icons/fa";
import Service from './Service';

const Services = () => {


   const services = [
     {
       icon: <FaMobileAlt className=""></FaMobileAlt>,
       title: "App Developmennt",
       description:
         "We will handle your app come to life and maintain it through the lifecycle",
     },

     {
       icon: <FaDesktop className=""></FaDesktop>,
       title: "Web Developmennt",
       description:
         "Have a website in mind? I will make your vision come to life",
     },

     {
       icon: <FaDove className=""></FaDove>,
       title: "Fast Service",
       description:
         "Tired of waiting? Not in here! Everyting will be deliverd at lightning speed.",
     },

     {
       icon: <FaEuroSign className=""></FaEuroSign>,
       title: "Value for Money",
       description: "Why pay high price when I am offering you a fair price?",
     },

     {
       icon: <FaHeadset className=""></FaHeadset>,
       title: "24/7 Support",
       description:
         "Website not working and who are you going to find at this hour?? Me Bro.. Me",
     },

     {
       icon: <FaHospitalUser className=""></FaHospitalUser>,
       title: "Friend Service",
       description:
         "Feeling lonely in your journey to make a website for your business? I am here bro ",
     },
   ];
 return (
   <div className="lg:flex lg:items-center lg:justify-center lg:py-40">
     <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 py-3'>
       {services.map((service, i) => (
         <Service key={i} service={service}></Service>
       ))}
     </div>
   </div>
 );
};

export default Services;