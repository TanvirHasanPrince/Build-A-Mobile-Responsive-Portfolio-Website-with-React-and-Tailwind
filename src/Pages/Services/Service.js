import React from 'react';
import { IconContext } from 'react-icons';
import './Service.css'

const Service = ({ service }) => {

 const {icon, title, description} = service;


  return (
    <div>
      <div className="w-[300px] mx-10 lg:w-full">
        <IconContext.Provider value={{size: '3rem'}}>
          <div className="service-card">
            <i>{icon}</i>
            <h3 className='py-3 font-bold'>{title}</h3>
            <p>{description}</p>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Service;