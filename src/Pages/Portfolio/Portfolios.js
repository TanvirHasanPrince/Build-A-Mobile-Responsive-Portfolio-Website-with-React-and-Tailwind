import React from 'react';
import p1 from '../../assets/Portfolio/p-1.jpg';
import p2 from '../../assets/Portfolio/p-2.jpg';
import p3 from '../../assets/Portfolio/p-3.jpg';
import p4 from '../../assets/Portfolio/p-4.jpg';
import p5 from '../../assets/Portfolio/p-5.jpg';
import p6 from '../../assets/Portfolio/p-6.jpg';
import Portfolio from './Portfolio';

const Portfolios = () => {


  const portfolios = [
    {
      image: p1,
      title: "Burger Freak Restaurant",
      description:
        "This is a website I made for a burger joint. I used HTML, CSS, JavaScript and React for this project. In the backend, I used Express and Node.js",
      stack1: "HTML",
      stack2: "CSS",
      stack3: "JavaScript",

      gitHubLink: "www.git",
      liveLink: "www.live",
    },

    {
      image: p2,
      title: "Travel Guru",
      description:
        "This is a website I made for a Travel agency. I used HTML, CSS, JavaScript and React for this project. In the backend, I used Express and Node.js",
      stack1: "React",
      stack2: "JavaScript",
      stack3: "Tailwind",

      gitHubLink: "www.git",
      liveLink: "www.live",
    },

    {
      image: p3,
      title: "Football Mania",
      description:
        "This is a website I made for a betting company . I used HTML, CSS, JavaScript and React for this project. In the backend, I used Express and Node.js",
      stack1: "Python",
      stack2: "JavaScript",
      stack3: "Tailwind",

      gitHubLink: "www.git",
      liveLink: "www.live",
    },

    {
      image: p4,
      title: "Stock Market ",
      description:
        "This is a website I made for a brokarage house. I used HTML, CSS, JavaScript and React for this project. In the backend, I used Express and Node.js",
      stack1: "React",
      stack2: "JavaScript",
      stack3: "Tailwind",

      gitHubLink: "www.git",
      liveLink: "www.live",
    },

    {
      image: p5,
      title: "Gym Homies",
      description:
        "This is a website I made for a Gym. I used HTML, CSS, JavaScript and React for this project. In the backend, I used Express and Node.js",
      stack1: "React",
      stack2: "JavaScript",
      stack3: "Tailwind",

      gitHubLink: "www.git",
      liveLink: "www.live",
    },

    {
      image: p6,
      title: "Freak Restaurant",
      description:
        "This is a website I made for a French Restaurant. I used HTML, CSS, JavaScript and React for this project. In the backend, I used Express and Node.js",
      stack1: "React",
      stack2: "JavaScript",
      stack3: "Next Js",

      gitHubLink: "www.git",
      liveLink: "www.live",
    },
  ];


 return (
   <div className="lg:flex lg:items-center lg:justify-center lg:py-40">
     <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 pb-10'>
       {portfolios.map((portfolio, i) => (
         <Portfolio key={i} portfolio={portfolio}></Portfolio>
       ))}
     </div>
   </div>
 );
};

export default Portfolios;