import React from 'react';
import { FaArrowRight, FaEnvelope, FaHeadSideVirus, FaMapMarkerAlt, FaPhoneAlt, FaSlideshare, FaUserGraduate } from 'react-icons/fa';
import about from '../../Portfolio/AboutMe/Aboutme.png';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className='w-11/12 mx-auto mt-4 mb-24'>
      <h2 className="text-3xl text-center text-warning font-bold " data-aos="flip-left"> About Me ! </h2>
      <div className='mt-4'>
      <div className="about-me-card bg-base-100 p-6 shadow">
       <figure className=' bg-primary about-me-img rounded-lg shadow w-96' data-aos="fade-down-right">
         <img src={about} alt="Movie" className='mx-auto' />
  
        </figure>

  <div className="about-me-body ">
    <h2 className="text-2xl font-semibold mb-3" data-aos="fade-down"> Md. Ashrafull Islam </h2>
    <h2 className='flex lg:items-center  gap-2' data-aos="fade-right" > <FaMapMarkerAlt className='text-warning'/>  Address :   Habiganj,Sylhet,Bangladesh   </h2>

    <div className='flex lg:items-center education lg:flex-row md:flex-row sm:flex-col flex-col  gap-2'>
      <div className='flex  items-center gap-2' data-aos="zoom-in-up">
      <FaUserGraduate className='text-warning' />
       Education:
      </div>
    
    <div>
      <div className='w-full bg-primary shadow  rounded-lg my-2 px-3 py-2' data-aos="fade-left">
      <h4>  SSC  4.44 out of 5.00 GPA in science 2019 </h4>
      <h4> Habiganj Govt.  High School   </h4>
      </div>

      <div className=' w-full bg-primary shadow rounded-lg my-2 px-3 py-2'data-aos="fade-right">
      <h2> Diploma In Engineering In  Computer Science and  Technology </h2>
       <h2> Habiganj Polytechnic Institute ,Habiganj   </h2>
      </div>
    </div> 
    
    </div>
    <div>
        <h2 className='flex  gap-2' data-aos="fade-up-left"> <FaHeadSideVirus className='text-warning font-bold lg:text-3xl md:text-3xl xl:text-3xl sm:text-4xl text-6xl'/> Skills:  Html, Css, Bootstrap, React Bootstrap, Tailwind , Javascript , React.js ,  Node.js , Express.js , Rest Api, Firebase Authenticaion , MongoDb Database , Payment With Stripe   </h2>
     </div>
      <div className='flex gap-3 mt-4' data-aos="fade-down-right">
        <h2 className='flex  gap-2'><FaSlideshare className='text-warning ' /> hobby:</h2>
         <h1> Cooding, Travelling , Driving, Reading Book  </h1>
      </div>
      <h2 className='flex items-center gap-2 mt-2' data-aos="zoom-in-down">
        <FaEnvelope className='text-warning ' /> ashrafull130@gmail.com
      </h2>
      <h2 className='flex items-center gap-2 mt-2' data-aos="fade-right" > <FaPhoneAlt className='text-warning  ' /> +88 01778 231817 </h2>
    <div className="card-actions lg:justify-end mt-4">
    <div >
          <a href="https://drive.google.com/file/d/1YyFtHDR_23-DhD2l7oGuF5_9Tg0vANNS/view?usp=share_link"> <button className='btn  bg-gradient-to-r from-warning to-primary border-none shadow text-slate-200 hover:bg-gradient-to-r hover:from-primary hover:to-warning  ' > Get My Resume <FaArrowRight className='text-xl text-warning ml-3 ' /> </button> </a>
        </div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default AboutMe;
