import React from 'react';
import Lottie from "lottie-react";
import emailAnimation from '../../assets/Contact Me/84924-email-sent.json'

const ContactMe = () => {
 return (
   <div>
     <div className="bg-base-200 p-10">
       <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
         <div className="w-[300px] lg:w-full">
           <Lottie
             animationData={emailAnimation}
             loop={true}
             className="rounded-3xl hover:border-2 hover:border-secondary"
           />
         </div>

         <div className="w-[300px] lg:w-full flex flex-col lg:py-20">
           <div className="form-control">
             <label className="label">
               <span className="label-text">Name</span>
             </label>
             <input
               type="text"
               placeholder="Name"
               className="input input-bordered"
             />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Email</span>
             </label>
             <input
               type="text"
               placeholder="Email"
               className="input input-bordered"
             />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Message</span>
             </label>
             <textarea
               type="text"
               placeholder="Write your message here"
               className="input input-bordered"
             />
          
           </div>
           <div className="form-control mt-6">
             <button className="btn btn-primary">Send</button>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};

export default ContactMe;