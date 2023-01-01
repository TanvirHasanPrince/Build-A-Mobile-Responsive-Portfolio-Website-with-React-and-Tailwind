import React from 'react';
import aboutmeImg from '../../assets/About Me/aboutMe.png'
import Tabs from '../../Components/Tabs';

const Aboutme = () => {
 return (
   <div>
     <div className="bg-base-200 p-10">
       <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
         <div className="w-[300px] lg:w-full">
           <img
             src={aboutmeImg}
             alt="Banner"
             className="rounded-3xl hover:border-2 hover:border-secondary"
           />
         </div>

         <div className="w-[300px] lg:w-full flex flex-col items-center lg:py-20">
           <Tabs></Tabs>
           <a href='w' className="btn btn-info m-12 hover:btn-secondary hover:font-bold" >Download Resume</a>
         </div>
       </div>
     </div>
   </div>
 );
};

export default Aboutme;