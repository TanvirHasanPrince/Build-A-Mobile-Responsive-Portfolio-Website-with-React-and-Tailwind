import React from 'react';
import bannerImg from '../../assets/Banner/Banner-img-1.png'

const Home = () => {
 return (
   <div>
     <div className="bg-base-200 p-10">
       <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
         <div className="w-[300px] lg:w-full">
           <img
             src={bannerImg}
             alt="Banner"
             className="rounded-3xl hover:border-2 hover:border-secondary"
           />
         </div>

         <div className="w-[300px] lg:w-full flex flex-col justify-center items-center">
           <h1 className="lg:text-5xl text-secondary font-bold">
             Hi! I am Evi!
           </h1>
           <p className="py-6 lg:text-lg text-sm">
             As a web developer, I am skilled in creating and maintaining
             websites and web applications. I have a strong understanding of
             programming languages such as HTML, CSS, and JavaScript, as well as
             a good grasp of frameworks and libraries such as Angular, React,
             and Node.js. I am also experienced in working with databases and
             content management systems, and I am familiar with best practices
             for web design and development, such as responsive design and
             user-centered design.
           </p>
         </div>
       </div>
     </div>
   </div>
 );
};

export default Home;