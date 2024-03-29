import React from 'react';
import { Link } from 'react-router-dom';




const Navbar = () => {




 const menuItems = (
   <React.Fragment>
     <li className="hover:text-secondary">
       {" "}
       <Link to="/">Home</Link>{" "}
     </li>
     <li className="hover:text-secondary">
       {" "}
       <Link to="/services">Services</Link>{" "}
     </li>
     <li className="hover:text-secondary">
       {" "}
       <Link to="/portfolio">Portfolio</Link>{" "}
     </li>
     <li className="hover:text-secondary">
       {" "}
       <Link to="/aboutme">About Me</Link>{" "}
     </li>
     <li className="hover:text-secondary">
       {" "}
       <Link to="/contactme">Contact Me</Link>{" "}
     </li>
   </React.Fragment>
 );



 return (
   <div>
     <div className="navbar bg-base-100">
       <div className="navbar-start">
         <div className="dropdown">
           <label tabIndex={0} className="btn btn-ghost lg:hidden">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-5 w-5"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
             >
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth="2"
                 d="M4 6h16M4 12h8m-8 6h16"
               />
             </svg>
           </label>
           <ul
             tabIndex={0}
             className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
           >
             {menuItems}
           </ul>
         </div>
         <Link to='/' className="btn btn-ghost normal-case text-xl">Evi</Link>
       </div>
       <div className="navbar-end hidden lg:flex">
         <ul className="menu menu-horizontal px-1">{menuItems}</ul>
       </div>
      
     </div>
   </div>
 );
};

export default Navbar;